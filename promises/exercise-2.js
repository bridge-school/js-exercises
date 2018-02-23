require("es6-promise");

// Create a promise that after a delay of 300ms, rejects with an Error object. The Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.
// Create a function onReject to print error.message using console.log. Pass this function as a rejection handler to the then method of your promise.

const promise = new Promise(function(resolve, reject) {
  // Your solution here
    setTimeout(() => reject(Error('REJECTED!')), 300);
  });

const onReject = value => {
  // Your solution here
  console.log(value.message);
};

promise.catch(err => onReject(err));


//(node:23714) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): REJECTED!
