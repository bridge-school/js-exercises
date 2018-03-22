const { Observable } = Rx;

const theButton = document.getElementById("exercise-2");
const clickStream = Observable.fromEvent(theButton, "click");

const myObserver = {
  next: console.log,
  error: console.error,
  complete: () => console.info('complete')
};

clickStream
.map((val, index) => "Dog #" + (index + 1))
.subscribe(myObserver);

/* 
  Exercise 2:
  We've created an Observable stream from the button's click event above. We want each click to give us a "dog". 
  Use one of the RxJS methods to map each emitted value from a click event to a string instead. The string should tell us which dog number we're at. 
  Subscribe to the stream and print out the emitted value.

  Expected output:
    "Dog #1" after the first click, "Dog #2" after the second, and so on.
*/


