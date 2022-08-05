import "blockly/python";
import "blockly/javascript";
import Blockly from "blockly";

Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

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
        `update = async () => {if (cannot_proceed()) return;` + branch + `;}`;
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

// set Variable holder
Blockly.Blocks["set_variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["Pins", "op1"],
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
        Blockly.JavaScript.ORDER_NONE
    );
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1")
        dropdown_variable_name_value = "Nb_Pins=";
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_variable_name_value}${value_name};\n`;
    return code;
};
Blockly.Python["set_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
    );
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Pins = ";
    // TODO: Assemble Python into code variable.
    var code = `${dropdown_variable_name_value}${value_name};\n`;
    return code;
};
// Change variable block
Blockly.Blocks["change_variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("change")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["Pins", "op1"],
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
    if (dropdown_variable_name == "op1")
        dropdown_variable_name_value = "Nb_Pins=";
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_variable_name_value}+=${value_name};\n`;
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
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Pins";
    // TODO: Assemble Python into code variable.
    var code = `${dropdown_variable_name_value} += ${value_name};\n`;
    return code;
};

// Variable block
Blockly.Blocks["variables"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variable name", "dummy"],
                ["Pins", "op1"],
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
    if (dropdown_options == "op1") dropdown_options_value = "Nb_Pins";
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "op1") dropdown_options_value = "Pins";
    // TODO: Assemble Python into code variable.
    var code = `${dropdown_options_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
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
        this.setColour(259, 97, 90);
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

// Drop all pins block
Blockly.Blocks["drop_all_pins"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Drop all pins");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["drop_all_pins"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "await drop_all_pins();\n";
    return code;
};
Blockly.Python["drop_all_pins"] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "drop_all_pins()\n";
    return code;
};

//End all
Blockly.Blocks["end_all_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("End all");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["end_all_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "game_over();\n";
    return code;
};
Blockly.Python["end_all_block"] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "game_over()\n";
    return code;
};

// Drop pins block
Blockly.Blocks["drop_pins"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Drop pins");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["drop_pins"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "await drop_pins();\n";
    return code;
};
Blockly.Python["drop_pins"] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "drop_pins()\n";
    return code;
};
// phaser between block
Blockly.Blocks["random_between"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Random between")
            .appendField(new Blockly.FieldNumber(0), "num1")
            .appendField("and")
            .appendField(new Blockly.FieldNumber(0), "num2");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["random_between"] = function (block) {
    var dropdown_options1 = block.getFieldValue("num1");
    var dropdown_options2 = block.getFieldValue("num2");
    var code = `Phaser.Math.Between(${dropdown_options1},${dropdown_options2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python["random_between"] = function (block) {
    var dropdown_options1 = block.getFieldValue("num1");
    var dropdown_options2 = block.getFieldValue("num2");
    var code = `Drop random between (${dropdown_options1} , ${dropdown_options2})`;
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
                    blockxml: '<block type="change_variable_holder"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
                    type: "change_variable_holder"
                },
                { kind: "BLOCK", blockxml: "", type: "variables" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="math_number"><field name="NUM">0</field></block>',
                    type: "math_number"
                },
            ],
            name: "Game variables",
            colour: "%{BKY_VARIABLES_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [
                { kind: "BLOCK", blockxml: "", type: "drop_all_pins" },
                { kind: "BLOCK", blockxml: "", type: "end_all_block" },
                { kind: "BLOCK", blockxml: "", type: "drop_pins" },
                {
                    kind: "BLOCK",
                    blockxml: '<block type="wait_block"><value name="NAME"><block type="math_number"><field name="NUM">0</field></block></value></block>',
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
            ],
            name: "Logics",
            colour: "%{BKY_LOGIC_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [{ kind: "BLOCK", blockxml: "", type: "forever_repeat_block" }],
            name: "Loops",
            colour: "%{BKY_LOOPS_HUE}",
        },
        {
            kind: "CATEGORY",
            contents: [{ kind: "BLOCK", blockxml: "", type: "random_between" }],
            name: "Math",
            colour: "%{BKY_MATH_HUE}",
        },
    ],
    id: "toolbox",
    style: "display: none",
    colour: "#D4AF37",
};