import "blockly/python";
import "blockly/javascript";
import Blockly from "blockly";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////////////

// start the day
Blockly.Blocks["single_action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Start the day");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["single_action_block"] = function (block) {
    var code = "start_Day();\n";
    return code;
};
Blockly.Python["single_action_block"] = function (block) {
    var code = "start_Day()\n";
    return code;
};

//   check the id block
Blockly.Blocks["action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Check ID");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["action_block"] = function (block) {
    var code = "check_id()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python["action_block"] = function (block) {
    var code = "check_id()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//   allow block
Blockly.Blocks["secondary_action_block"] = {
    init: function () {
        this.appendDummyInput().appendField("Allow");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["secondary_action_block"] = function (block) {
    var code = "allow_person();\n";
    return code;
};
Blockly.Python["secondary_action_block"] = function (block) {
    var code = "allow_person()\n";
    return code;
};

//   reject block
Blockly.Blocks["reject_block"] = {
    init: function () {
        this.appendDummyInput().appendField("Reject");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["reject_block"] = function (block) {
    var code = "reject_person();\n";
    return code;
};
Blockly.Python["reject_block"] = function (block) {
    var code = "reject_person()\n";
    return code;
};
//   next person block

Blockly.Blocks["repeated_action_block"] = {
    init: function () {
        this.appendDummyInput().appendField("Next person");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["repeated_action_block"] = function (block) {
    var code = "next_person();\n";
    return code;
};
Blockly.Python["repeated_action_block"] = function (block) {
    var code = "next_person()\n";
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
// wait block
Blockly.Blocks["wait_block"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField(new Blockly.FieldLabelSerializable("Wait for"), "NAME");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("sec");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300, 97, 90);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["wait_block"] = function (block) {
    let value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_NONE
    );
    let code = "await sleep(" + value_name + ");\n";
    return code;
};
Blockly.Python["wait_block"] = function (block) {
    let value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
    );
    let code = "sleep(" + value_name + ")\n";
    return code;
};

// Variable block
Blockly.Blocks["variables"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "default"],
                ["Id", "option1"],
                ["Time", "option2"],
            ]),
            "Options"
        );
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "Id";
    else if (dropdown_options == "option2") dropdown_options_value = "Time";
    // else if (dropdown_options == "option3") dropdown_options_value = "check_id()";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "Id";
    else if (dropdown_options == "option2") dropdown_options_value = "Time";
    // else if (dropdown_options == "option3") dropdown_options_value = "check_id()";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.Python.ORDER_ATOMIC];
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
                    ["Id", "op1"],
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Id = ";
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Id = ";
    var code = `${dropdown_variable_name_value}${value_name}\n`;
    return code;
};

// used functions
// ===========================
// start_Day
// check_id
// allow_person
// reject_person
// next_person
// say
// sleep
// check_id

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
                { kind: "BLOCK", blockxml: "", type: "variables" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name="NUM">3</field></block>',
                    type: "math_number"
                },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="text"><field name="TEXT"></field></block>',
                    type: "text"
                },
            ],
            name: "Game Variables",
            colour: "%{BKY_VARIABLES_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "single_action_block" },
                { kind: "BLOCK", blockxml: "", type: "action_block" },
                { kind: "BLOCK", blockxml: "", type: "secondary_action_block" },
                { kind: "BLOCK", blockxml: "", type: "reject_block" },
                { kind: "BLOCK", blockxml: "", type: "repeated_action_block" },
                { kind: "BLOCK", blockxml: "", type: "say_block" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="wait_block"><value name="NAME"><block type="math_number"><field name="NUM">1</field></block></value></block>',
                    type: "wait_block"
                },
            ],
            name: "Actions",
            colour: "%{BKY_PROCEDURES_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "controls_if" },
                { kind: "BLOCK", blockxml: "", type: "logic_compare" },
                { kind: "BLOCK", blockxml: "", type: "logic_operation" },
            ],
            name: "Logic",
            colour: "%{BKY_LOGIC_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [{
                kind: "BLOCK",
                blockxml: '<block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">5</field></block></value></block>',
                type: "controls_repeat_ext"
            }],
            name: "Loop",
            colour: "%{BKY_LOOPS_HUE}",
        },
    ],
    id: "toolbox",
    style: "display: none",
    colour: "#D4AF37",
};