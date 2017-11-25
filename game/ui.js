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

    this.gui.forEach(sprite => {
      sprite.scale.x = sprite.scale.y = 2;
    });
    
  }
}

export default UI;
