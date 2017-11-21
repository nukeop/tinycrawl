export default {
  name: 'soldier',
  stats: {
    hp: 3,
    attack: 2,
    defense: 1
  },
  spritesheet: 'tiles',
  portrait: 174,
  animations: [
    {
      name: 'default',
      frames: [ 28, 29 ],
      fps: 10,
      loop: true
    }
  ]
};
