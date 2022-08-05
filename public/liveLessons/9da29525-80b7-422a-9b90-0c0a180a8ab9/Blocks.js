Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

// Custom Set Variable Block
Blockly.Blocks["set_variable_holder"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["Score", "Score"],
                    ["WinScore", "WinScore"],
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
    var code = dropdown_variable_name + " = " + value_name + ";";
    return code;
};
Blockly.Python["set_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
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
                    ["Variable name", "default_"],
                    ["Score", "Score"],
                    ["WinScore", "WinScore"],
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
    var code = dropdown_variable_name + " += " + value_name + ";";
    return code;
};

Blockly.Python["change_variable_holder"] = function (block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_ATOMIC
    );
    var code = dropdown_variable_name + " += " + value_name + "\n";
    return code;
};

// Custom Variables Block
Blockly.Blocks["variable_holder"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "default_"],
                ["Score", "Score"],
                ["WinScore", "WinScore"],

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

Blockly.JavaScript["variable_holder"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    var code = dropdown_options;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variable_holder"] = function (block) {
    var dropdown_options = block.getFieldValue("Options");
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_options;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Shuffle action block
Blockly.Blocks["action_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Shuffle");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["action_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "await shuffle();\n";
    return code;
};

Blockly.Python["action_block"] = function (block) {
    var code = "shuffle()\n";
    return code;
};

//   Pointer touch
Blockly.Blocks["pointertouch__block"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("I")
            .appendField("touch")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Sprite ", "dummy"],
                    ["Cup1", "Cup1"],
                    ["Cup2", "Cup2"],
                    ["Cup3", "Cup3"],
                    ["Screen", "Screen"],
                ]),
                "options2"
            );
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["pointertouch__block"] = function (block) {
    var dropdown_options2 = block.getFieldValue("options2");
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    if (dropdown_options2 == "Cup1") code = "i_touch_cup1()";
    else if (dropdown_options2 == "Cup2") code = "i_touch_cup2()";
    else if (dropdown_options2 == "Cup3") code = "i_touch_cup3()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["pointertouch__block"] = function (block) {
    var dropdown_options2 = block.getFieldValue("options2");
    // TODO: Assemble python into code variable.
    var code = "";
    if (dropdown_options2 == "Cup1") code = "i_touch_cup1()";
    else if (dropdown_options2 == "Cup2") code = "i_touch_cup2()";
    else if (dropdown_options2 == "Cup3") code = "i_touch_cup3()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Sprite in sprite block
Blockly.Blocks["sprite_locationblock"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                new Blockly.FieldDropdown([
                    ["Sprite 1", "dummy"],
                    ["Ball", "Ball"],
                    ["Cup1", "Cup1"],
                    ["Cup2", "Cup2"],
                    ["Cup3", "Cup3"],
                ]),
                "options1"
            )
            .appendField("in")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Sprite 2", "dummy"],
                    ["Ball", "Ball"],
                    ["Cup1", "Cup1"],
                    ["Cup2", "Cup2"],
                    ["Cup3", "Cup3"],
                ]),
                "options2"
            );
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["sprite_locationblock"] = function (block) {
    var dropdown_options1 = block.getFieldValue("options1");
    var dropdown_options2 = block.getFieldValue("options2");
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup1")
        code = "Ball_is_in_cup1()";
    else if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup2")
        code = "Ball_is_in_cup2()";
    else if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup3")
        code = "Ball_is_in_cup3()";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["sprite_locationblock"] = function (block) {
    var dropdown_options1 = block.getFieldValue("options1");
    var dropdown_options2 = block.getFieldValue("options2");
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup1")
        code = "Ball_is_in_cup1()";
    else if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup2")
        code = "Ball_is_in_cup2()";
    else if (dropdown_options1 == "Ball" && dropdown_options2 == "Cup3")
        code = "Ball_is_in_cup3()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//   Say Block
Blockly.Blocks["say_block"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("hi"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["say_block"] = function (block) {
    var text_name = block.getFieldValue("NAME");
    // TODO: Assemble JavaScript into code variable.
    var code = `await say("` + text_name + `");\n`;
    return code;
};

Blockly.Python["say_block"] = function (block) {
    var text_name = block.getFieldValue("NAME");
    var code = `say("` + text_name + `")\n`;
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

// Shuffle action block
Blockly.Blocks["show_ball_block"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Show Ball");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["show_ball_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "showBall();\n";
    return code;
};

Blockly.Python["show_ball_block"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "showBall()\n";
    return code;
};