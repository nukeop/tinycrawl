import Area from './area';
import Hero from './hero';

import Soldier from './data/heroes/soldier';
import Grasslands from './data/areas/grasslands';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    var soldier = new Hero(this, Soldier);
    soldier.sprite.animations.play('default');
    soldier.sprite.position.x = 15;
    soldier.sprite.position.y = 30;

    var grasslands = new Area(this, Grasslands);

    grasslands.tiles.bg.position.x = 15;
    grasslands.tiles.bg.position.y = 72;
  }
}

export default PlayState;
