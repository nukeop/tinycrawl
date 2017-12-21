import _ from 'lodash';

import Area from './area';
import DungeonType from './dungeonType';
import HeroClass from './heroClass';

import { createNewSave, checkIfSavedGameExists, saveGame } from './saveUtil.js';
import assets from './data/assets.yaml';
import gameData from './data/gameData.yaml';


class LoadState extends Phaser.State {
  init() {
    console.log('Load state started');
    this.req = require.context("json-loader!yaml-loader!./data", true, /yaml$/);
  }

  preload() {
    this.game.gameData = {};
    this.game.gameData.heroClasses = [];
    this.game.gameData.areas = [];
    this.game.gameData.dungeonTypes = [];
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
      case 'area':
	this.loadArea(gameobj);
	break;
      case 'dungeonType':
	this.loadDungeonType(gameobj);
	break;
      }
    });
  }

  loadDungeonType(gameobj) {
    var data = eval(this.req(gameobj.path));
    var dungeonType = new DungeonType(this.game, data);
    this.game.gameData.dungeonTypes.push(dungeonType);
  }

  loadHeroClass(gameobj) {
    var data = eval(this.req(gameobj.path));
    var heroClass = new HeroClass(this.game, data);
    this.game.gameData.heroClasses.push(heroClass);
  }

  loadArea(gameobj) {
    var data = eval(this.req(gameobj.path));
    var area = new Area(this.game, data);
    this.game.gameData.areas.push(area);
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
