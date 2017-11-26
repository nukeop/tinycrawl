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
    this.gui.create(dimensions.x, dimensions.y, this.spritesheet, 403);
    this.gui.create(dimensions.x + dimensions.width - 2*dimensions.tile, dimensions.y, this.spritesheet, 405);
    this.gui.create(dimensions.x, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 463);
    this.gui.create(dimensions.x + dimensions.width - 2*dimensions.tile, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 465);

    // Create horizontal borders
    for (var i=0; i<(dimensions.width/(dimensions.tile*2))-2; i++) {
      this.gui.create(dimensions.x + (i+1)*dimensions.tile*2, dimensions.y, this.spritesheet, 404);
      this.gui.create(dimensions.x + (i+1)*dimensions.tile*2, dimensions.y + dimensions.height + 1.5*dimensions.tile, this.spritesheet, 464);
    }

    // Create vertical borders
    for (var i=0; i<(dimensions.height/(dimensions.tile*2)); i++) {
      this.gui.create(dimensions.x, dimensions.y + (i+1)*dimensions.tile*2, this.spritesheet, 433);
      this.gui.create(dimensions.x + dimensions.width - dimensions.tile * 2, dimensions.y + (i+1)*dimensions.tile*2, this.spritesheet, 435);
    }
    
    this.gui.forEach(sprite => {
      sprite.scale.x = sprite.scale.y = 2;
    });
    
  }
}

export default UI;
