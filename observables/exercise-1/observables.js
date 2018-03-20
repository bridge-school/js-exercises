const { Observable } = Rx;

const theButton = document.getElementById("exercise-1");
const clickStream = Observable.fromEvent(theButton, "click");

/* 
  Exercise 1:
  We've created an Observable stream from the button's click event above. 
  Subscribe to the stream and print out the emitted value.
*/

clickStream.subscribe(val => console.log(val));