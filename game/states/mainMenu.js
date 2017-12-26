import _ from 'lodash';
import {
  centerTextButton  
} from '../textutils';

import mainMenuData from '../data/mainMenuData.yaml';

class MainMenuState extends Phaser.State {
  init() {
    console.log('Main Menu entered.');
  }

  create() {
    this.margin = 32;
    this.entries = _.map(mainMenuData.entries, (entry, index) => {
      let button = centerTextButton(this.game, this.margin + index * 32, entry.text, this.game.gameData.textStyles.defaultNoTabs, this.game.gameData.textStyles.yellow);

      button.events.onInputUp.add(() => {
	this.state.start(entry.goToState);
      }, this);
      
      return button;
    });

  }

  update() {
  }
}

export default MainMenuState;
