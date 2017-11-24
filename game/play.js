import Area from './area';
import Dungeon from './Dungeon';
import Hero from './hero';

import Soldier from './data/heroes/soldier';
import Grasslands from './data/areas/grasslands';
import Plains from './data/dungeons/plains';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    var soldier = new Hero(this, Soldier);
    soldier.sprite.animations.play('default');
    soldier.sprite.position.x = 15;
    soldier.sprite.position.y = 42;

    var areas = {grasslands: new Area(this, Grasslands)};
    var dungeon = new Dungeon(this, areas, Plains);
    
    
  }
}

export default PlayState;
