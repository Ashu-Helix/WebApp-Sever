Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;
// repeat_forever_flag
Blockly.Blocks["forever_repeat_block"] = {
    init: function() {
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

Blockly.JavaScript["forever_repeat_block"] = function(block) {
    var branch = Blockly.JavaScript.statementToCode(block, "NAME");
    // console.log('okoknow',branch)
    var code =
        `update = ()=>{if (cannot_proceed()) return;` +
        branch +
        `  moving_snake();}`;

    if (repeat_forever_flag) {
        eval(code);
        game.destroy();
        document.getElementById("circle").innerHTML = "";
        config = {
            type: Phaser.AUTO,
            width: gameWidth,
            height: gameHeight,
            backgroundColor: "#eeeeee",
            parent: "circle",
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
        game = new Phaser.Game(config);
    }
    return code;
};
Blockly.Python["forever_repeat_block"] = function(block) {
    var branch = Blockly.Python.statementToCode(block, "NAME");
    var code = "while True:\n" + branch;
    return code;
};

// Custom Set Variable Block
Blockly.Blocks["set_variable_holder"] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy"],
                    ["Score", "Score"],
                    ["timer", "timer"],
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

Blockly.JavaScript["set_variable_holder"] = function(block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_NONE);
    var code = dropdown_variable_name + " = " + value_name + ";\n";
    return code;
};
Blockly.Python["set_variable_holder"] = function(block) {
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
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("change")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Variable name", "dummy_increment"],
                    ["Score", "op1"],
                    ["timer", "op2"],
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

Blockly.JavaScript["change_variable_holder"] = function(block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Score";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "timer";
    var code = dropdown_variable_name_value + " += " + value_name + ";\n";
    return code;
};

Blockly.Python["change_variable_holder"] = function(block) {
    var dropdown_variable_name = block.getFieldValue("Variable name");
    var value_name = Blockly.Python.valueToCode(
        block,
        "NAME",
        Blockly.Python.ORDER_NONE
    );
    var dropdown_variable_name_value = "";
    if (dropdown_variable_name == "op1") dropdown_variable_name_value = "Score";
    else if (dropdown_variable_name == "op2")
        dropdown_variable_name_value = "timer";
    var code = dropdown_variable_name_value + " += " + value_name + ";\n";
    return code;
};

// Appear food in random place block
Blockly.Blocks["appear_food_block"] = {
    init: function() {
        this.appendDummyInput().appendField("Appear food in random place");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["appear_food_block"] = function(block) {
    var code = "food_appears_in_random_place();\n";
    return code;
};

Blockly.Python["appear_food_block"] = function(block) {
    var code = "food_appears_in_random_place()\n";
    return code;
};

//   Keep reducing timer block
Blockly.Blocks["reduce_timer_block"] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Start Game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["reduce_timer_block"] = function(block) {
    var code = "food_appears_in_random_place();\nkeep_reducing_timer_from(timer);\n";
    return code;
};

Blockly.Python["reduce_timer_block"] = function(block) {
    var code = "Start_Game()\n";
    return code;
};

//   Hide sprite block
Blockly.Blocks["hide_block"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Hide")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Sprite", "dummy"],
                    ["Snake", "option1"],
                    ["Food", "option2"],
                ]),
                "NAME"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["hide_block"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "option2") {
        code = "hide_food();\n";
    }
    return code;
};
Blockly.Python["hide_block"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "option2") {
        code = "hide_food()\n";
    }
    return code;
};

//   Key touch block
Blockly.Blocks["key_sensing"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Key Pressed is")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Left_arrow", "option1"],
                    ["Right_arrow", "option2"],
                    ["Up_arrow", "option3"],
                    ["Down_arrow", "option4"],
                    //   ["Pointer", "option5"],
                    //   ["Shift + Left arrow", "option6"],
                    //   ["Shift + Right arrow", "option7"],
                ]),
                "NAME"
            );
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["key_sensing"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "option1") {
        code = "is_left_arrow_pressed()";
    } else if (dropdown_name == "option2") {
        code = "is_right_arrow_pressed()";
    } else if (dropdown_name == "option3") {
        code = "is_up_arrow_pressed()";
    } else if (dropdown_name == "option4") {
        code = "is_down_arrow_pressed()";
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python["key_sensing"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");
    var code = "";
    if (dropdown_name == "option1") {
        code = "is_left_arrow_pressed()";
    } else if (dropdown_name == "option2") {
        code = "is_right_arrow_pressed()";
    } else if (dropdown_name == "option3") {
        code = "is_up_arrow_pressed()";
    } else if (dropdown_name == "option4") {
        code = "is_down_arrow_pressed()";
    }
    return [code, Blockly.Python.ORDER_NONE];
};

// Action Variable block
Blockly.Blocks["action_variable_block"] = {
    init: function() {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Action variables", "default"],
                ["Snake touches Food", "option1"],
                // ["I touch apple", "option3"],
                // ["Apple touches ground", "option4"],
            ]),
            "Options"
        );
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["action_variable_block"] = function(block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1")
        dropdown_options_value = "is_snake_touching_food()";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python["action_variable_block"] = function(block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1")
        dropdown_options_value = "Snake touches Food";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.Python.ORDER_NONE];
};

//   Move Block
Blockly.Blocks["move_block"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Left", "left"],
                    ["Right", "right"],
                    ["Up", "up"],
                    ["Down", "down"],
                ]),
                "NAME"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["move_block"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");

    var code = "";
    if (dropdown_name == "left") {
        code = "move_left();\n";
    } else if (dropdown_name == "right") {
        code = "move_right();\n";
    } else if (dropdown_name == "up") {
        code = "move_up();\n";
    } else if (dropdown_name == "down") {
        code = "move_down();\n";
    }
    return code;
};
Blockly.Python["move_block"] = function(block) {
    var dropdown_name = block.getFieldValue("NAME");

    var code = "";
    if (dropdown_name == "left") {
        code = "move_left()\n";
    } else if (dropdown_name == "right") {
        code = "move_right()\n";
    } else if (dropdown_name == "up") {
        code = "move_up()\n";
    } else if (dropdown_name == "down") {
        code = "move_down()\n";
    }
    return code;
};

// Variable block
Blockly.Blocks["variables"] = {
    init: function() {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ["Variables", "default"],
                ["Score", "option1"],
                ["Timer", "option2"],
                // ["I touch apple", "option3"],
                // ["Apple touches ground", "option4"],
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

Blockly.JavaScript["variables"] = function(block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "Score";
    else if (dropdown_options == "option2") dropdown_options_value = "Timer";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["variables"] = function(block) {
    var dropdown_options = block.getFieldValue("Options");
    var dropdown_options_value = "";
    if (dropdown_options == "option1") dropdown_options_value = "Score";
    else if (dropdown_options == "option2") dropdown_options_value = "Timer";
    var code = `${dropdown_options_value}`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// win block
Blockly.Blocks["win_game_block"] = {
    init: function() {
        this.appendDummyInput().appendField("Win game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["win_game_block"] = function(block) {
    var code = "win_game();\n";
    return code;
};

Blockly.Python["win_game_block"] = function(block) {
    var code = "win_game()\n";
    return code;
};

// lose game block
Blockly.Blocks["lose_game_block"] = {
    init: function() {
        this.appendDummyInput().appendField("lose game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["lose_game_block"] = function(block) {
    var code = "lose_game();\n";
    return code;
};

Blockly.Python["lose_game_block"] = function(block) {
    var code = "lose_game()\n";
    return code;
};

// Show score block
Blockly.Blocks["show_score_block"] = {
    init: function() {
        this.appendDummyInput().appendField("Show score");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["show_score_block"] = function(block) {
    var code = "ScoreText.text = 'Score : ' + Score.toString();\n";
    return code;
};

Blockly.Python["show_score_block"] = function(block) {
    var code = "Show score\n";
    return code;
};

//Snake touches food block
Blockly.Blocks["snake_touches_food_block"] = {
    init: function() {
        this.appendDummyInput().appendField("Snake touches food");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["snake_touches_food_block"] = function(block) {
    var code = "is_snake_touching_food()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python["snake_touches_food_block"] = function(block) {
    var code = "is_snake_touching_food()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// used functions
// =====================
// cannot_proceed
// moving_snake
// food_appears_in_random_place
// keep_reducing_timer_from(timer)
// hide_food
// is_left_arrow_pressed
// is_right_arrow_pressed
// is_up_arrow_pressed
// is_down_arrow_pressed
// move_left
// move_right
// move_up
// move_down
// win_game
// lose_game
// ScoreText.text = 'Score : ' + Score.toString()