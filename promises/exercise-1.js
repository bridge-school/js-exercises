require('es6-promise');

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.
// Then, print the contents of the promise after it has been fulfilled by passing console.log to then.
//
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});
//
const onResolve = value => {
  console.log(value);
};

promise.then(onResolve);

// const wait = ms => new Promise(resolve => setTimeout(resolve, 300));
//
// wait().then(() => Promise.resolve().then(() => console.log('FULFILLED!')));
