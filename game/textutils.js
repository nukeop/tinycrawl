const centerBitmapText = (game, row, font, text, size) => {
  var bitmapText = game.add.bitmapText(0, row, font, text, size);
  bitmapText.maxWidth = game.width;
  bitmapText.align = "center";
  bitmapText.anchor.x = 0.5;
  bitmapText.updateText();
  bitmapText.x = game.world.centerX;
  bitmapText.fixedToCamera = true;
  return bitmapText;
};

const textButton = (game, x, y, font, hoverFont, text, size) => {
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
}

const centerTextButton = (game, row, font, hoverFont, text, size) => {
  var button = textButton(game, game.world.centerX, row, font, hoverFont, text, size);
  button.maxWidth = game.width;
  button.anchor.x = 0.5;
  button.updateText();
  return button;
}

module.exports = {
  centerBitmapText,
  textButton,
  centerTextButton
};
