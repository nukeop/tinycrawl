import blankSave from './data/blankSave.yaml';

const createNewSave = () => {
  return blankSave;
};

const loadGame = () => {
  return JSON.parse(localStorage.getItem('tinycrawl_save'));
};

const saveGame = data => {
  localStorage.setItem('tinycrawl_save', JSON.stringify(data));
}

const checkIfSavedGameExists = () => {
  return !(loadGame()===null);
};



export {
  createNewSave,
  loadGame,
  saveGame,
  checkIfSavedGameExists
};
