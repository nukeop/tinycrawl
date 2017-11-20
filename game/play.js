import { Hero, createFromJson } from './hero';

import Soldier from './data/heroes/soldier';

class PlayState extends Phaser.State {
		create() {
				console.log('Play state started');
				var soldier = createFromJson(Soldier, this);
		}
}

export default PlayState;
