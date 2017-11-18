import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('tiles', './resources/spritesheet.png', 21, 21, -1, 2, 2);
}

function create() {
  game.add.sprite(100, 100, 'tiles', 20);
};
  
function update() {
  // ¯ \_(ツ)_/¯ 
  // "surprise me"
}
