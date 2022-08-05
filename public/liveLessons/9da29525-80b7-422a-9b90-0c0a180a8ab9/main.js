//============================================================================================
//====================================  IMPORT STATEMENTS  ===================================
//======================================= DO NOT DELETE ======================================
// import M from 'materialize-css';
// import {
//     AUTO,
//     Game,
// } from 'phaser';

// import MSPhaserLib from '../msPhaserLib.min';
//============================================================================================
//======================================  CONFIG.JS  =========================================
//============================================================================================
let _gameThis = null;
const baseURL = "assets";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;
let CupsX = [];
let OldScore = 0;
let run_ = true;
//============================================================================================
//======================================  CONSTANT.JS  =======================================
//============================================================================================
const GAME_CONSTANT = {
    images: {
        BG: "gameAssets/Background.png",
        Cup: "gameAssets/Cup.png",
    },
    spritesImages: {
        ThreeCups: "gameAssets/ThreeCups.png",
    },
};
const ERROR_MESSAGE = "";
const CORRECT_MESSAGE = "";
//============================================================================================
//================================ SCRIPT2_BLOCKLY.JS ========================================
//============================================================================================
function completedFlag() {
    return Score >= WinScore; // *===== use this variable name ======*
}

function runCode() {
    tour_over && tour.complete();
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
        try {
            if (tour.getCurrentStep().options.title.includes("Run")) {
                let btns = document.querySelectorAll('.shepherd-button');
                btns[btns.length - 1].click();
            }
        } catch {}
    }, 1200);
}

function helpCode() {
    // tour.isActive() || tour.start()
    var xml_wkspace = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id=":*7T$($KO*URi~gRtijy" x="0" y="-131"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="bhAim%sDc^p{~,;B}FZN"><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="6olMd8U(cB;!PTx/MDSh"><field name="Variable name">WinScore</field><value name="NAME"><block type="math_number" id="{zRDL0a-CM@JsI9sE7CQ"><field name="NUM">3</field></block></value><next><block type="controls_whileUntil" id="3*g]8WX.@G){7}_V*qw#"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare" id="JG4WJBc.}X.If`yIU]*C"><field name="OP">LT</field><value name="A"><block type="variable_holder" id="ZE0cOL/B?6/{zg.Kwoe^"><field name="Options">Score</field></block></value><value name="B"><block type="variable_holder" id="Pi}Yp3~w$ag^FOl]`3LO"><field name="Options">WinScore</field></block></value></block></value><statement name="DO"><block type="action_block" id="hPUXk6*_[_J~7-FDH#xP"><next><block type="say_block" id="e%RWYz4zNCyD}TfiLY1t"><field name="NAME">Pick one cup</field><next><block type="wait_block" id="CXXz6K}9=:Q2^jW;eg?M"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="}SEG-PtV30/tCw$YCRP?"><field name="NUM">3</field></block></value><next><block type="controls_if" id="MogcDiS-ZBM})KebC8.Q"><mutation elseif="2" else="1"></mutation><value name="IF0"><block type="pointertouch__block" id="b}XCzwK+{9aI+~a*:}?L"><field name="options2">Cup1</field></block></value><statement name="DO0"><block type="controls_if" id="Y9T7BfmCEYVE*4R8B~LJ"><value name="IF0"><block type="sprite_locationblock" id="y:8jVsrPW%CsUoD[()Hp"><field name="options1">Ball</field><field name="options2">Cup1</field></block></value><statement name="DO0"><block type="change_variable_holder" id="iunv4ckm!;Z=cI.iE*C5"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="IjFtf345xIT`ak~=bW/m"><field name="NUM">1</field></block></value></block></statement></block></statement><value name="IF1"><block type="pointertouch__block" id="^-[}]|tqJH*}t2#nZ]5J"><field name="options2">Cup2</field></block></value><statement name="DO1"><block type="controls_if" id="%Y.?`Ch|ynE:vPIc|Hq0"><value name="IF0"><block type="sprite_locationblock" id="q9}9A7#eD!rK=SrPfcqx"><field name="options1">Ball</field><field name="options2">Cup2</field></block></value><statement name="DO0"><block type="change_variable_holder" id="qAnGXkXkhhoIASyjRBWS"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id=")@w#H*yZBLs2vctXccvW"><field name="NUM">1</field></block></value></block></statement></block></statement><value name="IF2"><block type="pointertouch__block" id="Zrm*IaS0rGm;Q`)W6*x^"><field name="options2">Cup3</field></block></value><statement name="DO2"><block type="controls_if" id="kHr?|ZBULkin)gb:m[`c"><value name="IF0"><block type="sprite_locationblock" id="@WEN~jT|)t0*{88v+`xY"><field name="options1">Ball</field><field name="options2">Cup3</field></block></value><statement name="DO0"><block type="change_variable_holder" id="Vb@P(kLDOpj-t7JtKrUX"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="DHDZ[XU7@BVKVeqH_KM]"><field name="NUM">1</field></block></value></block></statement></block></statement><statement name="ELSE"><block type="say_block" id="`CKf:wZ55_wTz.[P0_dM"><field name="NAME">You haven\'t selected a cup</field><next><block type="wait_block" id="m+7%TISi@L43Q[r:6?]m"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="eW7yoOiLb6mP1sj.-YI7"><field name="NUM">2</field></block></value><next><block type="say_block" id="I5]x`ZXleCVqJ|W?z_Z?"><field name="NAME">Try Again</field></block></next></block></next></block></statement><next><block type="wait_block" id="zC~;bO{uV{.El}RT%R;`"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="JP0oGh6e[]J$$]T16KD7"><field name="NUM">2</field></block></value></block></next></block></next></block></next></block></next></block></statement><next><block type="say_block" id="34vuCO-x(.kX(2}zy*u-"><field name="NAME">You Win!</field></block></next></block></next></block></next></block></xml>';
    var xml = Blockly.Xml.textToDom(xml_wkspace);
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(xml, demoWorkspace);
}

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from cup_shuffle import *\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
demoWorkspace.addChangeListener(myUpdateFunction);
//============================================================================================
//======================================  MAIN.JS  ===========================================
//============================================================================================
let ErrorText;
let ErrorInnerText = "";
let GameIsOver = false;
let MiddleText;
let BG;
//================= GAME VARIABLES ============================================================
//=============================================================================================
let Score = 0;
let WinScore = 3;
let ThreeCups;
let Cup1;
let Cup2;
let Cup3;
let Cup_Touched = 0;
let Ball_In_Cup = 0;
//=============================================================================================
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
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
    BG = this.add.image(gameWidth / 2, gameHeight / 2, "BG").setName("BG");
    _gameThis["BG"] = BG;
    ErrorText = _gameThis.add.text(0, 0, "Error...", {
        font: "bold 36px Arial",
        fill: "#ff0000",
    });
    ErrorText.setPosition(10, ErrorText.displayHeight * 0.75);
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);
    //===============================================================================================
    //================ ADDING GRAPHICS ==============================================================
    //===============================================================================================
    ThreeCups = _gameThis.add.sprite(960, 540, "ThreeCups").setScale(5, 5); //Ball.alpha=0;
    Cup1 = _gameThis.add.image(450, 760, "Cup").setScale(0.85, 0.85);
    Cup1.alpha = 0;
    Cup1.setInteractive();
    Cup2 = _gameThis.add.image(960, 760, "Cup").setScale(0.85, 0.85);
    Cup2.alpha = 0;
    Cup2.setInteractive();
    Cup3 = _gameThis.add.image(1470, 760, "Cup").setScale(0.85, 0.85);
    Cup3.alpha = 0;
    Cup3.setInteractive();

    CupsX = [Cup1.x, Cup2.x, Cup3.x];
    Cup1.on("pointerdown", function() {
        touch_Cup(Cup1, 1);
    });
    Cup2.on("pointerdown", function() {
        touch_Cup(Cup2, 2);
    });
    Cup3.on("pointerdown", function() {
        touch_Cup(Cup3, 3);
    });

    function touch_Cup(thecup, n) {
        Cup_Touched = n;
        show(thecup);
    }

    _gameThis.anims.create({
        key: "shuffle",
        frames: _gameThis.anims.generateFrameNumbers("ThreeCups", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        }),
        frameRate: 8,
        repeat: 0,
    });

    Ball_In_Cup = rand(3);
    console.log("Ball_In_Cup", Ball_In_Cup);

    MiddleText = _gameThis.add.text(gameWidth / 2, 250, "", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    });
    MiddleText.setOrigin(0.5, 0.5);
    ScoreText = _gameThis.add.text(1500, 100, "Score : " + Score.toString(), {
        font: "bold 68px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 12,
    });
    ScoreText.setOrigin(0.5, 0.5);

    if (Ball_In_Cup == 1) {
        Cup1.setData({ hasball: true });
    }
    if (Ball_In_Cup == 2) {
        Cup2.setData({ hasball: true });
    }
    if (Ball_In_Cup == 3) {
        Cup3.setData({ hasball: true });
    }

    // console.log('show correct ball place')
    let myIndex;
    if (Ball_is_in_cup1()) {
        myIndex = CupsX.indexOf(Cup1.x) + 1;
    }
    if (Ball_is_in_cup2()) {
        myIndex = CupsX.indexOf(Cup2.x) + 1;
    }
    if (Ball_is_in_cup3()) {
        myIndex = CupsX.indexOf(Cup3.x) + 1;
    }
    // console.log('--------> pos',myIndex)
    if (myIndex == 1) {
        ThreeCups.setFrame(9 + 3);
    }
    if (myIndex == 2) {
        ThreeCups.setFrame(10 + 3);
    }
    if (myIndex == 3) {
        ThreeCups.setFrame(11 + 3);
    }

    // test();
    //===============================================================================================
    //=========== THE UPDATE CODE ===================================================================
} //==============================================================================================
async function update() {}

function showBall() {
    console.log("show correct ball place");
    let myIndex;
    if (Ball_is_in_cup1()) {
        myIndex = CupsX.indexOf(Cup1.x) + 1;
    }
    if (Ball_is_in_cup2()) {
        myIndex = CupsX.indexOf(Cup2.x) + 1;
    }
    if (Ball_is_in_cup3()) {
        myIndex = CupsX.indexOf(Cup3.x) + 1;
    }
    console.log("--------> pos", myIndex);
    if (myIndex == 1) {
        ThreeCups.setFrame(9 + 3);
    }
    if (myIndex == 2) {
        ThreeCups.setFrame(10 + 3);
    }
    if (myIndex == 3) {
        ThreeCups.setFrame(11 + 3);
    }
}
//===============================================================================================
//================ NEW METHODS ==================================================================
//===============================================================================================
async function shuffle() {
    console.log("scores old,new:", OldScore, Score)
    if (run_) {
        if (OldScore == Score) {
            console.log("SHUFFLE IF")
            if (run_) setTimeout(() => { showBall(); }, 100);
            if (run_) setTimeout(() => {
                say("Shuffling...");
            }, 1500);
            Cup_Touched = 0;

            if (run_) setTimeout(() => {
                ThreeCups.alpha = 0;
                Cup1.alpha = 1;
                Cup2.alpha = 1;
                Cup3.alpha = 1;
                Animethreecups();
            }, 2000);

            if (run_) return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 4000);
            });

        } else {
            console.log("SHUFFLE ELSE")
            if (run_) setTimeout(() => {
                say("Shuffling...");
            }, 100);
            Cup_Touched = 0;

            if (run_) setTimeout(() => {
                ThreeCups.alpha = 0;
                Cup1.alpha = 1;
                Cup2.alpha = 1;
                Cup3.alpha = 1;
                Animethreecups();
            }, 600);
            OldScore = Score;

            if (run_) return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 4000);
            });
        }
    }
}

function i_touch_cup1() {
    ThreeCups.alpha = 1;
    Cup1.alpha = 0;
    Cup2.alpha = 0;
    Cup3.alpha = 0;

    if (Cup_Touched == 0) return false;

    let myIndex = CupsX.indexOf(Cup1.x);
    //console.log('myIndex',myIndex)
    say("Trying Cup " + (myIndex + 1));
    if (!Cup1.getData("hasball")) {
        if (myIndex == 0) {
            ThreeCups.setFrame(9);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11);
        }
    } else {
        if (myIndex == 0) {
            ThreeCups.setFrame(9 + 3);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10 + 3);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11 + 3);
        }
    }

    setTimeout(() => {
        say("");
        ScoreText.text = "Score : " + Score.toString();
        ThreeCups.setFrame(0);
    }, 2000);
    if (Cup_Touched != 1) return false;
    return true;
}

function i_touch_cup2() {
    ThreeCups.alpha = 1;
    Cup1.alpha = 0;
    Cup2.alpha = 0;
    Cup3.alpha = 0;

    if (Cup_Touched == 0) return false;
    let myIndex = CupsX.indexOf(Cup2.x);
    say("Trying Cup " + (myIndex + 1));
    //console.log('myIndex',myIndex)
    if (!Cup2.getData("hasball")) {
        if (myIndex == 0) {
            ThreeCups.setFrame(9);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11);
        }
    } else {
        if (myIndex == 0) {
            ThreeCups.setFrame(9 + 3);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10 + 3);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11 + 3);
        }
    }
    setTimeout(() => {
        say("");
        ScoreText.text = "Score : " + Score.toString();
        ThreeCups.setFrame(0);
    }, 2000);
    if (Cup_Touched != 2) return false;
    return true;
}

function i_touch_cup3() {
    ThreeCups.alpha = 1;
    Cup1.alpha = 0;
    Cup2.alpha = 0;
    Cup3.alpha = 0;

    if (Cup_Touched == 0) return false;
    let myIndex = CupsX.indexOf(Cup3.x);
    say("Trying Cup " + (myIndex + 1));
    //console.log('myIndex',myIndex)
    if (!Cup3.getData("hasball")) {
        if (myIndex == 0) {
            ThreeCups.setFrame(9);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11);
        }
    } else {
        if (myIndex == 0) {
            ThreeCups.setFrame(9 + 3);
        }
        if (myIndex == 1) {
            ThreeCups.setFrame(10 + 3);
        }
        if (myIndex == 2) {
            ThreeCups.setFrame(11 + 3);
        }
    }
    setTimeout(() => {
        say("");
        ScoreText.text = "Score : " + Score.toString();
        ThreeCups.setFrame(0);
    }, 2000);
    if (Cup_Touched != 3) return false;
    return true;
}

function Ball_is_in_cup1() {
    if (Cup1.getData("hasball")) return true;
    return false;
}

function Ball_is_in_cup2() {
    if (Cup2.getData("hasball")) return true;
    return false;
}

function Ball_is_in_cup3() {
    if (Cup3.getData("hasball")) return true;
    return false;
}

function game_over() {
    GameIsOver = true;
}

function say(str) {
    if (run_)
        MiddleText.setText(str);
    if (run_) return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 300);
    });
}
async function sleep(seconds) {
    if (run_)
        console.log("Start to sleep: ", seconds)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Finished sleep")
            resolve(true);
        }, seconds * 1000);
    });
}

function input_from_user(txt) {
    return prompt(txt, "Enter Tattoo Here");
}
//===============================================================================================
//===============================================================================================
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
            if (key == "ThreeCups") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 384,
                    frameHeight: 216,
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

function reInitValues() {
    // run = true;
    Score = 0;
    WinScore = 0;
    Cup_Touched = 0;
    Ball_In_Cup = 0;
    OldScore = -1;
    Cup1.setData({ hasball: false });
    Cup2.setData({ hasball: false });
    Cup3.setData({ hasball: false });
}

function reset_output() {
    run_ = false;
    reInitValues();
    _gameThis.scene.restart();
}
//================================================================================================
//================================================================================================
function rand(a) {
    return Math.floor(Math.random() * a) + 1;
}

function show(Object_) {
    _gameThis.tweens.add({
        targets: Object_,
        scaleX: 1.3,
        scaleY: 1.3,
        ease: "Power1",
        duration: 100,
        delay: 250,
    });
    _gameThis.tweens.add({
        targets: Object_,
        scaleX: 0.85,
        scaleY: 0.85,
        ease: "Power1",
        duration: 100,
        delay: 350,
    });
}

function Animethreecups() {
    let A = [Cup3.x, Cup2.x, Cup1.x];

    _gameThis.tweens.add({
        targets: Cup1,
        x: A[0],
        ease: "Power1",
        duration: 500,
    });
    _gameThis.tweens.add({
        targets: Cup2,
        x: A[1],
        ease: "Power1",
        duration: 500,
    });
    _gameThis.tweens.add({
        targets: Cup3,
        x: A[2],
        ease: "Power1",
        duration: 500,
    });

    A = shuffleA(A);

    _gameThis.tweens.add({
        targets: Cup1,
        x: A[0],
        ease: "Power1",
        duration: 500,
        delay: 525,
    });
    _gameThis.tweens.add({
        targets: Cup2,
        x: A[1],
        ease: "Power1",
        duration: 500,
        delay: 525,
    });
    _gameThis.tweens.add({
        targets: Cup3,
        x: A[2],
        ease: "Power1",
        duration: 500,
        delay: 525,
    });

    A = shuffleA(A);

    _gameThis.tweens.add({
        targets: Cup1,
        x: A[0],
        ease: "Power1",
        duration: 500,
        delay: 1050,
    });
    _gameThis.tweens.add({
        targets: Cup2,
        x: A[1],
        ease: "Power1",
        duration: 500,
        delay: 1050,
    });
    _gameThis.tweens.add({
        targets: Cup3,
        x: A[2],
        ease: "Power1",
        duration: 500,
        delay: 1050,
    });
}

async function test() {
    while (Score < WinScore) {
        console.log("running");
        // await sleep(4);
        await shuffle();
        // await sleep(3);
        say("Pick One Cup...");
        await sleep(3);
        OldScore = Score;
        if (i_touch_cup1()) {
            if (Ball_is_in_cup1()) {
                Score += 1;
            }
        } else if (i_touch_cup2()) {
            if (Ball_is_in_cup2()) {
                Score += 1;
            }
        } else if (i_touch_cup3()) {
            if (Ball_is_in_cup3()) {
                Score += 1;
            }
        } else {
            say("You haven't selected a cup !");
            await sleep(2);
        }
    }
}

function shuffleA(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

//============================================================================================
//====================================  EXPORT STATEMENTS  ===================================
//======================================  DO NOT DELETE  =====================================
// export {
//     completedFlag,
//     myUpdateFunction,
//     helpCode,
//     runCode,
//     reset_output,
//     reInitValues,
//     showBall,
//     sleep,
//     say,
//     Ball_is_in_cup3,
//     Ball_is_in_cup2,
//     Ball_is_in_cup1,
//     shuffle,
//     default_,
//     Score,
//     WinScore,
// }