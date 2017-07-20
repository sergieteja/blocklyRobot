/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.motor');  // Deprecated
goog.provide('Blockly.Constants.Motor');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Motor.HUE = 270;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.motor.HUE = Blockly.Constants.Motor.HUE;


/**
  Bloques motor
*/
Blockly.Blocks['move_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_left")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "DURATION")
        .appendField("segundos");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion mover a la derecha');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};


Blockly.Blocks['move_straight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_straight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para mover recto');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['set_move'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("set_move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['slow_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("slow_down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['stop_bot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop_bot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para parar el robot');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['stop_bot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop_bot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para parar el robot');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot X grados');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['turn_90_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_90_left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot 90 grados a la izquierda');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['turn_90_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_90_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot 90 grados a la derecha');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['turn_back'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_back");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot hacia atras');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot a la izquierda');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};


Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot a la derecha');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};