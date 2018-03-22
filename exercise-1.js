// Write a function `transformStrings` that takes an array of strings and
// only returns strings with 20 characters or less reversed.

const flavours = [
  "Cranberry",
  "Strawberry and Peanut-Butter Ice-Cream",
  "Dirty Sock",
  "Beef Casserole",
  "Peppermint",
  "Earwax",
  "Overcooked Cabbage"
];

const transformStrings = array => {
  const newArr = array.map((item)=>{
    return item.split('').reverse().join('')
  })
  return newArr.filter(word=>word.length<=20);
};

console.log(transformStrings(flavours));

module.exports = transformStrings;
