export default class ListModel {
  constructor(name, email) {
    this._name = name;
    this._email = email
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
}