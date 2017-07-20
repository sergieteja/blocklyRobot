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

goog.provide('Blockly.Blocks.perceptual');  // Deprecated
goog.provide('Blockly.Constants.Perceptual');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Perceptual.HUE = 270;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.perceptual.HUE = Blockly.Constants.Perceptual.HUE;

/**
  Bloques perceptual
*/
Blockly.Blocks['back_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("back_obstacle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para ver si hay obstaculo detrás');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['center_black_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("center_black_line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};


Blockly.Blocks['center_red_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_straight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['front_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("front_obstacle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Función para ver si hay obstáculo delante.');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['get_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_distance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para ver la distancia al obstáculo.');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['get_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_image");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Función para ver la imagen de la cámara del robot.');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['left_black_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("left_black_line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['left_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("left_obstacle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['left_red_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("left_red_line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['line_crossing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("line_crossing");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['obstacle_free'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("obstacle_free");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['right_black_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("right_black_line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};


Blockly.Blocks['right_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("right_obstacle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Funcion para girar el robot a la derecha');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['right_red_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("right_red_line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['visual_auxiliary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("visual_auxiliary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('visual_auxiliary');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};