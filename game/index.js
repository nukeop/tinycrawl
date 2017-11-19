import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import BootState from './boot';

class Game extends Phaser.Game {
  constructor() {
    super(640, 480, Phaser.AUTO, 'game');

    this.state.add('Boot', BootState, false);
    this.state.start('Boot');
  }
}

new Game();
