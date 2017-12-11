import _ from 'lodash';
import { centerBitmapText } from '../textutils';

import creditsData from '../data/credits.yaml';

class CreditsState extends Phaser.State {
  init() {
    console.log('Credits screen entered');
  }

  create() {
    this.margin = this.game.height;
    let lines = 0;
    this.entries = _.map(creditsData, (entry, index) => {
      let titleText = centerBitmapText(this.game, this.margin + lines * 32, 'pixel-fg', entry.title, 32);
      titleText.fixedToCamera = false;
      titleText.startingY = titleText.y;
      lines++;

      let creditEntries = _.map(entry.entries, name => {
	let nameText = centerBitmapText(this.game, this.margin + lines * 32, 'pixel-fg', name, 32);
	nameText.fixedToCamera = false;
	nameText.startingY = nameText.y;
	lines++;

	return nameText;
      });

      lines++;
      return {
	titleText,
	creditEntries
      };
    });

    this.game.input.onTap.add(() => {
      this.state.start('MainMenu');
    }, this);
  }

  update() {
    super.update();
    _.forEach(this.entries, entry => {
      entry.titleText.y -= 0.75;
      _.forEach(entry.creditEntries, name => {
	name.y -= 0.75;
      });
    });

    if(_.last(this.entries).titleText.y < -64) {
      _.forEach(this.entries, entry => {
	entry.titleText.y = entry.titleText.startingY;
	_.forEach(entry.creditEntries, name => {
	  name.y = name.startingY;
	});
      });
    }
  }
}

export default CreditsState;
