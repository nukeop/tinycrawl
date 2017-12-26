import { centerText } from '../textutils';

class TitleScreenState extends Phaser.State {
  init() {
    console.log('Title Screen started');
  }

  create() {
    this.time = this.game.time.create();
    this.time.repeat(1 * Phaser.Timer.SECOND, 7200, this.updateTimer, this);
    this.time.start();

    this.startText = centerText(this.game, 200, '[Click to play]', this.game.gameData.textStyles.red);
    
    this.logo = this.add.image(0, 0, 'game_logo');
    this.logo.scale.x = this.logo.scale.y = 2;
    this.logo.anchor.x = 0.5;
    this.logo.x = this.game.world.centerX;
    this.logo.y = 10;

    this.game.input.onTap.add(this.onTap.bind(this), this);
  }

  onTap(pointer, doubleTap) {
    this.state.start('MainMenu');
  }

  updateTimer() {
    this.startText.visible = !this.startText.visible;
  }

  
}

export default TitleScreenState;
