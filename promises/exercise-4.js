require("es6-promise");

const listOfWines = [
    {id: 'someId', name: 'Black Tower', type: 'White'},
    {id: 'someOtherId', name: 'Merlot', type: 'Red'},
    {id: 'somethingElse', name: 'Yellow Tail', type: 'Red'},
];
  
  /* 1. Create a promise. Have it fulfilled with the list of wines after a delay of 3000ms, using setTimeout.
     2. Then, print the contents of the promise after it has been fulfilled by passing console.log to then.
     3. Create a failedPromise that rejects with the error message 'something is broken' after a delay of 3000ms, using setTimeout
     4. Then, using the contents of the promise after it returns, console.log the error message 'Oh no, the request failed becasuse' and append the error message;
  
     Extra challenge:
     A. Update the onSuccess function so that takes the returned wines, filters the list to only include the red wines and then print that list 
     B. Refactor your code so that instead of seperate named callback functions 'onSuccess' and 'onReject', you write the functions inline */
  
  
  const myPromise = new Promise((resolve, reject) => {
    // Your solution for #1 here
    setTimeout(() => {
      resolve(listOfWines);
    }, 3000);
  });
  
  const onSuccess = value => {
    console.log(value);
  };

  // Use myPromise here with onSuccess
  myPromise.then(onSuccess);


  const myFailedPromise = new Promise((resolve, reject) => {
    // Your solution for #3 here
    setTimeout(()=> {
      reject('something is broken');
    },3000);

  });

  const onReject = value => {
    console.log(value);
  };

  // use myFailedPromise here with onReject
  myFailedPromise.catch(onReject);
