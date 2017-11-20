import { Hero, createFromJson } from './hero';

import Soldier from './data/heroes/soldier';

class BootState extends Phaser.State {
  
  preload() {
    this.load.spritesheet('tiles', './resources/spritesheet.png', 21, 21, -1, 2, 2);
    this.load.spritesheet('ui', './resources/ui.png', 16, 16, -1, 0, 2);

  }

  create() {
    var soldier = createFromJson(Soldier, this);
  }

  

  update() {
  }
  
}


export default BootState;
