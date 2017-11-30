const centerBitmapText = (game, row, font, text, size) => {
  var text = game.add.bitmapText(0, row, font, text, size);
  text.maxWidth = 290;
  text.align = "center";
  text.updateText();
  text.x = game.canvas.width/2 - text.textWidth/2;
  text.fixedToCamera = true;
  return text;
};

module.exports = {
  centerBitmapText
};
