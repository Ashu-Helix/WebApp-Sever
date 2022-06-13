Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = 1;
import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';
Blockly.Blocks['traffic_signal'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LIGHT")
            .appendField(new Blockly.FieldDropdown([
                ["RED", "red"],
                ["AMBER", "amber"],
                ["GREEN", "green"]
            ]), "light")
            .appendField("SWITCH")
            .appendField(new Blockly.FieldDropdown([
                ["ON", "on"],
                ["OFF", "off"],
            ]), "switch");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259, 97, 90);
        this.setTooltip("Control the Traffic signal");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['traffic_signal'] = function (block) {
    var light = block.getFieldValue('light');
    var switch_ = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
    if (light == "red") {
        if (switch_ == "on")
            var code = "await red_light_control(true);";
        else if (switch_ == "off")
            var code = "await red_light_control(false);";
    } else if (light == "amber") {
        if (switch_ == "on")
            var code = "await amber_light_control(true);";
        else if (switch_ == "off")
            var code = "await amber_light_control(false);";
    } else if (light == "green") {
        if (switch_ == "on")
            var code = "await green_light_control(true);";
        else if (switch_ == "off")
            var code = "await green_light_control(false);";
    }

    return code;
};

Blockly.Python['traffic_signal'] = function (block) {
    var light = block.getFieldValue('light');
    var switch_ = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
    if (light == "red") {
        if (switch_ == "on")
            var code = "traffic_signal.red(true)\n";
        else if (switch_ == "off")
            var code = "traffic_signal.red(false)\n";
    } else if (light == "amber") {
        if (switch_ == "on")
            var code = "traffic_signal.amber(true)\n";
        else if (switch_ == "off")
            var code = "traffic_signal.amber(false)\n";
    } else if (light == "green") {
        if (switch_ == "on")
            var code = "traffic_signal.green(true)\n";
        else if (switch_ == "off")
            var code = "traffic_signal.green(false)\n";
    }

    return code;
};


Blockly.Blocks['wait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait 1000 ms");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259, 97, 90);
        this.setTooltip("Wait time in milliseconds");
        this.setHelpUrl("");
        this.set
    }
};

Blockly.JavaScript['wait'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "await sleep(1000);";
    return code;
};

Blockly.Python['wait'] = function (block) {
    var code = "traffic_signal.wait(1000)\n";
    return code;
};

Blockly.Blocks['wait_block'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField(new Blockly.FieldLabelSerializable("Wait for"), "NAME");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ms");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259, 97, 90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['wait_block'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'await sleep(' + value_name + ');';
    return code;
};

Blockly.Python['wait_block'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'traffic_signal.wait(' + value_name + ')\n';
    return code;
};

export const blocks = {
    kind: "category",
    name: "Traffic",
    colour: "#5000ff",
    contents: [

        {
            kind: "block",
            type: "wait",
        },
        {
            kind: "block",
            type: "traffic_signal",
        }]
};