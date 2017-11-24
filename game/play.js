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
    this.soldier = new Hero(this, Soldier);
    this.soldier.sprite.animations.play('default');
    this.soldier.sprite.position.x = 15;
    this.soldier.sprite.position.y = 42;

    this.areas = {grasslands: new Area(this, Grasslands)};
    this.dungeon = new Dungeon(this, this.areas, Plains);
    
    
  }

  update() {
    super.update();
    this.dungeon.update();
  }
}

export default PlayState;
