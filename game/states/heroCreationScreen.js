import { checkIfSavedGameExists, loadGame } from '../saveUtil';

class HeroCreationScreenState extends Phaser.State {
  init() {
    console.log('Hero creation screen entered');
  }

  create() {
    this.margin = 32;
    this.classChoice = 0;
    this.currentHero = {
      heroClass: this.game.gameData.heroClasses[this.classChoice],
      sprite: null
    };
    this.updatable = [];
    this.updateSelection();
    this.drawUI(this.margin);
  }

  drawUI(margin){
    let arrowLeft = this.add.sprite(this.game.width - this.margin * 5.5, this.margin, 'ui', 806);
    arrowLeft.scale.x = arrowLeft.scale.y = 2;
    arrowLeft.inputEnabled = true;
    
    let arrowRight = this.add.sprite(this.game.width - this.margin*1.5, this.margin, 'ui', 807);
    arrowRight.scale.x = arrowRight.scale.y = 2;
    arrowRight.inputEnabled = true;

    arrowRight.events.onInputUp.add(() => {
      this.classChoice++;
      this.updateSelection();
    });

    arrowLeft.events.onInputUp.add(() => {
      this.classChoice--;
      this.updateSelection();
    });
  }

  updateSelection() {
    _.forEach(this.updatable, item => {
      item.destroy();
    });
    this.classChoice = this.classChoice % this.game.gameData.heroClasses.length;
    this.classChoice = this.classChoice < 0 ? this.game.gameData.heroClasses.length-1 : this.classChoice;
    this.currentHero.heroClass = this.game.gameData.heroClasses[this.classChoice];
    this.drawSprites(this.margin);
    this.drawText(this.margin);
  }

  drawText(margin) {
    let className = this.game.add.bitmapText(this.game.width - this.margin * 3, this.margin * 1.25, 'pixel-fg', this.currentHero.heroClass.name, 32);
    className.anchor.x = 0.5;

    this.updatable.push(className);
  }

  drawSprites(margin) {
    this.currentHero.portraitSprite = this.add.sprite(this.margin, this.margin, this.currentHero.heroClass.spritesheet, this.currentHero.heroClass.portrait);
    this.currentHero.portraitSprite.scale.x = this.currentHero.portraitSprite.scale.y = 2;

    this.currentHero.bodySprite = this.add.sprite(this.currentHero.portraitSprite.width + this.margin, this.margin, this.currentHero.heroClass.spritesheet, this.currentHero.heroClass.animations[0].frames[0]);
    this.currentHero.bodySprite.scale.x = this.currentHero.bodySprite.scale.y = 2;

    this.updatable.push(this.currentHero.portraitSprite);
    this.updatable.push(this.currentHero.bodySprite);
  }
  
}

export default HeroCreationScreenState;
