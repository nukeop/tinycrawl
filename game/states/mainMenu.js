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
      let text = centerBitmapText(this.game, this.margin + index * 32, 'pixel-fg', entry, 32);
      text.inputEnabled = true;
      text.events.onInputOver.add(() => {
	text.font = 'pixel-yellow';
      }, this);

      text.events.onInputOut.add(() => {
	text.font = 'pixel-fg';
      }, this);
      return text;
    });

  }

  update() {
  }
}

export default MainMenuState;
