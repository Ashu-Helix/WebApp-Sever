//============================================================================================
//========================================IMPORT STATEMENTS=========================================
//========================================DO NOT DELETE===================================

import M from 'materialize-css';
import {
    AUTO,
    Game,
} from 'phaser';

import MSPhaserLib from '../msPhaserLib.min';

import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

let demoWorkspace = Blockly.getMainWorkspace();
let noOfBlocks;

let _gameThis = null;
const baseURL = "../img/images/2327799f-fe7b-45b7-bda9-8af3dc167095";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;

const GAME_CONSTANT = {
    images: {
        BG: "Background.png",
        Table: "Table.png",

        Balance_00: "Balance_00.png",
        Balance_20: "Balance_20.png",
        Balance_30: "Balance_30.png",
        Balance_50: "Balance_50.png",
        Balance_70: "Balance_70.png",


        Total_30: "Total_30.png",
        Total_50: "Total_50.png",
        Total_70: "Total_70.png",

    },
    spritesImages: {
        Client1: "Client1.png",
        Client2: "Client2.png",
        Client3: "Client3.png",

        Cashier_20: "cash_20.png",
        Cashier_30: "cash_30.png",
        Cashier_50: "cash_50.png",
        Cashier_70: "cash_70.png",
        Cashier_100: "cash_100.png",

        //bird: "Bird",
    }
};

let ErrorText;
let ErrorInnerText = "";
let GameIsOver = false;
let Middletext;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let BG;
let Table;
let Client1;
let Client2;
let Client3;
let Current_Client;
let Nb_Client = 0;
let Balance_00;
let Balance_20;
let Balance_30;
let Balance_50;
let Balance_70;
let Cash_20;
let Cash_30;
let Cash_50;
let Cash_70;
let Cash_100;
let Cash_00;
let Cash_No;
let Total_30;
let Total_50;
let Total_70;

let bill = 0;
let received_amount = 0;
let balance = 0;
let right_balance = 0;

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
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
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

    //=====================================================================================================================================
    //================= WORK SPACE ========================================================================================================
    //=====================================================================================================================================
    Client1 = this.add.sprite(2400, 600, "Client1").setScale(0.8);
    Client2 = this.add.sprite(2400, 600, "Client2").setScale(0.8);
    Client3 = this.add.sprite(2400, 600, "Client3").setScale(0.8);

    Table = this.add.image(0, 1920, "Table").setOrigin(0, 0);

    Cash_20 = this.add.sprite(-500, -500, "Cashier_20", 0).setScale(1.3);
    Cash_30 = this.add.sprite(-500, -500, "Cashier_30").setScale(1.3);
    Cash_50 = this.add.sprite(-500, -500, "Cashier_50").setScale(1.3);
    Cash_70 = this.add.sprite(-500, -500, "Cashier_70").setScale(1.3);
    Cash_100 = this.add.sprite(-500, -500, "Cashier_100").setScale(1.3);
    Cash_00 = this.add.sprite(840, 640, "Cashier_20").setScale(1.3);
    Cash_00.alpha = 0;
    Cash_00.setFrame(0);
    create_Cashier_Animations(this);

    Cash_No = this.add.sprite(-500, -500, "No_machine", "No_0001.png");
    Cash_No.setDisplaySize(Cash_20.displayWidth, Cash_20.displayHeight);

    Total_30 = this.add.image(835, 1595, "Total_30");
    Total_50 = this.add.image(835, 1595, "Total_50");
    Total_70 = this.add.image(835, 1595, "Total_70");

    Balance_00 = this.add.image(835, 1595, "Balance_00");
    Balance_20 = this.add.image(835, 1595, "Balance_20");
    Balance_30 = this.add.image(835, 1595, "Balance_30");
    Balance_50 = this.add.image(835, 1595, "Balance_50");
    Balance_70 = this.add.image(835, 1595, "Balance_70");

    //=====================================================================================================================================
    //Adding
    ErrorText = _gameThis.add.text(0, 0, "Error...", {
        font: "bold 36px Arial",
        fill: "#ffffff",
    });
    ErrorText.setPosition(10, ErrorText.displayHeight * 0.75);
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);
    Middletext = _gameThis.add.text(
        this.cameras.main.width * 0.38,
        gameHeight * 0.92,
        " ", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    }
    );
    Middletext.setOrigin(0.5, 0.5);
    //=====================================================================================================================================
    //=====================================================================================================================================
    //=====================================================================================================================================
}

function game_over() {
    GameIsOver = true;
}

function say(str) {
    Middletext.setText(str);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2800);
    });
}

function update() { }
//=====================================================================================================================================
//================= WORK SPACE ========================================================================================================
//=====================================================================================================================================
function open_bill_counter() {
    _gameThis.time.addEvent({
        delay: 1500,
        callback: function () {
            _gameThis.tweens.add({
                targets: Table,
                y: 700,
                ease: "Power1",
                duration: 250,
            });
        },
        callbackScope: this,
        loop: false,
    });
    _gameThis.time.addEvent({
        delay: 2000,
        callback: function () {
            _gameThis.tweens.add({
                targets: Cash_00,
                alpha: 1,
                ease: "Power1",
                duration: 250,
            });
        },
        callbackScope: this,
        loop: false,
    });
    _gameThis.time.addEvent({
        delay: 2500,
        callback: function () {
            put_Client();
        },
        callbackScope: this,
        loop: false,
    });
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 4000);
    });
}

function show_bill() {
    Total_30.y = 1595;
    Total_50.y = 1595;
    Total_70.y = 1595; //Init..
    if (bill == 30) Total_30.y = 595;
    if (bill == 50) Total_50.y = 595;
    if (bill == 70) Total_70.y = 595;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1500);
    });
}

function fill_machine() {
    hide_cash_register();
    if (received_amount == 50) {
        Cash_50.x = 840;
        Cash_50.y = 640;
        Cash_50.play("play5");
    }
    if (received_amount == 100) {
        Cash_100.x = 840;
        Cash_100.y = 640;
        Cash_100.play("play10");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 4000);
    });
}

function play_No_machine() {
    console.log("play_No_machine");
    Current_Client.setFrame(1);
    hide_cash_register();
    Cash_No.x = 840;
    Cash_No.y = 640;
    Cash_No.play("No_M");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2800);
    });
}

function show_balance() {
    Balance_00.y = 1595;
    Balance_20.y = 1595;
    Balance_30.y = 1595;
    Balance_50.y = 1595;
    Balance_70.y = 1595;
    if (right_balance == 0) Balance_00.y = 595;
    if (right_balance == 20) Balance_20.y = 595;
    if (right_balance == 30) Balance_30.y = 595;
    if (right_balance == 50) Balance_50.y = 595;
    if (right_balance == 70) Balance_70.y = 595;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}

function give_balance() {
    Current_Client.setFrame(2);
    say("Thank you, Visit again!");
    hide_cash_register();
    if (balance == 20) {
        Cash_20.x = 840;
        Cash_20.y = 640;
        Cash_20.play("play2");
    }
    if (balance == 30) {
        Cash_30.x = 840;
        Cash_30.y = 640;
        Cash_30.play("play3");
    }
    if (balance == 70) {
        Cash_70.x = 840;
        Cash_70.y = 640;
        Cash_70.play("play7");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 4000);
    });
}

function put_Client() {
    if (Current_Client) {
        Current_Client.setX(2400);
    }
    Nb_Client += 1;
    say("Welcome...");
    var r = rand(3);
    if (r == 1) Current_Client = Client1;
    if (r == 2) Current_Client = Client2;
    if (r == 3) Current_Client = Client3;
    _gameThis.tweens.add({
        targets: Current_Client,
        x: 1400,
        ease: "Power1",
        duration: 250,
    });
    Cash_00.alpha = 1;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 300);
    });
}

function hide_cash_register() {
    Cash_20.y = -500;
    Cash_30.y = -500;
    Cash_50.y = -500;
    Cash_70.y = -500;
    Cash_100.y = -500;
    Cash_00.alpha = 0;
    Balance_00.y = 1595;
    Balance_20.y = 1595;
    Balance_30.y = 1595;
    Balance_50.y = 1595;
    Balance_70.y = 1595;
    Total_30.y = 1595;
    Total_50.y = 1595;
    Total_70.y = 1595;
    Cash_No.setX(-1000);
}

function create_Cashier_Animations(_this) {
    _this.anims.create({
        key: "play2",
        frames: _this.anims.generateFrameNumbers("Cashier_20", {
            frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _this.anims.create({
        key: "play3",
        frames: _this.anims.generateFrameNumbers("Cashier_30", {
            frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _this.anims.create({
        key: "play5",
        frames: _this.anims.generateFrameNumbers("Cashier_50", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _this.anims.create({
        key: "play7",
        frames: _this.anims.generateFrameNumbers("Cashier_70", {
            frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        }),
        frameRate: 4,
        repeat: 0,
    });
    _this.anims.create({
        key: "play10",
        frames: _this.anims.generateFrameNumbers("Cashier_100", {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        }),
        frameRate: 4,
        repeat: 0,
    });

    _this.anims.create({
        key: "No_M",
        frames: _this.anims.generateFrameNames("No_machine", {
            prefix: "No_",
            start: 1,
            end: 16,
            zeroPad: 4,
            suffix: ".png",
        }),
        frameRate: 6,
        repeat: -1,
    });
}

//=====================================================================================================================================
//=====================================================================================================================================

// function get_float_input_from_user(txt) {
//     return new Promise((resolve) => {
//         resolve(parseFloat(prompt(txt, "Enter Only Numbers Here...")));
//     });
// }

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
            //const element = spritesImages[key];
            // _gameThis.load.spritesheet(key, "SpriteSheet/" + element + ".png", { frameWidth: elementValue.frameWidth, frameHeight: elementValue.frameHeight });
            if (key == "Client1" || key == "Client2" || key == "Client3") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 443,
                    frameHeight: 1090,
                });
            }
            if (
                key == "Cashier_20" ||
                key == "Cashier_30" ||
                key == "Cashier_50" ||
                key == "Cashier_70" ||
                key == "Cashier_100"
            ) {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 520,
                    frameHeight: 300,
                });
            }
        }
    }

    _gameThis.load.atlas(
        "No_machine",
        "No_machine.png",
        "No_machine.json"
    );
}

function ShowError() {
    ErrorText.setAlpha(1);
    ErrorText.setText(ErrorInnerText); //use error text
    //hide after 3 seconds
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
    ErrorInnerText = "";
    GameIsOver = false;
    bill = 0;
    received_amount = 0;
    balance = 0;
    right_balance = 0;
    Nb_Client = 0;
}
// Reset the game
function reset_output() {
    console.log("reset_output");
    reInitValues();
    _gameThis.scene.restart();
}

function get_float_input_from_user(txt) {
    return parseFloat(prompt(txt, "Enter only numbers here"));
}

function rand(a) {
    return Math.floor(Math.random() * a) + 1;
}


var repeat_forever_flag = true;

function runCode() {
    // tour_over && tour.complete();
    reInitValues();
    window.LoopTrap = 1e3;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var a =
        "async function c(){" +
        Blockly.JavaScript.workspaceToCode(demoWorkspace) +
        "final_check();} c();";
    try {
        repeat_forever_flag = false;
        setTimeout(() => {
            eval(a);
            repeat_forever_flag = true;
        }, 1000);
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
//     if (!tour.isActive()) tour.show(tour_step);
// }

// const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="single_action_block" id="7`W5xV:#-?t$:U)[-q5q" x="36" y="-37"><next><block type="controls_repeat_ext" id="4hQMc|`(~=jJ=1xM=~U;"><value name="TIMES"><block type="math_number" id="fQhbiulhpH}II_r1_Da+"><field name="NUM">6</field></block></value><statement name="DO"><block type="variable_holder" id="Wzj1l`OZYFZAh]ZOg@zR"><field name="Variable name">op1</field><value name="NAME"><block type="input_bock" id="/Bx0TrS1NUc=[^l!mB)L"><field name="Options">option1</field></block></value><next><block type="variable_holder" id="ok-{mt|t4Rz4nYde3T1)"><field name="Variable name">op2</field><value name="NAME"><block type="input_bock" id="_]))+Zn/sEv%FahxBo?#"><field name="Options">option2</field></block></value><next><block type="variable_holder" id="GF?{:P5PqcwySW6#ptUq"><field name="Variable name">op3</field><value name="NAME"><block type="input_bock" id="+[Z]C@wElfqoNdQR11]k"><field name="Options">option3</field></block></value><next><block type="variable_holder" id="`Y~7AF{xsDia#e?{ncDS"><field name="Variable name">op4</field><value name="NAME"><block type="math_arithmetic" id="z?AW}KYsZ=1CNg:H.%0L"><field name="OP">MINUS</field><value name="A"><block type="variables" id="NE8ASCMI:5iEArJ:.+BA"><field name="Options">option2</field></block></value><value name="B"><block type="variables" id="G+~YRko`h-(ftbZWOxt6"><field name="Options">option1</field></block></value></block></value><next><block type="controls_if" id="JRtSsgjhT{Eo{@0?[8w^"><mutation elseif="1" else="1"></mutation><value name="IF0"><block type="logic_compare" id="e/_iB0GaoSDM7Iqj7F4N"><field name="OP">EQ</field><value name="A"><block type="variables" id="30aBvB(I_wz1QT-C^(_/"><field name="Options">option4</field></block></value><value name="B"><block type="variables" id=",~;18Qx,D~ms`xUI!tv1"><field name="Options">option3</field></block></value></block></value><statement name="DO0"><block type="action_block" id="?kvg;IP,iz|9A+_dAdD)"><next><block type="say_block" id="o5_#iYe8S1OkGsR/[`kE"><field name="say">thank you visit again</field></block></next></block></statement><value name="IF1"><block type="logic_compare" id="2n_U}-4~`wkdW.Sf-d_V"><field name="OP">GT</field><value name="A"><block type="variables" id=")L!e^DM7Rg45p;gij^GU"><field name="Options">option4</field></block></value><value name="B"><block type="variables" id="({2Zl!q0NL/2P0P0(l;c"><field name="Options">option3</field></block></value></block></value><statement name="DO1"><block type="say_block" id=";S[$$L=C1hUQP`s/8Eq3"><field name="say">please give the correct balance</field><next><block type="say_block" id="V`6D-qD;Fy^kr(K-s)u]"><field name="say">try again</field></block></next></block></statement><statement name="ELSE"><block type="say_block" id="IdfMod/k^QLz:-V|-P8B"><field name="say">balance amount is less</field><next><block type="play_no_machine" id="P=DPa+R.^q~[1TCLiZjY"></block></next></block></statement><next><block type="end" id=";_ur_3,,dyS+%XL`9o$*"></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "import shopkeeper\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
// demoWorkspace.addChangeListener(myUpdateFunction);

function final_check() {
    setTimeout(() => {
        if (Nb_Client >= 5) GameIsOver = true;
    }, 2500)
}

async function test() {
    await open_bill_counter();
    for (let i = 0; i <= 5; i++) {
        bill = get_float_input_from_user(
            "Choose The Bill Amount \n ( 30  Or  50  Or  70 ): "
        );
        await show_bill();
        received_amount = get_float_input_from_user(
            "Enter Received Amount: \n ( 50  Or  100 ): "
        );
        await fill_machine();
        balance = get_float_input_from_user(
            "Enter Balance Amount: \n ( 00  Or 20  Or  30  Or  50  Or  70 ):"
        );

        right_balance = received_amount - bill;
        await show_balance();

        if (balance == right_balance) {
            await give_balance();
            await say("Thank you, Visit again!");
        } else if (right_balance > balance) {
            Current_Client.setFrame(3);
            await say("Please give right balance");
            await say("Try again");
        } else {
            Current_Client.setFrame(1);
            play_No_machine();
            await say("Balance amount is less!");
        }
        hide_cash_register();
        await put_Client();
    }
}

async function test2() {
    await open_bill_counter();
    for (var count = 0; count < 6; count++) {
        bill = get_float_input_from_user(
            "Choose The Bill Amount: ( 30  Or  50  Or  70 ):"
        );
        await show_bill();
        received_amount = get_float_input_from_user(
            "Enter received_amount:( 50  Or  100 ): "
        );
        await fill_machine();
        balance = get_float_input_from_user(
            "Enter Balance Amount:( 00  Or 20  Or  30  Or  50  Or  70 ):"
        );
        right_balance = received_amount - bill;
        await show_balance();
        if (right_balance == balance) {
            await give_balance();
            toast1();
            await say("thank you visit again");
        } else if (right_balance > balance) {
            await say("please give the correct balance");
            await say("try again");
        } else {
            await play_No_machine();
            await say("balance amount is less");
        }
        if (right_balance > balance) {
            toast2();
        } else if (right_balance < balance) {
            toast3();
        }
        hide_cash_register();
        await put_Client();
    }
}

function completedFlag() {
    return GameIsOver;
}

// Validation Part
function toast1() {
    M.toast({ html: "Correct balance" });
}

function toast2() {
    M.toast({ html: "balance amount is lesser than the actual balance" });
}

function toast3() {
    M.toast({ html: "You have entered excessive balance amount" });
}

function getNoOfBlocks() {
    demoWorkspace = Blockly.getMainWorkspace();
    noOfBlocks = demoWorkspace.getAllBlocks();
    return noOfBlocks.length
}

const updateImports = ["import shopkeeper"]


export {
    completedFlag,
    myUpdateFunction,
    // helpCode,
    runCode,
    reset_output,
    reInitValues,
    open_bill_counter,
    bill,
    received_amount,
    balance,
    right_balance,
    show_balance,
    give_balance,
    toast1,
    say,
    play_No_machine,
    // right_balance,
    // balance,
    toast2,
    toast3,
    hide_cash_register,
    put_Client,
    updateImports,
    getNoOfBlocks
}