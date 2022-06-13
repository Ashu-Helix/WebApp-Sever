Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;

import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';


// Game Over block
Blockly.Blocks['end_block'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Game Over");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['end_block'] = function(block) {
    let code = 'game_over();';
    return code;
};
Blockly.Python['end_block'] = function(block) {
    let code = 'game_over()\n';
    return code;
};


// Win Game block
Blockly.Blocks['win_block'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Won Game!");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['win_block'] = function(block) {
    let code = 'game_win();';
    return code;
};
Blockly.Python['win_block'] = function(block) {
    let code = 'win_game()\n';
    return code;
};


Blockly.Blocks['forever_repeat_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Repeat forever");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['forever_repeat_block'] = function(block) {
    var branch = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = `update = ()=>{ if (WorldIsMoving) {
        KMText.setText(TotalKm.toString());
        TimerText.setText(FormatTime(timer * 1000));
        ScoreTX.setText(score);
        MoveWorld();
        
        ` + branch + `
    }}`
    if (repeat_forever_flag) {
        eval(code);
        game.destroy();
        document.getElementById('circle').innerHTML = "";
        setTimeout(() => {
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
                        debug: false
                    },
                },
                scene: {
                    preload: preload,
                    create: create,
                    update: update,
                },
            };
            game = new Phaser.Game(config);
        }, 100);

    }
    return code;
};
Blockly.Python['forever_repeat_block'] = function(block) {
    var branch = Blockly.Python.statementToCode(block, 'NAME');
    var code = "while True:\n" + branch;
    return code;
};


// Say block
Blockly.Blocks['say_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("\" \""), "dialogue");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['say_block'] = function(block) {
    let dialogue = block.getFieldValue('dialogue');
    let code = 'await createDialogue("' + dialogue + '");';
    return code;
};
Blockly.Python['say_block'] = function(block) {
    let dialogue = block.getFieldValue('dialogue');
    let code = 'say("' + dialogue + '")\n';
    return code;
};


//Fly Block
Blockly.Blocks['fly'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Fly");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['fly'] = function(block) {
    return 'flap_wing();';
};
Blockly.Python['fly'] = function(block) {
    return 'flap_wing()\n';
};

//Gravity block
Blockly.Blocks['gravity'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Gravity");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['gravity'] = function(block) {
    return 'gravity_effect();';
};
Blockly.Python['gravity'] = function(block) {
    return 'gravity_effect()\n';
};


// Spacebar sensing block
Blockly.Blocks['key_sensing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Key Pressed is")
            .appendField(new Blockly.FieldDropdown([
                ["Space/touch/click", "option5"],
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['key_sensing'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'is_space_pressed()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['key_sensing'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'is_space_pressed()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

//start the game
Blockly.Blocks['single_action_block'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Start the game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['single_action_block'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'Start_Game();';
};

Blockly.Python['single_action_block'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'Start_Game()\n';
}

// Sprite touches sprite block
Blockly.Blocks['spritetouch__block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Sprite 1", "dummy1"],
                ["Bird", "Bird"]
            ]), "options1")
            .appendField("touches")
            .appendField(new Blockly.FieldDropdown([
                ["Sprite 2", "dummy2"],
                ["Obstacle", "Obstacle"],
                ["Ground", "Ground"],
                ["Coin", "Coin"]
            ]), "options2");
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['spritetouch__block'] = function(block) {
    var dropdown_options1 = block.getFieldValue('options1');
    var dropdown_options2 = block.getFieldValue('options2');
    var code = "";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Ground"))
        code = "is_bird_touching_ground()";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Obstacle"))
        code = "is_bird_touching_obstacle()";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Coin"))
        code = "is_bird_touching_coin()";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['spritetouch__block'] = function(block) {
    var dropdown_options1 = block.getFieldValue('options1');
    var dropdown_options2 = block.getFieldValue('options2');
    var code = "";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Ground"))
        code = "is_bird_touching_ground()";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Obstacle"))
        code = "is_bird_touching_obstacle()";
    if ((dropdown_options1 == "Bird" && dropdown_options2 == "Coin"))
        code = "is_bird_touching_coin()";
    return [code, Blockly.Python.ORDER_NONE];
};


// Custom Set Variable Block
Blockly.Blocks['set_variable_holder'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([
                ["Variable name", "dummy"],
                ["score", "score"],
                ["lives", "lives"],
            ]), "Variable name")
            .appendField("=");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['set_variable_holder'] = function(block) {
    var dropdown_variable_name = block.getFieldValue('Variable name');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = dropdown_variable_name + '=' + value_name + ';';
    return code;
};
Blockly.Python['set_variable_holder'] = function(block) {
    var dropdown_variable_name = block.getFieldValue('Variable name');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = dropdown_variable_name + '=' + value_name + '\n';
    return code;
};

// Change Variable Block
Blockly.Blocks['change_variable_holder'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("change")
            .appendField(new Blockly.FieldDropdown([
                ["Variable name", "dummy_increment"],
                ["score", "score"],
                ["lives", "lives"],
            ]), "Variable name")
            .appendField("by");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['change_variable_holder'] = function(block) {
    var dropdown_variable_name = block.getFieldValue('Variable name');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = dropdown_variable_name + '+=' + value_name + ';LivesTXT.setText(lives); KMText.setText(TotalKm.toString()); ScoreTX.setText(score);';
    return code;
};

Blockly.Python['change_variable_holder'] = function(block) {
    var dropdown_variable_name = block.getFieldValue('Variable name');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = dropdown_variable_name + '+=' + value_name + '\n';
    return code;
};

// Custom Variables Block
Blockly.Blocks['variables'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Variables", "default"],
                ["score", "score"],
                ["lives", "lives"],
            ]), "Options");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['variables'] = function(block) {
    var dropdown_options = block.getFieldValue('Options');
    var code = '';
    if (dropdown_options == "score")
        code = 'score';
    else if (dropdown_options == "lives")
        code = 'lives';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['variables'] = function(block) {
    var dropdown_options = block.getFieldValue('Options');
    var code = '';
    if (dropdown_options == "score")
        code = 'score';
    else if (dropdown_options == "lives")
        code = 'lives';
    return [code, Blockly.Python.ORDER_NONE];
};





export const blocks = {
    kind: "category",
    name: "Farm",
    colour: "#5000ff",
    contents: [

        {
            kind: "block",
            type: "end_block",
        },
        {
            kind: "block",
            type: "win_block",
        },
        {
            kind: "block",
            type: "forever_repeat_block",
        },
    ]
};






'<xml xmlns="https://developers.google.com/blockly/xml"><block type="set_variable_holder" id="+ii.L@OqUS^zz0`=r!i(" x="-94" y="-215"><field name="Variable name">score</field><value name="NAME"><block type="math_number" id="m?0:%3z`e`p)w-0D.+pd"><field name="NUM">0</field></block></value><next><block type="set_variable_holder" id="=~pCi#8LZ.9`uRj+YU*2"><field name="Variable name">lives</field><value name="NAME"><block type="math_number" id="qhi~IhwTybP^CZoidaq?"><field name="NUM">5</field></block></value><next><block type="single_action_block" id="U4gYX)gP6,J:D~,:pNoN"><next><block type="forever_repeat_block" id="=KZfBa{lKuuAWLFLz9.r"><statement name="NAME"><block type="controls_if" id="v(@e*Xg_?Fom6)`?;r9m"><mutation else="1"></mutation><value name="IF0"><block type="key_sensing" id="A{Be}gk9E]5a-v%#*t=V"><field name="NAME">option5</field></block></value><statement name="DO0"><block type="fly" id=";[+8hbtRvfvoc:E;CD2?"></block></statement><statement name="ELSE"><block type="gravity" id="y2*yhgCUOqZhoBleInl."></block></statement><next><block type="controls_if" id="!-EC~4)3Mog9mD%HQ:6:"><value name="IF0"><block type="spritetouch__block" id="+7FPVgHeldxuJaP=1pWq"><field name="options1">Bird</field><field name="options2">Obstacle</field></block></value><statement name="DO0"><block type="change_variable_holder" id="D3h.]+ct@~YZ9mpS.vBq"><field name="Variable name">lives</field><value name="NAME"><block type="math_number" id="fip7}cVapNgZ*z+Q|22q"><field name="NUM">-1</field></block></value></block></statement><next><block type="controls_if" id="j.4NR6nltY~K.@;%mtfH"><value name="IF0"><block type="spritetouch__block" id="[%m]M{t]UbEmJ!a7j%IF"><field name="options1">Bird</field><field name="options2">Ground</field></block></value><statement name="DO0"><block type="change_variable_holder" id="p7VV-#$cJIu=Vh~y37d-"><field name="Variable name">lives</field><value name="NAME"><block type="math_number" id="^Vs7?I-VNd5FFsZhpeZN"><field name="NUM">-1</field></block></value></block></statement><next><block type="controls_if" id="v)7Z6Apnc^E+8k_(?:O/"><value name="IF0"><block type="spritetouch__block" id="v(Ahx~jY2djU5,P-WG7c"><field name="options1">Bird</field><field name="options2">Coin</field></block></value><statement name="DO0"><block type="change_variable_holder" id="tA=qN3?^@j`w$rF-$MrF"><field name="Variable name">score</field><value name="NAME"><block type="math_number" id="{[LBUl30mi[!W~r+w^Qm"><field name="NUM">1</field></block></value></block></statement><next><block type="controls_if" id="7Eb7EehWt~BztAi+NP$x"><value name="IF0"><block type="logic_compare" id="3z4,Nnjp.v)DpbBkGjB9"><field name="OP">GTE</field><value name="A"><block type="variables" id="P}Ht%USXStR7G6]Eqk;I"><field name="Options">score</field></block></value><value name="B"><block type="math_number" id="s3Q,;O-FabJZmn.pbCWs"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="win_block" id="a@z+tpLlfOMfHCVjyDwE"></block></statement><next><block type="controls_if" id="7iYlc/{mc`I]L$T6rvia"><value name="IF0"><block type="logic_compare" id=")AOa6sy4vfM/;fH-8DQ,"><field name="OP">LTE</field><value name="A"><block type="variables" id="oN$d~!Hc}n!d7_6rcthS"><field name="Options">lives</field></block></value><value name="B"><block type="math_number" id="ELgh*T2_Q#;4k8?J|u#k"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="end_block" id="CS1%`Pz](5=Lfwjjn314"></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>'