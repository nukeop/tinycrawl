import _ from 'lodash';
import assets from './data/assets';

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
    this.state.start('TitleScreen');
  }

  loadSpritesheet(asset) {
    this.load.spritesheet(asset.key, asset.path, asset.frameWidth, asset.frameHeight, asset.frameMax, asset.margin, asset.spacing);
  }

  loadFont(asset) {
    this.load.bitmapFont(asset.key, asset.textureURL, asset.atlasURL);
  }

  loadImage(asset) {
    this.load.image(asset.key, asset.url);
  }
}

export default LoadState;
