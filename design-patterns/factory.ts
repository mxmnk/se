// Creational
// Instead of using a new keyword to instantiate and object you use a function or method to do it for you
// Use case: Cross platform app - Conditional checking to determine which button to show

class IOSButton {}

class AndroidButton {}

// without Factory
// const button = os === 'ios' ? new IOSButton() : new AndroidButton();

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}
