import _ from 'lodash';
import { centerBitmapText } from '../textutils';

import mainMenuData from '../data/mainMenuData.yaml';

class MainMenuState extends Phaser.State {
  init() {
    console.log('Main Menu entered.');
  }

  create() {
    this.margin = 32;
    this.entries = _.map(mainMenuData.entries, (entry, index) => {
      return centerBitmapText(this.game, this.margin + index * 32, 'pixel-fg', entry, 32);
    });
    console.log(this.entries);

  }

  update() {

  }
}

export default MainMenuState;
