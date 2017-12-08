const createSave = () => {
  return {
    version: '0.0.1',
    heroes: [],
    dungeons: []
  };
};

const checkIfSavedGameExists = () => {
  return !(localStorage.getItem('tinycrawl_save')===null);
};


export {
  createSave,
  checkIfSavedGameExists
};
