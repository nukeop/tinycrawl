class DungeonType {
  constructor(game, data) {
    this.game = game;
    this.name = data.name;
    this.areaType = data.areaType;
    this.descriptions = data.descriptions;
    this.background = data.background;
    
  }
}

export default DungeonType;
