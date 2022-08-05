//============================================================================================
//====================================  IMPORT STATEMENTS  ===================================
//======================================= DO NOT DELETE ======================================

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
//======================================  CONFIG.JS  =========================================
//============================================================================================

let _gameThis = null;
const baseURL = "../img/images/628a8306-d043-4a17-bb50-f1d32f4d7965";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;


//============================================================================================
//======================================  CONSTANT.JS  =======================================
//============================================================================================

const GAME_CONSTANT = {
    images: {
        BG: "Background.png",

    },
    spritesImages: {
        Child: "Child.png",
        Man: "Man.png",
        Woman: "Woman.png",
        IDs: "IDs.png",
        Mark: "Mark.png",
        Panel: "Panel.png",
        Robot: "Robot.png",
    }
};

//============================================================================================
//================================ SCRIPT2_BLOCKLY.JS ========================================
//============================================================================================
function completedFlag() {
    return is_completed; // *===== use this variable name ======*
}



function runCode() {
    // tour_over && tour.complete();
    reset_output();
    run_ = false;
    setTimeout(() => {
        run_ = true;
        //test()//FOR GAME DEVELOPER ONLY
        window.LoopTrap = 1E3;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var a = "async function c(){" + Blockly.JavaScript.workspaceToCode(demoWorkspace) + "final_check();} c();";
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
    }, 1500);
}

// function helpCode() {
//     var xml_wkspace =
//         '<xml xmlns="https://developers.google.com/blockly/xml"><block type="single_action_block" id="4mi:ejaljCD,GZV?@h;z" x="-44" y="-650"><next><block type="wait_block" id="Nz;qx.GWi3s2xph4,#|F"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="F==VlC/l*J8+8:v7/;37"><field name="NUM">3</field></block></value><next><block type="controls_repeat_ext" id=",vr?5iCooeyk^t(/.vvO"><value name="TIMES"><block type="math_number" id="!yG^r:]O4No:zipi=E9!"><field name="NUM">6</field></block></value><statement name="DO"><block type="repeated_action_block" id="/Uq`D|:5ai|.EDq}_t//"><next><block type="wait_block" id="zG3LCqU9,)33}~^WH?W;"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="sn~PMMleL?UTY0pt4)$a"><field name="NUM">4</field></block></value><next><block type="variable_holder" id="x^+0%4iNLZj(R{%g}_uw"><field name="Variable name">op1</field><value name="NAME"><block type="action_block" id="aIH-V9mZy9UFaWiYiN8r"></block></value><next><block type="wait_block" id="X:(aOJX:?rHu5jzJ5(]G"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="O_U^yIGIY1T`qbjZ(ErQ"><field name="NUM">2</field></block></value><next><block type="controls_if" id="YqWs%p]D4Mbi[3:!4jwO"><value name="IF0"><block type="logic_operation" id=")#(KyOV$ypH)rfEQn$@4"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="PGX.pRKCD0s=-]3|x8Rs"><field name="OP">GTE</field><value name="A"><block type="variables" id="Gnrx0^R=P,)`~b~sBLqg"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="AyFBMq5Gh7P`S)_F;!%C"><field name="NUM">6</field></block></value></block></value><value name="B"><block type="logic_compare" id="@))CdmtJ3,0n0`|.#48]"><field name="OP">LT</field><value name="A"><block type="variables" id=",jS@nJgfTYZ9/1h?^E3t"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="Y@-k${=A-_Ma/h4U3xNp"><field name="NUM">8</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="]lunMBiGj8X%S[!p{wPY"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="nSsD``ave0c_t/_n)PBM"><field name="OP">EQ</field><value name="A"><block type="variables" id="u]Mo!fk_]e[QIccQh?s="><field name="Options">option1</field></block></value><value name="B"><block type="text" id="Fgb.yV@tqK~P#?(D@Yt^"><field name="TEXT">man</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="A7t#)E[8a4:*l3a|v?pn"></block></statement><statement name="ELSE"><block type="say_block" id="mwu_h]eE6oj`f[M`]f7."><field name="say">This time is only for men</field><next><block type="reject_block" id="6ms=]0aA$-C[zAqUTI0-"></block></next></block></statement></block></statement><next><block type="controls_if" id="06#6}X^9Q7I*BMmUx^Zg"><value name="IF0"><block type="logic_operation" id="y`=YmuWqr@tF+2biT2gi"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="+[+6EM,FUBt_68n3tg^j"><field name="OP">GTE</field><value name="A"><block type="variables" id="P[tn3JDJ;r$mq)=Se:wm"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="d6x)MrOn8.-Y9U;_ox)3"><field name="NUM">8</field></block></value></block></value><value name="B"><block type="logic_compare" id=":88r,wM)@D_6rbNfC(F}"><field name="OP">LT</field><value name="A"><block type="variables" id="@$zP5`F3EF8h^PM2el4v"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="TXRd9tXQWrsM:U-Ca4,u"><field name="NUM">9</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="zRA_VeE|=Gd7yna$^EK!"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="3R^:/C0GsaC6`,Ky(JMc"><field name="OP">EQ</field><value name="A"><block type="variables" id="[fqm8r^u6T{969G9j7_)"><field name="Options">option1</field></block></value><value name="B"><block type="text" id="TA_+VoDgLi)vGpvOM!uh"><field name="TEXT">child</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="*2vl9[nhH~9pB-3o8m@M"></block></statement><statement name="ELSE"><block type="say_block" id="XXr$Sd7.n26lu]lk?FLI"><field name="say">This time is only for children</field><next><block type="reject_block" id="^XSSFQ{^n(;.iotySBDS"></block></next></block></statement></block></statement><next><block type="controls_if" id="U!,-H%Pn+#]Mah_+J;C~"><value name="IF0"><block type="logic_operation" id="K1wT4$;H]u5g6pv=0ZQ3"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="CsNJ@),?;3,FIkZaKcsk"><field name="OP">GTE</field><value name="A"><block type="variables" id="fvVwFa8Y*y6^12ToXzU*"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="rTlw.DB^0+?|/n}e4x3J"><field name="NUM">9</field></block></value></block></value><value name="B"><block type="logic_compare" id="%2r-t?*#J$*N?O+u!`TI"><field name="OP">LT</field><value name="A"><block type="variables" id="[|0){FU)i!0-_LpSY4tF"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="u1o8Mh4H3~G:O[Qsk#u["><field name="NUM">10</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="bIp49%U}wKmb(QoCTjpG"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="G+%VO[jMRg(MTlLCQ41Y"><field name="OP">EQ</field><value name="A"><block type="variables" id="?$jZM%|U2*[KUYb_e]iA"><field name="Options">option1</field></block></value><value name="B"><block type="text" id="t_;dRpF**w4J0yq)KaMO"><field name="TEXT">woman</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="W-^Yd)r/isEIyB!;*q[r"></block></statement><statement name="ELSE"><block type="say_block" id="XGXY$/EtmUp}z|a4L}kb"><field name="say">This time is only for women</field><next><block type="reject_block" id="EO3Dv7x.Y-xU8!!~]%Qe"></block></next></block></statement></block></statement><next><block type="wait_block" id="2*%tu0)@;L~ZI%Ky#]MW"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="daMg}tHWW2wLQyFH]DEx"><field name="NUM">4</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';
//     var xml = Blockly.Xml.textToDom(xml_wkspace);
//     demoWorkspace.clear();
//     Blockly.Xml.domToWorkspace(xml, demoWorkspace);
// }

// const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="single_action_block" id="4mi:ejaljCD,GZV?@h;z" x="-44" y="-650"><next><block type="wait_block" id="Nz;qx.GWi3s2xph4,#|F"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="F==VlC/l*J8+8:v7/;37"><field name="NUM">3</field></block></value><next><block type="controls_repeat_ext" id=",vr?5iCooeyk^t(/.vvO"><value name="TIMES"><block type="math_number" id="!yG^r:]O4No:zipi=E9!"><field name="NUM">6</field></block></value><statement name="DO"><block type="repeated_action_block" id="/Uq`D|:5ai|.EDq}_t//"><next><block type="wait_block" id="zG3LCqU9,)33}~^WH?W;"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="sn~PMMleL?UTY0pt4)$a"><field name="NUM">4</field></block></value><next><block type="variable_holder" id="x^+0%4iNLZj(R{%g}_uw"><field name="Variable name">op1</field><value name="NAME"><block type="action_block" id="aIH-V9mZy9UFaWiYiN8r"></block></value><next><block type="wait_block" id="X:(aOJX:?rHu5jzJ5(]G"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="O_U^yIGIY1T`qbjZ(ErQ"><field name="NUM">2</field></block></value><next><block type="controls_if" id="YqWs%p]D4Mbi[3:!4jwO"><value name="IF0"><block type="logic_operation" id=")#(KyOV$ypH)rfEQn$@4"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="PGX.pRKCD0s=-]3|x8Rs"><field name="OP">GTE</field><value name="A"><block type="variables" id="Gnrx0^R=P,)`~b~sBLqg"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="AyFBMq5Gh7P`S)_F;!%C"><field name="NUM">6</field></block></value></block></value><value name="B"><block type="logic_compare" id="@))CdmtJ3,0n0`|.#48]"><field name="OP">LT</field><value name="A"><block type="variables" id=",jS@nJgfTYZ9/1h?^E3t"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="Y@-k${=A-_Ma/h4U3xNp"><field name="NUM">8</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="]lunMBiGj8X%S[!p{wPY"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="nSsD``ave0c_t/_n)PBM"><field name="OP">EQ</field><value name="A"><block type="variables" id="u]Mo!fk_]e[QIccQh?s="><field name="Options">option1</field></block></value><value name="B"><block type="text" id="Fgb.yV@tqK~P#?(D@Yt^"><field name="TEXT">man</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="A7t#)E[8a4:*l3a|v?pn"></block></statement><statement name="ELSE"><block type="say_block" id="mwu_h]eE6oj`f[M`]f7."><field name="say">This time is only for men</field><next><block type="reject_block" id="6ms=]0aA$-C[zAqUTI0-"></block></next></block></statement></block></statement><next><block type="controls_if" id="06#6}X^9Q7I*BMmUx^Zg"><value name="IF0"><block type="logic_operation" id="y`=YmuWqr@tF+2biT2gi"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="+[+6EM,FUBt_68n3tg^j"><field name="OP">GTE</field><value name="A"><block type="variables" id="P[tn3JDJ;r$mq)=Se:wm"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="d6x)MrOn8.-Y9U;_ox)3"><field name="NUM">8</field></block></value></block></value><value name="B"><block type="logic_compare" id=":88r,wM)@D_6rbNfC(F}"><field name="OP">LT</field><value name="A"><block type="variables" id="@$zP5`F3EF8h^PM2el4v"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="TXRd9tXQWrsM:U-Ca4,u"><field name="NUM">9</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="zRA_VeE|=Gd7yna$^EK!"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="3R^:/C0GsaC6`,Ky(JMc"><field name="OP">EQ</field><value name="A"><block type="variables" id="[fqm8r^u6T{969G9j7_)"><field name="Options">option1</field></block></value><value name="B"><block type="text" id="TA_+VoDgLi)vGpvOM!uh"><field name="TEXT">child</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="*2vl9[nhH~9pB-3o8m@M"></block></statement><statement name="ELSE"><block type="say_block" id="XXr$Sd7.n26lu]lk?FLI"><field name="say">This time is only for children</field><next><block type="reject_block" id="^XSSFQ{^n(;.iotySBDS"></block></next></block></statement></block></statement><next><block type="controls_if" id="U!,-H%Pn+#]Mah_+J;C~"><value name="IF0"><block type="logic_operation" id="K1wT4$;H]u5g6pv=0ZQ3"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="CsNJ@),?;3,FIkZaKcsk"><field name="OP">GTE</field><value name="A"><block type="variables" id="fvVwFa8Y*y6^12ToXzU*"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="rTlw.DB^0+?|/n}e4x3J"><field name="NUM">9</field></block></value></block></value><value name="B"><block type="logic_compare" id="%2r-t?*#J$*N?O+u!`TI"><field name="OP">LT</field><value name="A"><block type="variables" id="[|0){FU)i!0-_LpSY4tF"><field name="Options">option2</field></block></value><value name="B"><block type="math_number" id="u1o8Mh4H3~G:O[Qsk#u["><field name="NUM">10</field></block></value></block></value></block></value><statement name="DO0"><block type="controls_if" id="bIp49%U}wKmb(QoCTjpG"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="G+%VO[jMRg(MTlLCQ41Y"><field name="OP">EQ</field><value name="A"><block type="variables" id="?$jZM%|U2*[KUYb_e]iA"><field name="Options">option1</field></block></value><value name="B"><block type="text" id="t_;dRpF**w4J0yq)KaMO"><field name="TEXT">woman</field></block></value></block></value><statement name="DO0"><block type="secondary_action_block" id="W-^Yd)r/isEIyB!;*q[r"></block></statement><statement name="ELSE"><block type="say_block" id="XGXY$/EtmUp}z|a4L}kb"><field name="say">This time is only for women</field><next><block type="reject_block" id="EO3Dv7x.Y-xU8!!~]%Qe"></block></next></block></statement></block></statement><next><block type="wait_block" id="2*%tu0)@;L~ZI%Ky#]MW"><field name="NAME">Wait for</field><value name="NAME"><block type="math_number" id="daMg}tHWW2wLQyFH]DEx"><field name="NUM">4</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';

function myUpdateFunction(a) {
    var code = Blockly.Python.workspaceToCode(demoWorkspace);
    var import_statement = "from swimming_pool import *\n";
    document.getElementById("pycode").innerHTML = import_statement + code;
    document.getElementById("modal1").innerHTML = import_statement + code;
}
// demoWorkspace.addChangeListener(myUpdateFunction);

//============================================================================================
//======================================  MAIN.JS  ===========================================
//============================================================================================

let ErrorText;
let ErrorInnerText = "";
let GameIsOver = true;
let Middletext;
let BG;
let is_completed = false;
let run_ = true;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================
let Id = "";
let Man_a;
let Child_a;
let Woman_a;
let Nb_Client = 0;
let Panel;
let Robot;
let IDs;
let Mark;
let UpC = 0;
let Time = 5;
let Time_MN = 30;
let person_counter = 0;
let TimeText;
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
//=====================================================================================================================================
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
    Panel = _gameThis.add.sprite(960, -250, "Panel").setScale(0.5);
    Robot = _gameThis.add.sprite(1650, 1720, "Robot");
    IDs = _gameThis.add.sprite(500, 1600, "IDs").setScale(1.5);
    Mark = _gameThis.add.sprite(400, 2700, "Mark");

    Middletext = _gameThis.add.text(960, 900, "", {
        font: "bold 68px Arial",
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 12,
    });
    Middletext.setOrigin(0.5, 0.5);
    TimeText = _gameThis.add.text(1680, 100, "", {
        font: "bold 80px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 12,
    });
    TimeText.setOrigin(0.5, 0.5);

    //Added 2000 to Y = Hidden..
    Man_a = _gameThis.add.sprite(1200, 2600, "Man").setScale(0.5);
    Child_a = _gameThis.add.sprite(1200, 2600, "Child").setScale(0.5);
    Woman_a = _gameThis.add.sprite(1200, 2600, "Woman").setScale(0.5);

    _gameThis.anims.create({
        key: "sw_man",
        frames: _gameThis.anims.generateFrameNumbers("Man", { frames: [0, 1, 2] }),
        frameRate: 8,
        repeat: -1,
    });
    _gameThis.anims.create({
        key: "sw_child",
        frames: _gameThis.anims.generateFrameNumbers("Child", {
            frames: [0, 1, 2],
        }),
        frameRate: 8,
        repeat: -1,
    });
    _gameThis.anims.create({
        key: "sw_woman",
        frames: _gameThis.anims.generateFrameNumbers("Woman", {
            frames: [0, 1, 2],
        }),
        frameRate: 8,
        repeat: -1,
    });

    // test();
    //=====================================================================================================================================
    //=========== THE UPDATE CODE =========================================================================================================
} //====================================================================================================================================
function update() {
    //UpC++; if(UpC==58) UpC=0; if(UpC!=0) return; //<< FPS = Every 1 Second
    UpC++;
    if (UpC == 178) UpC = 0;
    if (UpC != 0) return; //<< FPS = Every 3 Seconds

    if (GameIsOver) return;
    Time_MN += 15;
    if (Time_MN == 60) {
        Time_MN = 0;
        Time += 1;
    }
    if (Time == 10) Time = 6; //Adjust <<TIMER>>..
    if (Time_MN < 10)
        TimeText.text = Time.toString() + " : 0" + Time_MN.toString();
    else TimeText.text = Time.toString() + " : " + Time_MN.toString();

    if (Time == 6 && Time_MN == 0) {
        //Man Time :
        Woman_a.y = 2600;
        Woman_a.stop();
        Panel.setFrame(1);
        Man_a.y = 600;
        Man_a.play("sw_man");
    }
    if (Time == 8 && Time_MN == 0) {
        //Children Time :
        Man_a.y = 2600;
        Man_a.stop();
        Panel.setFrame(2);
        Child_a.y = 600;
        Child_a.play("sw_child");
    }
    if (Time == 9 && Time_MN == 0) {
        //Women Time :
        Child_a.y = 2600;
        Child_a.stop();
        Panel.setFrame(3);
        Woman_a.y = 600;
        Woman_a.play("sw_woman");
    }
}
//=====================================================================================================================================
//================= WORK SPACE ========================================================================================================
//=====================================================================================================================================
async function start_Day() {
    if (run_) {
        //Welcome Animation :
        _gameThis.tweens.add({
            targets: Robot,
            y: 600,
            ease: "Power1",
            duration: 250,
            delay: 1000,
        });
        _gameThis.tweens.add({
            targets: Panel,
            y: 250,
            ease: "Power1",
            duration: 250,
            delay: 500,
        });
        //setTimeout(()=>{ say("Welcome..."); },2000);
        //setTimeout(()=>{ GameIsOver=false; },3000);
        GameIsOver = false;
    }
}

function next_person() {
    if (run_) {
        person_counter++;
        say("Welcome...");
        Robot.setFrame(0);
        Mark.y = 2700;

        IDs.setFrame(rand(8) - 1);
        //_gameThis.tweens.add({targets:IDs,y:800,ease:'Power1',duration:250,delay:1500});
        _gameThis.tweens.add({ targets: IDs, y: 600, ease: "Power1", duration: 250 });

        _gameThis.time.addEvent({
            delay: 1500,
            callback: function () {
                Robot.setFrame(1);
                say("Checking ID...");
            },
            callbackScope: _gameThis,
            loop: false,
        });
    }
}

function check_id() {
    if (run_) {
        let id = input_from_user(
            "The ID Belongs To A : \n ( man  Or  child  Or  woman ): "
        );
        return id;
    }
}

function allow_person() {
    if (run_) {
        say("You Are Allowed...");
        return_Id(0);
    }
}

function reject_person() {
    if (run_) {
        say("Not Allowed !!");
        return_Id(1);
    }
}

function return_Id(fr) {
    if (run_) {
        Mark.y = 700;
        Mark.setFrame(fr);
        setTimeout(() => {
            say("");
        }, 2000);
        setTimeout(() => {
            Mark.y = 2700;
        }, 3500);
        _gameThis.tweens.add({
            targets: IDs,
            y: 1400,
            ease: "Power1",
            duration: 250,
            delay: 3500,
        });
        if (Nb_Client == 5) {
            //Game Is finished :
            Woman_a.y = 2600;
            Woman_a.stop();
            Man_a.y = 2600;
            Man_a.stop();
            Child_a.y = 2600;
            Child_a.stop();
            _gameThis.tweens.add({
                targets: Robot,
                y: 1720,
                ease: "Power1",
                duration: 250,
                delay: 4000,
            });
            _gameThis.tweens.add({
                targets: Panel,
                y: -250,
                ease: "Power1",
                duration: 250,
                delay: 4500,
            });
            TimeText.text = "";
            GameIsOver = true;
        }
        Nb_Client = Nb_Client + 1;
    }
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
            if (key == "Child") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 768,
                    frameHeight: 394,
                });
            }
            if (key == "Man") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 768,
                    frameHeight: 394,
                });
            }
            if (key == "Woman") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 768,
                    frameHeight: 394,
                });
            }
            if (key == "IDs") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 493,
                    frameHeight: 391,
                });
            }
            if (key == "Mark") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 280,
                    frameHeight: 269,
                });
            }
            if (key == "Panel") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 1907,
                    frameHeight: 924,
                });
            }
            if (key == "Robot") {
                _gameThis.load.spritesheet(key, spritesImages[key], {
                    frameWidth: 449,
                    frameHeight: 640,
                });
            }
        }
    }
}

function game_over() {
    GameIsOver = true;
}

function say(str) {
    if (run_) setTimeout(() => {
        Middletext.setText(str);
    }, 1200);
}

function sleep(seconds) {
    if (run_) return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
}

function input_from_user(txt) {
    if (run_) return prompt(txt, "Enter Category Here");
}

function ShowError() {
    if (run_) {
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
}
// Re-initialize the game variables
function reInitValues() {
    run_ = false;
    is_completed = false;
    Id = "";
    Time = 6;
    Time_MN = 0;
    Nb_Client = 0;
    GameIsOver = true;
    person_counter = 0;
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

function final_check() {
    setTimeout(() => {
        if (person_counter >= 6) is_completed = true;
    }, 2500)
}

async function test() {
    start_Day();
    await sleep(3);
    for (Nb_Client = 0; Nb_Client <= 5; Nb_Client++) {
        next_person();
        await sleep(4);
        Id = check_id();
        await sleep(2);
        if (Time >= 6 && Time < 8) {
            if (Id == "man") allow_person();
            else {
                say("This time is only for men");
                reject_person();
            }
        }
        if (Time >= 8 && Time < 9) {
            if (Id == "child") allow_person();
            else {
                say("This time is only for children");
                reject_person();
            }
        }
        if (Time >= 9 && Time < 10) {
            if (Id == "woman") allow_person();
            else {
                say("This time is only for women");
                reject_person();
            }
        }
        await sleep(4);
    }
}

function getNoOfBlocks() {
    demoWorkspace = Blockly.getMainWorkspace();
    noOfBlocks = demoWorkspace.getAllBlocks();
    return noOfBlocks.length
}

const updateImports = ["from swimming_pool import *"]

const instruction = {
    "heading": "You are robot incharge of the swimming pool. 6am to 8am you is for men, 8am to 9am is for children and 9am to 10am is for women. You have to check the ID of the person and allow or reject accordingly",
    "steps": [
        {
            "checkbox": true,
            "rescue": true,
            "text": "Start the day",
            "title": "Open swimming pool",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "wait for 3 secs",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "Repeat 6 times, The following statements should function within the loop",
            "title": "6 customers are in the queue",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "Next person",
            "title": "Check ID",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "wait for 4 secs",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "set id as check_id",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "wait for 2 secs",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "If time is greater than or equal to 6 and time is less than 8,",
            "title": "Men timings",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "if id equals \"man\", allow, else say \"This time is only for men\", Reject",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "If time is greater than or equal to 8 and time is less than 9,",
            "title": "Children timings",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"06#6}X^9Q7I*BMmUx^Zg\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"y`=YmuWqr@tF+2biT2gi\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"+[+6EM,FUBt_68n3tg^j\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"P[tn3JDJ;r$mq)=Se:wm\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"d6x)MrOn8.-Y9U;_ox)3\"><field name=\"NUM\">8</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\":88r,wM)@D_6rbNfC(F}\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"@$zP5`F3EF8h^PM2el4v\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"TXRd9tXQWrsM:U-Ca4,u\"><field name=\"NUM\">9</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "if id equals \"child\", allow, else say \"This time is only for children\", Reject",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"06#6}X^9Q7I*BMmUx^Zg\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"y`=YmuWqr@tF+2biT2gi\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"+[+6EM,FUBt_68n3tg^j\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"P[tn3JDJ;r$mq)=Se:wm\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"d6x)MrOn8.-Y9U;_ox)3\"><field name=\"NUM\">8</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\":88r,wM)@D_6rbNfC(F}\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"@$zP5`F3EF8h^PM2el4v\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"TXRd9tXQWrsM:U-Ca4,u\"><field name=\"NUM\">9</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"zRA_VeE|=Gd7yna$^EK!\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"3R^:/C0GsaC6`,Ky(JMc\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"[fqm8r^u6T{969G9j7_)\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"TA_+VoDgLi)vGpvOM!uh\"><field name=\"TEXT\">child</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"*2vl9[nhH~9pB-3o8m@M\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XXr$Sd7.n26lu]lk?FLI\"><field name=\"say\">This time is only for children</field><next><block type=\"reject_block\" id=\"^XSSFQ{^n(;.iotySBDS\"></block></next></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "If time is greater than or equal to 9 and time is less than 10,",
            "title": "Women timings",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"06#6}X^9Q7I*BMmUx^Zg\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"y`=YmuWqr@tF+2biT2gi\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"+[+6EM,FUBt_68n3tg^j\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"P[tn3JDJ;r$mq)=Se:wm\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"d6x)MrOn8.-Y9U;_ox)3\"><field name=\"NUM\">8</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\":88r,wM)@D_6rbNfC(F}\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"@$zP5`F3EF8h^PM2el4v\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"TXRd9tXQWrsM:U-Ca4,u\"><field name=\"NUM\">9</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"zRA_VeE|=Gd7yna$^EK!\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"3R^:/C0GsaC6`,Ky(JMc\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"[fqm8r^u6T{969G9j7_)\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"TA_+VoDgLi)vGpvOM!uh\"><field name=\"TEXT\">child</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"*2vl9[nhH~9pB-3o8m@M\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XXr$Sd7.n26lu]lk?FLI\"><field name=\"say\">This time is only for children</field><next><block type=\"reject_block\" id=\"^XSSFQ{^n(;.iotySBDS\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"U!,-H%Pn+#]Mah_+J;C~\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"K1wT4$;H]u5g6pv=0ZQ3\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"CsNJ@),?;3,FIkZaKcsk\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"fvVwFa8Y*y6^12ToXzU*\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"rTlw.DB^0+?|/n}e4x3J\"><field name=\"NUM\">9</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"%2r-t?*#J$*N?O+u!`TI\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"[|0){FU)i!0-_LpSY4tF\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"u1o8Mh4H3~G:O[Qsk#u[\"><field name=\"NUM\">10</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "if id equals \"woman\", allow, else say \"This time is only for women\", Reject",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"06#6}X^9Q7I*BMmUx^Zg\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"y`=YmuWqr@tF+2biT2gi\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"+[+6EM,FUBt_68n3tg^j\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"P[tn3JDJ;r$mq)=Se:wm\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"d6x)MrOn8.-Y9U;_ox)3\"><field name=\"NUM\">8</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\":88r,wM)@D_6rbNfC(F}\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"@$zP5`F3EF8h^PM2el4v\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"TXRd9tXQWrsM:U-Ca4,u\"><field name=\"NUM\">9</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"zRA_VeE|=Gd7yna$^EK!\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"3R^:/C0GsaC6`,Ky(JMc\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"[fqm8r^u6T{969G9j7_)\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"TA_+VoDgLi)vGpvOM!uh\"><field name=\"TEXT\">child</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"*2vl9[nhH~9pB-3o8m@M\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XXr$Sd7.n26lu]lk?FLI\"><field name=\"say\">This time is only for children</field><next><block type=\"reject_block\" id=\"^XSSFQ{^n(;.iotySBDS\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"U!,-H%Pn+#]Mah_+J;C~\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"K1wT4$;H]u5g6pv=0ZQ3\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"CsNJ@),?;3,FIkZaKcsk\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"fvVwFa8Y*y6^12ToXzU*\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"rTlw.DB^0+?|/n}e4x3J\"><field name=\"NUM\">9</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"%2r-t?*#J$*N?O+u!`TI\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"[|0){FU)i!0-_LpSY4tF\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"u1o8Mh4H3~G:O[Qsk#u[\"><field name=\"NUM\">10</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"bIp49%U}wKmb(QoCTjpG\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"G+%VO[jMRg(MTlLCQ41Y\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"?$jZM%|U2*[KUYb_e]iA\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"t_;dRpF**w4J0yq)KaMO\"><field name=\"TEXT\">woman</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"W-^Yd)r/isEIyB!;*q[r\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XGXY$/EtmUp}z|a4L}kb\"><field name=\"say\">This time is only for women</field><next><block type=\"reject_block\" id=\"EO3Dv7x.Y-xU8!!~]%Qe\"></block></next></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
        },
        {
            "checkbox": true,
            "rescue": true,
            "text": "wait for 4 sec",
            "title": "Wait time before next customer",
            "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"single_action_block\" id=\"4mi:ejaljCD,GZV?@h;z\" x=\"-44\" y=\"-650\"><next><block type=\"wait_block\" id=\"Nz;qx.GWi3s2xph4,#|F\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"F==VlC/l*J8+8:v7/;37\"><field name=\"NUM\">3</field></block></value><next><block type=\"controls_repeat_ext\" id=\",vr?5iCooeyk^t(/.vvO\"><value name=\"TIMES\"><block type=\"math_number\" id=\"!yG^r:]O4No:zipi=E9!\"><field name=\"NUM\">6</field></block></value><statement name=\"DO\"><block type=\"repeated_action_block\" id=\"/Uq`D|:5ai|.EDq}_t//\"><next><block type=\"wait_block\" id=\"zG3LCqU9,)33}~^WH?W;\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"sn~PMMleL?UTY0pt4)$a\"><field name=\"NUM\">4</field></block></value><next><block type=\"variable_holder\" id=\"x^+0%4iNLZj(R{%g}_uw\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"action_block\" id=\"aIH-V9mZy9UFaWiYiN8r\"></block></value><next><block type=\"wait_block\" id=\"X:(aOJX:?rHu5jzJ5(]G\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"O_U^yIGIY1T`qbjZ(ErQ\"><field name=\"NUM\">2</field></block></value><next><block type=\"controls_if\" id=\"YqWs%p]D4Mbi[3:!4jwO\"><value name=\"IF0\"><block type=\"logic_operation\" id=\")#(KyOV$ypH)rfEQn$@4\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"PGX.pRKCD0s=-]3|x8Rs\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"Gnrx0^R=P,)`~b~sBLqg\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"AyFBMq5Gh7P`S)_F;!%C\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"@))CdmtJ3,0n0`|.#48]\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\",jS@nJgfTYZ9/1h?^E3t\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"Y@-k${=A-_Ma/h4U3xNp\"><field name=\"NUM\">8</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"]lunMBiGj8X%S[!p{wPY\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"nSsD``ave0c_t/_n)PBM\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"u]Mo!fk_]e[QIccQh?s=\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"Fgb.yV@tqK~P#?(D@Yt^\"><field name=\"TEXT\">man</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"A7t#)E[8a4:*l3a|v?pn\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"mwu_h]eE6oj`f[M`]f7.\"><field name=\"say\">This time is only for men</field><next><block type=\"reject_block\" id=\"6ms=]0aA$-C[zAqUTI0-\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"06#6}X^9Q7I*BMmUx^Zg\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"y`=YmuWqr@tF+2biT2gi\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"+[+6EM,FUBt_68n3tg^j\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"P[tn3JDJ;r$mq)=Se:wm\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"d6x)MrOn8.-Y9U;_ox)3\"><field name=\"NUM\">8</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\":88r,wM)@D_6rbNfC(F}\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"@$zP5`F3EF8h^PM2el4v\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"TXRd9tXQWrsM:U-Ca4,u\"><field name=\"NUM\">9</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"zRA_VeE|=Gd7yna$^EK!\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"3R^:/C0GsaC6`,Ky(JMc\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"[fqm8r^u6T{969G9j7_)\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"TA_+VoDgLi)vGpvOM!uh\"><field name=\"TEXT\">child</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"*2vl9[nhH~9pB-3o8m@M\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XXr$Sd7.n26lu]lk?FLI\"><field name=\"say\">This time is only for children</field><next><block type=\"reject_block\" id=\"^XSSFQ{^n(;.iotySBDS\"></block></next></block></statement></block></statement><next><block type=\"controls_if\" id=\"U!,-H%Pn+#]Mah_+J;C~\"><value name=\"IF0\"><block type=\"logic_operation\" id=\"K1wT4$;H]u5g6pv=0ZQ3\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\" id=\"CsNJ@),?;3,FIkZaKcsk\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables\" id=\"fvVwFa8Y*y6^12ToXzU*\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"rTlw.DB^0+?|/n}e4x3J\"><field name=\"NUM\">9</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\" id=\"%2r-t?*#J$*N?O+u!`TI\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables\" id=\"[|0){FU)i!0-_LpSY4tF\"><field name=\"Options\">option2</field></block></value><value name=\"B\"><block type=\"math_number\" id=\"u1o8Mh4H3~G:O[Qsk#u[\"><field name=\"NUM\">10</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\" id=\"bIp49%U}wKmb(QoCTjpG\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\" id=\"G+%VO[jMRg(MTlLCQ41Y\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables\" id=\"?$jZM%|U2*[KUYb_e]iA\"><field name=\"Options\">option1</field></block></value><value name=\"B\"><block type=\"text\" id=\"t_;dRpF**w4J0yq)KaMO\"><field name=\"TEXT\">woman</field></block></value></block></value><statement name=\"DO0\"><block type=\"secondary_action_block\" id=\"W-^Yd)r/isEIyB!;*q[r\"></block></statement><statement name=\"ELSE\"><block type=\"say_block\" id=\"XGXY$/EtmUp}z|a4L}kb\"><field name=\"say\">This time is only for women</field><next><block type=\"reject_block\" id=\"EO3Dv7x.Y-xU8!!~]%Qe\"></block></next></block></statement></block></statement><next><block type=\"wait_block\" id=\"2*%tu0)@;L~ZI%Ky#]MW\"><field name=\"NAME\">Wait for</field><value name=\"NAME\"><block type=\"math_number\" id=\"daMg}tHWW2wLQyFH]DEx\"><field name=\"NUM\">4</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
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
    start_Day,
    sleep,
    next_person,
    check_id,
    allow_person,
    say,
    reject_person,
    getNoOfBlocks,
    updateImports
}