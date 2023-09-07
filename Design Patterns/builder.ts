// Creational
// Create object with methods instead of constructor
// Example: JQuery

class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}
  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

// new HotDog('wheat', false, true, true);

const myLunch = new HotDog('gluten free');

myLunch.addKetchup().addMustard().addKraut();
