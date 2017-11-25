class  Dungeon {
  constructor(state, areas, data) {
    this.state = state;
    this.name = data.name;
    this.areaType = areas[data.areaType];
    this.tilemap = null;
    this.createDungeonLayout();
  }

  createDungeonLayout() {
    var data = [];    
    var csv = '';
    
    for (var y=0; y < 3; y++) {
      data.push([]);
      for (var x=0; x < 32; x++) {
	
	switch (y) {
	case 0:
	case 1:
	  csv += this.areaType.tiles.bg;
	  break;
	case 2:
	  csv += this.areaType.tiles.middle;
	  break;
	}

	if (x < 31) {
	  csv += ',';
	}
      }

      csv += '\n';
    }
    this.state.game.cache.addTilemap(this.name, null, csv, Phaser.Tilemap.CSV);
    this.map = this.state.game.add.tilemap(this.name, 21, 21);
    this.map.addTilesetImage(this.name, this.areaType.spritesheet, 21, 21, 2, 2);
    this.layer = this.map.createLayer(0);
    this.layer.setScale(2, 2);
    this.layer.sendToBack();
  }

  update() {
    
  }
}

export default Dungeon;
