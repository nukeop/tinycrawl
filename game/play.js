import Area from './area';
import Dungeon from './dungeon';
import Hero from './hero';
import UI from './ui';

import Soldier from './data/heroes/soldier';
import Grasslands from './data/areas/grasslands';
import Plains from './data/dungeons/plains';

import { centerBitmapText } from './textutils';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    this.gui = new UI(this.game, 'ui', {x: 0, y: 125, width: 320, height: 60, tile: 16});
    
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

    centerBitmapText(this.game, 140, 'pixel-fg', 'The Land and/or Lands of Jo\'eb', 32);
    centerBitmapText(this.game, 200, 'pixel-red', '[Press start]', 32);
  }
}

export default PlayState;
