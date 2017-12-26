import _ from 'lodash';
import {
  centerText,
  centerTextButton,
  drawButtonBorder
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
	centerText(this.game, this.margin, 'NO HEROES', this.game.gameData.textStyles.defaultNoTabs);
	let continueButton = centerTextButton(this.game, this.game.height - this.margin, 'Continue', this.game.gameData.textStyles.defaultNoTabs, this.game.gameData.textStyles.yellow);

	drawButtonBorder(continueButton, {x: 15, y: 2}, 0x98D1CE);
	
	continueButton.events.onInputUp.add(() => {
	  this.state.start('HeroCreationScreen');
	});

	
      } else {
	
      }
    } else {
      // Error state, save deleted manually
    }
    
  }
  
}

export default SaveSummaryScreenState;
