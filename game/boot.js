class BootState extends Phaser.State {

  preload() {
    this.load.spritesheet('tiles', './resources/spritesheet.png', 21, 21, -1, 2, 2);
  }

  create() {
    this.add.sprite(100, 100, 'tiles', 20);
  }
  
}


export default BootState;
