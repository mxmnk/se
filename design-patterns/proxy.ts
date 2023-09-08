// Structural
// Fancy word for "substitute"
// Replace target object with a proxy
// Example: Vue's reactivity system

const original = { name: 'Hank' };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target, key, value) {
    console.log('Updating UI...');
    return Reflect.set(target, key, value);
  },
});

reactive.name;

reactive.name = 'bob';
