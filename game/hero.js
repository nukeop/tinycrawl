class Hero {
	constructor(state, name, stats, spritesheet, animations, position) {
		this.state = state;
		this.name = name;
		this.stats = stats;
		this.spritesheet = spritesheet;

		this.sprite = this.state.add.sprite(position.x, position.y, this.spritesheet);
		
		animations.map(anim => {
			this.sprite.animations.add(anim.name, anim.frames, anim.fps, anim.loop);
		});
	}
}

const createFromJson = (position, json, state) => {
	return new Hero(state, json.name, json.stats, json.spritesheet, json.animations, position);
};

module.exports = {
	createFromJson,
	Hero
}
