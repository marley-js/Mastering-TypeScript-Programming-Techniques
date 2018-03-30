function stringOnly(target: any, key: string, descriptor: TypedPropertyDescriptor<string>) {
  return descriptor;
}

class Hero {
  private _name: string;
  constructor(name: string) {
    this._name = name
  }
  @stringOnly
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const myHero = new Hero('Batman');