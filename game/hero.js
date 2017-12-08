class Hero {
  constructor(state, data) {
    this.state = state;
    this.name = data.name;
    this.stats = data.startingStats;
    this.spritesheet = data.spritesheet;
    
    this.portrait = this.state.add.sprite(state.game.width, state.game.height, this.spritesheet, data.portrait);
    this.portrait.smoothed = false;
    this.portrait.scale.x = this.portrait.scale.y = 2;
    
    this.sprite = this.state.add.sprite(state.game.width, state.game.height, this.spritesheet);
    this.sprite.smoothed = false;
    this.sprite.scale.x = this.sprite.scale.y = 2;
    
    data.animations.map(anim => {
      this.sprite.animations.add(anim.name, anim.frames, anim.fps, anim.loop);
    });
  }
}

export default Hero;
