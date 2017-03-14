export default class ListView {
  constructor(container) {
    this._container = container;
  }
  render(data) {    
    for (var i = 0; i < data.list.length; i++) {
      var listItem = data.list[i];
      this._container.append(listItem.name + " " + listItem.email);
    }
  }
}

