import _ from 'lodash';

class Area {
  constructor(state, data) {
    this.state = state;
    this.name = data.name;
    this.spritesheet = data.spritesheet;
    
    this.tiles = {};

    _.map(data.tiles, (tile, key) => {
      this.tiles[key] = this.state.add.sprite(state.game.width, state.game.height, this.spritesheet, tile);
      this.tiles[key].scale.x = this.tiles[key].scale.y = 2;
    });
  }
}

export default Area;
