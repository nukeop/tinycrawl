class BootState extends Phaser.State {
		
		preload() {
				console.log('Boot state started');

		}

		create() {
				this.state.start('Load');
		}	

		update() {
		}
		
}


export default BootState;
