//============================================================================================
//========================================IMPORT STATEMENTS=========================================
//========================================DO NOT DELETE===================================

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

//============================================================================================
//========================================CONFIG.JS=========================================
//============================================================================================

let _gameThis = null;
const baseURL = "../img/images/0824ca14-7799-4eb4-9596-3b6453d7d094";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;

//============================================================================================
//========================================CONSTANT.JS=========================================
//============================================================================================
const GAME_CONSTANT = {
    images: {
        BG: "Background.png",
    },
    spritesImages: {
        Ball: "Ball.png",
        Load: "Load.png",
        Pin: "Pin.png",
    },
};
const ERROR_MESSAGE = "";
const CORRECT_MESSAGE = "";

//============================================================================================
//========================================SCRIPT2_BLOCKLY.JS=========================================
//============================================================================================

function completedFlag() {
    return GameIsOver; // *===== use this variable name ======*
}

var repeat_forever_flag = true;

function runCode() {
    // tour_over && tour.complete();
    // Reset variables
    // let a = `update = ()=>{if (!isGameCompleted) {` + Blockly.JavaScript.workspaceToCode(demoWorkspace) + `}}`;
    // let a = `Blockly.JavaScript.workspaceToCode(demoWorkspace)`;
    reInitValues();
    window.LoopTrap = 1e3;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var a =
        "async function c(){" +
        Blockly.JavaScript.workspaceToCode(demoWorkspace) +
        "} c();";
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        // eval(a);
        repeat_forever_flag = false;
        setTimeout(() => {
            eval(a);
            repeat_forever_flag = true;
        }, 2000);
    } catch (b) {
        alert(b);
    }
    // try {
    //     if (tour.getCurrentStep().options.title === "Run and see what happens") {
    //         let btns = document.querySelectorAll(".shepherd-button");
    //         btns[btns.length - 1].click();
    //     }
    // } catch { }
}

// function helpCode() {
//     // tour.isActive() || tour.start()
//     var xml_wkspace =
//         '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="FG6;gvouf)tV7m)LT78R" x="12" y="78"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="VUiiy8#FOB~=Vmkb(qc6"><field name="NUM">0</field></block></value><next><block type="forever_repeat_block" id="l$]Yn_fd^5!`|}uGquUh"><statement name="NAME"><block type="set_variable_holder" id="fZ$!M;sijwyM3l~aF4?#"><field name="Variable name">op1</field><value name="NAME"><block type="random_between" id="0U/1tyre_EY1{mdk:Ldh"><field name="num1">0</field><field name="num2">9</field></block></value><next><block type="controls_if" id="),w^^g0L^uIeU_|?9e0X"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="*@$5x$(KMi:K%?mRzWH%"><field name="OP">EQ</field><value name="A"><block type="variables" id="h5dQ?JD#.3IXQ9^Cvf%t"><field name="Options">op1</field></block></value><value name="B"><block type="math_number" id="8n5C]!I?zOP3b{.*Ibe@"><field name="NUM">9</field></block></value></block></value><statement name="DO0"><block type="drop_all_pins" id="8nzFZ1DLgm+^DoHMza(2"><next><block type="wait_block" id="*V,(sTacOI_(=*4/;v}D"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="Xcf)g:tg2?]Gh)a/xx}9"><field name="NUM">3</field></block></value><next><block type="end_all_block" id="2BMhvI:gtZuppn[6T,R8"></block></next></block></next></block></statement><statement name="ELSE"><block type="drop_pins" id="@OeG9:iuA*MO}V35vZ8O"><next><block type="wait_block" id="eZu$|Us2IL/1.g}!*3BK"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="9D@[EtlD4qWoVa?4|{(N"><field name="NUM">3</field></block></value></block></next></block></statement></block></next></block></statement></block></next></block></xml>';
//     var xml = Blockly.Xml.textToDom(xml_wkspace);
//     demoWorkspace.clear();
//     Blockly.Xml.domToWorkspace(xml, demoWorkspace);
// }

// const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="FG6;gvouf)tV7m)LT78R" x="12" y="78"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="VUiiy8#FOB~=Vmkb(qc6"><field name="NUM">0</field></block></value><next><block type="forever_repeat_block" id="l$]Yn_fd^5!`|}uGquUh"><statement name="NAME"><block type="set_variable_holder" id="fZ$!M;sijwyM3l~aF4?#"><field name="Variable name">op1</field><value name="NAME"><block type="random_between" id="0U/1tyre_EY1{mdk:Ldh"><field name="num1">0</field><field name="num2">9</field></block></value><next><block type="controls_if" id="),w^^g0L^uIeU_|?9e0X"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="*@$5x$(KMi:K%?mRzWH%"><field name="OP">EQ</field><value name="A"><block type="variables" id="h5dQ?JD#.3IXQ9^Cvf%t"><field name="Options">op1</field></block></value><value name="B"><block type="math_number" id="8n5C]!I?zOP3b{.*Ibe@"><field name="NUM">9</field></block></value></block></value><statement name="DO0"><block type="drop_all_pins" id="8nzFZ1DLgm+^DoHMza(2"><next><block type="wait_block" id="*V,(sTacOI_(=*4/;v}D"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="Xcf)g:tg2?]Gh)a/xx}9"><field name="NUM">3</field></block></value><next><block type="end_all_block" id="2BMhvI:gtZuppn[6T,R8"></block></next></block></next></block></statement><statement name="ELSE"><block type="drop_pins" id="@OeG9:iuA*MO}V35vZ8O"><next><block type="wait_block" id="eZu$|Us2IL/1.g}!*3BK"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="9D@[EtlD4qWoVa?4|{(N"><field name="NUM">3</field></block></value></block></next></block></statement></block></next></block></statement></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from bowling import *\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
// demoWorkspace.addChangeListener(myUpdateFunction);

//============================================================================================
//========================================MAIN.JS=========================================
//============================================================================================

let ErrorText;
let ErrorInnerText = "";
let GameIsOver = false;
let MiddleText;
let BG;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let Nb_Pins = 0;
let Waiting_To_Proceed = true;
let UpC = 0;
let Ball;
let Pins = [];
let Load;

//=====================================================================================================================================
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    //backgroundColor: "#eeeeee", parent: "circle", physics: {default:"arcade", arcade:{debug:true}},
    backgroundColor: "#eeeeee",
    // parent: "circle", //physics: {default:"arcade", arcade:{}},
    parent: "sprite-container",
    canvasStyle: `width: 100%;
    object-fit: revert;
    aspect-ratio: 738 / 436;`,
    scene: { preload: preload, create: create, update: update },
};
window['game'] = new Phaser.Game(config);

function preload() {
    _gameThis = this;
    _gameThis.load.setBaseURL(baseURL);
    loadImages();
}

function create() {
    BG = this.add.image(gameWidth / 2, gameHeight / 2, "BG").setName("BG");
    _gameThis["BG"] = BG;
    ErrorText = _gameThis.add.text(0, 0, "Error...", {
        font: "bold 36px Arial",
        fill: "#ff0000",
    });
    ErrorText.setPosition(10, ErrorText.displayHeight * 0.75);
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);

    MiddleText = _gameThis.add.text(gameWidth / 2, 200, "", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    });
    MiddleText.setOrigin(0.5, 0.5);

    //=====================================================================================================================================
    //============ ADDING GRAPHICS ========================================================================================================
    //=====================================================================================================================================
    //Putting The 9 Pins :
    for (let i = 0; i < 5; i++)
        Pins[i] = _gameThis.add.sprite(888 + i * 40, 460, "Pin");
    for (let i = 5; i < 9; i++)
        Pins[i] = _gameThis.add.sprite(888 + 20 + (i - 5) * 40, 470, "Pin");

    Ball = _gameThis.add.sprite(1000, 925, "Ball").setScale(2.5, 2.5);
    Ball.alpha = 0;
    Load = _gameThis.add.sprite(240, 845, "Load").setScale(2, 2);

    //Initialize Animations :
    _gameThis.anims.create({
        key: "roll",
        frames: _gameThis.anims.generateFrameNumbers("Ball", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }),
        frameRate: 12,
        repeat: 0,
    });
    _gameThis.anims.create({
        key: "next",
        frames: _gameThis.anims.generateFrameNumbers("Load", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0],
        }),
        frameRate: 24,
        repeat: 0,
    });

    re_init();

    //setTimeout(()=>{ test(); },3000);

    //=========== THE UPDATE CODE =========================================================================================================
} //====================================================================================================================================
async function update() {
    // if (cannot_proceed()) return;
    // // Nb_Pins = Phaser.Math.Between(0, 9);
    // Nb_Pins = 6;
    // console.log("NB PINS", Nb_Pins);
    // // Nb_Pins = rand(10) - 1;
    // if (Nb_Pins == 9) {
    //     await drop_all_pins();
    //     await sleep(3);
    //     game_over();
    // } else {
    //     await drop_pins();
    //     await sleep(3);
    // }
}
//=====================================================================================================================================
//================= NEW METHODS =======================================================================================================
//=====================================================================================================================================
async function drop_all_pins() {
    Waiting_To_Proceed = true;
    //The Ball Rolls :
    let o = rand(5);
    Ball.x = 1300 - o * 100; //Some Random Position
    _gameThis.tweens.add({
        targets: Ball,
        scaleX: 0.8,
        scaleY: 0.8,
        x: 968,
        y: 500,
        ease: "Power1",
        duration: 900,
    });
    Ball.play("roll");
    setTimeout(() => {
        dropping_pins();
    }, 1000);
    setTimeout(() => {
        say("Well Played : All Pins Did Fall !");
    }, 1200);
    setTimeout(() => {
        remove_pins();
    }, 2600);
}

async function drop_pins() {
    Waiting_To_Proceed = true;
    //The Ball Rolls :
    let o = rand(5);
    Ball.x = 1300 - o * 100; //Some Random Position
    _gameThis.tweens.add({
        targets: Ball,
        scaleX: 0.8,
        scaleY: 0.8,
        x: 968,
        y: 500,
        ease: "Power1",
        duration: 900,
    });
    Ball.play("roll");
    setTimeout(() => {
        dropping_pins();
    }, 1000);
    setTimeout(() => {
        say(Nb_Pins.toString() + " Pin(s) Did Fall");
    }, 1200);
    setTimeout(() => {
        remove_pins();
    }, 2600);
}

function dropping_pins() {
    //for(let i=0;i<Nb_Pins;i++){
    for (let i = 8; i >= 9 - Nb_Pins; i--) {
        if (i % 2 == 1) Pins[i].angle = 45;
        else Pins[i].angle = 270 + 45;
    }
    setTimeout(() => {
        //for(let i=0;i<Nb_Pins;i++){
        for (let i = 8; i >= 9 - Nb_Pins; i--) {
            if (i % 2 == 1) Pins[i].angle = 90;
            else Pins[i].angle = 270;
            Pins[i].y += 25;
        }
    }, 250);
}

function remove_pins() {
    Ball.setScale(2.5, 2.5);
    Ball.x = 1000;
    Ball.y = 925;
    Ball.alpha = 0;

    //And, Re-Init Pins :
    for (let i = 0; i < 5; i++) Pins[i].setPosition(888 + i * 40, 460);
    for (let i = 5; i < 9; i++) Pins[i].setPosition(888 + 20 + (i - 5) * 40, 470);
    for (let i = 0; i < 9; i++) {
        Pins[i].alpha = 0;
        Pins[i].angle = 0;
    }

    re_init();
}
async function re_init() {
    setTimeout(() => {
        say("");
        if (GameIsOver) return;
        Load.play("next");
    }, 1500);

    setTimeout(() => {
        if (GameIsOver) return;
        for (let i = 0; i < 9; i++) Pins[i].alpha = 1;
        Ball.alpha = 1;
    }, 2000);
    setTimeout(() => {
        if (GameIsOver) return;
        Nb_Pins = rand(10) - 1;
        Waiting_To_Proceed = false;
    }, 3000);
}

function cannot_proceed() {
    UpC++;
    if (UpC == 58) UpC = 0;
    if (UpC != 0) return true; //<< FPS = Updating Every 1 Second

    if (Waiting_To_Proceed) return true; //<< Wait The "Play"...
    if (GameIsOver) return true;

    return false;
}

function game_over() {
    GameIsOver = true;
}

function say(str) {
    MiddleText.setText(str);
}
async function sleep(seconds) {
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
            if (key == "Ball") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 114,
                    frameHeight: 91,
                });
            }
            if (key == "Pin") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 40,
                    frameHeight: 100,
                });
            }
            if (key == "Load") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 255,
                    frameHeight: 225,
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
//function Start_Game() { console.log('------------------->Start_Game'); }
// Re-initialize the game variables
function reInitValues() {
    GameIsOver = false;
    Nb_Pins = 0;
    Pins = [];
    Waiting_To_Proceed = true;
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

function getNoOfBlocks() {
    demoWorkspace = Blockly.getMainWorkspace();
    noOfBlocks = demoWorkspace.getAllBlocks();
    return noOfBlocks.length
}

const updateImports = ["from bowling import *"]

// async function test(){

//     //Pins = Phaser.Math.Between(0, 9);
//     //Nb_Pins = rand(10)-1;

//     //function update() {

//         if (Nb_Pins == 9) {
//             drop_all_pins();
//             await sleep(5);
//             game_over();
//         } else {
//             drop_pins();
//             await sleep(5);
//         }
//     //}

// }

const instruction = {
    "heading": "The game in which a heavy ball is rolled down a long, narrow lane toward the pins, the aim is to knock down as many pins as possible.",
    "steps": [
        {
            "checkbox": true,
            "rescue": false,
            "text": "The following statements should function within the loop",
            "title": "Repeat Forever",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "set pins as Random between 0 and 9",
            "title": "Randomize number of pins falling",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "drop all pins,",
            "title": "if Pins equals 9,",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "wait for 3 sec,",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "End all",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "Drop pins,",
            "title": "else,",
            "workspace": ""
        },
        {
            "checkbox": true,
            "rescue": false,
            "text": "wait for 3 sec",
            "workspace": ""
        }
    ]
};

//============================================================================================
//========================================EXPORT STATEMENTS=========================================
//========================================DO NOT DELETE===================================
export {
    completedFlag,
    myUpdateFunction,
    // helpCode,
    instruction,
    runCode,
    reset_output,
    reInitValues,
    drop_pins,
    game_over,
    sleep,
    drop_all_pins,
    getNoOfBlocks,
    updateImports,
    update,
    preload,
    create,
    gameHeight,
    gameWidth,
    repeat_forever_flag,
    cannot_proceed,
    Nb_Pins
    // Drop random between,
}