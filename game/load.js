import _ from 'lodash';

import { createSave, checkIfSavedGameExists } from './saveUtil.js';
import assets from './data/assets.yaml';


class LoadState extends Phaser.State {
  init() {
    console.log('Load state started');
  }

  preload() {
    _.forEach(assets, asset => {
      switch(asset.type) {
      case 'spritesheet':
	this.loadSpritesheet(asset);
	break;
      case 'font':
	this.loadFont(asset);
	break;
      case 'image':
	this.loadImage(asset);
      }
    });
  }

  create() {
    // Check if saved game exists, if yes - load, if not - create a new save
    if (checkIfSavedGameExists()) {

    } else {
      localStorage.setItem('tinycrawl_save', JSON.stringify(createSave()));
    }
    
    // Proceed to title screen
    this.state.start('TitleScreen');
  }

  loadSpritesheet(asset) {
    this.load.spritesheet(asset.key, asset.path, asset.frameWidth, asset.frameHeight, asset.frameMax, asset.margin, asset.spacing);
  }

  loadFont(asset) {
    this.load.bitmapFont(asset.key, asset.textureUrl, asset.atlasUrl);
  }

  loadImage(asset) {
    this.load.image(asset.key, asset.url);
  }
}

export default LoadState;
