// Structural
// A simplified API to hide low level details in your code base.
// Use case: Create facade class that contain the low level systems as dependencies which then simplifies their operation.
// Example: JQuery

class PlumbingSystem {
  // Low level access to plubming system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // Low level access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electical = new ElectricalSystem();

  public turnOnSystems() {
    this.electical.setVoltage(120);
    this.electical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.electical.turnOff();
    this.plumbing.turnOff();
  }
}

const client = new House();

client.turnOnSystems();
client.shutDown();
