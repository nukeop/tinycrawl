import UI from '../ui';
import { centerBitmapText } from '../textutils';

class TitleScreenState extends Phaser.State {
  init() {
    console.log('Title Screen started');
  }

  create() {
    this.time = this.game.time.create();
    this.time.repeat(1 * Phaser.Timer.SECOND, 7200, this.updateTimer, this);
    this.time.start();

    this.gui = new UI(this.game, 'ui', {x: 0, y: 125, width: 320, height: 60, tile: 16});
    this.startText = centerBitmapText(this.game, 200, 'pixel-red', '[Click to play]', 32);   
    
    this.logo = this.add.image(0, 0, 'game_logo');
    this.logo.scale.x = this.logo.scale.y = 2;
    this.logo.anchor.x = 0.5;
    this.logo.x = this.game.world.centerX;
    this.logo.y = 10;

    this.game.input.onTap.add(this.onTap.bind(this), this);
  }

  onTap(pointer, doubleTap) {
    this.state.start('Play');
  }

  updateTimer() {
     if (this.startText.visible) {
      this.startText.visible = false;
    } else {
      this.startText.visible = true;
    }
  }

  
}

export default TitleScreenState;
