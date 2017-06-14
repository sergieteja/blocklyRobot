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

goog.provide('Blockly.Blocks.acciones');  // Deprecated
goog.provide('Blockly.Constants.Accion');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Accion.HUE = 270;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.acciones.HUE = Blockly.Constants.Accion.HUE;

/**
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for colour picker.
  {
  "type": "blocky_accion",
  "message0": "Acción %1",
  "args0": [
    {
      "type": "input_value",
      "name": "tipo",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "nextStatement": "signal",
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)
*/



/**
  Bloques nuevos definidos
*/
Blockly.Blocks['camino_libre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("camino_libre");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('Función camino libre');
    this.setHelpUrl('https://github.com/sergieteja/blocklyRobot');
  }
};

Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("avanzar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['gira_izq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("girar_izq");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sigue_linea'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("sigue_linea");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['parar_base'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("para_base");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

