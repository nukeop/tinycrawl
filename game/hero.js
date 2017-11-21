class Hero {
  constructor(state, data, position) {
    this.state = state;
    this.name = data.name;
    this.stats = data.stats;
    this.spritesheet = data.spritesheet;
    
    this.portrait = this.state.add.sprite(0, 0, this.spritesheet, data.portrait);
    this.portrait.smoothed = false;
    this.portrait.scale.x = this.portrait.scale.y = 2;
    
    this.sprite = this.state.add.sprite(position.x, position.y, this.spritesheet);
    this.sprite.smoothed = false;
    this.sprite.scale.x = this.sprite.scale.y = 2;
    
    data.animations.map(anim => {
      this.sprite.animations.add(anim.name, anim.frames, anim.fps, anim.loop);
    });
  }
}

const createFromJson = (position, data, state) => {
  return new Hero(state, data, position);
};

module.exports = {
  createFromJson,
  Hero
}
