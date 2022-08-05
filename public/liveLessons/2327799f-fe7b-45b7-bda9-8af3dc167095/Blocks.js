import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;
// =====================================================================================================================================
//start the game  Open Bill Counter
Blockly.Blocks["single_action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Open bill counter");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["single_action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "await open_bill_counter();\n";
};

Blockly.Python["single_action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "await open_bill_counter()\n";
};

// variable holder block
Blockly.Blocks["variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["bill", "op1"],
                    ["received_amount", "op2"],
                    ["balance", "op3"],
                    ["right_balance", "op4"],
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "bill=";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "received_amount=";
    else if (dropdown_variable_name == "op3")
        dropdown_variable_name_value = "balance=";
    else if (dropdown_variable_name == "op4")
        dropdown_variable_name_value = "right_balance=";
    else if (dropdown_variable_name == "dummy")
        dropdown_variable_name_value = "Variable name ";
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_variable_name_value} ${value_name};\n`;
    if (dropdown_variable_name == "op4")
        code = `${dropdown_variable_name_value} ${value_name};\n await show_balance();\n`;
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "bill=";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "received_amount=";
    else if (dropdown_variable_name == "op3")
        dropdown_variable_name_value = "balance=";
    else if (dropdown_variable_name == "op4")
        dropdown_variable_name_value = "right_balance=";
    else if (dropdown_variable_name == "dummy")
        dropdown_variable_name_value = "Variable name ";
    // TODO: Assemble Python into code variable.
    var code = `${dropdown_variable_name_value} ${value_name}\n`;
    if (dropdown_variable_name == "op4")
        code = `${dropdown_variable_name_value} ${value_name}\n await show_balance()\n`;
    return code;
};

// variables block
Blockly.Blocks["variables"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "default"],
                ["bill", "option1"],
                ["received_amount", "option2"],
                ["balance", "option3"],
                ["right_balance", "option4"],
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
    // TODO: Assemble JavaScript into code variable.
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "bill";
    else if (dropdown_options == "option2")
        dropdown_options_value = "received_amount";
    else if (dropdown_options == "option3") dropdown_options_value = "balance";
    else if (dropdown_options == "option4")
        dropdown_options_value = "right_balance";

    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // TODO: Assemble Python into code variable.
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "bill";
    else if (dropdown_options == "option2")
        dropdown_options_value = "received_amount";
    else if (dropdown_options == "option3") dropdown_options_value = "balance";
    else if (dropdown_options == "option4")
        dropdown_options_value = "right_balance";
    else if (dropdown_options == "default") dropdown_options_value = "variables";

    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// give balance block
Blockly.Blocks["action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Give balance");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `await give_balance();\ntoast1()\n`;
    return code;
};
Blockly.Python["action_block"] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "await give_balance()\n";
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
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["say_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var say = block.getFieldValue("say");
    // var code = "";
    // if (say == "Balance amount is less") code = `await say("${say}")\nCurrent_Client.setFrame(1);\nplay_No_machine();\n`
    // else var code = `await say("${say}");\n`;
    var code = `await say("${say}");\n`;
    return code;
};

Blockly.Python["say_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var say = block.getFieldValue("say");
    // var code = "";
    // if (say == "Balance amount is less") code = `await say("${say}")\nCurrent_Client.setFrame(1);\nplay_No_machine();\n`
    // else var code = `await say("${say}");\n`;
    var code = `say("${say}")\n`;
    return code;
};

// Input block

Blockly.Blocks["input_bock"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Display input", "default"],
                ["Display The Bill Amount", "option1"],
                ["Display received_amount", "option2"],
                ["Display Balance Amount", "option3"],
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

Blockly.JavaScript["input_bock"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // TODO: Assemble JavaScript into code variable.
    var dropdown_options_value = "";
    if (dropdown_options == "option1")
        dropdown_options_value = `get_float_input_from_user('Choose The Bill Amount: ( 30  Or  50  Or  70 ):');\n await show_bill()`;
    else if (dropdown_options == "option2")
        dropdown_options_value = `get_float_input_from_user('Enter received_amount:( 50  Or  100 ): ');\n  await fill_machine()`;
    else if (dropdown_options == "option3")
        dropdown_options_value = `get_float_input_from_user('Enter Balance Amount:( 00  Or 20  Or  30  Or  50  Or  70 ):')`;

    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["input_bock"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // TODO: Assemble Python into code variable.
    var dropdown_options_value = "";
    if (dropdown_options == "option1")
        dropdown_options_value = `get_float_input_from_user( The Bill Amount)`;
    else if (dropdown_options == "option2")
        dropdown_options_value = `get_float_input_from_user(received_amount)`;
    else if (dropdown_options == "option3")
        dropdown_options_value = `get_float_input_from_user( Balance Amount)`;
    else if (dropdown_options == "default")
        dropdown_options_value = "Display input";
    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// play no machine block
Blockly.Blocks["play_no_machine"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Shopkeeper don't accept");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["play_no_machine"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "await play_No_machine();\n";
};
Blockly.Python["play_no_machine"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "play_No_machine()\n";
};

// End game
Blockly.Blocks["end"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Next customer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["end"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "if(right_balance > balance) {toast2();}\n else if (right_balance < balance){toast3();}\nhide_cash_register();\nawait put_Client();\n";
};

Blockly.Python["end"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    return "end()\n";
};

export const blocks = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "single_action_block" },
                { kind: "BLOCK", blockxml: "", type: "input_bock" },
                { kind: "BLOCK", blockxml: "", type: "say_block" },
                { kind: "BLOCK", blockxml: "", type: "action_block" },
                { kind: "BLOCK", blockxml: "", type: "play_no_machine" },
                { kind: "BLOCK", blockxml: "", type: "end" },
            ],
            name: "Actions",
            colour: "#B430FF",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "variables" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name = "NUM">1</field></block>',
                    type: "variable_holder"
                },
                { kind: "BLOCK", blockxml: "", type: "math_number" },
            ],
            name: "Variables",
            categorystyle: "variable_category",
        },
        {
            kind: "CATEGORY",
            contents: [{
                kind: "BLOCK",
                blockxml: '<block type="controls_repeat_ext"><value name = "TIMES"><block type = "math_number"><field name = "NUM" > 6</field></block></value></block>',
                type: "controls_repeat_ext"
            }],
            name: "Loop",
            colour: "%{BKY_LOOPS_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [
                {
                    kind: "BLOCK",
                    blockxml: '<block type="controls_if"><mutation elseif = "1" else= "1"></mutation></block>',
                    type: "controls_if"
                },
                { kind: "BLOCK", blockxml: "", type: "logic_compare" },
            ],
            name: "Conditions",
            colour: "%{BKY_LOGIC_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "logic_compare" },
                { kind: "BLOCK", blockxml: "", type: "math_arithmetic" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name = "NUM">1</field></block>',
                    type: "math_number"
                },
            ],
            name: "Math",
            colour: "%{BKY_MATH_HUE}",
        },
    ],
    id: "toolbox",
    style: "display: none",
    colour: "#D4AF37",
};
