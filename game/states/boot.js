class BootState extends Phaser.State {

  init() {
    console.log('Boot state started');
 
  }
  
  create() {
    this.game.stage.smoothed = false;
    this.state.start('Load');
  }	

  update() {
  }
  
}


export default BootState;
