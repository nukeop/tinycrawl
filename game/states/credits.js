import _ from 'lodash';
import { centerBitmapText } from '../textutils';

import creditsData from '../data/credits.yaml';

class CreditsState extends Phaser.State {
  init() {
    console.log('Credits screen entered');
  }

  create() {
    this.margin = 192;
    let lines = 0;
    this.entries = _.map(creditsData, (entry, index) => {
      let titleText = centerBitmapText(this.game, this.margin + lines * 32, 'pixel-fg', entry.title, 32);
      titleText.fixedToCamera = false;
      lines++;

      let creditEntries = _.map(entry.entries, name => {
	let nameText = centerBitmapText(this.game, this.margin + lines * 32, 'pixel-fg', name, 32);
	nameText.fixedToCamera = false;
	lines++;

	return nameText;
      });

      lines++;
      return {
	titleText,
	creditEntries
      };
    });
  }

  update() {
    super.update();
    _.forEach(this.entries, entry => {
      entry.titleText.y -= 0.75;
      _.forEach(entry.creditEntries, name => {
	name.y -= 0.75;
      });
    });
  }
}

export default CreditsState;
