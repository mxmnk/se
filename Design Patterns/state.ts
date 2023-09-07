// Behavioral
// Object behaves differently based on a finite amount of states
// Examples: Finite State Machines

// class Human {
//   think(mood) {
//     switch (mood) {
//       case 'happy':
//         return "I'm happy";
//       case 'sad':
//         return "I'm sad";
//       default:
//         return "I'm neutral";
//     }
//   }
// }

interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy 🙂';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 🙁';
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
