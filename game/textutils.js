export const centerText = (game, row, text, style) => {
  var text = game.add.text(this.game.width/2, row, text, style);
  text.anchor.x = 0.5;
  return text;
};

export const centerBitmapText = (game, row, font, text, size) => {
  var bitmapText = game.add.bitmapText(0, row, font, text, size);
  bitmapText.maxWidth = game.width;
  bitmapText.align = "center";
  bitmapText.anchor.x = 0.5;
  bitmapText.updateText();
  bitmapText.x = game.world.centerX;
  bitmapText.fixedToCamera = true;
  return bitmapText;
};

export const textButton = (game, x, y, font, hoverFont, text, size) => {
  var button = game.add.bitmapText(x, y, font, text, size);
  button.maxWidth = game.width - x;
  button.align = "center";
  button.updateText();
  button.fixedToCamera = true;
  button.inputEnabled = true;

  button.events.onInputOver.add(() => {
    button.font = hoverFont;
  });

  button.events.onInputOut.add(() => {
    button.font = font;
  });

  return button;
};

export const centerTextButton = (game, row, font, hoverFont, text, size) => {
  var button = textButton(game, game.world.centerX, row, font, hoverFont, text, size);
  button.maxWidth = game.width;
  button.anchor.x = 0.5;
  button.updateText();
  return button;
};

export const drawButtonBorder = (button, padding, borderColor) => {
  
  let graphics = button.game.add.graphics(button.x - (button.anchor.x * button.width) - padding.x, button.y - padding.y);
  graphics.lineStyle(2, borderColor);
  graphics.lineTo(button.width + 2*padding.x, 0);
  graphics.lineTo(button.width + 2*padding.x, button.height + 2*padding.y);
  graphics.lineTo(0, button.height + 2*padding.y);
  graphics.lineTo(0, 0);
  graphics.generateTexture();

};
