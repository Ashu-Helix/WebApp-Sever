import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

import {
  update,
  preload,
  create,
  gameHeight,
  gameWidth,
  repeat_forever_flag
} from "./main"

// ==================================================================================================================
// Game blocks
// ==================================================================================================================
// Forever repeat block

Blockly.Blocks["forever_repeat_block"] = {
  init: function () {
    this.appendDummyInput().appendField("Repeat forever");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["forever_repeat_block"] = function (block) {
  var branch = Blockly.JavaScript.statementToCode(block, "NAME");
  // console.log('okoknow',branch)
  var code =
    `update = () => { if (GameIsOver) return;\nupdate_beginning_code ();\n` +
    branch +
    `update_ending_code ();\n}`;
  //"update = ()=>{ListenTospaceKeyEvent=false; if (WorldIsMoving) {MoveWorld();  "+branch+"; if(keySpace.isDown){Fly();} else if(keySpace.isUp){Fall();}}}";

  if (repeat_forever_flag) {
    eval(code);
    window['game'].destroy();
    document.getElementById("sprite-container").innerHTML = "";
    let config = {
      type: Phaser.AUTO,
      width: gameWidth,
      height: gameHeight,
      backgroundColor: "#eeeeee",
      parent: "sprite-container",
      canvasStyle: `width: 100%;
      object-fit: revert;
      aspect-ratio: 738 / 436;`,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };
    window['game'] = new Phaser.Game(config);
  }
  return code;
};
Blockly.Python["forever_repeat_block"] = function (block) {
  var branch = Blockly.Python.statementToCode(block, "NAME");
  var code = "while True:\n" + branch;
  return code;
};

// Variable holder
Blockly.Blocks["variable_holder"] = {
  init: function () {
    this.appendValueInput("NAME")
      .appendField("Set")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["Variable name", "dummy"],
          ["score", "op1"],
        ]),
        "Variable name"
      )
      .appendField("=");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["variable_holder"] = function (block) {
  var dropdown_variable_name = block.getFieldValue("Variable name");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  var dropdown_variable_name_value = "";
  if (dropdown_variable_name == "op1")
    dropdown_variable_name_value = "score = ";
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_variable_name_value}${value_name};\n`;
  return code;
};
Blockly.Python["variable_holder"] = function (block) {
  var dropdown_variable_name = block.getFieldValue("Variable name");
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_variable_name_value = "";
  if (dropdown_variable_name == "op1")
    dropdown_variable_name_value = "score = ";
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_variable_name_value}${value_name}\n`;
  return code;
};

// Variable block
Blockly.Blocks["variables"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["Variables", "default"],
        ["score", "option1"],
      ]),
      "Options"
    );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["variables"] = function (block) {
  var dropdown_options = block.getFieldValue("Options");
  var dropdown_options_value = "";
  if (dropdown_options == "option1") dropdown_options_value = "score";
  var code = `${dropdown_options_value}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function (block) {
  var dropdown_options = block.getFieldValue("Options");
  var dropdown_options_value = "";
  if (dropdown_options == "option1") dropdown_options_value = "Tattoo";
  var code = `${dropdown_options_value}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Change Variable Block
Blockly.Blocks["change_variable_holder"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("change")
      .appendField(
        new Blockly.FieldDropdown([
          ["Variable name", "dummy_increment"],
          ["score", "score"],
        ]),
        "Variable name"
      )
      .appendField("by");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["change_variable_holder"] = function (block) {
  var dropdown_variable_name = block.getFieldValue("Variable name");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  var code =
    dropdown_variable_name +
    " = " +
    dropdown_variable_name +
    " + " +
    value_name +
    ";\n";
  return code;
};

Blockly.Python["change_variable_holder"] = function (block) {
  var dropdown_variable_name = block.getFieldValue("Variable name");
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  var code =
    dropdown_variable_name +
    " = " +
    dropdown_variable_name +
    " + " +
    value_name +
    "\n";
  return code;
};

//Action  Variable block
Blockly.Blocks["action_variables"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["Action Variable", "default"],
        ["Cupture Suspect's Tatto", "option1"],
      ]),
      "Options"
    );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["action_variables"] = function (block) {
  var dropdown_options = block.getFieldValue("Options");
  var dropdown_options_value = "";
  if (dropdown_options == "option1")
    dropdown_options_value = "capture_suspect_tattoo()";
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_options_value}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["action_variables"] = function (block) {
  var dropdown_options = block.getFieldValue("Options");
  var dropdown_options_value = "";
  if (dropdown_options == "option1")
    dropdown_options_value = "capture suspect tattoo";
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_options_value}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Start_Game
Blockly.Blocks["start_game"] = {
  init: function () {
    this.appendDummyInput().appendField("Start_game");
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["start_game"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "start_game();\n";
  return code;
};

Blockly.Python["start_game"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "start_game()\n";
  return code;
};

// Move Left

// Blockly.Blocks["move_left"] = {
//   init: function () {
//     this.appendDummyInput().appendField("move_left");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(300);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["move_left"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_left();\n";
//   return code;
// };

// Blockly.Python["move_left"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_left()\n";
//   return code;
// };

// // Move Right

// Blockly.Blocks["move_right"] = {
//   init: function () {
//     this.appendDummyInput().appendField("move_right");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(300);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["move_right"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_right();\n";
//   return code;
// };

// Blockly.Python["move_right"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_right()\n";
//   return code;
// };

// // Move Up

// Blockly.Blocks["move_up"] = {
//   init: function () {
//     this.appendDummyInput().appendField("move_up");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(300);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["move_up"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_up();\n";
//   return code;
// };

// Blockly.Python["move_up"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "move_up()\n";
//   return code;
// };

// Jump

Blockly.Blocks["jump"] = {
  init: function () {
    this.appendDummyInput().appendField("Jump");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["jump"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "jump();\n";
  return code;
};

Blockly.Python["jump"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "jump()\n";
  return code;
};

// Left_key_Pressed

Blockly.Blocks["left_key"] = {
  init: function () {
    this.appendDummyInput().appendField("left_key_pressed");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["left_key"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "left_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["left_key"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "left_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Right_key_Pressed

Blockly.Blocks["right_key"] = {
  init: function () {
    this.appendDummyInput().appendField("right_key_pressed");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["right_key"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "right_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["right_key"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "right_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Up_key_Pressed

Blockly.Blocks["up_key"] = {
  init: function () {
    this.appendDummyInput().appendField("up_key_pressed");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["up_key"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "up_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["up_key"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "up_key_pressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Space_key_Pressed

Blockly.Blocks["space_key"] = {
  init: function () {
    this.appendDummyInput().appendField("space_key_pressed");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["space_key"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "keySpace.isDown";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["space_key"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "keySpace.isDown";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Collect_Coin

Blockly.Blocks["collect_coin"] = {
  init: function () {
    this.appendDummyInput().appendField("Collect_coin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["collect_coin"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "collect_coin();\n";
  return code;
};

Blockly.Python["collect_coin"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "collect_coin()\n";
  return code;
};

// Bike_touches (dropdown list)

Blockly.Blocks["drop_down_list"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(" Bike touches ")
      .appendField(
        new Blockly.FieldDropdown([
          ["coin", "coin"],
          ["obstacle", "obstacle"],
        ]),
        "Biker"
      );
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["drop_down_list"] = function (block) {
  var dropdown_biker = block.getFieldValue("Biker");
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_biker == "coin") code = "is_biker_touching_coin";
  else if (dropdown_biker == "obstacle") code = "is_biker_touching_obstacle";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["drop_down_list"] = function (block) {
  var dropdown_biker = block.getFieldValue("Biker");
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_biker == "coin") code = "is_biker_touching_coin";
  else if (dropdown_biker == "obstacle") code = "is_biker_touching_obstacle";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Game_over

Blockly.Blocks["game_over"] = {
  init: function () {
    this.appendDummyInput().appendField("game_over");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["game_over"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game_over();\n";
  return code;
};

Blockly.Python["game_over"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game_over()\n";
  return code;
};

//   Move Block
Blockly.Blocks["move_block"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Move")
      .appendField(
        new Blockly.FieldDropdown([
          ["Left", "left"],
          ["Right", "right"],
          ["Up", "up"],
          ["jump", "jump"],
        ]),
        "NAME"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["move_block"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");

  var code = "";
  if (dropdown_name == "left") {
    code = "move_left();\n";
  } else if (dropdown_name == "right") {
    code = "move_right();\n";
  } else if (dropdown_name == "up") {
    code = "move_up();\n";
  } else if (dropdown_name == "jump") {
    code = "jump();\n";
  }
  return code;
};
Blockly.Python["move_block"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");

  var code = "";
  if (dropdown_name == "left") {
    code = "move_left()\n";
  } else if (dropdown_name == "right") {
    code = "move_right()\n";
  } else if (dropdown_name == "up") {
    code = "move_up()\n";
  } else if (dropdown_name == "jump") {
    code = "jump()\n";
  }
  return code;
};

// key pressed block
Blockly.Blocks["key_pressed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(" Key pressed is ")
      .appendField(
        new Blockly.FieldDropdown([
          ["Left", "Left"],
          ["Right", "Right"],
          ["Up", "Up"],
          ["Space", "Space"],
        ]),
        "Biker"
      );
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["key_pressed"] = function (block) {
  var dropdown_biker = block.getFieldValue("Biker");
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_biker == "Left") code = "left_key_pressed";
  else if (dropdown_biker == "Right") code = "right_key_pressed";
  else if (dropdown_biker == "Up") code = "up_key_pressed";
  else if (dropdown_biker == "Space") code = "keySpace.isDown";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python["key_pressed"] = function (block) {
  var dropdown_biker = block.getFieldValue("Biker");
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_biker == "Left") code = "left_key_pressed";
  else if (dropdown_biker == "Right") code = "right_key_pressed";
  else if (dropdown_biker == "Up") code = "up_key_pressed";
  else if (dropdown_biker == "Space") code = "keySpace.isDown";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


export const blocks = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          blockxml: '<block type="variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
          type: "variable_holder"
        },
        {
          kind: "BLOCK",
          blockxml: '<block type="change_variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
          type: "change_variable_holder"
        },
        { kind: "BLOCK", blockxml: "", type: "variables" },
        {
          kind: "BLOCK",
          blockxml: '<block type="math_number"><field name="NUM">1</field></block>',
          type: "math_number"
        },
      ],
      name: "Variables",
      colour: "%{BKY_VARIABLES_HUE}",
    },
    {
      kind: "CATEGORY",
      contents: [
        { kind: "BLOCK", blockxml: "", type: "key_pressed" },
        { kind: "BLOCK", blockxml: "", type: "drop_down_list" },
      ],
      name: "Events",
      colour: "#FFFF00",
    },
    {
      kind: "CATEGORY",
      contents: [
        { kind: "BLOCK", blockxml: "", type: "start_game" },
        { kind: "BLOCK", blockxml: "", type: "move_block" },
        { kind: "BLOCK", blockxml: "", type: "jump" },
        { kind: "BLOCK", blockxml: "", type: "collect_coin" },
        { kind: "BLOCK", blockxml: "", type: "game_over" },
      ],
      name: "Actions",
      colour: "%{BKY_PROCEDURES_HUE}",
    },
    {
      kind: "CATEGORY",
      contents: [{ kind: "BLOCK", blockxml: "", type: "controls_if" }],
      name: "Logic",
      colour: "%{BKY_LOGIC_HUE}",
    },
    {
      kind: "CATEGORY",
      contents: [{ kind: "BLOCK", blockxml: "", type: "forever_repeat_block" }],
      name: "Loop",
      colour: "%{BKY_LOOPS_HUE}",
    },
    {
      kind: "CATEGORY",
      contents: [{ kind: "BLOCK", blockxml: "", type: "math_arithmetic" }],
      name: "Math",
      colour: "%{BKY_MATH_HUE}",
    },
  ],
  id: "toolbox",
  style: "display: none",
  colour: "#D4AF37",
};