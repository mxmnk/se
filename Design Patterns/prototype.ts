// Creational
// Fancy word for "clone".
// Create clone object instead of extending object

const zombie = {
  eatBrains() {
    return 'yum';
  },
};

const properties = {
  name: { value: 'Hank', writable: true, enumerable: true, configurable: true },
};

const hank = Object.create(zombie, properties);

console.log(hank.eatBrains());
