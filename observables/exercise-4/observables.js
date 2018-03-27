const { Observable } = Rx;

const theButton = document.getElementById("exercise-4");
const clickStream = Observable.fromEvent(theButton, "click");

/*
  Exercise 4:
  We've created an Observable stream from the button's click event. Every time you click, you should get a dog.
  As we did in the last exercise, use one of the RxJS methods to map each emitted value from a click event to a string instead.
  But this time we want to make sure the user can't click super fast and overload our "dog generator service" (pretend this is an api request).
  Use an RxJS method to throttle the clicks so that we only handle a click emission every 1000ms.
  Subscribe to the stream and print out the emitted value.

  Expected output:
    "Dog #1" after the first click,
    "Dog #2" after the next click that occurs after 1000ms,
    "Dog #3" after the next click that occurs after the next 1000ms pass.

    If you click the button extra times before each 1000ms is up, we shouldn't see a generated dog.
*/


clickStream
  .throttleTime(1000)
  .map((value, index) => `Dog #${index + 1}`)
  .subscribe(dog => console.log(dog));
