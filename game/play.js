import Hero from './hero';

import Soldier from './data/heroes/soldier';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    var soldier = new Hero(this, Soldier);
    soldier.sprite.animations.play('default');
    soldier.sprite.position.x = 15;
    soldier.sprite.position.y = 30;
  }
}

export default PlayState;
