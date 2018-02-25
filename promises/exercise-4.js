require("es6-promise");

const listOfWines = [
    {id: 'someId', name: 'Black Tower', type: 'White', num: 1},
    {id: 'someOtherId', name: 'Merlot', type: 'Red', num: 2},
    {id: 'somethingElse', name: 'Yellow Tail', type: 'Red', num: 3},
];
// const listOfWines = [];
  
  /* 1. Create a promise. Have it fulfilled with the list of wines after a delay of 3000ms, using setTimeout.
     2. Then, print the contents of the promise after it has been fulfilled by passing console.log to then.
     3. Create a failedPromise that rejects with the error message 'something is broken' after a delay of 3000ms, using setTimeout
     4. Then, using the contents of the promise after it returns, console.log the error message 'Oh no, the request failed becasuse' and append the error message;
  
     Extra challenge:
     A. Update the onSuccess function so that takes the returned wines, filters the list to only include the red wines and then print that list 
     B. Refactor your code so that instead of seperate named callback functions 'onSuccess' and 'onReject', you write the functions inline */
  
  
  const myPromise = new Promise((resolve, reject) => {
    // Your solution for #1 here
    if (listOfWines.length === 0) {
      reject('something is broken')
    } else {
      setTimeout(() => {
        resolve(listOfWines);
      }, 3000);
    }
  });
  
  const onSuccess = value => {
    // Your solution here
    const newlist = value.filter(thing => thing.type == 'Red');
    console.log(newlist);
  };

  // Use myPromise here with onSuccess
  myPromise
  .then((data) => {
    console.log(data.filter(thing => thing.type == 'Red'));
  }).catch((err) => {
    console.log('Oh no, the request failed becasuse', err)
  });



  // const myFailedPromise = new Promise((resolve, reject) => {
  //   // Your solution for #3 here
  //   setTimeout(() => {
  //     reject('something is broken');
  //   }, 3000);
  // });

  // const onReject = value => {
  //   // Your solution here
  //   console.log('Oh no, the request failed becasuse', value)
  // };

  // use myFailedPromise here with onReject
  // myFailedPromise.catch((err) => {
  //   onReject(err);
  // });
