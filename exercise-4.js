// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

const reduce = (array, fn, init) => {
  // your solution here
  // base case
  if (array.length === 0){
    return init;
  }

  // recursive case
  // return reduce(array.slice(1), fn, fn(init, array[0])); // my way
  return reduce(array, fn, fn(init, array.shift())); // another way
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;
