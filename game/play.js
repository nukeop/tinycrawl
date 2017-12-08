import Area from './area';
import Dungeon from './dungeon';
import Hero from './hero';
import UI from './ui';

import Marine from './data/heroes/marine.yaml';
import Grasslands from './data/areas/grasslands.yaml';
import PurplePlanet from './data/areas/purplePlanet.yaml';
import MushroomLand from './data/areas/mushroomLand.yaml';
import Plains from './data/dungeons/plains.yaml';

import { centerBitmapText } from './textutils';

class PlayState extends Phaser.State {
  init() {
    console.log('Play state started');
  }

  create() {
    this.time = this.game.time.create();
    this.time.repeat(1 * Phaser.Timer.SECOND, 7200, this.updateTime, this);
    this.time.start();
    
    this.gui = new UI(this.game, 'ui', {x: 0, y: 125, width: 320, height: 60, tile: 16});
    
    this.marine = new Hero(this, Marine);
    this.marine.sprite.animations.play('walking');
    this.marine.sprite.position.x = 15;
    this.marine.sprite.position.y = 42;

    this.areas = {
      grasslands: new Area(this, Grasslands),
      purplePlanet: new Area(this, PurplePlanet),
      mushroomLand: new Area(this, MushroomLand)
    };
    this.dungeon = new Dungeon(this, this.areas, Plains);
    
    centerBitmapText(this.game, 140, 'pixel-fg', 'The Land and/or Lands of Jo\'eb', 32);
    this.startText = centerBitmapText(this.game, 200, 'pixel-red', '[Press start]', 32);   
  }

  update() {
    super.update();
    this.dungeon.update();
    this.lastUpdate = this.time.time;
  }

  updateTime() {
    if (this.startText.visible) {
      this.startText.visible = false;
    } else {
      this.startText.visible = true;
    }
  }
  
}

export default PlayState;
