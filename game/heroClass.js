class HeroClass {
  constructor(game, data) {
    this.game = game;

    this.name = data.name;
    this.startingStats = data.startingStats;
    this.spritesheet = data.spritesheet;
    this.portrait = data.portrait;
    this.animations = data.animations;
  }

}

export default HeroClass;
