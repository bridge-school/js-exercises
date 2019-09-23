require('es6-promise');

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.
// Then, print the contents of the promise after it has been fulfilled by passing console.log to then.

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('FULFILLED'), 300);
});

const printWhenSuccessful = data => {
  console.log('SUCCESS:', data);
};

promise.then(printWhenSuccessful);

// promise.then((value) => printWhenSuccessful(value));

