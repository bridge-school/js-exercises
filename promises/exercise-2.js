require("es6-promise");

// Create a promise that after a delay of 300ms, rejects with an Error object. The Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.
// Create a function onReject to print error.message using console.log. Pass this function as a rejection handler to the then method of your promise.

const promise = new Promise(function(resolve, reject) {
  const error = new Error('REJECTED!');
  setTimeout(() => reject(error), 300);
});

const printOnSuccess = value => {
  console.log('SUCCESS:', value)
};

const printOnFail = error => {
  console.log('FAIL:', error.message);
};


// promise.then(printOnSuccess, printOnFail);

promise
  .then(printOnSuccess) // printOnSuccess won't be called since our promise rejects 
  .catch(printOnFail);