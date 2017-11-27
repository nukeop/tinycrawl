class  Dungeon {
  constructor(state, areas, data) {
    this.state = state;
    this.name = data.name;
    this.areaType = areas[data.areaType];
    this.tilemap = null;
    this.backgroundImage = data.background;
    this.background = this.state.game.add.tileSprite(0, 0, 320, 240, this.backgroundImage);
    this.background.scale.x = this.background.scale.y = 2;
    this.createDungeonLayout();
    this.background.sendToBack();
  }

  addRow(csv, tile) {
    for (var x=0; x < 32; x++) {

      csv += tile;

      if (x < 31) {
	csv += ',';
      }
    }

    csv += '\n';
    return csv;
  }

  createDungeonLayout() {   
    var csv = '';
    csv = this.addRow(csv, this.areaType.tiles.transparent);
    csv = this.addRow(csv, this.areaType.tiles.transparent);
    csv = this.addRow(csv, this.areaType.tiles.middle);
    
    this.state.game.cache.addTilemap(this.name, null, csv, Phaser.Tilemap.CSV);
    this.map = this.state.game.add.tilemap(this.name, 21, 21);
    this.map.addTilesetImage(this.name, this.areaType.spritesheet, 21, 21, 2, 2);
    this.layer = this.map.createLayer(0);
    this.layer.setScale(2, 2);
    this.layer.sendToBack();
    this.map.y = 20;
  }

  update() {
    
  }
}

export default Dungeon;
