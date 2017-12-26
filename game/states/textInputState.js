import {
  centerText
} from '../textutils';

class TextInputState extends Phaser.State {
  init(message, next, callAfterInput, params) {
    console.log('Text input entered');
    this.message = message;
    this.next = next;
    this.callAfterInput = callAfterInput;
    this.params = params;
  }

  create() {
    console.log(this.message);
    console.log(this.next);
    console.log(this.callAfterInput);
    console.log(this.params);

    centerText(this.game, 32, this.message, this.game.gameData.textStyles.defaultNoTabs);

    this.callAfterInput('input', this.params);
  }
}

export default TextInputState;
