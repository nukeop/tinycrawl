class LoadState extends Phaser.State {
		preload() {
				console.log('Load state started');
				this.load.spritesheet('tiles', './resources/spritesheet.png', 21, 21, -1, 2, 2);
				this.load.spritesheet('ui', './resources/ui.png', 16, 16, -1, 0, 2);
		}

		create() {
				this.state.start('Play');
		}
}

export default LoadState;
