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
const baseURL = "../img/images/bd835058-9e3c-48da-b4b9-943fd3f896fc";
const gameWidth = 1920;
const gameHeight = 1080;
const gameScale = 1;
const muteSound = false;

//============================================================================================
//========================================CONSTANT.JS=========================================
//============================================================================================
const GAME_CONSTANT = {
  point: { name: "point", type: "img", src: "point.png" },
  bg: { name: "bg", type: "img", src: "bg.png" },
  ui: { name: "ui", type: "img", src: "ui.png" },
  front_button1: {
    name: "front_button1",
    type: "img",
    src: "front_button.png",
  },
  front_button2: {
    name: "front_button2",
    type: "img",
    src: "front_button_click.png",
  },

  jump_button1: { name: "jump_button1", type: "img", src: "jump_button.png" },
  jump_button2: {
    name: "jump_button2",
    type: "img",
    src: "jump_button_click.png",
  },

  left_button1: { name: "left_button1", type: "img", src: "left_button.png" },
  left_button2: {
    name: "left_button2",
    type: "img",
    src: "left_button_click.png",
  },

  right_button1: {
    name: "right_button1",
    type: "img",
    src: "right_button.png",
  },
  right_button2: {
    name: "right_button2",
    type: "img",
    src: "right_button_click.png",
  },

  road1: { name: "road1", type: "img", src: "road_sequence/road0001.png" },
  road2: { name: "road2", type: "img", src: "road_sequence/road0002.png" },
  road3: { name: "road3", type: "img", src: "road_sequence/road0003.png" },
  road4: { name: "road4", type: "img", src: "road_sequence/road0004.png" },
  biker1: { name: "biker1", type: "img", src: "bike rider_01/biker0001.png" },
  biker2: { name: "biker2", type: "img", src: "bike rider_01/biker0002.png" },
  biker3: { name: "biker3", type: "img", src: "bike rider_03/biker0001.png" },
  biker4: { name: "biker4", type: "img", src: "bike rider_03/biker0002.png" },
  biker5: { name: "biker5", type: "img", src: "bike rider_02/biker0001.png" },
  biker6: { name: "biker6", type: "img", src: "bike rider_02/biker0002.png" },

  left_acc_1: {
    name: "left_acc_1",
    type: "img",
    src: "accident/left side/accident_0001.png",
  },
  left_acc_2: {
    name: "left_acc_2",
    type: "img",
    src: "accident/left side/accident_0002.png",
  },
  left_acc_3: {
    name: "left_acc_3",
    type: "img",
    src: "accident/left side/accident_0003.png",
  },
  left_acc_4: {
    name: "left_acc_4",
    type: "img",
    src: "accident/left side/accident_0004.png",
  },
  left_acc_5: {
    name: "left_acc_5",
    type: "img",
    src: "accident/left side/accident_0005.png",
  },
  left_acc_6: {
    name: "left_acc_6",
    type: "img",
    src: "accident/left side/accident_0006.png",
  },
  left_acc_7: {
    name: "left_acc_7",
    type: "img",
    src: "accident/left side/accident_0007.png",
  },
  left_acc_8: {
    name: "left_acc_8",
    type: "img",
    src: "accident/left side/accident_0008.png",
  },
  left_acc_9: {
    name: "left_acc_9",
    type: "img",
    src: "accident/left side/accident_0009.png",
  },
  left_acc_10: {
    name: "left_acc_10",
    type: "img",
    src: "accident/left side/accident_0010.png",
  },
  left_acc_11: {
    name: "left_acc_11",
    type: "img",
    src: "accident/left side/accident_0011.png",
  },
  left_acc_12: {
    name: "left_acc_12",
    type: "img",
    src: "accident/left side/accident_0012.png",
  },
  left_acc_13: {
    name: "left_acc_12",
    type: "img",
    src: "accident/left side/accident_0013.png",
  },

  right_acc_1: {
    name: "right_acc_1",
    type: "img",
    src: "accident/right side/accident_10001.png",
  },
  right_acc_2: {
    name: "right_acc_2",
    type: "img",
    src: "accident/right side/accident_10002.png",
  },
  right_acc_3: {
    name: "right_acc_3",
    type: "img",
    src: "accident/right side/accident_10003.png",
  },
  right_acc_4: {
    name: "right_acc_4",
    type: "img",
    src: "accident/right side/accident_10004.png",
  },
  right_acc_5: {
    name: "right_acc_5",
    type: "img",
    src: "accident/right side/accident_10005.png",
  },
  right_acc_6: {
    name: "right_acc_6",
    type: "img",
    src: "accident/right side/accident_10006.png",
  },
  right_acc_7: {
    name: "right_acc_7",
    type: "img",
    src: "accident/right side/accident_10007.png",
  },
  right_acc_8: {
    name: "right_acc_8",
    type: "img",
    src: "accident/right side/accident_10008.png",
  },
  right_acc_9: {
    name: "right_acc_9",
    type: "img",
    src: "accident/right side/accident_10009.png",
  },
  right_acc_10: {
    name: "right_acc_10",
    type: "img",
    src: "accident/right side/accident_10010.png",
  },
  right_acc_11: {
    name: "right_acc_11",
    type: "img",
    src: "accident/right side/accident_10011.png",
  },
  right_acc_12: {
    name: "right_acc_12",
    type: "img",
    src: "accident/right side/accident_10012.png",
  },
  right_acc_13: {
    name: "right_acc_13",
    type: "img",
    src: "accident/right side/accident_10013.png",
  },

  barrier: { name: "barrier", type: "img", src: "barrier.png" },
  hole: { name: "hole", type: "img", src: "pot_hole.png" },
  truck: { name: "truck", type: "img", src: "truck.png" },
  pole: { name: "pole", type: "img", src: "pole.png" },
  coin: {
    name: "coin",
    type: "spritesheet",
    src: "coin_spin.png",
    frameWidth: 115,
    frameHeight: 115,
    frameRate: 12,
    anims: {
      anim: { start: 0, end: 8, frames: null, repeat: -1 },
    },
  },
  cat: {
    name: "cat",
    type: "spritesheet",
    src: "cat_run.png",
    frameWidth: 125,
    frameHeight: 125,
    frameRate: 12,
    anims: {
      anim: { start: 0, end: 10, frames: null, repeat: -1 },
    },
  },
  puff: {
    name: "puff",
    type: "spritesheet",
    src: "puff.png",
    frameWidth: 78,
    frameHeight: 76,
    frameRate: 24,
    anims: {
      anim: { start: 1, end: 8, frames: null },
    },
  },
};

const SOUND_CONSTANT = {
  win: { name: "win", urls: ["sounds/win.mp3", "sounds/win.ogg"] },
  lose: { name: "lose", urls: ["sounds/lose.mp3", "sounds/lose.ogg"] },
  correct: {
    name: "correct",
    urls: ["sounds/correct.mp3", "sounds/correct.ogg"],
  },
  wrong: { name: "wrong", urls: ["sounds/wrong.mp3", "sounds/wrong.ogg"] },
  truck: { name: "truck", urls: ["sounds/truck.mp3", "sounds/truck.ogg"] },
  cat: { name: "cat", urls: ["sounds/cat.mp3", "sounds/cat.ogg"] },
  bike_jump: { name: "bike_jump", urls: ["sounds/bike_jump.mp3", "sounds/bike_jump.ogg"] },
  bike_run: { name: "bike_run", urls: ["sounds/bike_run.mp3", "sounds/bike_run.ogg"] },
  bike_max: { name: "bike_max", urls: ["sounds/bike_max.mp3", "sounds/bike_max.ogg"] }
};

const ERROR_MESSAGE = "Opps, Wrong!";
const CORRECT_MESSAGE = "Congrats, Correct!";

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
  //   if (tour.getCurrentStep().options.title === "Run and see what happens") {
  //     let btns = document.querySelectorAll(".shepherd-button");
  //     btns[btns.length - 1].click();
  //   }
  // } catch { }
}

// function helpCode() {
//   // tour.isActive() || tour.start()
//   var xml_wkspace =
//     '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_game" id="IZVB(=e:(YF*@.PR34Z!" x="-240" y="-224"><next><block type="variable_holder" id="]t6O2Vz3PS0~;g3w3M~{"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="$2^~InA16r[jTrlRoNHj"><field name="NUM">0</field></block></value><next><block type="forever_repeat_block" id="HD5n1(R5J`aQuF`xmCw["><statement name="NAME"><block type="controls_if" id="=_A7KBKmdabz{JR/oDl1"><mutation elseif="1"></mutation><value name="IF0"><block type="key_pressed" id="vhaYY0%#{2M5z53V;RY@"><field name="Biker">Left</field></block></value><statement name="DO0"><block type="move_block" id="o8Zr-4xWz4Aez4:s$7le"><field name="NAME">left</field></block></statement><value name="IF1"><block type="key_pressed" id="v!EH3btVolPjmv*6EUu^"><field name="Biker">Right</field></block></value><statement name="DO1"><block type="move_block" id="p@%]oB7u-O}_Yqm!Bxop"><field name="NAME">right</field></block></statement><next><block type="controls_if" id="(B`,tXS`O:#{dg5joZ6S"><value name="IF0"><block type="key_pressed" id="uoR;uk(iY~r32I00cj}q"><field name="Biker">Up</field></block></value><statement name="DO0"><block type="move_block" id="=0xEP4?$t-G`cy;$`;,("><field name="NAME">up</field></block></statement><next><block type="controls_if" id="TUno23|x^{bkClFa|snG"><value name="IF0"><block type="key_pressed" id="lD0!2.;NtkVAC7kEQdV1"><field name="Biker">Space</field></block></value><statement name="DO0"><block type="move_block" id="HcPf4q{[Yn?4)/0@L-G8"><field name="NAME">jump</field></block></statement><next><block type="controls_if" id="(AWL7Ub_wRU?3i)SM`hy"><value name="IF0"><block type="drop_down_list" id="m8^OX8Qu:=}N2?:hpuI9"><field name="Biker">coin</field></block></value><statement name="DO0"><block type="collect_coin" id="agqItQQ9?owJ}fibQh!N"><next><block type="change_variable_holder" id="RxfkZU$w~:1x#kR~aisM"><field name="Variable name">score</field><value name="NAME"><block type="math_number" id="{5RJ2k@-B2_3gr?c@7,{"><field name="NUM">2</field></block></value></block></next></block></statement><next><block type="controls_if" id="eore{%yL/-qJk=tNEsT2"><value name="IF0"><block type="drop_down_list" id="ey#T71jt?z`.qRg?Lk)~"><field name="Biker">obstacle</field></block></value><statement name="DO0"><block type="game_over" id="HZ:n%4{#W~GeO;vM+bV4"></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';
//   var xml = Blockly.Xml.textToDom(xml_wkspace);
//   demoWorkspace.clear();
//   Blockly.Xml.domToWorkspace(xml, demoWorkspace);
// }

// const helpCode = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_game" id="IZVB(=e:(YF*@.PR34Z!" x="-240" y="-224"><next><block type="variable_holder" id="]t6O2Vz3PS0~;g3w3M~{"><field name="Variable name">op1</field><value name="NAME"><block type="math_number" id="$2^~InA16r[jTrlRoNHj"><field name="NUM">0</field></block></value><next><block type="forever_repeat_block" id="HD5n1(R5J`aQuF`xmCw["><statement name="NAME"><block type="controls_if" id="=_A7KBKmdabz{JR/oDl1"><mutation elseif="1"></mutation><value name="IF0"><block type="key_pressed" id="vhaYY0%#{2M5z53V;RY@"><field name="Biker">Left</field></block></value><statement name="DO0"><block type="move_block" id="o8Zr-4xWz4Aez4:s$7le"><field name="NAME">left</field></block></statement><value name="IF1"><block type="key_pressed" id="v!EH3btVolPjmv*6EUu^"><field name="Biker">Right</field></block></value><statement name="DO1"><block type="move_block" id="p@%]oB7u-O}_Yqm!Bxop"><field name="NAME">right</field></block></statement><next><block type="controls_if" id="(B`,tXS`O:#{dg5joZ6S"><value name="IF0"><block type="key_pressed" id="uoR;uk(iY~r32I00cj}q"><field name="Biker">Up</field></block></value><statement name="DO0"><block type="move_block" id="=0xEP4?$t-G`cy;$`;,("><field name="NAME">up</field></block></statement><next><block type="controls_if" id="TUno23|x^{bkClFa|snG"><value name="IF0"><block type="key_pressed" id="lD0!2.;NtkVAC7kEQdV1"><field name="Biker">Space</field></block></value><statement name="DO0"><block type="move_block" id="HcPf4q{[Yn?4)/0@L-G8"><field name="NAME">jump</field></block></statement><next><block type="controls_if" id="(AWL7Ub_wRU?3i)SM`hy"><value name="IF0"><block type="drop_down_list" id="m8^OX8Qu:=}N2?:hpuI9"><field name="Biker">coin</field></block></value><statement name="DO0"><block type="collect_coin" id="agqItQQ9?owJ}fibQh!N"><next><block type="change_variable_holder" id="RxfkZU$w~:1x#kR~aisM"><field name="Variable name">score</field><value name="NAME"><block type="math_number" id="{5RJ2k@-B2_3gr?c@7,{"><field name="NUM">2</field></block></value></block></next></block></statement><next><block type="controls_if" id="eore{%yL/-qJk=tNEsT2"><value name="IF0"><block type="drop_down_list" id="ey#T71jt?z`.qRg?Lk)~"><field name="Biker">obstacle</field></block></value><statement name="DO0"><block type="game_over" id="HZ:n%4{#W~GeO;vM+bV4"></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>';

function myUpdateFunction(a) {
  var code = Blockly.Python.workspaceToCode(demoWorkspace);
  var import_statement = "from biker_run import *\n";
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
let GameOverText;
let ResultText;
let bg;
let road;
let biker;
let kmText;
let kmCounterText;
let keyUp;
let keyRight;
let keyLeft;
let keySpace;
let left_key_pressed;
let right_key_pressed;
let up_key_pressed;
let space_key_pressed;
let isJumping;
let speed = 1000;
let maxSpeed = 150;
let roadCounter = 0;
let obstacles = [];
let obsHistory = [];
let score = 0;
let puff;
let spawnDist = 4;
let is_biker_touching_coin;
let is_biker_touching_obstacle;

let upButton;
let jumpButton;
let leftButton;
let rightButton;

let firstTimeLoad = true;
let lesson_complete = false;
let game_started = false;

let winSfx = null;
let loseSfx = null;
let correctSfx = null;
let wrongSfx = null;
let truckSfx = null;
let catSfx = null;
let bikeStartSfx = null;
let bikeRunSfx = null;
let bikeMaxSfx = null;
let bikeJumpSfx = null;
let obstaclesCont;
let ui;
let scoreText;
//================= GAME VARIABLES ====================================================================================================
//=====================================================================================================================================

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
  physics: { default: "arcade", arcade: {} },
  scene: { preload: preload, create: create, update: update },
};
window['game'] = new Phaser.Game(config);

function preload() {
  _gameThis = this;
  _gameThis.load.setBaseURL(baseURL);
  _gameThis.sound.mute = muteSound;

  loadImages();

  loadSounds();
}

function create() {
  bg = this.add.image(gameWidth / 2, gameHeight / 2, "bg").setName("bg");

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

  this.anims.create({
    key: "road-move",
    frames: [
      { key: "road1" },
      { key: "road2" },
      { key: "road3" },
      { key: "road4" },
    ],
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "road-idle",
    frames: [{ key: "road1" }],
    frameRate: 1,
  });

  road = this.add.sprite(gameWidth * 0.5, gameHeight * 0.66, "road1");
  road.play("road-idle");
  road.on("animationrepeat", onRoadRepeat);
  road.on("animationupdate", onRoadUpdate);
  road.anims.msPerFrame = Math.max(maxSpeed, speed);

  this.anims.create({
    key: "biker-idle",
    frames: [{ key: "biker1" }],
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "biker-mid",
    frames: [{ key: "biker1" }, { key: "biker2" }],
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "biker-left",
    frames: [{ key: "biker3" }, { key: "biker4" }],
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "biker-right",
    frames: [{ key: "biker5" }, { key: "biker6" }],
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "biker-acc-left",
    frames: [
      { key: "left_acc_1" },
      { key: "left_acc_2" },
      { key: "left_acc_3" },
      { key: "left_acc_4" },
      { key: "left_acc_5" },
      { key: "left_acc_6" },
      { key: "left_acc_7" },
      { key: "left_acc_8" },
      { key: "left_acc_9" },
      { key: "left_acc_10" },
      { key: "left_acc_11" },
      { key: "left_acc_12" },
    ],
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "biker-acc-right",
    frames: [
      { key: "right_acc_1" },
      { key: "right_acc_2" },
      { key: "right_acc_3" },
      { key: "right_acc_4" },
      { key: "right_acc_5" },
      { key: "right_acc_6" },
      { key: "right_acc_7" },
      { key: "right_acc_8" },
      { key: "right_acc_9" },
      { key: "right_acc_10" },
      { key: "right_acc_11" },
      { key: "right_acc_12" },
    ],
    frameRate: 8,
    repeat: 0,
  });

  obstaclesCont = this.add.container(0, 0);

  biker = this.add.sprite(gameWidth * 0.4, gameHeight * 0.91, "biker1");
  biker.play("biker-mid");
  biker.lane = "mid";
  biker.setScale(0.5, 0.5);

  ui = this.add.image(gameWidth * 0.8, gameHeight * 0.85, "ui").setName("ui");
  upButton = this.add.image(gameWidth * 0.66, gameHeight * 0.87, "front_button1");
  upButton.setInteractive();
  upButton.on('pointerdown', function () {
    keyUp.isDown = true;
  });
  upButton.on('pointerup', function () {
    keyUp.isDown = false;
  });

  jumpButton = this.add.image(gameWidth * 0.9, gameHeight * 0.87, "jump_button1");
  jumpButton.setInteractive();
  jumpButton.on('pointerdown', function () {
    keySpace.isDown = true;
  });
  jumpButton.on('pointerup', function () {
    keySpace.isDown = false;
  });

  leftButton = this.add.image(gameWidth * 0.73, gameHeight * 0.87, "left_button1");
  leftButton.setInteractive();
  leftButton.on('pointerdown', function () {
    keyLeft.isDown = true;
  });
  leftButton.on('pointerup', function () {
    keyLeft.isDown = false;
  });

  rightButton = this.add.image(gameWidth * 0.8, gameHeight * 0.87, "right_button1");
  rightButton.setInteractive();
  rightButton.on('pointerdown', function () {
    keyRight.isDown = true;
  });
  rightButton.on('pointerup', function () {
    keyRight.isDown = false;
  });

  kmCounterText = _gameThis.add.text(
    gameWidth * 0.75,
    gameHeight * 0.77,
    "00",
    {
      font: "40px Arial",
      fill: "#ff0000",
    }
  );
  kmCounterText.setOrigin(0.5, 0.5);

  kmText = _gameThis.add.text(gameWidth * 0.784, gameHeight * 0.77, "KM", {
    font: "30px Arial",
    fill: "#ffffff",
  });
  kmText.setOrigin(0.5, 0.5);

  scoreText = _gameThis.add.text(
    gameWidth * 0.1,
    gameHeight * 0.07,
    "SCORE: 0",
    {
      font: "50px Arial",
      fill: "#ffffff",
    }
  );
  scoreText.setOrigin(0.5, 0.5);

  MiddleText = _gameThis.add.text(gameWidth / 2, 850, "", {
    font: "bold 68px Arial",
    fill: "#ffffff",
    stroke: "#000000",
    strokeThickness: 12,
  });
  MiddleText.setOrigin(0.5, 0.5);

  GameOverText = _gameThis.add.text(gameWidth / 2, 100, "Game Over", {
    font: "bold 68px Arial",
    fill: "#ffffff",
    stroke: "#000000",
    strokeThickness: 12,
  });
  GameOverText.setOrigin(0.5, 0.5);
  GameOverText.visible = false;

  ResultText = _gameThis.add.text(gameWidth / 2, 100, "", {
    font: "bold 68px Arial",
    fill: "#ffffff",
    stroke: "#000000",
    strokeThickness: 12,
  });
  ResultText.setOrigin(0.5, 0.5);
  ResultText.visible = false;

  //=====================================================================================================================================
  //============ ADDING SOUNDS ========================================================================================================
  //=====================================================================================================================================

  winSfx = this.sound.add("win", { loop: false });
  loseSfx = this.sound.add("lose", { loop: false });
  wrongSfx = this.sound.add("wrong", { loop: false });
  correctSfx = this.sound.add("correct", { loop: false });
  truckSfx = this.sound.add("truck", { loop: false });
  catSfx = this.sound.add("cat", { loop: false });
  bikeJumpSfx = this.sound.add("bike_jump", { loop: false });
  bikeRunSfx = this.sound.add("bike_run", { loop: false });
  bikeMaxSfx = this.sound.add("bike_max", { loop: true });

  //=====================================================================================================================================
  //============ INPUTS ========================================================================================================
  //=====================================================================================================================================
  keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

//=====================================================================================================================================
//=========== THE UPDATE CODE =========================================================================================================
//=====================================================================================================================================
async function update() {
  if (GameIsOver) return;
  update_beginning_code();
  if (left_key_pressed) {
    move_left();
  } else if (right_key_pressed) {
    move_right();
  }
  if (up_key_pressed) {
    move_up();
  }
  if (keySpace.isDown) {
    jump();
  }
  if (is_biker_touching_coin) {
    collect_coin();
  }
  if (is_biker_touching_obstacle) {
    game_over();
  }
  update_ending_code();
}

function update_beginning_code() {
  if (keyLeft.isDown) {
    left_key_pressed = true;
    if (leftButton.texture.key != "left_button2") {
      leftButton.setTexture("left_button2");
    }
  } else {
    left_key_pressed = false;
    if (leftButton.texture.key != "left_button1") {
      leftButton.setTexture("left_button1");
    }
  }

  if (keyRight.isDown) {
    right_key_pressed = true;
    if (rightButton.texture.key != "right_button2") {
      rightButton.setTexture("right_button2");
    }
  } else {
    right_key_pressed = false;
    if (rightButton.texture.key != "right_button1") {
      rightButton.setTexture("right_button1");
    }
  }

  if (keySpace.isDown) {
    space_key_pressed = true;
    if (jumpButton.texture.key != "jump_button2") {
      jumpButton.setTexture("jump_button2");
    }
  } else {
    space_key_pressed = false;

    if (jumpButton.texture.key != "jump_button1") {
      jumpButton.setTexture("jump_button1");
    }
  }

  if (keyUp.isDown) {
    up_key_pressed = true;

    if (upButton.texture.key != "front_button2") {
      upButton.setTexture("front_button2");
    }
  } else {
    up_key_pressed = false;

    if (bikeRunSfx.isPlaying) {
      bikeRunSfx.stop();
    }

    if (speed < 1000 && !bikeMaxSfx.isPlaying) {
      bikeMaxSfx.play();
    }
    if (upButton.texture.key != "front_button1") {
      upButton.setTexture("front_button1");
    }
  }

  if (bikeMaxSfx.isPlaying) {
    bikeMaxSfx.volume = 1 - (speed / 1000);
  }
}

function update_ending_code() {
  if (!left_key_pressed && !right_key_pressed) {
    if (biker.anims.currentAnim.key != "biker-mid") {
      biker.play("biker-mid");
      biker.anims.msPerFrame = speed;
    }
  }

  if (!up_key_pressed) {
    if (bikeRunSfx.isPlaying) {
      bikeRunSfx.stop();
    }
    speed += 3;
    if (speed > 1000) {
      speed = 1000;

      road.play("road-idle");
    }

    road.anims.msPerFrame = Math.max(maxSpeed, speed);
    biker.anims.msPerFrame = speed;

    kmCounterText.setText(Math.floor((1000 - speed) / 4));
  }

  if (
    biker.anims.currentAnim.key != "biker-mid" &&
    !left_key_pressed &&
    !right_key_pressed
  ) {
    biker.play("biker-mid");
    biker.anims.msPerFrame = speed;
  }
}
//=====================================================================================================================================
//================ NEW METHODS ========================================================================================================
//=====================================================================================================================================
function start_game() {
  reset_output();
}

function set_score(val) {
  score = val;

  if (score == 50) {
    lesson_complete = true;

    game_over();
  }

  scoreText.setText("SCORE: " + score);

  if (score % 10 == 0) {
    // increase speed
    maxSpeed -= 50;
    spawnDist += 2;

    if (maxSpeed <= 40) {
      maxSpeed = 40;
      spawnDist = 8;
    }
  }
}

function move_left() {
  if (speed == 1000) return;

  if (biker.anims.currentAnim.key != "biker-left") {
    biker.play("biker-left");
    biker.anims.msPerFrame = speed;
  }

  let tween = _gameThis.scene.scene.add.tween({
    targets: biker,
    duration: 300,
    x: gameWidth * 0.34,
    onComplete: function () {
      biker.lane = "left";
    },
  });
}

function move_right() {
  if (speed == 1000) return;

  if (biker.anims.currentAnim.key != "biker-right") {
    biker.play("biker-right");
    biker.anims.msPerFrame = speed;
  }

  let tween = _gameThis.scene.scene.add.tween({
    targets: biker,
    duration: 300,
    x: gameWidth * 0.45,
    onComplete: function () {
      biker.lane = "right";
    },
  });
}

function move_up() {
  if (road.anims.currentAnim.key != "road-move") {
    road.play("road-move");
  }

  if (
    biker.anims.currentAnim.key != "biker-mid" &&
    !left_key_pressed &&
    !right_key_pressed
  ) {
    biker.play("biker-mid");
  }

  if (!bikeRunSfx.isPlaying) {
    if (speed == 1000) {
      bikeRunSfx.play();
    } else if (!bikeMaxSfx.isPlaying) {
      bikeMaxSfx.play();
    }
  }

  bikeMaxSfx.volume = 1 - (speed / 1000);

  speed -= 5;
  if (speed < maxSpeed) {
    speed = maxSpeed;
  }

  road.anims.msPerFrame = speed;
  biker.anims.msPerFrame = speed;
  kmCounterText.setText(Math.floor((1000 - speed) / 4));
}

function jump() {
  if (isJumping) return;

  isJumping = true;

  biker.play("biker-mid");

  bikeJumpSfx.play();

  var timeline = _gameThis.scene.scene.tweens.createTimeline();
  timeline.add({
    targets: biker,
    duration: 250,
    y: gameHeight * 0.8,
    ease: Phaser.Math.Easing.Back.Out,
  });

  timeline.add({
    targets: biker,
    duration: 250,
    y: gameHeight * 0.91,
    ease: Phaser.Math.Easing.Quadratic.In,
    onComplete: function () {
      isJumping = false;
    },
  });

  timeline.play();
}

function onRoadRepeat() {
  if (obstacles.length == 0)
    if (++roadCounter % spawnDist == 0) {
      spawnObstacle();
    } else if (roadCounter % (spawnDist * 0.5) == 0) {
      spawnCoin();
    }
}

function onRoadUpdate() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].updateCurvePos();
  }
}

function collect_coin() {
  is_biker_touching_coin = false;

  set_score(score + 2);

  correctSfx.play();
}

function bike_touches(val) {
  switch (val) {
    case "coin":
      is_biker_touching_coin = true;
      break;
    case "obstacle":
      is_biker_touching_obstacle = true;

      biker.play(biker.lane == "left" ? "biker-acc-left" : "biker-acc-right");

      let tween = _gameThis.scene.scene.add.tween({
        targets: biker,
        duration: 300,
        x: gameWidth * 0.4,
      });

      puff = initAnim("puff");
      puff.setScale(2, 2);
      puff.setPosition(biker.x, biker.y);
      puff.play("anim");
      puff.on("animationcomplete", puff.destroy);
      break;
    default:
      // game over
      game_over();
  }
}

function game_over() {
  if (GameIsOver) return;

  _gameThis.scene.scene.input.keyboard.removeAllKeys(true);

  GameIsOver = true;
  is_biker_touching_obstacle = false;

  road.play("road-idle");
  // biker.play('biker-idle');

  if (bikeJumpSfx.isPlaying) bikeJumpSfx.stop();
  if (bikeMaxSfx.isPlaying) bikeMaxSfx.stop();
  if (bikeRunSfx.isPlaying) bikeRunSfx.stop();

  GameOverText.visible = true;
  GameOverText.y = -gameHeight * 0.2;

  ResultText.visible = true;
  ResultText.y = -gameHeight * 0.2;
  ResultText.setText(lesson_complete ? "YOU WIN!" : "YOU LOSE!");

  lesson_complete ? winSfx.play() : loseSfx.play();

  var timeline = _gameThis.scene.scene.tweens.createTimeline();
  timeline.add({
    targets: GameOverText,
    duration: 500,
    y: 100,
    ease: Phaser.Math.Easing.Back.Out,
  });

  timeline.add({
    targets: ResultText,
    duration: 500,
    y: 300,
    ease: Phaser.Math.Easing.Back.Out,
  });

  timeline.play();
}

function spawnObstacle() {
  let rand = Math.random();

  let leftPoints = [
    { x: 554, y: 788 },
    { x: 623, y: 891 },
    { x: 638, y: 925 },
    { x: 662, y: 1175 },
  ];
  let rightPoints = [
    { x: 559, y: 771 },
    { x: 723, y: 921 },
    { x: 789, y: 983 },
    { x: 974, y: 1175 },
  ];

  let lane = rand > 0.5 ? "left" : "right";
  let points = lane == "left" ? leftPoints : rightPoints;
  let curve = new Phaser.Curves.CubicBezier(
    points[0],
    points[1],
    points[2],
    points[3]
  );

  let obstacle = null;
  do {
    if (obstacle) {
      obstacle.destroy();
    }

    rand = Math.random();
    if (rand < 0.2) {
      obstacle = _gameThis.add.sprite(points[0].x, points[0].y, "barrier");
      obstacle.maxScale = 1.3;
      obstacle.name = "barrier";
      obstacle.setOrigin(0.5, 1);
    } else if (rand < 0.4) {
      obstacle = _gameThis.add.sprite(points[0].x, points[0].y, "truck");
      obstacle.maxScale = 1.25;
      obstacle.setOrigin(0.5, 1);
      obstacle.name = "truck";
      truckSfx.play();
    } else if (rand < 0.6) {
      obstacle = _gameThis.add.sprite(points[0].x, points[0].y, "hole");
      obstacle.maxScale = 0.6;
      obstacle.name = "hole";
    } else if (rand < 0.8) {
      obstacle = initAnim("cat");
      obstacle.maxScale = 1;
      obstacle.name = "cat";
      obstacle.anims.play("anim");
      obstacle.setOrigin(0.5, 1);
      catSfx.play();
    } else {
      obstacle = _gameThis.add.sprite(points[0].x, points[0].y, "pole");
      obstacle.maxScale = 1;
      obstacle.setOrigin(0.5, 1.15);
      obstacle.name = "pole";
    }
  } while (obsHistory.indexOf(obstacle.name) > -1);

  obsHistory.push(obstacle.name);

  if (obsHistory.length == 3) {
    obsHistory.shift();
  }

  obstacle.lane = lane;
  obstacle.curve = curve;
  obstacle.val = 0;
  obstacle.setScale(0.01, 0.01);

  obstacle.updateCurvePos = function () {
    this.val += 0.03;
    var position = this.curve.getPoint(this.val);
    this.x = position.x;
    this.y = position.y;

    let scale = this.maxScale * this.val;
    this.setScale(this.lane == "left" ? -scale : scale, scale);

    if (this.val >= 0.9) {
      if (this.lane == biker.lane || biker.lane == "mid") {
        if (
          this.name == "barrier" ||
          this.name == "hole" ||
          this.name == "cat"
        ) {
          if (!isJumping) {
            bike_touches("obstacle");
          } else {
            obstacles.splice(obstacles.indexOf(this), 1);
            obstaclesCont.remove(this);
            this.destroy();
          }
        } else if (this.name == "pole") {
          if (biker.anims.currentAnim.key == "biker-mid") {
            bike_touches("obstacle");
          } else {
            obstacles.splice(obstacles.indexOf(this), 1);
            obstaclesCont.remove(this);
            this.destroy();
          }
        } else {
          bike_touches("obstacle");
        }
      } else {
        obstacles.splice(obstacles.indexOf(this), 1);
        obstaclesCont.remove(this);
        this.destroy();
      }
    }
  };

  obstacles.push(obstacle);
  obstaclesCont.add(obstacles);
}

function spawnCoin() {
  let rand = Math.random();

  let leftPoints = [
    { x: 554, y: 788 },
    { x: 623, y: 891 },
    { x: 638, y: 925 },
    { x: 662, y: 1175 },
  ];
  let rightPoints = [
    { x: 559, y: 771 },
    { x: 723, y: 921 },
    { x: 789, y: 983 },
    { x: 934, y: 1175 },
  ];

  let lane = rand > 0.5 ? "left" : "right";
  let points = lane == "left" ? leftPoints : rightPoints;
  let curve = new Phaser.Curves.CubicBezier(
    points[0],
    points[1],
    points[2],
    points[3]
  );

  rand = Math.random();

  let obstacle = initAnim("coin");
  obstacle.maxScale = 0.8;
  obstacle.name = "coin";
  obstacle.anims.play("anim");
  obstacle.setOrigin(0.5, 1);

  obstacle.lane = lane;
  obstacle.curve = curve;
  obstacle.val = 0;
  obstacle.setScale(0.01, 0.01);
  obstacle.collided = false;

  obstacle.updateCurvePos = function () {
    if (this.collided) return;

    this.val += 0.03;
    var position = this.curve.getPoint(this.val);
    this.x = position.x;
    this.y = position.y - 10;

    let scale = this.maxScale * this.val;
    this.setScale(scale, scale);

    if (this.val >= 0.9) {
      if (this.lane == biker.lane || biker.lane == "mid") {
        if (!isJumping) {
          this.collided = true;
          bike_touches("coin");

          let tween = _gameThis.scene.scene.add.tween({
            targets: this,
            duration: 500,
            x: gameWidth * 0.15,
            y: gameHeight * 0.09,
            callbackScope: this,
            onComplete: function () {
              obstacles.splice(obstacles.indexOf(this), 1);
              obstaclesCont.remove(this);
              this.destroy();
            },
          });
        } else {
          obstacles.splice(obstacles.indexOf(this), 1);
          obstaclesCont.remove(this);
          this.destroy();
        }
      } else {
        obstacles.splice(obstacles.indexOf(this), 1);
        obstaclesCont.remove(this);
        this.destroy();
      }
    }
  };

  obstacles.push(obstacle);
  obstaclesCont.add(obstacles);
}

function say(str) {
  MiddleText.setText(str);
  MiddleText.visible = true;
  MiddleText.y = gameHeight * 1.2;

  var timeline = _gameThis.scene.scene.tweens.createTimeline();
  timeline.add({
    targets: MiddleText,
    duration: 500,
    y: 850,
    ease: Phaser.Math.Easing.Back.Out,
  });

  timeline.add({
    targets: MiddleText,
    duration: 500,
    y: gameHeight * 1.2,
    delay: 2000,
    ease: Phaser.Math.Easing.Back.In,
  });

  timeline.play();
}

function hideSay() {
  let tween = _gameThis.scene.scene.add.tween({
    targets: target,
    duration: 100,
    alpha: to,
    onComplete: function () {
      target.visible = target.alpha != 0;

      evaluate_task();
      callback();
    },
    onUpdate: function (tween, target) {
      target.pl.alpha = target.alpha;
      target.leftPl.alpha = target.alpha;
      target.rightPl.alpha = target.alpha;
    },
  });
  MiddleText.visible = false;
}

async function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
}

function test() {
  start_game();
}
//=====================================================================================================================================
//=====================================================================================================================================
function loadImages() {
  for (const key in GAME_CONSTANT) {
    let item = GAME_CONSTANT[key];
    switch (item.type) {
      case "img":
        _gameThis.scene.scene.load.image(item.name, item.src);
        break;
      case "spritesheet":
        _gameThis.scene.scene.load.spritesheet(item.name, item.src, {
          frameWidth: item.frameWidth,
          frameHeight: item.frameHeight,
        });
        break;
    }
  }
}

function loadSounds() {
  for (const key in SOUND_CONSTANT) {
    let item = SOUND_CONSTANT[key];

    _gameThis.scene.scene.load.audio(key, item.urls, { instances: 1 });
  }
}

function initAnim(texture) {
  let sprite = _gameThis.scene.scene.add.sprite(0, 0, texture);
  for (const key in GAME_CONSTANT[texture].anims) {
    let anim = GAME_CONSTANT[texture].anims[key];

    sprite.anims.create({
      key: key,
      frames:
        anim.frames != null
          ? this.anims.generateFrameNumbers(GAME_CONSTANT[texture].name, {
            frames: anim.frames,
          })
          : _gameThis.scene.scene.anims.generateFrameNumbers(texture, {
            start: anim.start,
            end: anim.end,
          }),
      frameRate: GAME_CONSTANT[texture].frameRate,
      repeat: anim.repeat,
    });
  }

  return sprite;
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
  game_started = false;

  isJumping = false;
  is_biker_touching_coin = false;
  is_biker_touching_obstacle = false;
  lesson_complete = false;
  speed = 1000;
  maxSpeed = 150;
  roadCounter = 0;
  spawnDist = 4;
  biker.lane = "mid";

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstaclesCont.remove(obstacles[i]);
    obstacles[i].destroy();
    obstacles.splice(i, 1);
  }

  obstacles = [];
  obsHistory = [];

  GameOverText.y = -gameHeight * 0.2;

  _gameThis.scene.scene.tweens.killAll();
}

function reset_output() {
  reInitValues();
  _gameThis.scene.restart();
}

function getNoOfBlocks() {
  demoWorkspace = Blockly.getMainWorkspace();
  noOfBlocks = demoWorkspace.getAllBlocks();
  return noOfBlocks.length
}

const updateImports = ["from biker_run import *"]

const instruction = {
  "heading": "Bike Run Game. Collect coins, don't collide with obstacles. Nagivate around them or jump over them.",
  "steps": [
    {
      "checkbox": true,
      "rescue": true,
      "text": "Start_game",
      "title": "Start game",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "set score as 0",
      "title": "Initialize Variables",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "The following statements should function within the loop",
      "title": "Repeat Forever",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "if left_key_is_pressed, Move left",
      "title": "Movements - Logic",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "else if right_key_is_pressed, Move right",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement><value name=\"IF1\"><block type=\"key_pressed\" id=\"v!EH3btVolPjmv*6EUu^\"><field name=\"Biker\">Right</field></block></value><statement name=\"DO1\"><block type=\"move_block\" id=\"p@%]oB7u-O}_Yqm!Bxop\"><field name=\"NAME\">right</field></block></statement></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "If up_key_is_pressed, Move Forward",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement><value name=\"IF1\"><block type=\"key_pressed\" id=\"v!EH3btVolPjmv*6EUu^\"><field name=\"Biker\">Right</field></block></value><statement name=\"DO1\"><block type=\"move_block\" id=\"p@%]oB7u-O}_Yqm!Bxop\"><field name=\"NAME\">right</field></block></statement><next><block type=\"controls_if\" id=\"(B`,tXS`O:#{dg5joZ6S\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"uoR;uk(iY~r32I00cj}q\"><field name=\"Biker\">Up</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"=0xEP4?$t-G`cy;$`;,(\"><field name=\"NAME\">up</field></block></statement></block></next></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "if space_key_is_pressed, Jump",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement><value name=\"IF1\"><block type=\"key_pressed\" id=\"v!EH3btVolPjmv*6EUu^\"><field name=\"Biker\">Right</field></block></value><statement name=\"DO1\"><block type=\"move_block\" id=\"p@%]oB7u-O}_Yqm!Bxop\"><field name=\"NAME\">right</field></block></statement><next><block type=\"controls_if\" id=\"(B`,tXS`O:#{dg5joZ6S\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"uoR;uk(iY~r32I00cj}q\"><field name=\"Biker\">Up</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"=0xEP4?$t-G`cy;$`;,(\"><field name=\"NAME\">up</field></block></statement><next><block type=\"controls_if\" id=\"TUno23|x^{bkClFa|snG\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"lD0!2.;NtkVAC7kEQdV1\"><field name=\"Biker\">Space</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"HcPf4q{[Yn?4)/0@L-G8\"><field name=\"NAME\">jump</field></block></statement></block></next></block></next></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "If bike touches coin, collect coin, change score by 2",
      "title": "Collect coins",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement><value name=\"IF1\"><block type=\"key_pressed\" id=\"v!EH3btVolPjmv*6EUu^\"><field name=\"Biker\">Right</field></block></value><statement name=\"DO1\"><block type=\"move_block\" id=\"p@%]oB7u-O}_Yqm!Bxop\"><field name=\"NAME\">right</field></block></statement><next><block type=\"controls_if\" id=\"(B`,tXS`O:#{dg5joZ6S\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"uoR;uk(iY~r32I00cj}q\"><field name=\"Biker\">Up</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"=0xEP4?$t-G`cy;$`;,(\"><field name=\"NAME\">up</field></block></statement><next><block type=\"controls_if\" id=\"TUno23|x^{bkClFa|snG\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"lD0!2.;NtkVAC7kEQdV1\"><field name=\"Biker\">Space</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"HcPf4q{[Yn?4)/0@L-G8\"><field name=\"NAME\">jump</field></block></statement><next><block type=\"controls_if\" id=\"(AWL7Ub_wRU?3i)SM`hy\"><value name=\"IF0\"><block type=\"drop_down_list\" id=\"m8^OX8Qu:=}N2?:hpuI9\"><field name=\"Biker\">coin</field></block></value><statement name=\"DO0\"><block type=\"collect_coin\" id=\"agqItQQ9?owJ}fibQh!N\"><next><block type=\"change_variable_holder\" id=\"RxfkZU$w~:1x#kR~aisM\"><field name=\"Variable name\">score</field><value name=\"NAME\"><block type=\"math_number\" id=\"{5RJ2k@-B2_3gr?c@7,{\"><field name=\"NUM\">2</field></block></value></block></next></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": true,
      "rescue": true,
      "text": "If bike touches obstacle, game_over",
      "title": "Game over",
      "workspace": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start_game\" id=\"IZVB(=e:(YF*@.PR34Z!\" x=\"-240\" y=\"-224\"><next><block type=\"variable_holder\" id=\"]t6O2Vz3PS0~;g3w3M~{\"><field name=\"Variable name\">op1</field><value name=\"NAME\"><block type=\"math_number\" id=\"$2^~InA16r[jTrlRoNHj\"><field name=\"NUM\">0</field></block></value><next><block type=\"forever_repeat_block\" id=\"HD5n1(R5J`aQuF`xmCw[\"><statement name=\"NAME\"><block type=\"controls_if\" id=\"=_A7KBKmdabz{JR/oDl1\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"key_pressed\" id=\"vhaYY0%#{2M5z53V;RY@\"><field name=\"Biker\">Left</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"o8Zr-4xWz4Aez4:s$7le\"><field name=\"NAME\">left</field></block></statement><value name=\"IF1\"><block type=\"key_pressed\" id=\"v!EH3btVolPjmv*6EUu^\"><field name=\"Biker\">Right</field></block></value><statement name=\"DO1\"><block type=\"move_block\" id=\"p@%]oB7u-O}_Yqm!Bxop\"><field name=\"NAME\">right</field></block></statement><next><block type=\"controls_if\" id=\"(B`,tXS`O:#{dg5joZ6S\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"uoR;uk(iY~r32I00cj}q\"><field name=\"Biker\">Up</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"=0xEP4?$t-G`cy;$`;,(\"><field name=\"NAME\">up</field></block></statement><next><block type=\"controls_if\" id=\"TUno23|x^{bkClFa|snG\"><value name=\"IF0\"><block type=\"key_pressed\" id=\"lD0!2.;NtkVAC7kEQdV1\"><field name=\"Biker\">Space</field></block></value><statement name=\"DO0\"><block type=\"move_block\" id=\"HcPf4q{[Yn?4)/0@L-G8\"><field name=\"NAME\">jump</field></block></statement><next><block type=\"controls_if\" id=\"(AWL7Ub_wRU?3i)SM`hy\"><value name=\"IF0\"><block type=\"drop_down_list\" id=\"m8^OX8Qu:=}N2?:hpuI9\"><field name=\"Biker\">coin</field></block></value><statement name=\"DO0\"><block type=\"collect_coin\" id=\"agqItQQ9?owJ}fibQh!N\"><next><block type=\"change_variable_holder\" id=\"RxfkZU$w~:1x#kR~aisM\"><field name=\"Variable name\">score</field><value name=\"NAME\"><block type=\"math_number\" id=\"{5RJ2k@-B2_3gr?c@7,{\"><field name=\"NUM\">2</field></block></value></block></next></block></statement><next><block type=\"controls_if\" id=\"eore{%yL/-qJk=tNEsT2\"><value name=\"IF0\"><block type=\"drop_down_list\" id=\"ey#T71jt?z`.qRg?Lk)~\"><field name=\"Biker\">obstacle</field></block></value><statement name=\"DO0\"><block type=\"game_over\" id=\"HZ:n%4{#W~GeO;vM+bV4\"></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>"
    },
    {
      "checkbox": null,
      "rescue": null,
      "text": "Press up key to accelerate, left and right keys to change lanes, spacebar to jump. Collect coins to increase the score. Don't collide with obstacles or you lose the game. Nagivate around them or jump over them. Play with your friends and see who has the highest score!",
      "title": "Instructions to play the game",
      "workspace": null
    }
  ]
};
//=====================================================================================================================================
//=====================================================================================================================================

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
  say,
  set_score,
  left_key_pressed,
  right_key_pressed,
  up_key_pressed,
  space_key_pressed,
  is_biker_touching_coin,
  is_biker_touching_obstacle,
  move_left,
  // move_rightmove_left,
  // move_upmove_left,
  // jumpmove_left,
  // biker_touches,
  // collect_coinmove_left,
  // game_overmove_left,
  // update_beginning_codemove_left,
  // update_ending_codemove_left,
  getNoOfBlocks,
  updateImports,
  update,
  preload,
  create,
  gameHeight,
  gameWidth,
  repeat_forever_flag,
}
