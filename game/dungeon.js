class  Dungeon {
  constructor(state, areas, data) {
    this.state = state;
    this.name = data.name;
    this.areaType = areas[data.areaType]
  }
}
