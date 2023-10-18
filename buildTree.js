const data = [
  {
    id: 1,
    parentId: 0,
    name: 'Electronics',
  },
  {
    id: 2,
    parentId: 1,
    name: 'Smartphones',
  },
  {
    id: 3,
    parentId: 1,
    name: 'Computers and laptops',
  },
  {
    id: 5,
    parentId: 3,
    name: 'Laptops',
  },
  {
    id: 4,
    parentId: 3,
    name: 'Computer cases',
  },
  {
    id: 9,
    parentId: 5,
    name: 'Dell',
  },
  {
    id: 8,
    parentId: 5,
    name: 'HP',
  },
  {
    id: 10,
    parentId: 5,
    name: 'Lenovo',
  },
];

const buildTree = (data) => {
  const tree = {};
  const lookup = {};

  data.forEach((obj) => {
    const { name } = obj;
    lookup[obj.id] = { name };
  });

  data.forEach((obj) => {
    if (!obj.parentId) {
      tree[obj.id] = lookup[obj.id];
    } else {
      const parent = lookup[obj.parentId];

      if (!parent.children) {
        parent.children = {
          [obj.id]: lookup[obj.id],
        };
      } else {
        parent.children[obj.id] = lookup[obj.id];
      }
    }
  });

  return tree;
};

const tree = buildTree(data);

console.log(JSON.stringify(tree, null, 2));

const findInTree = (tree, name) => {
  for (const [key, value] of Object.entries(tree)) {
    if (value.name === name) {
      return key;
    }

    if (value.children) {
      const val = findInTree(value.children, name);

      if (val !== -1) {
        return val;
      }
    }
  }

  return -1;
};

console.log(findInTree(tree, 'Laptops'));
