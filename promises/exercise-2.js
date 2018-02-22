require("es6-promise");

// Create a promise that after a delay of 300ms, rejects with an Error object. The Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.
// Create a function onReject to print error.message using console.log. Pass this function as a rejection handler to the then method of your promise.

const promise = new Promise(function(resolve, reject) {
  // Your solution here
});

const onReject = value => {
  // Your solution here
};
