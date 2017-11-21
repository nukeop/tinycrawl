import { Hero, createFromJson } from './hero';

import Soldier from './data/heroes/soldier';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    var soldier = createFromJson({x: 100, y: 60}, Soldier, this);
    soldier.sprite.animations.play('default');
  }
}

export default PlayState;
