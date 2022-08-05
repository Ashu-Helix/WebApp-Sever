import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

// Win Game block
Blockly.Blocks["win_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Won Game!");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["win_block"] = function (block) {
    let code = "win_game();";
    return code;
};
Blockly.Python["win_block"] = function (block) {
    let code = "win_game()\n";
    return code;
};

// Game Over block
Blockly.Blocks["end_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Game Over");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["end_block"] = function (block) {
    let code = "game_over();\n";
    return code;
};
Blockly.Python["end_block"] = function (block) {
    let code = "game_over()\n";
    return code;
};

// forever_repeat_block
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
    var code =
        `update = async () => {
        Move_Waves();
        MoveH_wave();
        ` +
        branch +
        `
        inside_update_end();
        // wave_touches_surfer();
    }`;
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

//  console.log(high_wave_is_jumped(),meduim_wave_is_jumped(),law_wave_is_jumped());

//Fall block
Blockly.Blocks["fall"] = {
    init: function () {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("Fall");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["fall"] = function (block) {
    return "fall();";
};
Blockly.Python["fall"] = function (block) {
    return "fall()\n";
};

// Say block
Blockly.Blocks["say_block"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("Hi"), "dialogue");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["say_block"] = function (block) {
    let dialogue = block.getFieldValue("dialogue");
    let code = 'await say("' + dialogue + '");\n';
    return code;
};
Blockly.Python["say_block"] = function (block) {
    let dialogue = block.getFieldValue("dialogue");
    let code = 'say("' + dialogue + '")\n';
    return code;
};

// Spacebar sensing block
Blockly.Blocks["key_sensing"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Key Pressed is")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Space Bar", "space"],
                    ["Left Arrow", "left"],
                    ["right Arrow", "right"],
                ]),
                "NAME"
            );
        this.setOutput(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["key_sensing"] = function (block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "space") code = "space_key_is_pressed()";
    else if (dropdown_name == "left") code = "left_arrow_key_is_pressed()";
    else if (dropdown_name == "right") code = "right_arrow_key_is_pressed()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["key_sensing"] = function (block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "space") code = "space_key_is_pressed()";
    else if (dropdown_name == "left") code = "left_arrow_key_is_pressed()";
    else if (dropdown_name == "right") code = "right_arrow_key_is_pressed()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//start the game
Blockly.Blocks["single_action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Start the game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["single_action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "await Start_Game();\n";
};

Blockly.Python["single_action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "Start_Game()\n";
};

// Sprite touches sprite block
Blockly.Blocks["spritetouch__block"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["wave", "wave"]]), "options1")
            .appendField("touches")
            .appendField(
                new Blockly.FieldDropdown([["surfer", "surfer"]]),
                "options2"
            );
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["spritetouch__block"] = function (block) {
    let code = "wave_touches_surfer()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["spritetouch__block"] = function (block) {
    let code = "wave_touches_surfer()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Custom Set Variable Block
Blockly.Blocks["set_variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["score", "Score"],
                    ["lives", "Lives"],
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

Blockly.JavaScript["set_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = dropdown_variable_name + " = " + value_name + ";\n";
    return code;
};
Blockly.Python["set_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = dropdown_variable_name + " = " + value_name + "\n";
    return code;
};

// Change Variable Block
Blockly.Blocks["change_variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("change")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["score", "Score"],
                    ["lives", "Lives"],
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
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `${dropdown_variable_name} = ${dropdown_variable_name} + ${value_name};\n`;
    return code;
};

Blockly.Python["change_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
    );
    var code = `${dropdown_variable_name} += ${value_name}\n`;
    return code;
};

// Custom Variables Block
Blockly.Blocks["variables"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "dummy"],
                ["score", "Score"],
                ["lives", "Lives"],
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
    var code = "";
    if (dropdown_options == "Score") code = "window['Score'] ";
    else if (dropdown_options == "Lives") code = "window['Lives']";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var code = "";
    if (dropdown_options == "Score") code = "Score";
    else if (dropdown_options == "Lives") code = "Lives";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Custom Set Text Block
Blockly.Blocks["set_text_holder"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("do")
            .appendField(
                new Blockly.FieldDropdown([
                    ["High Wave Jump", "txt1"],
                    ["Medium Wave Jump", "txt2"],
                    ["Low Wave Jump", "txt3"],
                    ["End All", "txt4"],
                ]),
                "Options"
            );
        this.setInputsInline(false);
        // this.setOutput(true, null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["set_text_holder"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // var code = '';
    if (dropdown_options == "txt1") return "high_wave_jump();\n";
    else if (dropdown_options == "txt2") return "medium_wave_jump();\n";
    else if (dropdown_options == "txt3") return "low_wave_jump();\n";
    else return "fall();\n";
};

Blockly.Python["set_text_holder"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // var code = '';
    if (dropdown_options == "txt1") return "high_wave_jump()\n";
    else if (dropdown_options == "txt2") return "medium_wave_jump()\n";
    else if (dropdown_options == "txt3") return "low_wave_jump()\n";
    else return "fall()\n";
};

// is wave jumped block

Blockly.Blocks["wave_jumped"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["is low wave jumped", "Score"],
                ["is medium wave jumped", "Lives"],
                ["is high wave jumped", "timer"],
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

Blockly.JavaScript["wave_jumped"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var code = "";
    if (dropdown_options == "Score") code = "law_wave_is_jumped()";
    else if (dropdown_options == "Lives") code = "meduim_wave_is_jumped()";
    else if (dropdown_options == "timer") code = "high_wave_is_jumped()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["wave_jumped"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var code = "";
    if (dropdown_options == "Score") code = "is_low_wave_jumped()";
    else if (dropdown_options == "Lives") code = "is_medium_wave_jumped()";
    else if (dropdown_options == "timer") code = "is_high_wave_jumped()";
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
                    blockxml: '<block type="set_variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
                    type: "set_variable_holder"
                },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="change_variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">-1</field></block></value></block>',
                    type: "change_variable_holder"
                },
                { kind: "BLOCK", blockxml: "", type: "variables" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name="NUM">1</field></block>',
                    type: "math_number"
                },
            ],
            name: "Game Variables",
            categorystyle: "variable_category",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "key_sensing" },
                { kind: "BLOCK", blockxml: "", type: "spritetouch__block" },
                { kind: "BLOCK", blockxml: "", type: "wave_jumped" },
            ],
            name: "Events",
            colour: "#FFFF00",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "single_action_block" },
                { kind: "BLOCK", blockxml: "", type: "set_text_holder" },
                { kind: "BLOCK", blockxml: "", type: "fall" },
                { kind: "BLOCK", blockxml: "", type: "say_block" },
                { kind: "BLOCK", blockxml: "", type: "win_block" },
                { kind: "BLOCK", blockxml: "", type: "end_block" },
            ],
            name: "Actions",
            colour: "#B430FF",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "controls_if" },
                { kind: "BLOCK", blockxml: "", type: "logic_compare" },
                { kind: "BLOCK", blockxml: "", type: "logic_operation" },
            ],
            name: "Conditions",
            colour: "%{BKY_LOGIC_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [{ kind: "BLOCK", blockxml: "", type: "forever_repeat_block" }],
            name: "Loops",
            colour: "%{BKY_LOOPS_HUE}",
        },
    ],
    id: "toolbox",
    style: "display: none",
    colour: "#D4AF37",
};
