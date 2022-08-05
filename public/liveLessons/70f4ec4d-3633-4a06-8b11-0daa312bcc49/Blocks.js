import "blockly/python";
import "blockly/javascript";
import Blockly from "blockly";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

// Set Variable holder
Blockly.Blocks["variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .appendField("Set")
            .setCheck(null)
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["Score", "op1"],
                    ["Monkeys", "op2"],
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Score";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "Nb_Monkeys";
    var code = `${dropdown_variable_name_value} = ${value_name};\n`;
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
        dropdown_variable_name_value = "Score = ";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "Monkeys = ";
    var code = `${dropdown_variable_name_value}${value_name}\n`;
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
                    ["Score", "op1"],
                    ["Monkeys", "op2"],
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
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Score";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "Nb_Monkeys";
    var code = dropdown_variable_name_value + " += " + value_name + ";\n";
    return code;
};

Blockly.Python["change_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
    );
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Score";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "Monkeys";
    var code = dropdown_variable_name_value + " += " + value_name + ";\n";
    return code;
};

// Variable block
Blockly.Blocks["variables"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "default_"],
                ["Score", "option1"],
                ["Monkeys", "option2"],
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
    if (dropdown_options == "option1") dropdown_options_value = "Score";
    else if (dropdown_options == "option2") dropdown_options_value = "Nb_Monkeys";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "Score";
    else if (dropdown_options == "option2") dropdown_options_value = "Monkeys";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Drop random apple block
Blockly.Blocks["action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Drop random apple and wait for touch event");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["action_block"] = function (block) {
    var code = "await drop_random_apple();\nawait wait_for_event();\n";
    return code;
};
Blockly.Python["action_block"] = function (block) {
    var code = "drop_random_apple_and_wait_for_touch_event()\n";
    return code;
};

// Say Block
Blockly.Blocks["say_block"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput(""), "say");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["say_block"] = function (block) {
    var say = block.getFieldValue("say");
    let code = `say("${say}");\n`;
    return code;
};

Blockly.Python["say_block"] = function (block) {
    var say = block.getFieldValue("say");
    let code = `say("${say}")\n`;
    return code;
};

// End block
Blockly.Blocks["end_block"] = {
    init: function () {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("End all");
        this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["end_block"] = function (block) {
    var code = "game_over();\nbreak;\n";
    return code;
};
Blockly.Python["end_block"] = function (block) {
    var code = "End_all()\nbreak\n";
    return code;
};

Blockly.Blocks["monkey_grabs_apple"] = {
    init: function () {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("Monkey catches Apple");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["monkey_grabs_apple"] = function (block) {
    var code = "await monkey_catches_apple();\n";
    return code;
};
Blockly.Python["monkey_grabs_apple"] = function (block) {
    var code = "monkey_catches_apple()\n";
    return code;
};

// End block
Blockly.Blocks["monkey_leaves_tree"] = {
    init: function () {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("A Monkey leaves the tree");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["monkey_leaves_tree"] = function (block) {
    var code = "await a_monkey_leaves_the_tree();\n";
    return code;
};
Blockly.Python["monkey_leaves_tree"] = function (block) {
    var code = "a_monkey_leaves_the_tree()\n";
    return code;
};


// Monkey touch apple block
Blockly.Blocks["monkey_touch_apple_block"] = {
    init: function () {
        this.appendDummyInput().appendField("I touch Apple");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["monkey_touch_apple_block"] = function (block) {
    var code = "i_touch_apple()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["monkey_touch_apple_block"] = function (block) {
    var code = "i_touch_apple()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Apple touchs the Ground block
Blockly.Blocks["apple_touch_ground_block"] = {
    init: function () {
        this.appendDummyInput().appendField("Apple touches the Ground");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["apple_touch_ground_block"] = function (block) {
    var code = "apple_touches_ground()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["apple_touch_ground_block"] = function (block) {
    var code = "apple_touches_ground()";
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
                    type: "set_variable_holder"
                },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="change_variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
                    type: "change_variable_holder"
                },
                { kind: "BLOCK", blockxml: "", type: "variables" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name="NUM">123</field></block>',
                    type: "math_number"
                },
            ],
            name: "Game Variables",
            categorystyle: "variable_category",
        },
        {
            kind: "CATEGORY",
            contents: [
                // { kind: "BLOCK", blockxml: "", type: "key_sensing" },
                { kind: "BLOCK", blockxml: '<block type="monkey_touch_apple_block"></block>', type: "spritetouch__block" },
                { kind: "BLOCK", blockxml: '<block type="apple_touch_ground_block"></block>', type: "wave_jumped" },
            ],
            name: "Events",
            colour: "#FFFF00",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: '<block type="action_block"></block>', type: "single_action_block" },
                { kind: "BLOCK", blockxml: '<block type="monkey_grabs_apple"></block>', type: "set_text_holder" },
                { kind: "BLOCK", blockxml: '<block type="monkey_leaves_tree"></block>', type: "fall" },
                { kind: "BLOCK", blockxml: '<block type="say_block"></block>', type: "say_block" },
                // { kind: "BLOCK", blockxml: '', type: "win_block" },
                { kind: "BLOCK", blockxml: '<block type="end_block"></block>', type: "end_block" },
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
            contents: [{
                kind: "BLOCK",
                blockxml: '<block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block>',
                type: "forever_repeat_block"
            }],
            name: "Loops",
            colour: "%{BKY_LOOPS_HUE}",
        },
    ],
    id: "toolbox",
    style: "display: none",
    colour: "#D4AF37",
};

