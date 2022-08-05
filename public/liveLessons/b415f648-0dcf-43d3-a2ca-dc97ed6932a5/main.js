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
        BG: "gameAssets/Background.png",
        Hole: "gameAssets/Hole.png",
        Arrow: "gameAssets/Arrow.png",
    },
    spritesImages: {
        Snake: "gameAssets/Snake.png",
        Preys: "gameAssets/Preys.png",
        Tongue: "gameAssets/Tongue.png",
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
    window.LoopTrap = 1e3;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var a =
        "async function c(){" +
        Blockly.JavaScript.workspaceToCode(demoWorkspace) +
        "} c();";
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(a);
        repeat_forever_flag = false;
        setTimeout(() => {
            eval(a);
            repeat_forever_flag = true;
        }, 2000);
    } catch (b) {
        alert(b);
    }
    try {
        if (tour.getCurrentStep().options.title === "Run and see what happens") {
            let btns = document.querySelectorAll(".shepherd-button");
            btns[btns.length - 1].click();
        }
    } catch { }
}

// function helpCode() { tour.isActive() || tour.start() }

function helpCode() {
    var xml_wkspace =
        '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="y#_AVAJ2#=2wfALuo,qG" x="12" y="-3"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="ICdzAk4(r}c3zfP@fz1u"><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="{fK76Y(=?42jS]4jZD#b"><field name="Variable name">timer</field><value name="NAME"><block type="math_number" id="oiH|d.p7Kh$As|lPO|:~"><field name="NUM">30</field></block></value><next><block type="reduce_timer_block" id="^8bFn;z~]IM44!Tcl(Nn"><next><block type="forever_repeat_block" id="=,{`@E{-dNG-M`e{l7UY"><statement name="NAME"><block type="controls_if" id="zl1bEbR[4mE`dERwrc?J"><mutation elseif="3"></mutation><value name="IF0"><block type="key_sensing" id="t;)2So%4$m%Fy*}xju_j"><field name="NAME">option1</field></block></value><statement name="DO0"><block type="move_block" id="?U5[fHd|M:Nr%CF2l%lm"><field name="NAME">left</field></block></statement><value name="IF1"><block type="key_sensing" id="R@1fg,Q$gEpH_Av^ia:j"><field name="NAME">option2</field></block></value><statement name="DO1"><block type="move_block" id="EZ5J%^AXn+OYmg[Sw4MN"><field name="NAME">right</field></block></statement><value name="IF2"><block type="key_sensing" id=")X{2WDA~[7GEd@5kTeZ,"><field name="NAME">option3</field></block></value><statement name="DO2"><block type="move_block" id="mxPy.UFMe@038}0(_i1C"><field name="NAME">up</field></block></statement><value name="IF3"><block type="key_sensing" id="r$77:9_Y(ixE1)Fq;pDG"><field name="NAME">option4</field></block></value><statement name="DO3"><block type="move_block" id="f:sETHjnD)NUVozs+W^*"><field name="NAME">down</field></block></statement><next><block type="controls_if" id="h(Uxd/@w0//4$0)vGz9p"><value name="IF0"><block type="snake_touches_food_block" id="zZ]aJh-.nZUirOvi|ys8"></block></value><statement name="DO0"><block type="change_variable_holder" id="v5Wv^q:[.fMn,66QJlVk"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="2g3BJ^}!2mL_IM+`7Bf2"><field name="NUM">1</field></block></value><next><block type="change_variable_holder" id="gjU;`Mrj.@UWCF7RG{vK"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="!mJrlS#~@7Q#OoN1Y^zD"><field name="NUM">10</field></block></value><next><block type="hide_block" id="Rm*b03xESP`=X2*!pWQ["><field name="NAME">option2</field><next><block type="appear_food_block" id="_-:=!w@5%s(V=bEo7I`R"><next><block type="show_score_block" id="^aCC/x1k3YB+=K{RS=T%"></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_if" id="[/i^lwo+_|NyhN;:Bic]"><value name="IF0"><block type="logic_compare" id="t.q#v3=,8HmA!O_BH33C"><field name="OP">GTE</field><value name="A"><block type="variables" id=":@L[,lv=pqm)ay$*N2nB"><field name="Options">option1</field></block></value><value name="B"><block type="math_number" id="SowM]B_q)g0xMzMiO*%-"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="win_game_block" id="w=Kgy:f#9wfoea?1@rn?"></block></statement><next><block type="controls_if" id="MyZEU?KxL^o5@{nbH_(e"><value name="IF0"><block type="logic_compare" id="+Gin+wk@PoQ.s$,dsOkZ"><field name="OP">LTE</field><value name="A"><block type="variables" id="0EA$LaSr5r[;WhMnbh$O"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="XYFSL%|@YIykp%TMkk5h"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="lose_game_block" id="=PSLhx96NQIxE(RV?CQV"></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>';
    var xml = Blockly.Xml.textToDom(xml_wkspace);
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(xml, demoWorkspace);
}

// const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="y#_AVAJ2#=2wfALuo,qG" x="12" y="-3"><field name="Variable name">Score</field><value name="NAME"><block type="math_number" id="ICdzAk4(r}c3zfP@fz1u"><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="{fK76Y(=?42jS]4jZD#b"><field name="Variable name">timer</field><value name="NAME"><block type="math_number" id="oiH|d.p7Kh$As|lPO|:~"><field name="NUM">30</field></block></value><next><block type="reduce_timer_block" id="^8bFn;z~]IM44!Tcl(Nn"><next><block type="forever_repeat_block" id="=,{`@E{-dNG-M`e{l7UY"><statement name="NAME"><block type="controls_if" id="zl1bEbR[4mE`dERwrc?J"><mutation elseif="3"></mutation><value name="IF0"><block type="key_sensing" id="t;)2So%4$m%Fy*}xju_j"><field name="NAME">option1</field></block></value><statement name="DO0"><block type="move_block" id="?U5[fHd|M:Nr%CF2l%lm"><field name="NAME">left</field></block></statement><value name="IF1"><block type="key_sensing" id="R@1fg,Q$gEpH_Av^ia:j"><field name="NAME">option2</field></block></value><statement name="DO1"><block type="move_block" id="EZ5J%^AXn+OYmg[Sw4MN"><field name="NAME">right</field></block></statement><value name="IF2"><block type="key_sensing" id=")X{2WDA~[7GEd@5kTeZ,"><field name="NAME">option3</field></block></value><statement name="DO2"><block type="move_block" id="mxPy.UFMe@038}0(_i1C"><field name="NAME">up</field></block></statement><value name="IF3"><block type="key_sensing" id="r$77:9_Y(ixE1)Fq;pDG"><field name="NAME">option4</field></block></value><statement name="DO3"><block type="move_block" id="f:sETHjnD)NUVozs+W^*"><field name="NAME">down</field></block></statement><next><block type="controls_if" id="h(Uxd/@w0//4$0)vGz9p"><value name="IF0"><block type="snake_touches_food_block" id="zZ]aJh-.nZUirOvi|ys8"></block></value><statement name="DO0"><block type="change_variable_holder" id="v5Wv^q:[.fMn,66QJlVk"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="2g3BJ^}!2mL_IM+`7Bf2"><field name="NUM">1</field></block></value><next><block type="change_variable_holder" id="gjU;`Mrj.@UWCF7RG{vK"><field name="Variable name">op2</field><value name="NAME"><block type="math_number" id="!mJrlS#~@7Q#OoN1Y^zD"><field name="NUM">10</field></block></value><next><block type="hide_block" id="Rm*b03xESP`=X2*!pWQ["><field name="NAME">option2</field><next><block type="appear_food_block" id="_-:=!w@5%s(V=bEo7I`R"><next><block type="show_score_block" id="^aCC/x1k3YB+=K{RS=T%"></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_if" id="[/i^lwo+_|NyhN;:Bic]"><value name="IF0"><block type="logic_compare" id="t.q#v3=,8HmA!O_BH33C"><field name="OP">GTE</field><value name="A"><block type="variables" id=":@L[,lv=pqm)ay$*N2nB"><field name="Options">option1</field></block></value><value name="B"><block type="math_number" id="SowM]B_q)g0xMzMiO*%-"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="win_game_block" id="w=Kgy:f#9wfoea?1@rn?"></block></statement><next><block type="controls_if" id="MyZEU?KxL^o5@{nbH_(e"><value name="IF0"><block type="logic_compare" id="+Gin+wk@PoQ.s$,dsOkZ"><field name="OP">LTE</field><value name="A"><block type="variables" id="0EA$LaSr5r[;WhMnbh$O"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="XYFSL%|@YIykp%TMkk5h"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="lose_game_block" id="=PSLhx96NQIxE(RV?CQV"></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from snake_snack import *\n";
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
let ScoreText;
let TimerText;
let BG;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let Score = 0;
let Timer = 30;
let Snake;
let Tongue;
let Hole;
let Prey;
var kb_UPPP;
var kb_DOWN;
var kb_LEFT;
var kb_RGHT;
let kb_Pause = false;
let Is_Eating = false;
let Find_Food = false;
let UpC = 0;
let ToGo_Direction = 0;
let Dir_Sn = 0; //<< Snake Direction ( 1:Right , 2:Left , 3:Up , 4:Down)
let Arrow_Up;
let Arrow_Down;
let Arrow_Left;
let Arrow_Right;

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
    Hole = _gameThis.add.image(200, 200, "Hole");
    Prey = _gameThis.physics.add.sprite(400, 1400, "Preys");
    Tongue = _gameThis.add.sprite(400, 2000, "Tongue").setScale(1);
    Snake = _gameThis.physics.add.sprite(300, 2000, "Snake");

    Arrow_Up = _gameThis.add.image(1730, 890, "Arrow");
    Arrow_Up.angle = 0;
    Arrow_Up.setInteractive();
    Arrow_Down = _gameThis.add.image(1730, 990, "Arrow");
    Arrow_Down.angle = 180;
    Arrow_Down.setInteractive();
    Arrow_Left = _gameThis.add.image(1630, 990, "Arrow");
    Arrow_Left.angle = 270;
    Arrow_Left.setInteractive();
    Arrow_Right = _gameThis.add.image(1830, 990, "Arrow");
    Arrow_Right.angle = 90;
    Arrow_Right.setInteractive();

    Arrow_Up.on("pointerdown", function () {
        ToGo_Direction = 4;
    });
    Arrow_Down.on("pointerdown", function () {
        ToGo_Direction = 3;
    });
    Arrow_Left.on("pointerdown", function () {
        ToGo_Direction = 2;
    });
    Arrow_Right.on("pointerdown", function () {
        ToGo_Direction = 1;
    });
    Arrow_Up.on("pointerup", function () {
        ToGo_Direction = 0;
    });
    Arrow_Down.on("pointerup", function () {
        ToGo_Direction = 0;
    });
    Arrow_Left.on("pointerup", function () {
        ToGo_Direction = 0;
    });
    Arrow_Right.on("pointerup", function () {
        ToGo_Direction = 0;
    });

    _gameThis.anims.create({
        key: "taste",
        frames: _gameThis.anims.generateFrameNumbers("Tongue", {
            frames: [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        }),
        frameRate: 8,
        repeat: 0,
    });

    TimerText = _gameThis.add.text(gameWidth / 2, 100, "", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    });
    TimerText.setOrigin(0.5, 0.5);
    ScoreText = _gameThis.add.text(1600, 100, "", {
        font: "bold 68px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 12,
    });
    ScoreText.setOrigin(0.5, 0.5);

    // test();

    //=====================================================================================================================================
    //=========== THE UPDATE CODE =========================================================================================================
} //====================================================================================================================================
function update() {
    // if (cannot_proceed()) return;
    // if (is_right_arrow_pressed()) move_right();
    // if (is_left_arrow_pressed()) move_left();
    // if (is_down_arrow_pressed()) move_down();
    // if (is_up_arrow_pressed()) move_up();
    // if (is_snake_touching_food()) {
    //   Score += 1;
    //   ScoreText.text = "Score : " + Score.toString();
    //   Timer += 15;
    //   hide_food(); //await sleep(2);
    //   food_appears_in_random_place();
    // }
    // //When Snake Continue In Old Direction :>>
    // moving_snake();
    // if (Score >= 10) win_game();
    // if (Timer == 0) lose_game();
}
//=====================================================================================================================================
//================= WORK SPACE ========================================================================================================
//=====================================================================================================================================
function keep_reducing_timer_from(Sec) {
    Timer = Sec;
    TimerText.text = "Time : " + Timer.toString();
    ScoreText.text = "Score : " + Score.toString();
    //Init Snake :
    //Direction=1; Dir_Sn=1;
    Snake.setPosition(300, 300);
    Snake.body.setSize(300, 5, 150, 150);

    initialise_Keyboard();
    GameIsOver = false;
}

function food_appears_in_random_place() {
    if (GameIsOver) return;
    Find_Food = false;
    _gameThis.time.addEvent({
        delay: 2000,
        callback: function () {
            //Sleeping 2 seconds..
            Prey.setFrame(rand(4) - 1); //Setting New Prey ...
            do {
                Prey.x = 300 + rand(47) * 30;
                Prey.y = 240 + rand(21) * 30;
            } while (Phaser.Math.Distance.BetweenPoints(Prey, Snake) < 300);
            //Init Collider Snake/Prey : >>
            _gameThis.physics.add.collider(Snake, Prey, function (Snake, Prey) {
                if (Is_Eating) return;
                Find_Food = true;
            });
        },
        callbackScope: _gameThis,
        loop: false,
    });
}

function is_snake_touching_food() {
    if (Find_Food) return true;
    return false;
}

function hide_food() {
    Is_Eating = true; //Event : Only Once..

    Tongue.setPosition(Snake.x, Snake.y);
    if (Dir_Sn == 3) Tongue.y += 25;
    if (Dir_Sn == 1) {
        Tongue.angle = 180;
        Tongue.x += 175;
    }
    if (Dir_Sn == 2) {
        Tongue.angle = 0;
        Tongue.x -= 175;
    }
    if (Dir_Sn == 3) {
        Tongue.angle = 240;
        Tongue.y += 150;
    }
    if (Dir_Sn == 4) {
        Tongue.angle = 90;
        Tongue.y -= 175;
    }
    Tongue.play("taste");

    setTimeout(() => {
        Tongue.y = 2000;
        Tongue.setFlipX(false).setFlipY(false);
        Is_Eating = false;
        Prey.y = 1400;
        //food_appears_in_random_place();
    }, 1500);
}

function initialise_Keyboard() {
    kb_RGHT = _gameThis.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
    kb_RGHT.on("down", function () {
        ToGo_Direction = 1;
    });
    kb_LEFT = _gameThis.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    kb_LEFT.on("down", function () {
        ToGo_Direction = 2;
    });
    kb_DOWN = _gameThis.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.DOWN
    );
    kb_DOWN.on("down", function () {
        ToGo_Direction = 3;
    });
    kb_UPPP = _gameThis.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    kb_UPPP.on("down", function () {
        ToGo_Direction = 4;
    });
    kb_RGHT.on("up", function () {
        ToGo_Direction = 0;
    });
    kb_LEFT.on("up", function () {
        ToGo_Direction = 0;
    });
    kb_DOWN.on("up", function () {
        ToGo_Direction = 0;
    });
    kb_UPPP.on("up", function () {
        ToGo_Direction = 0;
    });
}

function valid_Movement() {
    if (GameIsOver) return false;
    if (Is_Eating) return false;
    if (kb_Pause) return false;

    if (ToGo_Direction == Dir_Sn) return false; //Same Direction..
    if (ToGo_Direction == 1 && Dir_Sn == 2) return false;
    if (ToGo_Direction == 2 && Dir_Sn == 1) return false; //Opposite Direction..
    if (ToGo_Direction == 3 && Dir_Sn == 4) return false;
    if (ToGo_Direction == 4 && Dir_Sn == 3) return false; //Opposite Direction..
    return true;
}

function is_right_arrow_pressed() {
    if (!valid_Movement()) return false;
    if (ToGo_Direction == 1) return true;
    return false;
}

function is_left_arrow_pressed() {
    if (!valid_Movement()) return false;
    if (ToGo_Direction == 2) return true;
    return false;
}

function is_down_arrow_pressed() {
    if (!valid_Movement()) return false;
    if (ToGo_Direction == 3) return true;
    return false;
}

function is_up_arrow_pressed() {
    if (!valid_Movement()) return false;
    if (ToGo_Direction == 4) return true;
    return false;
}

function move_left() {
    //if(Dir_Sn==1) return;
    var Old_x = Snake.x;
    var Old_y = Snake.y;
    var ToGo_Dir = ToGo_Direction;
    kb_Pause = true;
    //The Snake Change Direction :
    if (Dir_Sn == 4) {
        Snake.setFrame(15);
        Snake.y += 90;
    }
    if (Dir_Sn == 3) {
        Snake.setFrame(9);
        Snake.y -= 90;
    }
    update_Snake(ToGo_Dir, Old_x, Old_y);
}

function move_right() {
    //if(Dir_Sn==2) return;
    var Old_x = Snake.x;
    var Old_y = Snake.y;
    var ToGo_Dir = ToGo_Direction;
    kb_Pause = true;
    //The Snake Change Direction :
    if (Dir_Sn == 4) {
        Snake.setFrame(13);
        Snake.y += 90;
    }
    if (Dir_Sn == 3) {
        Snake.setFrame(11);
        Snake.y -= 90;
    }
    update_Snake(ToGo_Dir, Old_x, Old_y);
}

function move_up() {
    //if(Dir_Sn==4) return;
    var Old_x = Snake.x;
    var Old_y = Snake.y;
    var ToGo_Dir = ToGo_Direction;
    kb_Pause = true;
    //The Snake Change Direction :
    if (Dir_Sn == 1) {
        Snake.setFrame(3);
        Snake.x -= 90;
    }
    if (Dir_Sn == 2) {
        Snake.setFrame(5);
        Snake.x += 90;
    }
    update_Snake(ToGo_Dir, Old_x, Old_y);
}

function move_down() {
    //if(Dir_Sn==3) return;
    var Old_x = Snake.x;
    var Old_y = Snake.y;
    var ToGo_Dir = ToGo_Direction;
    kb_Pause = true;
    //The Snake Change Direction :
    if (Dir_Sn == 1) {
        Snake.setFrame(1);
        Snake.x -= 90;
    }
    if (Dir_Sn == 2) {
        Snake.setFrame(7);
        Snake.x += 90;
    }
    update_Snake(ToGo_Dir, Old_x, Old_y);
}

function update_Snake(ToGo_Dir, x, y) {
    //**********************************************************************************************
    Dir_Sn = ToGo_Dir;

    //Rectify Body-Snake :
    if (ToGo_Dir < 3) Snake.body.setSize(50, 5, 0, 0);
    else Snake.body.setSize(5, 50, 0, 0);
    if (ToGo_Dir == 1) Snake.body.setOffset(250, 150);
    if (ToGo_Dir == 2) Snake.body.setOffset(0, 150);
    if (ToGo_Dir == 3) Snake.body.setOffset(150, 250);
    if (ToGo_Dir == 4) Snake.body.setOffset(150, 0);

    //Change The Actual Direction Of The Snake :
    setTimeout(() => {
        Snake.setPosition(x, y);
        if (ToGo_Dir == 1) Snake.setFrame(0);
        if (ToGo_Dir == 2) Snake.setFrame(4);
        if (ToGo_Dir == 3) Snake.setFrame(8);
        if (ToGo_Dir == 4) Snake.setFrame(12);

        kb_Pause = false;
    }, 100);
}

function moving_snake() {
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    if (ToGo_Direction == 0) return;

    if (ToGo_Direction == 1 && Dir_Sn == 2) return false;
    if (ToGo_Direction == 2 && Dir_Sn == 1) return false; //Opposite Direction..
    if (ToGo_Direction == 3 && Dir_Sn == 4) return false;
    if (ToGo_Direction == 4 && Dir_Sn == 3) return false; //Opposite Direction..

    if (ToGo_Direction == 1)
        if (Snake.x <= 1680) Snake.x += 30;
    if (ToGo_Direction == 2)
        if (Snake.x >= 240) Snake.x -= 30;
    if (ToGo_Direction == 3)
        if (Snake.y <= 840) Snake.y += 30;
    if (ToGo_Direction == 4)
        if (Snake.y >= 330) Snake.y -= 30;
}

function cannot_proceed() {
    UpC++;
    if (UpC == 58) UpC = 0;
    if (UpC % 3 != 0) return true; //<< FPS = Updating Every "1/3" Second

    if (Is_Eating) return true; //<< Wait For Eating Animation..
    if (GameIsOver) return true;
    //Updating Timer (Every Second)..
    if (UpC == 0) {
        Timer -= 1;
        TimerText.text = "Time : " + Timer.toString();
    }
    if (kb_Pause) return true; //<< Wait For Keyboard Animation..

    return false;
}

function win_game() {
    TimerText.text = "You Win !!";
    GameIsOver = true;
}

function lose_game() {
    TimerText.text = "Time Up !!";
    GameIsOver = true;
}

function game_over() {
    Dir_Sn = 0;
    Snake.setPosition(300, 300);
    GameIsOver = true;
}

function sleep(seconds) {
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
            if (key == "Preys") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 90,
                    frameHeight: 90,
                });
            }
            if (key == "Tongue") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 62,
                    frameHeight: 30,
                });
            }
            if (key == "Snake") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 300,
                    frameHeight: 300,
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
    Score = 0;
    Timer = 30;
    GameIsOver = false;
    Dir_Sn = 0;
    kb_Pause = false;
    Is_Eating = false;
    Find_Food = false;
}
// Reset the game
function reset_output() {
    reInitValues();
    _gameThis.scene.restart();
}

//=====================================================================================================================================
//=====================================================================================================================================

function rand(a) {
    return Math.floor(Math.random() * a) + 1;
}

function test() {
    //await start_Game();
    keep_reducing_timer_from(30);
    food_appears_in_random_place();
    //The "Update" Will Run The Rest Of The Game...
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
//     keep_reducing_timer_from
//     food_appears_in_random_place
//     cannot_proceed
//     is_right_arrow_pressed
//     move_right
//     is_left_arrow_pressed
//     move_left
//     is_down_arrow_pressed
//     move_down
//     is_up_arrow_pressed
//     move_up
//     is_snake_touching_food
//     hide_food
//     await sleep
//     food_appears_in_random_place
//     moving_snake
//     win_game
//     lose_game
// }