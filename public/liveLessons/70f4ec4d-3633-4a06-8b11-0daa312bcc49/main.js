//============================================================================================
//====================================  IMPORT STATEMENTS  ===================================
//======================================= DO NOT DELETE ======================================
import M from 'materialize-css';
import {
    AUTO,
    Game,
} from 'phaser';

import MSPhaserLib from '../msPhaserLib.min';

import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

//============================================================================================
//======================================  CONFIG.JS  =========================================
//============================================================================================

let demoWorkspace = Blockly.getMainWorkspace();
let noOfBlocks;

let _gameThis = null;
const baseURL = "../img/images/70f4ec4d-3633-4a06-8b11-0daa312bcc49";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;
let run_ = true;
let default_ = 0;

//============================================================================================
//======================================  CONSTANT.JS  =======================================
//============================================================================================

const GAME_CONSTANT = {
    images: {
        BG: "Background.png",

    },
    spritesImages: {
        Apple: "Apple.png",
        Monkey: "Monkey.png",
    }
};

//============================================================================================
//================================ SCRIPT2_BLOCKLY.JS ========================================
//============================================================================================
function completedFlag() {
    return GameIsOver; // *===== use this variable name ======*
}

function runCode() {
    // tour_over && tour.complete();
    reset_output();
    run_ = false;
    setTimeout(() => {
        run_ = true;
        window.LoopTrap = 1E3;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var a = "async function c(){" + Blockly.JavaScript.workspaceToCode(demoWorkspace) + "} c();";
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
            eval(a);
        } catch (b) { alert(b) }
        // try {
        //     if (tour.getCurrentStep().options.title.includes("Run")) {
        //         let btns = document.querySelectorAll('.shepherd-button');
        //         btns[btns.length - 1].click();
        //     }
        // } catch { }
    }, 1200);
}

// function helpCode() {
//     var xml_wkspace = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="variable_holder" id="}}6DlW(JY,cA7AKfR0)1" x="0" y="-122"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id=",/`a^]rG%FCYG,2Vu;yg"><field name="NUM">0</field></block></value><next><block type="variable_holder" id=";:($k?l-+!AA@#_N:j|4"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="YrkoVGz94JRD3zi$1hn9"><field name="NUM">2</field></block></value><next><block type="controls_repeat_ext" id="U*`=uf2UgWy=_2at!SI3"><value name="TIMES"><block type="math_number" id="r1iF=-Es+Ru1GND`mw~/"><field name="NUM">12</field></block></value><statement name="DO"><block type="action_block" id="aL[Gz?{t[XNUCYo#x!k)"><next><block type="controls_if" id="Ma[0~-Ko0=/xjoK0}N{["><value name="IF0"><block type="monkey_touch_apple_block" id="8V%Kp}26jur(|pM3J,A8"></block></value><statement name="DO0"><block type="change_variable_holder" id="9CJb/}8xcBF.=d=L_]*_"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="##7(VKg[hdL3_au+aX?U"><field name="NUM">1</field></block></value><next><block type="monkey_grabs_apple" id="`u+L7nH.He{j/YxO%-*S"></block></next></block></statement><next><block type="controls_if" id="^dYhgRv?a[Ko/PqJau#,"><value name="IF0"><block type="apple_touch_ground_block" id="ADJ]AC/L!`@PQfwg^xmz"></block></value><statement name="DO0"><block type="change_variable_holder" id="U4zVard^i#KKM]/C[IZ6"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="$r!_GF%cOf+2#lpnN!jv"><field name="NUM">-1</field></block></value><next><block type="monkey_leaves_tree" id="?rBqFg(?CB01sW/bx(/Z"></block></next></block></statement><next><block type="controls_if" id=";^3z!lEJegGTnk_L.LF="><value name="IF0"><block type="logic_compare" id="]dj@Py3]5#4N};yLbt+E"><field name="OP">LTE</field><value name="A"><block type="variables" id="KTg%o#`s7UaCcDBJd=2y"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="?gMXW56Sul7=6|e^rz7S"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="say_block" id="|jI`0.9S#iC5J+,%f=dX"><field name="say">You lose!</field><next><block type="end_block" id="kD[q5I17+ifPf2LtzV-7"></block></next></block></statement><next><block type="controls_if" id="5stYUV4~~]2nOSB/mocu"><value name="IF0"><block type="logic_compare" id="?2~}9.H%i:29~oM]_J3L"><field name="OP">EQ</field><value name="A"><block type="variables" id="%WJ0d*ad[-e|xlMI%kto"><field name="Options">option1</field></block></value><value name="B"><block type="math_number" id="6i#E{5KZO98(FI$}d11E"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="say_block" id="F/VgLH+cy:?u`{(p6@24"><field name="say">You win!</field><next><block type="end_block" id="DhQIJ{2Fah;LIvH_73A~"></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';
//     var xml = Blockly.Xml.textToDom(xml_wkspace);
//     demoWorkspace.clear();
//     Blockly.Xml.domToWorkspace(xml, demoWorkspace);
// }

const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="variable_holder" id="}}6DlW(JY,cA7AKfR0)1" x="0" y="-122"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id=",/`a^]rG%FCYG,2Vu;yg"><field name="NUM">0</field></block></value><next><block type="variable_holder" id=";:($k?l-+!AA@#_N:j|4"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="YrkoVGz94JRD3zi$1hn9"><field name="NUM">2</field></block></value><next><block type="controls_repeat_ext" id="U*`=uf2UgWy=_2at!SI3"><value name="TIMES"><block type="math_number" id="r1iF=-Es+Ru1GND`mw~/"><field name="NUM">12</field></block></value><statement name="DO"><block type="action_block" id="aL[Gz?{t[XNUCYo#x!k)"><next><block type="controls_if" id="Ma[0~-Ko0=/xjoK0}N{["><value name="IF0"><block type="monkey_touch_apple_block" id="8V%Kp}26jur(|pM3J,A8"></block></value><statement name="DO0"><block type="change_variable_holder" id="9CJb/}8xcBF.=d=L_]*_"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="##7(VKg[hdL3_au+aX?U"><field name="NUM">1</field></block></value><next><block type="monkey_grabs_apple" id="`u+L7nH.He{j/YxO%-*S"></block></next></block></statement><next><block type="controls_if" id="^dYhgRv?a[Ko/PqJau#,"><value name="IF0"><block type="apple_touch_ground_block" id="ADJ]AC/L!`@PQfwg^xmz"></block></value><statement name="DO0"><block type="change_variable_holder" id="U4zVard^i#KKM]/C[IZ6"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="$r!_GF%cOf+2#lpnN!jv"><field name="NUM">-1</field></block></value><next><block type="monkey_leaves_tree" id="?rBqFg(?CB01sW/bx(/Z"></block></next></block></statement><next><block type="controls_if" id=";^3z!lEJegGTnk_L.LF="><value name="IF0"><block type="logic_compare" id="]dj@Py3]5#4N};yLbt+E"><field name="OP">LTE</field><value name="A"><block type="variables" id="KTg%o#`s7UaCcDBJd=2y"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="?gMXW56Sul7=6|e^rz7S"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="say_block" id="|jI`0.9S#iC5J+,%f=dX"><field name="say">You lose!</field><next><block type="end_block" id="kD[q5I17+ifPf2LtzV-7"></block></next></block></statement><next><block type="controls_if" id="5stYUV4~~]2nOSB/mocu"><value name="IF0"><block type="logic_compare" id="?2~}9.H%i:29~oM]_J3L"><field name="OP">EQ</field><value name="A"><block type="variables" id="%WJ0d*ad[-e|xlMI%kto"><field name="Options">option1</field></block></value><value name="B"><block type="math_number" id="6i#E{5KZO98(FI$}d11E"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="say_block" id="F/VgLH+cy:?u`{(p6@24"><field name="say">You win!</field><next><block type="end_block" id="DhQIJ{2Fah;LIvH_73A~"></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from monkey_and_apple import *\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
// demoWorkspace.addChangeListener(myUpdateFunction);

//============================================================================================
//======================================  MAIN.JS  ===========================================
//============================================================================================

let ErrorText;
let ErrorInnerText = "";
let GameIsOver = false;
let Middletext;
let BG;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let Score = 0;
let Nb_Monkeys = 2;
let Nb_Apples = 1;
let Apple_Grabbed = false;
let Apple_On_Ground = false;
let TW_Apple;
let Monkey1;
let Monkey2;
let Apple;
let Monkey_;
//=====================================================================================================================================
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: "#eeeeee",
    parent: "sprite-container",
    canvasStyle: `width: 100%;
    object-fit: revert;
    aspect-ratio: 738 / 436;`,
    scene: { preload: preload, create: create, update: update },
};
let game = new Phaser.Game(config);

function preload() {
    _gameThis = this;
    _gameThis.load.setBaseURL(baseURL);
    loadImages();
}
// Phaser create function
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
    //=====================================================================================================================================
    //============ ADDING GRAPHICS ========================================================================================================
    //=====================================================================================================================================
    Monkey1 = _gameThis.add.sprite(320, 400, "Monkey").setFrame(2);
    Monkey2 = _gameThis.add.sprite(1600, 400, "Monkey").setFrame(2);
    Monkey2.setFlipX(true);

    Apple = _gameThis.add.sprite(-300, -300, "Apple");
    Apple.setInteractive();
    _gameThis.anims.create({
        key: "roll",
        frames: _gameThis.anims.generateFrameNumbers("Apple", {
            frames: [0, 1, 2, 3, 4, 5, 6],
        }),
        frameRate: 8,
        repeat: 1,
    });

    //Apple.useHandCursor=true;
    Apple.on("pointerdown", function (pointer) {
        click_on_apple();
    });

    Middletext = _gameThis.add.text(960, 100, "Score : " + Score.toString(), {
        font: "bold 68px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 12,
    });
    Middletext.setOrigin(0.5, 0.5);

    //   test();
}

function update() { }
//=====================================================================================================================================
//================= WORK SPACE ========================================================================================================
//=====================================================================================================================================
function drop_random_apple() {
    if (run_) {
        Middletext.text = 'Score : ' + Score.toString();
        Apple.y = -300;
        let Apple_Touched = false;
        let offset = 0;
        if (Nb_Monkeys > 1) {
            if (rand(2) > 1) offset = 960; // 2 Monkeys..
        } else {
            if (Monkey1.y > 1000) offset = 960; // Only 1 Monkey..
        }
        Apple.x = rand(3) * 240 + offset;
        let Speed_Apple = 2500 - (rand(5) - 1) * 250;
        TW_Apple = _gameThis.tweens.add({
            targets: Apple,
            y: 1080,
            ease: "Power0",
            duration: Speed_Apple,
            delay: 200,
        });
        // if (run_) return new Promise((resolve) => {
        //     let lolInterval = setInterval(() => {
        //         if (!Apple_Grabbed) {
        //             if (Apple.y > 1000)
        //                 if (Apple.x < 1000) {
        //                     clearInterval(lolInterval);
        //                     resolve(true);
        //                 }
        //             if (Apple.y > 800)
        //                 if (Apple.x > 1000) {
        //                     clearInterval(lolInterval);
        //                     resolve(true);
        //                 }
        //         } else {
        //             clearInterval(lolInterval);
        //             resolve(true);
        //         }
        //     }, 500);
        // });
    }
}

function i_touch_apple() {
    if (run_) {
        if (Apple_Grabbed) return true;
        return false;
    }
}

function click_on_apple() {
    if (Apple_On_Ground) return; //Too Late To Catch Apple..
    TW_Apple.stop();
    if (Apple_Grabbed) return;
    Apple_Grabbed = true;
    if (Apple.y > 1000) return; //Too Late : Reached Ground..

    //if(Apple.x>1000) grab_Apple(Monkey1); else grab_Apple(Monkey2);
}
async function monkey_catches_apple() {
    if (run_) {
        //Remeber Initial Monkey Position :
        let Old_x;
        if (Apple.x < 1000) Old_x = 320;
        else Old_x = 1600;
        if (Apple.x < 1000) Monkey_ = Monkey1;
        else Monkey_ = Monkey2;
        //Monkey Animation (Catching Apple) :
        _gameThis.tweens.add({
            targets: Monkey_,
            x: Apple.x,
            y: Apple.y,
            ease: "Power1",
            duration: 250,
        });
        setTimeout(() => {
            Monkey_.setFrame(1);
            Apple.y = -300;
        }, 300);
        _gameThis.tweens.add({
            targets: Monkey_,
            x: Old_x,
            y: 400,
            ease: "Power1",
            duration: 250,
            delay: 350,
        });

        setTimeout(() => {
            Monkey_.setFrame(2);
        }, 1000);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }
}

async function wait_for_event() {
    if (run_) {
        Apple_Grabbed = false;
        Apple_On_Ground = false;
        for (let i = 0; i <= 12; i++) {
            await sleep(0.5);
            if (Apple_Grabbed) return;
            //!! 2 choices..
            if (Apple.y > 1000)
                if (Apple.x < 1000) {
                    Apple_On_Ground = true;
                    if (run_) return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(true);
                        }, 500);
                    });
                }
            if (Apple.y > 800)
                if (Apple.x > 1000) {
                    Apple_On_Ground = true;
                    if (run_) return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(true);
                        }, 500);
                    });
                }
        }
        if (run_) return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 5000);
        });
    }
}


function apple_touches_ground() {
    if (run_) {
        Middletext.text = 'Score : ' + Score.toString();
        //1sec
        if (Apple_On_Ground) {
            Apple.play("roll");
            setTimeout(() => {
                Apple.y = -300;
            }, 1000);
            return true;
        }
        return false;
    }
}


async function a_monkey_leaves_the_tree() {
    if (run_) {
        if (Apple.x < 1000) Monkey_ = Monkey1;
        else Monkey_ = Monkey2;
        setTimeout(() => {
            Monkey_.setFrame(0);
        }, 500);
        _gameThis.tweens.add({
            targets: Monkey_,
            y: 1500,
            ease: "Power1",
            duration: 1000,
            delay: 500,
        });
        // Nb_Monkeys -= 1;
        if (run_) return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }
}
//=====================================================================================================================================
//=====================================================================================================================================
function game_over() {
    if (run_)
        GameIsOver = true;
}
async function sleep(seconds) {
    if (run_) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, seconds * 1000);
        });
    }
}

function say(str) {
    if (run_)
        Middletext.setText(str);
}

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
            if (key == "Apple") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 274,
                    frameHeight: 262,
                });
            }
            if (key == "Monkey") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 323,
                    frameHeight: 390,
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

function reset_output() {
    reInitValues();
    _gameThis.scene.restart();
}

function Start_Game() {
    console.log("------------------->Start_Game");
}

function reInitValues() {
    run_ = false;
    GameIsOver = false;
    Nb_Monkeys = 2;
    Score = 0;
    Nb_Apples = 1;
    Apple_Grabbed = false;
    Apple_On_Ground = false;
}
//=====================================================================================================================================
//=====================================================================================================================================
function rand(a) {
    return Math.floor(Math.random() * a) + 1;
}

async function test() {
    // for (Nb_Apples = 1; Nb_Apples <= 10; Nb_Apples++) {
    //     console.log(Apple_Grabbed, "= Apple_Grabbed");
    //     console.log(Apple_On_Ground, "= Apple_On_Ground");
    //     drop_random_apple();
    //     await wait_for_event(); // waits for touch apple or apple touches ground
    //     //await sleep(3);
    //     if (i_touch_apple()) {
    //         Score += 1;
    //         Middletext.text = "Score : " + Score.toString();
    //         await monkey_catches_apple();
    //     }
    //     if (apple_touches_ground()) {
    //         Nb_Monkeys -= 1;
    //         await a_monkey_leaves_the_tree();
    //     }
    //     if (Nb_Monkeys <= 0) {
    //         say("You lose!");
    //         break;
    //     }
    // }
    // if (Score >= 10) {
    //     say("You win!");
    // }

    Score = 0;
    for (var count = 0; count < 12; count++) {
        console.log("started new loop\ncount:", count)
        console.log("dropped apple n waiting")
        await drop_random_apple();
        await wait_for_event();
        console.log("finished waiting");
    }

    // Score = 0;
    // for (var count = 0; count < 12; count++) {
    //     console.log("started new loop\ncount:", count)
    //     await drop_random_apple();
    //     console.log("dropped apple n waiting")
    //     await wait_for_event();
    //     console.log("finished waiting");
    //     // if (i_touch_apple()) {
    //     //     Score += 1;
    //     //     await monkey_catches_apple();
    //     //     console.log(" caught apple")

    //     // }
    //     // if (apple_touches_ground()) {
    //     //     await a_monkey_leaves_the_tree();
    //     //     console.log(" left tree apple")

    //     // }
    //     if (Nb_Monkeys <= 0) {
    //         say("You lose!");
    //         game_over();
    //         break;
    //     }
    //     if (Score == 10) {
    //         say("You win!");
    //         game_over();
    //         break;
    //     }
    //     console.log("end of loop")

    // }
}

function getNoOfBlocks() {
    demoWorkspace = Blockly.getMainWorkspace();
    noOfBlocks = demoWorkspace.getAllBlocks();
    return noOfBlocks.length
}

const updateImports = ["from monkey_and_apple import *"];

const instruction = {
    "heading": "Apples fall from the tree. Help the monkeys catch them. If the apple falls on the ground, the monkey becomes angry and leaves. Grab atleast 10 apples to win the game",
    "steps": [
        {
            "checkbox": true,
            "rescue": true,
            "text": "set score as 0, set Monkeys as 2",
            "title": "Initialize Variables",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "Repeat 12 times, The following statements should function within the loop",
            "title": "Let 12 apples fall",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "Drop random apple and wait for touch event",
            "title": "Drop apple",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value><statement name=\"DO\"><block type=\"action_block\" id=\"aL[Gz?{t[XNUCYo#x!k)\"></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "If I touch apple, change score by 1, Monkey catches Apple",
            "title": "Catch the apple",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value><statement name=\"DO\"><block type=\"action_block\" id=\"aL[Gz?{t[XNUCYo#x!k)\"><next><block type=\"controls_if\" id=\"Ma[0~-Ko0=/xjoK0}N{[\"><value name=\"IF0\"><block type=\"monkey_touch_apple_block\" id=\"8V%Kp}26jur(|pM3J,A8\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"9CJb/}8xcBF.=d=L_]*_\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"##7(VKg[hdL3_au+aX?U\"><field name=\"NUM\">1</field></block></value><next><block type=\"monkey_grabs_apple\" id=\"`u+L7nH.He{j/YxO%-*S\"></block></next></block></statement></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "If apple touches the ground, change Monkeys by -1, A monkey leaves the tree",
            "title": "Apple falls",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value><statement name=\"DO\"><block type=\"action_block\" id=\"aL[Gz?{t[XNUCYo#x!k)\"><next><block type=\"controls_if\" id=\"Ma[0~-Ko0=/xjoK0}N{[\"><value name=\"IF0\"><block type=\"monkey_touch_apple_block\" id=\"8V%Kp}26jur(|pM3J,A8\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"9CJb/}8xcBF.=d=L_]*_\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"##7(VKg[hdL3_au+aX?U\"><field name=\"NUM\">1</field></block></value><next><block type=\"monkey_grabs_apple\" id=\"`u+L7nH.He{j/YxO%-*S\"></block></next></block></statement><next><block type=\"controls_if\" id=\"^dYhgRv?a[Ko/PqJau#,\"><value name=\"IF0\"><block type=\"apple_touch_ground_block\" id=\"ADJ]AC/L!`@PQfwg^xmz\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"U4zVard^i#KKM]/C[IZ6\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"$r!_GF%cOf+2#lpnN!jv\"><field name=\"NUM\">-1</field></block></value><next><block type=\"monkey_leaves_tree\" id=\"?rBqFg(?CB01sW/bx(/Z\"></block></next></block></statement></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "if Monkeys is less than or equal to 0, say \"You lose!\", End all",
            "title": "Lose Game",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value><statement name=\"DO\"><block type=\"action_block\" id=\"aL[Gz?{t[XNUCYo#x!k)\"><next><block type=\"controls_if\" id=\"Ma[0~-Ko0=/xjoK0}N{[\"><value name=\"IF0\"><block type=\"monkey_touch_apple_block\" id=\"8V%Kp}26jur(|pM3J,A8\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"9CJb/}8xcBF.=d=L_]*_\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"##7(VKg[hdL3_au+aX?U\"><field name=\"NUM\">1</field></block></value><next><block type=\"monkey_grabs_apple\" id=\"`u+L7nH.He{j/YxO%-*S\"></block></next></block></statement><next><block type=\"controls_if\" id=\"^dYhgRv?a[Ko/PqJau#,\"><value name=\"IF0\"><block type=\"apple_touch_ground_block\" id=\"ADJ]AC/L!`@PQfwg^xmz\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"U4zVard^i#KKM]/C[IZ6\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"$r!_GF%cOf+2#lpnN!jv\"><field name=\"NUM\">-1</field></block></value><next><block type=\"monkey_leaves_tree\" id=\"?rBqFg(?CB01sW/bx(/Z\"></block></next></block></statement><next><block type=\"controls_if\" id=\";^3z!lEJegGTnk_L.LF=\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"]dj@Py3]5#4N};yLbt+E\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables\" id=\"KTg%o#`s7UaCcDBJd=2y\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"?gMXW56Sul7=6|e^rz7S\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"|jI`0.9S#iC5J+,%f=dX\"><field name=\"say\">You lose!</field><next><block type=\"end_block\" id=\"kD[q5I17+ifPf2LtzV-7\"></block></next></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "if Score is greater than or equal to 10, say \"You Win!\", End all",
            "title": "Win Game",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"variable_holder\" id=\"}}6DlW(JY,cA7AKfR0)1\" x=\"0\" y=\"-122\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\",/`a^]rG%FCYG,2Vu;yg\"><field name=\"NUM\">0</field></block></value><next><block type=\"variable_holder\" id=\";:($k?l-+!AA@#_N:j|4\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"YrkoVGz94JRD3zi$1hn9\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_repeat_ext\" id=\"U*`=uf2UgWy=_2at!SI3\"><value name=\"TIMES\"><block type=\"math_number\" id=\"r1iF=-Es+Ru1GND`mw~/\"><field name=\"NUM\">12</field></block></value><statement name=\"DO\"><block type=\"action_block\" id=\"aL[Gz?{t[XNUCYo#x!k)\"><next><block type=\"controls_if\" id=\"Ma[0~-Ko0=/xjoK0}N{[\"><value name=\"IF0\"><block type=\"monkey_touch_apple_block\" id=\"8V%Kp}26jur(|pM3J,A8\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"9CJb/}8xcBF.=d=L_]*_\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"##7(VKg[hdL3_au+aX?U\"><field name=\"NUM\">1</field></block></value><next><block type=\"monkey_grabs_apple\" id=\"`u+L7nH.He{j/YxO%-*S\"></block></next></block></statement><next><block type=\"controls_if\" id=\"^dYhgRv?a[Ko/PqJau#,\"><value name=\"IF0\"><block type=\"apple_touch_ground_block\" id=\"ADJ]AC/L!`@PQfwg^xmz\"></block></value><statement name=\"DO0\"><block type=\"change_variable_holder\" id=\"U4zVard^i#KKM]/C[IZ6\"><field name=\"Variable name\">op2</field><value name=\"NAME\"><block type=\"math_number\" id=\"$r!_GF%cOf+2#lpnN!jv\"><field name=\"NUM\">-1</field></block></value><next><block type=\"monkey_leaves_tree\" id=\"?rBqFg(?CB01sW/bx(/Z\"></block></next></block></statement><next><block type=\"controls_if\" id=\";^3z!lEJegGTnk_L.LF=\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"]dj@Py3]5#4N};yLbt+E\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables\" id=\"KTg%o#`s7UaCcDBJd=2y\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"?gMXW56Sul7=6|e^rz7S\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"|jI`0.9S#iC5J+,%f=dX\"><field name=\"say\">You lose!</field><next><block type=\"end_block\" id=\"kD[q5I17+ifPf2LtzV-7\"></block></next></block></statement><next><block type=\"controls_if\" id=\"5stYUV4~~]2nOSB/mocu\"><value name=\"IF0\"><block type=\"logic_compare\" id=\"?2~}9.H%i:29~oM]_J3L\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"%WJ0d*ad[-e|xlMI%kto\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"6i#E{5KZO98(FI$}d11E\"><field name=\"NUM\">10</field></block></value></block></value><statement name=\"DO0\"><block type=\"say_block\" id=\"F/VgLH+cy:?u`{(p6@24\"><field name=\"say\">You win!</field><next><block type=\"end_block\" id=\"DhQIJ{2Fah;LIvH_73A~\"></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": null,
            "rescue": null,
            "text": "When the apple falls, touch it quickly before it falls on the ground to gain a point. Gain atlease 10 points to win. On the other hand, if the apple falls on the ground, a monkey leaves. There are only 2 monkeys, so if 2 apples fall on the ground, its game over and you lose.",
            "title": "Instructions to play the game:",
            "workspace": null
        }
    ]
};


//============================================================================================
//====================================  EXPORT STATEMENTS  ===================================
//======================================  DO NOT DELETE  =====================================
export {
    completedFlag,
    myUpdateFunction,
    // helpCode,
    instruction,
    runCode,
    reset_output,
    reInitValues,
    apple_touches_ground,
    i_touch_apple,
    a_monkey_leaves_the_tree,
    monkey_catches_apple,
    game_over,
    say,
    drop_random_apple,
    wait_for_event,
    Score,
    Nb_Monkeys,
    getNoOfBlocks,
    updateImports
}