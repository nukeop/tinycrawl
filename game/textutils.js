const centerBitmapText = (game, row, font, text, size) => {
  var text = game.add.bitmapText(0, row, font, text, size);
  text.maxWidth = 290;
  text.align = "center";
  text.anchor.x = 0.5;
  text.updateText();
  text.x = game.world.centerX;
  text.fixedToCamera = true;
  return text;
};

module.exports = {
  centerBitmapText
};
