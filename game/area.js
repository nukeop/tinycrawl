import _ from 'lodash';

class Area {
  constructor(state, data) {
    this.state = state;
    this.name = data.name;
    this.spritesheet = data.spritesheet;
    
    this.tiles = data.tiles;
  }
}

export default Area;
