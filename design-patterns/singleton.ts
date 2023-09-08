// Creational
// Object that can only be instantiated once
// Use case: Settings

class Singleton {
  private static _instance?: Singleton;
  public mode = 'dark';

  private constructor() {
    if (Singleton._instance) {
      throw new Error('Use Singleton.instance instead of new.');
    }
    Singleton._instance = this;
  }

  static get instance() {
    return Singleton._instance ?? (Singleton._instance = new Singleton());
  }
}

const refA = Singleton.instance;
refA.mode = 'white';
const refB = Singleton.instance;

console.log('is singleton:', refA === refB);

// same as:

const settings = {
  mode: 'dark',
};
