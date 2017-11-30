class UI {
  constructor(game, spritesheet, dimensions) {
    this.gui = game.add.group();
    this.game = game;
    this.spritesheet = spritesheet;
    this.dimensions = dimensions;
    this.createUIBackground(dimensions);
  }

  createUIBackground(dimensions) {
    let {
      x,
      y,
      width,
      height
    } = dimensions;

    // Create corners
    this.gui.create(dimensions.x, dimensions.y, this.spritesheet, 264);
    this.gui.create(dimensions.x + dimensions.width - 2*dimensions.tile, dimensions.y, this.spritesheet, 266);
    this.gui.create(dimensions.x, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 324);
    this.gui.create(dimensions.x + dimensions.width - 2*dimensions.tile, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 326);

    // Create horizontal borders
    for (var i=0; i<(dimensions.width/(dimensions.tile*2))-2; i++) {
      this.gui.create(dimensions.x + (i+1)*dimensions.tile*2, dimensions.y, this.spritesheet, 265);
      this.gui.create(dimensions.x + (i+1)*dimensions.tile*2, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 325);
    }

    // Create vertical borders
    for (var i=0; i<(dimensions.height/(dimensions.tile*2)); i++) {
      this.gui.create(dimensions.x, dimensions.y + (i+1)*dimensions.tile*2, this.spritesheet, 294);
      this.gui.create(dimensions.x + dimensions.width - dimensions.tile * 2, dimensions.y + (i+1)*dimensions.tile*2, this.spritesheet, 296);
    }

    // Create fill
    for (var xx=0; xx<(dimensions.width/(dimensions.tile*2))-2; xx++) {
      for(var yy=0; yy<(dimensions.height/(dimensions.tile*2)); yy++) {
	this.gui.create(dimensions.x + (xx+1)*dimensions.tile*2, dimensions.y + (yy+1)*dimensions.tile*2, this.spritesheet, 295);
      }	
    }
    
    this.gui.forEach(sprite => {
      sprite.scale.x = sprite.scale.y = 2;
    });

    this.gui.fixedToCamera = true;
    
  }
}

export default UI;
