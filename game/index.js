import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import BootState from './boot';
import LoadState from './load';
import PlayState from './play';

class Game extends Phaser.Game {
	constructor() {
		super({
			width: 320,
			height: 240,
			renderer: Phaser.AUTO,
			parent: 'game',
			resolution: 0.25
		});

		this.state.add('Boot', BootState, false);
		this.state.add('Load', LoadState, false);
		this.state.add('Play', PlayState, false);

		this.state.start('Boot');
	}
}

new Game();
