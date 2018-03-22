// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];
//this is wrong
// const reduce = (array, fn, init) => {
//   return array.reduce((acc, curr) => fn(acc, curr),
//   init);
// };

const reduce = (array, fn, init) => {
    // your solution here
    if (array.length === 0) { // !array.length
      return init;
    } else {
      let total = fn(init, array[0]); // fn(0, 1)
   return reduce(array.slice(1), fn, total);
  }
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;