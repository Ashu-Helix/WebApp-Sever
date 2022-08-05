import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

import M from 'materialize-css';
import {
    AUTO,
    Game,
} from 'phaser';

import MSPhaserLib from '../msPhaserLib.min';

let demoWorkspace = Blockly.getMainWorkspace();
let noOfBlocks;

let _gameThis = null;
const baseURL = "../img/images/d2fbb377-ba65-4487-9330-7bff13b62ef0";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;
let dummy = 0;


const GAME_CONSTANT = {
    images: {
        hita: "hita.png",

        BG: "Background.png",
        frontleft: "frontleft.png",
        f1: "f1.png",
        f2: "f2.png",
        f3: "f3.png",
        f4: "f4.png",

        imgscore: "imgscore.png",
        imgleft: "imgleft.png",
        imgright: "imgright.png",
        imgjump: "imgjump.png",

        HighWave0001: "HighWave0001.png",
        HighWave0002: "HighWave0002.png",
        HighWave0003: "HighWave0003.png",
        HighWave0004: "HighWave0004.png",
        HighWave0005: "HighWave0005.png",

        MediumWave00010001: "MediumWave00010001.png",
        MediumWave00010003: "MediumWave00010003.png",
        MediumWave00010005: "MediumWave00010005.png",

    },
    spritesImages: {
        floatC: "floatC",
        fallC: "fallC",
        jumpC: "jumpC",
        leftC: "leftC",
        rightC: "rightC",
    }
};

let leftbt;
let rightbt;
let jumpbt;

let hita_hero;
let hita_Hwave;
let ErrorText;
let ErrorInnerText = '';
let GameIsOver = false;
let Middletext;
let Middletext2;
let Livestext;
let WaveText;
let KeyLeft = false;
let KeyRight = false;
let KeySpace = false;
let timedEvent;
// let Score = 0;
window['Score'] = 0;
// let Lives = 3;
window['Lives'] = 3;
let CanPlay = true;
let Touched = false;
let BG;
let frontleft;
let FloatWaves;
let Speed = 0;
let lastWave = null;
let CurrentWave = null;
let AllChild = [];//allchild ina a wave
let Hero;
let CurrentKey = '';
let ComingWave;
let winthegame = false;

let lwj = false;
let mwj = false;
let hwj = false;

let CanScore = false;
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: "#eeeeee",
    parent: "sprite-container",
    canvasStyle: `width: 100%;
    object-fit: revert;
    aspect-ratio: 738 / 436;`,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};
// Initialize Phaser with config
window['game'] = new Phaser.Game(config);

// Phaser preload function
function preload() {
    _gameThis = this;
    _gameThis.load.setBaseURL(baseURL);
    loadImages();
}


// Phaser create function
function create() {


    this.input.keyboard.on('keyup', function (event) {
        if (GameIsOver) { return; }
        //console.log(event.keyCode)
        //39 right
        if (event.keyCode == 39) { KeyRight = true; CurrentKey = 'right'; console.log('you click right') }
        //37 left
        if (event.keyCode == 37) { KeyLeft = true; CurrentKey = 'left'; console.log('you click left') }
        //32 space
        if (event.keyCode == 32) { KeySpace = true; CurrentKey = 'space'; console.log('you click space') }
    });


    BG = this.add.image(gameWidth / 2, gameHeight / 2, 'BG').setName('BG');
    _gameThis['BG'] = BG;

    //add float waves
    FloatWaves = this.add.container();
    let f1 = this.add.image(0, gameHeight, 'f1').setOrigin(0, 1).setName('f1');
    let f2 = this.add.image(gameWidth * 0.99, gameHeight, 'f2').setOrigin(0, 1).setName('f2');
    let f3 = this.add.image(gameWidth * 1.98, gameHeight, 'f3').setOrigin(0, 1).setName('f3');
    let f4 = this.add.image(gameWidth * 2.97, gameHeight, 'f4').setOrigin(0, 1).setName('f4');
    FloatWaves.add([f1, f2, f3, f4]);


    //prepare High Waves
    ComingWave = this.add.sprite(0, 0, "HighWave0001");
    hita_Hwave = this.add.image(ComingWave.x, ComingWave.y, "hita").setAlpha(0);
    this.anims.create({
        key: 'ComingHWave',
        frames: [{ key: 'HighWave0001' }, { key: 'HighWave0002' }, { key: 'HighWave0003' }, { key: 'HighWave0004' }, { key: 'HighWave0005' }],
        frameRate: 1.5,
        repeat: 0,
    });
    this.anims.create({
        key: 'ComingMWave',
        frames: [{ key: 'MediumWave00010001' }, { key: 'HighWave0001' }, { key: 'HighWave0004' }, { key: 'HighWave0001' }, { key: 'HighWave0005' }],
        frameRate: 1.5,
        repeat: 0,
    });
    this.anims.create({
        key: 'ComingLMWave',
        frames: [{ key: 'MediumWave00010001' }, { key: 'MediumWave00010005' }, { key: 'HighWave0005' }, { key: 'MediumWave00010001' }, { key: 'MediumWave00010001' }],
        frameRate: 1.5,
        repeat: 0,
    });
    ComingWave.setAlpha(0);

    //add the hero
    Hero = this.add.sprite(gameWidth * 0.5, gameHeight * 0.65, "floatC", '0');
    hita_hero = this.add.image(Hero.x, Hero.y, "hita").setAlpha(0);;

    this.anims.create({
        key: 'Hero_float',
        frames: this.anims.generateFrameNumbers('floatC', { frames: [0, 1, 2, 3, 4] }),
        frameRate: 4,
        repeat: -1,
    });
    this.anims.create({
        key: 'Hero_fall',
        frames: this.anims.generateFrameNumbers('fallC', { frames: [0, 1, 2] }),
        frameRate: 4,
        repeat: 0,
    });
    this.anims.create({
        key: 'Hero_jump',
        frames: this.anims.generateFrameNumbers('jumpC', { frames: [0, 1, 2, 3, 4] }),
        frameRate: 4,
        repeat: -1,
    });
    this.anims.create({
        key: 'Hero_left',
        frames: this.anims.generateFrameNumbers('leftC', { frames: [0, 1, 2, 3] }),
        frameRate: 4,
        repeat: -1,
    });
    this.anims.create({
        key: 'Hero_right',
        frames: this.anims.generateFrameNumbers('rightC', { frames: [0, 1, 2, 3] }),
        frameRate: 4,
        repeat: -1,
    });




    CurrentWave = FloatWaves;
    AllChild = CurrentWave.getAll();
    lastWave = AllChild[AllChild.length - 1];

    frontleft = this.add.image(0, gameHeight, 'frontleft').setOrigin(0, 1)
    _gameThis['frontleft'] = frontleft;

    ErrorText = _gameThis.add.text(0, 0, "Error...", { font: "bold 36px Arial", fill: "#ff0000" });
    ErrorText.setPosition(gameWidth * 0.8, gameHeight * 0.9)
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);


    Middletext2 = _gameThis.add.text(
        this.cameras.main.width * 0.5,
        160,
        " ",
        { font: "bold 48px Arial", fill: "#ffffff", stroke: '#000000', strokeThickness: 12 });
    Middletext2.setOrigin(0.5, 0.5);

    Livestext = _gameThis.add.text(
        this.cameras.main.width * 0.88,
        68,
        "Lives : " + window['Lives'],
        { font: "bold 48px Arial", fill: "#ffffff", stroke: '#000000', strokeThickness: 12 });
    Livestext.setOrigin(0.5, 0.5);

    WaveText = _gameThis.add.text(
        this.cameras.main.width * 0.5,
        68,
        "",
        { font: "bold 48px Arial", fill: "#ffffff", stroke: '#000000', strokeThickness: 12 });
    WaveText.setOrigin(0.5, 0.5);

    //add waves
    timedEvent = this.time.addEvent({
        delay: 5000, callback: () => {
            if (Speed == 0) { return; }

            let R = Math.random() * 15;
            if (R < 5) { showHwaves(); }
            else if (R >= 5 && R < 10) { showMwaves(); }
            else { showLwaves(); }

        }, callbackScope: this, loop: true
    });






    let scoreimg = this.add.image(gameWidth * 0.07, gameHeight * 0.1, 'imgscore').setScale(0.5);
    Middletext = _gameThis.add.text(
        scoreimg.x, scoreimg.y + scoreimg.displayHeight * 0.1,
        "00",
        { font: "bold 48px Arial", fill: "#000000" });
    Middletext.setOrigin(0.5, 0.5);


    leftbt = this.add.image(gameWidth * 0.4, gameHeight * 0.9, 'imgleft').setScale(0.5);
    jumpbt = this.add.image(gameWidth * 0.5, gameHeight * 0.9, 'imgjump').setScale(0.5);
    rightbt = this.add.image(gameWidth * 0.6, gameHeight * 0.9, 'imgright').setScale(0.5);

    leftbt.setInteractive();
    jumpbt.setInteractive();
    rightbt.setInteractive();


    leftbt.on('pointerdown', () => { KeyLeft = true; CurrentKey = 'left'; console.log('you click left') })
    jumpbt.on('pointerdown', () => { KeySpace = true; CurrentKey = 'space'; console.log('you click space') })
    rightbt.on('pointerdown', () => { KeyRight = true; CurrentKey = 'right'; console.log('you click right') })


}



function showHwaves() {
    CanScore = true;
    WaveText.setText('High Wave is coming');
    ComingWave.setName("HW");//high wave
    ComingWave.setPosition(gameWidth + ComingWave.displayWidth * 0.5, gameHeight * 0.75);
    ComingWave.setAlpha(1);
    ComingWave.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
        ComingWave.stop();
        ComingWave.setTexture('HighWave0001');
        ComingWave.setAlpha(0);
        WaveText.setText('');
    }, this);
    ComingWave.play('ComingHWave');
}
function showMwaves() {
    CanScore = true;
    WaveText.setText('Medium Wave is coming');
    ComingWave.setName("MW");//high wave
    ComingWave.setPosition(gameWidth + ComingWave.displayWidth * 0.25, gameHeight * 0.75);
    ComingWave.setAlpha(1);
    ComingWave.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
        ComingWave.stop();
        ComingWave.setTexture('MediumWave00010001');
        ComingWave.setAlpha(0);
        WaveText.setText('');
    }, this);
    ComingWave.play('ComingMWave');
}
//
function showLwaves() {

    CanScore = true;
    WaveText.setText('Low Wave is coming');
    ComingWave.setName("LW");//high wave
    ComingWave.setPosition(gameWidth + ComingWave.displayWidth * 0.25, gameHeight * 0.75);
    ComingWave.setAlpha(1);
    ComingWave.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
        ComingWave.stop();
        ComingWave.setTexture('MediumWave00010001');
        ComingWave.setAlpha(0);
        WaveText.setText('');
    }, this);
    ComingWave.play('ComingLMWave');
}
function game_over() {

    if (!GameIsOver) {
        console.log('game_over')
        GameIsOver = true;
        Speed = 0;
        timedEvent.remove();
    }

}

function say(str) {
    Middletext2.setText(str);
}

function left_arrow_key_is_pressed() { return KeyLeft && CanPlay == true; }
function right_arrow_key_is_pressed() { return KeyRight && CanPlay == true; }
function space_key_is_pressed() { return KeySpace && CanPlay == true; }
function Move(direction) {
    let X = Hero.x;
    if (direction == "left") { X = gameWidth * 0.4; }
    if (direction == "right") { X = gameWidth * 0.6; }
    _gameThis.tweens.add({
        targets: Hero,
        x: X,
        duration: 600,
    });
}
function high_wave_jump() {

    if (!CanPlay) { return; }
    CanPlay = false;

    Hero.play('Hero_left');
    Move("left");
    JumpNow("left");
}//left

function medium_wave_jump() {
    if (!CanPlay) { return; }
    CanPlay = false;
    Hero.play('Hero_right');
    Move("right");
    JumpNow("right");
}//right
function low_wave_jump() {
    if (!CanPlay) { return; }
    CanPlay = false;
    Hero.play('Hero_jump');
    Move("space");//not considered in the move function
    JumpNow("space");
}//space

function JumpNow(Action) {
    let Y = Hero.y;
    let Yi = Hero.y;
    if (Action == "left") { Y = Hero.y - 290 - 70; }
    if (Action == "right") { Y = Hero.y - 200 - 50; }
    if (Action == "space") { Y = Hero.y - 100 - 30; }
    _gameThis.tweens.add({
        targets: Hero,
        y: Y,
        duration: 300,
        delayComplete: 200,
        onComplete() {
            //back to idle
            Hero.play('Hero_float');
            //back to the center
            _gameThis.tweens.add({
                targets: Hero,
                x: gameWidth * 0.5,
                y: Yi,
                duration: 400,
                delay: 100,
                onComplete: () => {
                    CanPlay = true;
                    //console.log('canplay now')
                }
            });

        }
    });
}
function win_game() {
    if (!winthegame) {
        console.log('win_game');
        winthegame = true;
    }

}
function inside_update_end() {
    //console.log('resetting')
    lwj = false;
    mwj = false;
    hwj = false;

    hita_Hwave.setPosition(ComingWave.x, ComingWave.y);
    hita_hero.setPosition(Hero.x, Hero.y);


    KeyLeft = false;
    KeyRight = false;
    KeySpace = false;
    Touched = false;
    Middletext.setText(window['Score']);
    Livestext.setText('Lives : ' + window['Lives']);
}
function law_wave_is_jumped() {

    let D_H = Phaser.Math.Distance.Between(hita_Hwave.x, hita_Hwave.y, hita_hero.x, hita_hero.y);
    let Dx = Math.abs(hita_hero.x - hita_Hwave.x);


    if (Dx < 12) {
        if ((D_H < 200 || CurrentKey != 'left') && ComingWave.name == 'HW' && CanScore) { console.log("touché", D_H); Touched = true; }
        if ((D_H < 200 || CurrentKey != 'right') && ComingWave.name == 'MW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...
        if ((D_H < 160 || CurrentKey != 'space') && ComingWave.name == 'LW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...

        if (!Touched && ComingWave.name == 'LW' && !lwj && CanScore) {
            console.log("should score for LW")
            lwj = true;
            CanScore = false;
        }

    }
    return lwj;
}
function meduim_wave_is_jumped() {
    let D_H = Phaser.Math.Distance.Between(hita_Hwave.x, hita_Hwave.y, hita_hero.x, hita_hero.y);
    let Dx = Math.abs(hita_hero.x - hita_Hwave.x);



    if (Dx < 12) {

        if ((D_H < 200 || CurrentKey != 'left') && ComingWave.name == 'HW' && CanScore) { console.log("touché", D_H); Touched = true; }
        if ((D_H < 200 || CurrentKey != 'right') && ComingWave.name == 'MW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...
        if ((D_H < 160 || CurrentKey != 'space') && ComingWave.name == 'LW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...



        if (!Touched && ComingWave.name == 'MW' && !mwj && CanScore) {
            console.log("should score for MW")
            mwj = true;
            CanScore = false;
        }


    }
    return mwj;
}
function high_wave_is_jumped() {

    let D_H = Phaser.Math.Distance.Between(hita_Hwave.x, hita_Hwave.y, hita_hero.x, hita_hero.y);
    let Dx = Math.abs(hita_hero.x - hita_Hwave.x);



    if (Dx < 12) {

        if ((D_H < 200 || CurrentKey != 'left') && ComingWave.name == 'HW' && CanScore) { console.log("touché", D_H); Touched = true; }
        if ((D_H < 200 || CurrentKey != 'right') && ComingWave.name == 'MW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...
        if ((D_H < 160 || CurrentKey != 'space') && ComingWave.name == 'LW' && CanScore) { console.log("touché", D_H); Touched = true; } // check current key : left or right ...


        if (!Touched && ComingWave.name == 'HW' && !hwj && CanScore) {
            console.log("should score for HW", Touched, ComingWave.name, hwj, CanScore)
            hwj = true;
            CanScore = false;
        }
    }
    return hwj;
}

function wave_touches_surfer() {


    //check High Wave

    let D_H = Phaser.Math.Distance.Between(hita_Hwave.x, hita_Hwave.y, hita_hero.x, hita_hero.y);
    let Dx = Math.abs(hita_hero.x - hita_Hwave.x);


    if (Dx < 12) {


        //Speed = 0;
        // console.log("Dx",Dx) ;
        //console.log("touché") ;
        // console.log("Now") ;
        //console.log(D_H)

        // check current key : left or right ...

        if ((D_H < 200 || CurrentKey != 'left') && ComingWave.name == 'HW' && CanScore) { console.log("touché", D_H); Touched = true; CanScore = false; }
        if ((D_H < 200 || CurrentKey != 'right') && ComingWave.name == 'MW' && CanScore) { console.log("touché", D_H); Touched = true; CanScore = false; } // check current key : left or right ...
        if ((D_H < 160 || CurrentKey != 'space') && ComingWave.name == 'LW' && CanScore) { console.log("touché", D_H); Touched = true; CanScore = false; } // check current key : left or right ...


        if (!Touched && ComingWave.name == 'HW' && !hwj && CanScore) {
            console.log("should score for HW", Touched, ComingWave.name, hwj, CanScore)
            hwj = true;
            CanScore = false;
        }
        if (!Touched && ComingWave.name == 'MW' && !mwj && CanScore) {
            console.log("should score for MW")
            mwj = true;
            CanScore = false;
        }
        if (!Touched && ComingWave.name == 'LW' && !lwj && CanScore) {
            console.log("should score for LW")
            lwj = true;
            CanScore = false;
        }

    }

    if (GameIsOver) {
        Touched = false;
    }


    return Touched;
}
function fall() {
    Hero.play('Hero_fall');
    CanPlay = false;
    setTimeout(() => {
        if (GameIsOver) { Hero.stop(); }
        else {
            Hero.play('Hero_float');
            CanPlay = true;
        }

    }, 1600);
}
function Move_Waves() {
    for (let w = 0; w < AllChild.length; w++) {
        AllChild[w].x -= Speed;
        if (AllChild[w].x + AllChild[w].displayWidth <= 0) {
            // console.log(w,'lastWave',lastWave.name, AllChild[w].name)
            AllChild[w].x = lastWave.x + lastWave.displayWidth * 0.99;
            lastWave = AllChild[w];
        }
    }
}
function MoveH_wave() {
    if (ComingWave.alpha == 1) { ComingWave.x -= Speed; }
}

async function update() {
    /*
    Move_Waves();
    MoveH_wave();
    if (left_arrow_key_is_pressed()) {
        high_wave_jump();
    } else if (right_arrow_key_is_pressed()) {
        medium_wave_jump();
    } else if (space_key_is_pressed()) {
        low_wave_jump();
    }
    if (law_wave_is_jumped()) {
        Score = Score + 1;
    }
    if (meduim_wave_is_jumped()) {
        Score = Score + 2;
    }
    if (high_wave_is_jumped()) {
        Score = Score + 3;
    }
    if (wave_touches_surfer()) {
        Lives = Lives + (-1);
        fall();
    }
    if ((Score) >= 20) {
        await say("You are a surfer");
        win_game();
    }
    if ((Lives) <= 0) {
        await say("Game Over");
        game_over();
    }

    inside_update_end();
*/
}

function loadImages() {
    let images = GAME_CONSTANT.images;
    let spritesImages = GAME_CONSTANT.spritesImages;

    for (const key in images) {
        if (Object.hasOwnProperty.call(images, key)) {
            const element = images[key];
            //console.log(key,element)
            _gameThis.load.image(key, element);
        }
    }

    for (const key in spritesImages) {
        if (Object.hasOwnProperty.call(spritesImages, key)) {
            const element = spritesImages[key];
            // console.log(key)
            if (key == 'floatC') { _gameThis.load.spritesheet(key, element + ".png", { frameWidth: 2719 / 5, frameHeight: 429 }); }
            if (key == 'fallC') { _gameThis.load.spritesheet(key, element + ".png", { frameWidth: 1515 / 3, frameHeight: 477 }); }
            if (key == 'jumpC') { _gameThis.load.spritesheet(key, element + ".png", { frameWidth: 2380 / 5, frameHeight: 395 }); }
            if (key == 'leftC') { _gameThis.load.spritesheet(key, element + ".png", { frameWidth: 1800 / 4, frameHeight: 436 }); }
            if (key == 'rightC') { _gameThis.load.spritesheet(key, element + ".png", { frameWidth: 1800 / 4, frameHeight: 429 }); }
        }
    }
}
function ShowError() {
    ErrorText.setAlpha(1);
    ErrorText.setText(ErrorInnerText);//use error text
    //hide after 3 seconds
    _gameThis.tweens.add({
        targets: ErrorText,
        alpha: 0,
        duration: 500,
        delay: 2500
    });
}

function Start_Game() {
    Hero.play('Hero_float');
    Speed = 10;
    console.log('------------------->Start_Game');


}
// Re-initialize the game variables
function reInitValues() {
    ErrorInnerText = '';
    GameIsOver = false;
    KeyLeft = false;
    KeyRight = false;
    KeySpace = false;
    window['Score'] = 0;
    window['Lives'] = 3;
    CanPlay = true;
    Touched = false;
    Speed = 0;
    lastWave = null;
    CurrentWave = null;
    AllChild = []; //allchild ina a wave
    CurrentKey = '';
    winthegame = false;
    lwj = false;
    mwj = false;
    hwj = false;
    CanScore = false;
}
// Reset the game
function reset_output() {
    console.log('reset_output')
    reInitValues();
    _gameThis.scene.restart();
}

function completedFlag() {
    return GameIsOver;
}


var repeat_forever_flag = true;

function runCode() {
    // tour_over && tour.complete();
    reInitValues();
    window.LoopTrap = 1E3;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var a = "async function c(){" + Blockly.JavaScript.workspaceToCode(demoWorkspace) + "} c();";

    try {
        eval(a);
        repeat_forever_flag = false;
        setTimeout(() => {
            eval(a);
            repeat_forever_flag = true;
        }, 2000);
    } catch (b) { alert(b) }
    // try {
    //     if (tour.getCurrentStep().options.title === "Run and see what happens") {
    //         let btns = document.querySelectorAll('.shepherd-button');
    //         btns[btns.length - 1].click();
    //     }
    // } catch { }
}

// function helpCode() {
//     var xml_wkspace = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="y@`j*9{!Q;LX?XP{YEod" x="77" y="-481"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id=":]cRP}Hbb4TK#v[1AF~("><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="WbI]zCaPNaXyi5%IepVh"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="Ot_E]3@+]16%4h%B1yv="><field name="NUM">3</field></block></value><next><block type="single_action_block" id="z~@sh,!mCr.52kwx+c7d"><next><block type="forever_repeat_block" id="Num=By,yKC_4H!^!/kMk"><statement name="NAME"><block type="controls_if" id="^CEciH^6GCxb1$gk:=!S"><mutation elseif="2"></mutation><value name="IF0"><block type="key_sensing" id="#uX!C-jJ-UE_Wrsk@|vk"><field name="NAME">left</field></block></value><statement name="DO0"><block type="set_text_holder" id="n~8-K;eupJwaOD2p12Ys"><field name="Options">txt1</field></block></statement><value name="IF1"><block type="key_sensing" id="leJq3/wI!Bt*0@VFkT4/"><field name="NAME">right</field></block></value><statement name="DO1"><block type="set_text_holder" id="4;u?ES4G})mLr/|dQ^6c"><field name="Options">txt2</field></block></statement><value name="IF2"><block type="key_sensing" id="yVk_f7[:%vL(Vp`qFYs]"><field name="NAME">space</field></block></value><statement name="DO2"><block type="set_text_holder" id=";A.s@K87/1@pV3f%P|BF"><field name="Options">txt3</field></block></statement><next><block type="controls_if" id=":NjSzxH6eyIX^-k3++C9"><value name="IF0"><block type="wave_jumped" id="6vtt28EjIs(E,cZ_#v[h"><field name="Options">Score</field></block></value><statement name="DO0"><block type="change_variable_holder" id="Dnuxd:XuPI|39ysFilYS"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="o}r)De%?FZEqt~0FS@7["><field name="NUM">1</field></block></value></block></statement><next><block type="controls_if" id="rRS{Tavs^qVMgSxcroG}"><value name="IF0"><block type="wave_jumped" id="ypS,.!1Tu9[CR?$Z+McQ"><field name="Options">Lives</field></block></value><statement name="DO0"><block type="change_variable_holder" id="tZ5JgwWfzEpfE;E9p5|Q"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id=",cEk8Ug{^b*jNk3#0~u@"><field name="NUM">2</field></block></value></block></statement><next><block type="controls_if" id="A*qVT$H(86_RiqPx(pWB"><value name="IF0"><block type="wave_jumped" id="0a[lv6,ju#2KpL_C*T7V"><field name="Options">timer</field></block></value><statement name="DO0"><block type="change_variable_holder" id="!6UVm33rQTi6z(;H`G-O"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="gp;8I}RiO{Sk31MW(;Wb"><field name="NUM">3</field></block></value></block></statement><next><block type="controls_if" id="X*%]kR?gfIvj%4ve,{sJ"><value name="IF0"><block type="spritetouch__block" id="Js4Yj=Bv!j91~p^Ll(Pu"><field name="options1">wave</field><field name="options2">surfer</field></block></value><statement name="DO0"><block type="change_variable_holder" id="zkQEw`6c*E=x7I(`HTt@"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="~!,`Uk/C?g-%7-S`Td)q"><field name="NUM">-1</field></block></value><next><block type="fall" id="O`)m8ze`vJcp46%U0;B^"></block></next></block></statement><next><block type="controls_if" id="OH]f{z$dg{CM@;qG=U2t"><value name="IF0"><block type="logic_compare" id="1oKAzaP7pr~c{=(X_[pu"><field name="OP">GTE</field><value name="A"><block type="variables" id="Q$fyvvX3P}YUsjS!BIJ."><field name="Options">Score</field></block></value><value name="B"><block type="math_number" id="j*G|WAl9a+-s#lJ3Ef@{"><field name="NUM">20</field></block></value></block></value><statement name="DO0"><block type="say_block" id="uk_*FvMs;Sj;V)|-1Q?Q"><field name="dialogue">You are a surfer</field><next><block type="win_block" id="/d48t4{:PAp@zh|ve!KY"></block></next></block></statement><next><block type="controls_if" id="}5c4-y+a#)mv,i^!bb6["><value name="IF0"><block type="logic_compare" id="Br_W]xOt}hiNA%lkXvKH"><field name="OP">LTE</field><value name="A"><block type="variables" id="Bjv.fz-~-rKgRgwv5$^z"><field name="Options">Lives</field></block></value><value name="B"><block type="math_number" id="4#U1En+{i|8UE-?MF!S;"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="say_block" id="^XleKN^P2]bb})kkgoc2"><field name="dialogue">Game Over</field><next><block type="end_block" id="TJ1L;}2PmYspjA,r!$6L"></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>';
//     var xml = Blockly.Xml.textToDom(xml_wkspace);
//     Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, demoWorkspace);
// }

const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="y@`j*9{!Q;LX?XP{YEod" x="77" y="-481"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id=":]cRP}Hbb4TK#v[1AF~("><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="WbI]zCaPNaXyi5%IepVh"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="Ot_E]3@+]16%4h%B1yv="><field name="NUM">3</field></block></value><next><block type="single_action_block" id="z~@sh,!mCr.52kwx+c7d"><next><block type="forever_repeat_block" id="Num=By,yKC_4H!^!/kMk"><statement name="NAME"><block type="controls_if" id="^CEciH^6GCxb1$gk:=!S"><mutation elseif="2"></mutation><value name="IF0"><block type="key_sensing" id="#uX!C-jJ-UE_Wrsk@|vk"><field name="NAME">left</field></block></value><statement name="DO0"><block type="set_text_holder" id="n~8-K;eupJwaOD2p12Ys"><field name="Options">txt1</field></block></statement><value name="IF1"><block type="key_sensing" id="leJq3/wI!Bt*0@VFkT4/"><field name="NAME">right</field></block></value><statement name="DO1"><block type="set_text_holder" id="4;u?ES4G})mLr/|dQ^6c"><field name="Options">txt2</field></block></statement><value name="IF2"><block type="key_sensing" id="yVk_f7[:%vL(Vp`qFYs]"><field name="NAME">space</field></block></value><statement name="DO2"><block type="set_text_holder" id=";A.s@K87/1@pV3f%P|BF"><field name="Options">txt3</field></block></statement><next><block type="controls_if" id=":NjSzxH6eyIX^-k3++C9"><value name="IF0"><block type="wave_jumped" id="6vtt28EjIs(E,cZ_#v[h"><field name="Options">Score</field></block></value><statement name="DO0"><block type="change_variable_holder" id="Dnuxd:XuPI|39ysFilYS"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="o}r)De%?FZEqt~0FS@7["><field name="NUM">1</field></block></value></block></statement><next><block type="controls_if" id="rRS{Tavs^qVMgSxcroG}"><value name="IF0"><block type="wave_jumped" id="ypS,.!1Tu9[CR?$Z+McQ"><field name="Options">Lives</field></block></value><statement name="DO0"><block type="change_variable_holder" id="tZ5JgwWfzEpfE;E9p5|Q"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id=",cEk8Ug{^b*jNk3#0~u@"><field name="NUM">2</field></block></value></block></statement><next><block type="controls_if" id="A*qVT$H(86_RiqPx(pWB"><value name="IF0"><block type="wave_jumped" id="0a[lv6,ju#2KpL_C*T7V"><field name="Options">timer</field></block></value><statement name="DO0"><block type="change_variable_holder" id="!6UVm33rQTi6z(;H`G-O"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="gp;8I}RiO{Sk31MW(;Wb"><field name="NUM">3</field></block></value></block></statement><next><block type="controls_if" id="X*%]kR?gfIvj%4ve,{sJ"><value name="IF0"><block type="spritetouch__block" id="Js4Yj=Bv!j91~p^Ll(Pu"><field name="options1">wave</field><field name="options2">surfer</field></block></value><statement name="DO0"><block type="change_variable_holder" id="zkQEw`6c*E=x7I(`HTt@"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="~!,`Uk/C?g-%7-S`Td)q"><field name="NUM">-1</field></block></value><next><block type="fall" id="O`)m8ze`vJcp46%U0;B^"></block></next></block></statement><next><block type="controls_if" id="OH]f{z$dg{CM@;qG=U2t"><value name="IF0"><block type="logic_compare" id="1oKAzaP7pr~c{=(X_[pu"><field name="OP">GTE</field><value name="A"><block type="variables" id="Q$fyvvX3P}YUsjS!BIJ."><field name="Options">Score</field></block></value><value name="B"><block type="math_number" id="j*G|WAl9a+-s#lJ3Ef@{"><field name="NUM">20</field></block></value></block></value><statement name="DO0"><block type="say_block" id="uk_*FvMs;Sj;V)|-1Q?Q"><field name="dialogue">You are a surfer</field><next><block type="win_block" id="/d48t4{:PAp@zh|ve!KY"></block></next></block></statement><next><block type="controls_if" id="}5c4-y+a#)mv,i^!bb6["><value name="IF0"><block type="logic_compare" id="Br_W]xOt}hiNA%lkXvKH"><field name="OP">LTE</field><value name="A"><block type="variables" id="Bjv.fz-~-rKgRgwv5$^z"><field name="Options">Lives</field></block></value><value name="B"><block type="math_number" id="4#U1En+{i|8UE-?MF!S;"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="say_block" id="^XleKN^P2]bb})kkgoc2"><field name="dialogue">Game Over</field><next><block type="end_block" id="TJ1L;}2PmYspjA,r!$6L"></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = 'from learn_to_surf import *\n';
    document.getElementById('pycode').innerHTML = import_statement + code;
    document.getElementById('modal1').innerHTML = code;
}
// demoWorkspace.addChangeListener(myUpdateFunction);


function getNoOfBlocks() {
    demoWorkspace = Blockly.getMainWorkspace();
    noOfBlocks = demoWorkspace.getAllBlocks();
    return noOfBlocks.length
}

const updateImports = ["from learn_to_surf import *"];

const instruction = {
    "heading": "Learn to surf among low, medium and high waves!",
    "steps": [
        {
            "title": "Initialize variables",
            "text": "set score as 0",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value></block></xml>"
        },
        {
            "text": "set lives as 3",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value></block></next></block></xml>"
        },
        {
            "title": "Start game",
            "text": "Start the Game",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"></block></next></block></next></block></xml>"
        },
        {
            "title": "Repeat forever loop",
            "text": "The following statements should function within the loop",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Jump control",
            "text": "If key pressed is left Arrow, do high wave jump",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "text": "else If key pressed is right Arrow, do medium wave jump",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "text": "else If key pressed is space bar, do low wave jump",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Wave jumped successfully",
            "text": "if is low wave jumped, change score by 1",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "text": "if is medium wave jumped, change score by 2",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\" id=\"rRS{Tavs^qVMgSxcroG}\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"ypS,.!1Tu9[CR?$Z+McQ\"><field name=\"Options\">Lives</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"tZ5JgwWfzEpfE;E9p5|Q\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\",cEk8Ug{^b*jNk3#0~u@\"><field name=\"NUM\">2</field></block></value></block></statement></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "text": "if is high wave jumped, change score by 3",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\" id=\"rRS{Tavs^qVMgSxcroG}\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"ypS,.!1Tu9[CR?$Z+McQ\"><field name=\"Options\">Lives</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"tZ5JgwWfzEpfE;E9p5|Q\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\",cEk8Ug{^b*jNk3#0~u@\"><field name=\"NUM\">2</field></block></value></block></statement><next><block type=\"controls_if\" id=\"A*qVT$H(86_RiqPx(pWB\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"0a[lv6,ju#2KpL_C*T7V\"><field name=\"Options\">timer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"!6UVm33rQTi6z(;H`G-O\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"gp;8I}RiO{Sk31MW(;Wb\"><field name=\"NUM\">3</field></block></value></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Wave jump unsuccessful",
            "text": "If wave touches surfer, change lives by -1, Fall",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\" id=\"rRS{Tavs^qVMgSxcroG}\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"ypS,.!1Tu9[CR?$Z+McQ\"><field name=\"Options\">Lives</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"tZ5JgwWfzEpfE;E9p5|Q\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\",cEk8Ug{^b*jNk3#0~u@\"><field name=\"NUM\">2</field></block></value></block></statement><next><block type=\"controls_if\" id=\"A*qVT$H(86_RiqPx(pWB\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"0a[lv6,ju#2KpL_C*T7V\"><field name=\"Options\">timer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"!6UVm33rQTi6z(;H`G-O\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"gp;8I}RiO{Sk31MW(;Wb\"><field name=\"NUM\">3</field></block></value></block></statement><next><block type=\"controls_if\" id=\"X*%]kR?gfIvj%4ve,{sJ\"><value name=\"IF0\"><block type=\"spritetouch__block\" id=\"Js4Yj=Bv!j91~p^Ll(Pu\"><field name=\"options1\">wave</field><field name=\"options2\">surfer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"zkQEw`6c*E=x7I(`HTt@\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"~!,`Uk/C?g-%7-S`Td)q\"><field name=\"NUM\">-1</field></block></value><next><block type=\"fall\" id=\"O`)m8ze`vJcp46%U0;B^\"></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Win Game",
            "text": "If score is greater than or equal to 20, say \"You are a surfer\", Won Game!",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\" id=\"rRS{Tavs^qVMgSxcroG}\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"ypS,.!1Tu9[CR?$Z+McQ\"><field name=\"Options\">Lives</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"tZ5JgwWfzEpfE;E9p5|Q\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\",cEk8Ug{^b*jNk3#0~u@\"><field name=\"NUM\">2</field></block></value></block></statement><next><block type=\"controls_if\" id=\"A*qVT$H(86_RiqPx(pWB\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"0a[lv6,ju#2KpL_C*T7V\"><field name=\"Options\">timer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"!6UVm33rQTi6z(;H`G-O\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"gp;8I}RiO{Sk31MW(;Wb\"><field name=\"NUM\">3</field></block></value></block></statement><next><block type=\"controls_if\" id=\"X*%]kR?gfIvj%4ve,{sJ\"><value name=\"IF0\"><block type=\"spritetouch__block\" id=\"Js4Yj=Bv!j91~p^Ll(Pu\"><field name=\"options1\">wave</field><field name=\"options2\">surfer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"zkQEw`6c*E=x7I(`HTt@\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"~!,`Uk/C?g-%7-S`Td)q\"><field name=\"NUM\">-1</field></block></value><next><block type=\"fall\" id=\"O`)m8ze`vJcp46%U0;B^\"></block></next></block></statement><next><block type=\"controls_if\" id=\"OH]f{z$dg{CM@;qG=U2t\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"1oKAzaP7pr~c{=(X_[pu\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Q$fyvvX3P}YUsjS!BIJ.\"><field name=\"Options\">Score</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"j*G|WAl9a+-s#lJ3Ef@{\"><field name=\"NUM\">20</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"uk_*FvMs;Sj;V)|-1Q?Q\"><field name=\"dialogue\">You are a surfer</field><next><block type=\"win_block\" id=\"/d48t4{:PAp@zh|ve!KY\"></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Lose Game",
            "text": "if lives is less than or equal to 0, say \"Game over\", Game Over",
            "rescue": true,
            "checkbox": true,
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"set_variable_holder\" id=\"y@`j*9{!Q;LX?XP{YEod\" x=\"77\" y=\"-481\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\":]cRP}Hbb4TK#v[1AF~(\"><field name=\"NUM\">0</field></block></value><next><block type=\"set_variable_holder\" id=\"WbI]zCaPNaXyi5%IepVh\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"Ot_E]3@+]16%4h%B1yv=\"><field name=\"NUM\">3</field></block></value><next><block type=\"single_action_block\" id=\"z~@sh,!mCr.52kwx+c7d\"><next><block type=\"forever_repeat_block\" id=\"Num=By,yKC_4H!^!/kMk\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"^CEciH^6GCxb1$gk:=!S\"><mutation elseif=\"2\"></mutation><value name=\"IF0\"><block type=\"key_sensing\" id=\"#uX!C-jJ-UE_Wrsk@|vk\"><field name=\"NAME\">left</field></block></value><statement name=\"DO0\"><block type=\"set_text_holder\" id=\"n~8-K;eupJwaOD2p12Ys\"><field name=\"Options\">txt1</field></block></statement><value name=\"IF1\"><block type=\"key_sensing\" id=\"leJq3/wI!Bt*0@VFkT4/\"><field name=\"NAME\">right</field></block></value><statement name=\"DO1\"><block type=\"set_text_holder\" id=\"4;u?ES4G})mLr/|dQ^6c\"><field name=\"Options\">txt2</field></block></statement><value name=\"IF2\"><block type=\"key_sensing\" id=\"yVk_f7[:%vL(Vp`qFYs]\"><field name=\"NAME\">space</field></block></value><statement name=\"DO2\"><block type=\"set_text_holder\" id=\";A.s@K87/1@pV3f%P|BF\"><field name=\"Options\">txt3</field></block></statement><next><block type=\"controls_if\" id=\":NjSzxH6eyIX^-k3++C9\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"6vtt28EjIs(E,cZ_#v[h\"><field name=\"Options\">Score</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"Dnuxd:XuPI|39ysFilYS\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"o}r)De%?FZEqt~0FS@7[\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\" id=\"rRS{Tavs^qVMgSxcroG}\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"ypS,.!1Tu9[CR?$Z+McQ\"><field name=\"Options\">Lives</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"tZ5JgwWfzEpfE;E9p5|Q\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\",cEk8Ug{^b*jNk3#0~u@\"><field name=\"NUM\">2</field></block></value></block></statement><next><block type=\"controls_if\" id=\"A*qVT$H(86_RiqPx(pWB\"><value name=\"IF0\"><block type=\"wave_jumped\" id=\"0a[lv6,ju#2KpL_C*T7V\"><field name=\"Options\">timer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"!6UVm33rQTi6z(;H`G-O\"><field name=\"Variable name\">Score</field><value name=\"NAME\"><block type=\"math_number\" id=\"gp;8I}RiO{Sk31MW(;Wb\"><field name=\"NUM\">3</field></block></value></block></statement><next><block type=\"controls_if\" id=\"X*%]kR?gfIvj%4ve,{sJ\"><value name=\"IF0\"><block type=\"spritetouch__block\" id=\"Js4Yj=Bv!j91~p^Ll(Pu\"><field name=\"options1\">wave</field><field name=\"options2\">surfer</field></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"zkQEw`6c*E=x7I(`HTt@\"><field name=\"Variable name\">Lives</field><value name=\"NAME\"><block type=\"math_number\" id=\"~!,`Uk/C?g-%7-S`Td)q\"><field name=\"NUM\">-1</field></block></value><next><block type=\"fall\" id=\"O`)m8ze`vJcp46%U0;B^\"></block></next></block></statement><next><block type=\"controls_if\" id=\"OH]f{z$dg{CM@;qG=U2t\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"1oKAzaP7pr~c{=(X_[pu\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Q$fyvvX3P}YUsjS!BIJ.\"><field name=\"Options\">Score</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"j*G|WAl9a+-s#lJ3Ef@{\"><field name=\"NUM\">20</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"uk_*FvMs;Sj;V)|-1Q?Q\"><field name=\"dialogue\">You are a surfer</field><next><block type=\"win_block\" id=\"/d48t4{:PAp@zh|ve!KY\"></block></next></block></statement><next><block type=\"controls_if\" id=\"}5c4-y+a#)mv,i^!bb6[\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"Br_W]xOt}hiNA%lkXvKH\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables\" id=\"Bjv.fz-~-rKgRgwv5$^z\"><field name=\"Options\">Lives</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"4#U1En+{i|8UE-?MF!S;\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"^XleKN^P2]bb})kkgoc2\"><field name=\"dialogue\">Game Over</field><next><block type=\"end_block\" id=\"TJ1L;}2PmYspjA,r!$6L\"></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>"
        },
        {
            "title": "Instructions to play:",
            "text": "When the waves come, press the space bar to jump low wave, press right arrow to jump medium wave, press left arrow to do high jump. If you do a wrong jump for a wave, you will fall and lose lives. Score 20 to win the game. Play cautiously, you've got only 3 lives!"
        }
    ]
};

export {
    completedFlag,
    myUpdateFunction,
    // helpCode,
    instruction,
    runCode,
    reset_output,
    reInitValues,
    win_game,
    game_over,
    // inside_update_start,
    inside_update_end,
    // update,
    fall,
    say,
    space_key_is_pressed,
    left_arrow_key_is_pressed,
    right_arrow_key_is_pressed,
    Start_Game,
    wave_touches_surfer,
    dummy,
    // Score,
    // Lives,
    high_wave_jump,
    medium_wave_jump,
    low_wave_jump,
    law_wave_is_jumped,
    meduim_wave_is_jumped,
    high_wave_is_jumped,
    MoveH_wave,
    Move_Waves,
    getNoOfBlocks,
    updateImports,
    update,
    preload,
    create,
    gameHeight,
    gameWidth,
    repeat_forever_flag,
}