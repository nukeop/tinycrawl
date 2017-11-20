import { Hero, createFromJson } from './hero';

import Soldier from './data/heroes/soldier';

class PlayState extends Phaser.State {
		create() {
				console.log('Play state started');
			var soldier = createFromJson({x: 100, y: 60}, Soldier, this);
			soldier.sprite.animations.play('default');
		}
}

export default PlayState;
