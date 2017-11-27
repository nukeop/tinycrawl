export default [
  {
    type: 'spritesheet',
    key: 'tiles',
    path: './resources/spritesheet.png',
    frameWidth: 21,
    frameHeight: 21,
    frameMax: -1,
    margin: 2,
    spacing: 2
  },
  {
    type: 'spritesheet',
    key: 'ui',
    path: './resources/ui.png',
    frameWidth: 16,
    frameHeight: 16,
    frameMax: -1,
    margin: 0,
    spacing: 2
  },
  {
    type: 'font',
    key: 'pixel-fg',
    textureURL: './resources/Fonts/font-fg.png',
    atlasURL: './resources/Fonts/font-fg.fnt'
  },
  {
    type: 'font',
    key: 'pixel-red',
    textureURL: './resources/Fonts/font-red.png',
    atlasURL: './resources/Fonts/font-red.fnt'
  },
  {
    type: 'image',
    key: 'bg/sky',
    url: './resources/backgrounds/sky.png'
  },
  {
    type: 'image',
    key: 'bg/forest',
    url: './resources/backgrounds/forest.png'
  },
  {
    type: 'image',
    key: 'bg/wall',
    url: './resources/backgrounds/wall.png'
  }
];
