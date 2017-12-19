import _ from 'lodash';

import HeroClass from './heroClass';

import { createNewSave, checkIfSavedGameExists, saveGame } from './saveUtil.js';
import assets from './data/assets.yaml';
import gameData from './data/gameData.yaml';


class LoadState extends Phaser.State {
  init() {
    console.log('Load state started');
  }

  preload() {
    this.game.gameData = [];
    this.preloadAssets(assets);
    this.preloadGameData(gameData);
  }

  create() {
    // Check if saved game exists, if yes - load, if not - create a new save
    if (checkIfSavedGameExists()) {

    } else {
      console.log('No save file detected, creating a new one');
      saveGame(createNewSave());
    }
    
    // Proceed to title screen
    this.state.start('TitleScreen');
  }

  preloadGameData(gameDataObj) {
    _.forEach(gameDataObj, gameobj => {
      switch(gameobj.type) {
      case 'heroClass':
	this.loadHeroClass(gameobj);
	break;
      }
    });
  }

  loadHeroClass(gameobj) {
    var req = require.context("json-loader!yaml-loader!./data", true, /yaml$/);
    var data = req(gameobj.path);
    var heroClass = new HeroClass(this.game, data);
    this.game.gameData.push(heroClass);
  }
  
  preloadAssets(assetsObj) {
    _.forEach(assetsObj, asset => {
      switch(asset.type) {
      case 'spritesheet':
	this.loadSpritesheet(asset);
	break;
      case 'font':
	this.loadFont(asset);
	break;
      case 'image':
	this.loadImage(asset);
	break;
      }
    });
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
