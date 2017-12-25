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
    let arrowLeft = this.add.sprite(this.game.width - margin * 5.5, margin, 'ui', 806);
    arrowLeft.scale.x = arrowLeft.scale.y = 2;
    arrowLeft.inputEnabled = true;
    
    let arrowRight = this.add.sprite(this.game.width - margin * 1.5, margin, 'ui', 807);
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
    let className = this.game.add.text(this.game.width - margin * 2, margin * 1.25, this.currentHero.heroClass.name, this.game.gameData.textStyles.default);
    className.anchor.x = 0.5;

    let hp = this.game.add.text(margin, this.game.height - margin * 3, 'HP\t' + this.currentHero.heroClass.startingStats.maxHp, this.game.gameData.textStyles.default);
    let atk = this.game.add.text(margin, this.game.height - margin * 2, 'ATK\t' + this.currentHero.heroClass.startingStats.attack, this.game.gameData.textStyles.default);
    let def = this.game.add.text(margin, this.game.height - margin, 'DEF\t' + this.currentHero.heroClass.startingStats.defense, this.game.gameData.textStyles.default);

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
