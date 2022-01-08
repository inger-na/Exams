'use strict';
// Compare two dictionaries

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.join('-') !== keys2.join('-')) return false;
  for (const key of keys1) {
    if (keys1[key] !== keys2[key]) return false;
  }
  return true;
};

const result = compare(
  { a: 1, c: 'hello' },
  { a: 1, c: 'hello' }
);
console.log(result);
