export const centerText = (game, row, text, style) => {
  var textObj = game.add.text(game.width/2, row, text, style);
  textObj.anchor.x = 0.5;
  return textObj;
};

export const textButton = (game, x, y, text, style, hoverStyle) => {
  var button = game.add.text(x, y, text, style);
  button.fixedToCamera = true;
  button.inputEnabled = true;

  button.events.onInputOver.add(() => {
    button.setStyle(hoverStyle);
  });

  button.events.onInputOut.add(() => {
    button.setStyle(style);
  });
  
  return button;
};

export const centerTextButton = (game, row, text, style, hoverStyle) => {
  let button = textButton(game, game.width/2, row, text, style, hoverStyle);
  button.anchor.x = 0.5;

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
