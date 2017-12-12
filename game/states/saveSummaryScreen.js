import _ from 'lodash';
import {
  centerBitmapText,
  centerTextButton
} from '../textutils';
import { checkIfSavedGameExists, loadGame } from '../saveUtil';

class SaveSummaryScreenState extends Phaser.State {
  init() {
    console.log('Save summary screen entered');
  }
  
  create() {
    this.margin = 32;

    if (checkIfSavedGameExists()) {
      let savedGame = loadGame();
      let heroes = savedGame.heroes;

      if (heroes.length < 1) {
	centerBitmapText(this.game, this.margin, 'pixel-fg', 'NO HEROES', 32);
	let continueButton = centerTextButton(this.game, this.game.height - this.margin, 'pixel-fg', 'pixel-yellow', 'Continue', 32);
	continueButton.events.onInputUp.add(() => {
	  console.log('Continue button clicked');
	});
	
      } else {
	
      }
    } else {
      // Error state, save deleted manually
    }
    
  }
  
}

export default SaveSummaryScreenState;
