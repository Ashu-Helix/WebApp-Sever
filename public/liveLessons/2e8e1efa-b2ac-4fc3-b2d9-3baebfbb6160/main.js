//============================================================================================
//========================================IMPORT STATEMENTS=========================================
//========================================DO NOT DELETE===================================

// import M from 'materialize-css';
// import {
//     AUTO,
//     Game,
// } from 'phaser';

// import MSPhaserLib from '../msPhaserLib.min';

//============================================================================================
//========================================CONFIG.JS=========================================
//============================================================================================


let _gameThis = null;
const baseURL = "assets";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;


//============================================================================================
//========================================CONSTANT.JS=========================================
//============================================================================================

const GAME_CONSTANT = {
    images: {
        Hurdle_Fall: "gameAssets/Hurdle_Fall.png",
        Hurdle_Stand: "gameAssets/Hurdle_Stand.png",

    },
    spritesImages: {
        Jump_Bt: "gameAssets/Jump_Bt.png",
        Runner: "gameAssets/Runner.png",
        Track: "gameAssets/Track.png",
    }
};


//============================================================================================
//========================================SCRIPT2_BLOCKLY.JS=========================================
//============================================================================================

function completedFlag() {
    return GameIsOver; // *===== use this variable name ======*
}



var repeat_forever_flag = true;

function runCode() {
    tour_over && tour.complete();
    reInitValues();
    window.LoopTrap = 10;
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var a =
        "async function c(){" +
        Blockly.JavaScript.workspaceToCode(demoWorkspace) +
        "game_over();} c();";
    try {
        // eval(a);
        repeat_forever_flag = false;
        setTimeout(() => {
            try {
                eval(a);
            } catch (b) {
                alert(b);
                console.log("EOORED")
            }
            repeat_forever_flag = true;
        }, 2000);
    } catch (b) {
        alert(b);
        console.log("EOORED")
    }
    try {
        if (tour.getCurrentStep().options.title === "Run and see what happens") {
            let btns = document.querySelectorAll(".shepherd-button");
            btns[btns.length - 1].click();
        }
    } catch {}
}

function helpCode() {
    var xml_wkspace =
        '<xml xmlns="https://developers.google.com/blockly/xml"><block type="bg_animation" id="e=F])xF|sba@C.ON]SNc" x="-22" y="-7"><next><block type="set_variable_holder" id="%xZaE.zb$i{$KQ|;n;[f"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="XX[G+fEYaE#VCd^oU/9N"><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="J_11G4c@`D^320;AJ_2}"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="P4mcH!)#]Qc}0T%u.D]-"><field name="NUM">3</field></block></value><next><block type="controls_whileUntil" id="r*?O,43(%I*x71%mogy9"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare" id="6?|@vws_T5q|ISAd3792"><field name="OP">GT</field><value name="A"><block type="variables" id="V`!xIh~E^{$/bUi9jblk"><field name="Options">Lives</field></block></value><value name="B"><block type="math_number" id="=1YMFgH7UaLzCTCy^$}$"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="wait_block" id="k_~Kl{Yua;XP@4RG+9ei"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="NxXR3DE1tC(-+[V6x9Hi"><field name="NUM">0.25</field></block></value><next><block type="controls_if" id="yj(}wF,nxeJM0Qz|2vsh"><value name="IF0"><block type="pointertouch__block" id="fWGtyagZ%a{2@M6zUu-5"><field name="options2">option2</field></block></value><statement name="DO0"><block type="action_block" id="iN$a?Q`K|a:KaXAW{MoE"><next><block type="controls_if" id="|hO1`+1w6a_35}s0?]ue"><value name="IF0"><block type="successful_jump_block" id="*A,;nC:iKR_|fj*PV7aa"></block></value><statement name="DO0"><block type="change_variable_holder" id="=Blq!E$_KnaBfNWTL/QC"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="UgN)4bR0q(?|p^)%.}6e"><field name="NUM">1</field></block></value></block></statement></block></next></block></statement><next><block type="controls_if" id="GO~!Dk1^s);V]!3j2(rc"><value name="IF0"><block type="spritetouch__block" id="sTtbIH-xS`^=[qd`8:2y"><field name="options1">option2</field><field name="options2">option1</field></block></value><statement name="DO0"><block type="change_variable_holder" id="0mSLhqEJ?dMMQ38*eGm|"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="ya]C-8L3H(|xN~mQ+6*c"><field name="NUM">-3</field></block></value><next><block type="change_variable_holder" id="gHD@QbNC0[Y4*_Q%xPm]"><field name="Variable name">Lives</field><value name="NAME"><block type="math_number" id="C)DDpm0tLpP2(fhhnfIu"><field name="NUM">-1</field></block></value><next><block type="say_block" id="TFYZXlJukYX5LTD[MHFC"><field name="say">Oops</field></block></next></block></next></block></statement></block></next></block></next></block></statement><next><block type="say_block" id="7u_,5wCq%9W%4Ekv,;cH"><field name="say">Out</field></block></next></block></next></block></next></block></next></block></xml>';
    var xml = Blockly.Xml.textToDom(xml_wkspace);
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(xml, demoWorkspace);
}

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from clumsy_joe import *\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
demoWorkspace.addChangeListener(myUpdateFunction);



//============================================================================================
//========================================MAIN.JS=========================================
//============================================================================================




let ErrorText;
let ErrorInnerText = "";
let GameIsOver = false;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let BG;
let Runner;
let LivesText;
let ScoreText;
let MiddleText;
let Lives = 3;
let Score = 0;
let KB_SPACE; //let Jump_Bt;
let Hurdle_Stand;
let Hurdle_Fall;
let TW_Hurdle;
let Is_Jumping = false;
let Is_Falling = false;

let Lane = 2; //<< Change Here The Lane (From 1 To 3)..
//=====================================================================================================================================
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    //backgroundColor: "#eeeeee", parent: "circle", physics: {default:"arcade", arcade:{debug:true}},
    backgroundColor: "#eeeeee",
    parent: "circle",
    physics: { default: "arcade", arcade: {} },
    scene: { preload: preload, create: create, update: update },
};
let game = new Phaser.Game(config);

function preload() {
    _gameThis = this;
    _gameThis.load.setBaseURL(baseURL);
    loadImages();
}

function create() {
    //BG = this.add.image(gameWidth / 2, gameHeight / 2,'BG').setName('BG'); _gameThis['BG'] = BG;
    ErrorText = _gameThis.add.text(0, 0, "Error...", {
        font: "bold 36px Arial",
        fill: "#ff0000",
    });
    ErrorText.setPosition(10, ErrorText.displayHeight * 0.75);
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);
    //=====================================================================================================================================
    //============ ADDING GRAPHICS ========================================================================================================
    //=====================================================================================================================================
    BG = _gameThis.add
        .sprite(gameWidth / 2, gameHeight / 2, "Track")
        .setScale(6, 6);
    BG.setFrame(13);
    Hurdle_Stand = _gameThis.physics.add.image(
        2150,
        750 + (Lane - 1) * 110,
        "Hurdle_Stand"
    );
    Hurdle_Fall = _gameThis.add.image(
        2150,
        800 + (Lane - 1) * 110,
        "Hurdle_Fall"
    );
    Runner = _gameThis.physics.add.sprite(-100, 600 + (Lane - 1) * 110, "Runner");

    _gameThis.input.on("pointerdown", function() {
        jumping();
    });
    KB_SPACE = _gameThis.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    KB_SPACE.on("down", function() {
        jumping();
    });

    create_Animations();

    MiddleText = _gameThis.add.text(gameWidth / 2, 400, "", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    });
    MiddleText.setOrigin(0.5, 0.5);
    LivesText = _gameThis.add.text(
        gameWidth / 3,
        100,
        "Lives : " + Lives.toString(), {
            font: "bold 68px Arial",
            fill: "#ffffff",
            stroke: "#000000",
            strokeThickness: 12,
        }
    );
    LivesText.setOrigin(0.5, 0.5);
    ScoreText = _gameThis.add.text(1280, 100, "Score : " + Score.toString(), {
        font: "bold 68px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 12,
    });
    ScoreText.setOrigin(0.5, 0.5);

    // test();
    //=========== THE UPDATE CODE =========================================================================================================
} //====================================================================================================================================
function update() {}
//=====================================================================================================================================
//================= WORK SPACE ========================================================================================================
//=====================================================================================================================================
function start_race() {
    say("Starting Race...");
    BG.stop();
    Runner.stop();

    //Prepare Runner :
    Runner.body.setSize(15, 300);
    Runner.body.setOffset(320, 200);
    Runner.setFrame(3);
    _gameThis.tweens.add({
        targets: Runner,
        x: 500,
        ease: "Power1",
        duration: 300,
        delay: 500,
    });
    setTimeout(() => {
        Runner.play("run");
        BG.play("start");
        say("");
    }, 1500);
    setTimeout(() => {
        BG.play("loop");
    }, 1500 + 3250);

    //Prepare Hurdle :
    Hurdle_Stand.body.setSize(15, 50); //Hurdle_Stand.body.setOffset(320,200);
    _gameThis.physics.add.collider(
        Runner,
        Hurdle_Stand,
        function(Runner, Hurdle_Stand) {
            runner_fall();
        }
    );

    reset_Hurdle(4000);
}

function i_touch_screen() {
    if (Is_Jumping) {
        Is_Jumping = false;
        return true;
    }
    return false;
}

function joe_touches_hurdle() {
    if (Is_Falling) {
        Is_Falling = false;
        return true;
    }
    return false;
}

function jumping() {
    //<< The Button Event..
    if (Is_Falling) return;
    Is_Jumping = true;
}

function jump() {
    if (Is_Falling) return;

    Runner.stop();
    Runner.setFrame(1);
    Runner.body.setSize(10, 10);
    Runner.body.setOffset(320, 200);

    setTimeout(() => {
        running();
    }, 300);
}

function runner_fall() {
    Is_Falling = true;
    BG.stop();
    TW_Hurdle.stop();
    Hurdle_Fall.x = Hurdle_Stand.x;
    Hurdle_Stand.x = 2200;
    if (Lives > 1) reset_Hurdle(3000);

    Runner.stop();
    Runner.setFrame(0);
    if (Lives < 1) return;

    //Getting Rid Of "Hurdle_Fall" & //Restart The Running..
    setTimeout(() => {
        if (Lives > 0)
            _gameThis.tweens.add({
                targets: Hurdle_Fall,
                x: -230,
                ease: "Power0",
                duration: 1000,
                delay: 500,
            });
        running();
    }, 500);
}

function reset_Hurdle(delay_) {
    Hurdle_Stand.x = 2200;
    if (Lives < 1) {
        finish_game();
        return;
    }

    if (TW_Hurdle != null) TW_Hurdle.stop();
    TW_Hurdle = _gameThis.tweens.add({
        targets: Hurdle_Stand,
        x: -230,
        ease: "Power0",
        duration: 1500,
        delay: delay_,
    });
    TW_Hurdle.on("complete", function() {
        reset_Hurdle(500 + rand(10) * 100);
    });
}

function running() {
    Is_Jumping = false;
    Is_Falling = false;
    if (Lives < 1) return;

    setTimeout(() => {
        say("");
    }, 500);

    Runner.body.setSize(15, 300);
    Runner.body.setOffset(320, 200);
    Runner.play("run");
    BG.play("loop");
}

function jump_successful() {
    //500 is Runner.x :
    //console.log("DIST=",Math.abs(Hurdle_Stand.x-500));
    if (Math.abs(Hurdle_Stand.x - 500) <= 500) {
        say("+ 1");
        return true;
    }

    return false;
}

function finish_game() {
    Runner.stop();
    ScoreText.text = "Score : " + Score.toString();
    LivesText.text = "Lives : " + Lives.toString();

    //if(Score<10) return; if(Lives<1) return;
    //setTimeout(()=>{ Runner.play('run'); BG.play('finish'); },500);
    //setTimeout(()=>{ Runner.stop(); Runner.setFrame(1); say("You Win !"); },2500);
}

function create_Animations() {
    _gameThis.anims.create({
        key: "finish",
        frames: _gameThis.anims.generateFrameNumbers("Track", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _gameThis.anims.create({
        key: "start",
        frames: _gameThis.anims.generateFrameNumbers("Track", {
            frames: [
                0 + 13,
                1 + 13,
                2 + 13,
                3 + 13,
                4 + 13,
                5 + 13,
                6 + 13,
                7 + 13,
                8 + 13,
                9 + 13,
                10 + 13,
                11 + 13,
                12 + 13,
            ],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _gameThis.anims.create({
        key: "loop",
        frames: _gameThis.anims.generateFrameNumbers("Track", {
            frames: [
                0 + 26,
                1 + 26,
                2 + 26,
                3 + 26,
                4 + 26,
                5 + 26,
                6 + 26,
                7 + 26,
                8 + 26,
                9 + 26,
                10 + 26,
                11 + 26,
                12 + 26,
            ],
        }),
        frameRate: 4,
        repeat: -1,
    });

    _gameThis.anims.create({
        key: "run",
        frames: _gameThis.anims.generateFrameNumbers("Runner", {
            frames: [2, 3, 4, 5, 6],
        }),
        frameRate: 8,
        repeat: -1,
    });
}

function refresh_Score() {
    if (Score < 0) Score = 0;
    ScoreText.text = "Score : " + Score.toString();
    LivesText.text = "Lives : " + Lives.toString();
}

function game_over() {
    setTimeout(() => { GameIsOver = true; }, 2500)
}

function say(str) {
    refresh_Score();
    MiddleText.setText(str);
}

function sleep(seconds) {
    refresh_Score();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
}
//=====================================================================================================================================
//=====================================================================================================================================
function loadImages() {
    let images = GAME_CONSTANT.images;
    let spritesImages = GAME_CONSTANT.spritesImages;
    for (const key in images) {
        if (Object.hasOwnProperty.call(images, key)) {
            const element = images[key];
            _gameThis.load.image(key, element);
        }
    }
    for (const key in spritesImages) {
        if (Object.hasOwnProperty.call(spritesImages, key)) {
            if (key == "Jump_Bt") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 253,
                    frameHeight: 275,
                });
            }
            if (key == "Runner") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 586,
                    frameHeight: 526,
                });
            }
            if (key == "Track") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 320,
                    frameHeight: 180,
                });
            }
        }
    }
}

function ShowError() {
    ErrorText.setAlpha(1);
    ErrorText.setText(ErrorInnerText); //use error text
    _gameThis.tweens.add({
        targets: ErrorText,
        alpha: 0,
        duration: 500,
        delay: 2500,
    });
}

function Start_Game() {
    console.log("------------------->Start_Game");
}
// Re-initialize the game variables
function reInitValues() {
    GameIsOver = false;
    Lives = 3;
    Score = 0;
    Is_Jumping = false;
    Is_Falling = false;
}

function reset_output() {
    reInitValues();
    _gameThis.scene.restart();
}
//=====================================================================================================================================
//=====================================================================================================================================
function rand(a) {
    return Math.floor(Math.random() * a) + 1;
}

async function test() {
    start_race();
    while (Lives > 0) {
        await sleep(0.25);
        //await sleep(0.5);
        if (i_touch_screen()) {
            jump();
            if (jump_successful()) Score += 1;
            //Score += 1;
        }
        if (joe_touches_hurdle()) {
            Score -= 3;
            Lives -= 1;
            say("Oops!");
        }
    }
    say("Out!");
}

//============================================================================================
//========================================EXPORT STATEMENTS=========================================
//========================================DO NOT DELETE===================================
// export {
//     completedFlag,
//     myUpdateFunction,
//     helpCode,
//     runCode,
//     reset_output,
//     reInitValues,
//     start_race,
//     Lives,
//     Score,
//     i_touch_screen,
//     jump,
//     joe_touches_hurdle,
//     say,
//     jump_successful,
//     sleep,
// }