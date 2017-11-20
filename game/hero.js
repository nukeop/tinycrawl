class Hero {
  constructor(state, name, stats, spritesheet, animations) {
    this.state = state;
    this.name = name;
    this.stats = stats;
    this.spritesheet = spritesheet;

    this.sprite = this.state.add.sprite(0, 0, this.spritesheet);
    
    animations.map(anim => {
      this.sprite.animations.add(anim.name, anim.frames, 30, anim.loop);
    });
  }
}

const createFromJson = (json, state) => {
  return new Hero(state, json.name, json.stats, json.spritesheet, json.animations);
};

module.exports = {
  createFromJson,
  Hero
}
