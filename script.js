// Exercise 1 - Classes
const btnPerson = document.getElementById("btn-person");
const showPerson = document.getElementById("show-person");
const btnPromise = document.getElementById("btn-promise");
const showPromise = document.getElementById("show-promise");
console.log(btnPromise, showPromise);

console.log(showPerson);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}
// Exercise 2 - This
// Create a new object using the `Person` class you defined in Exercise 1. Name the object `person1` and set the `name` and `age` properties accordingly. Then, create a function called `describePerson` that takes a callback function as an argument. Inside the `describePerson` function, call the callback function with `person1` as the `this` context.

//Instantiate Object:
let person1 = new Person("Lucas", 29);

//describePerson function:
const describePerson = (callback) => {
  return callback.call(person1);
};

// Event listener Introduce Person.
btnPerson.addEventListener("click", () => {
  showPerson.innerText = person1.introduce();
});
// Exercise 3 - Promises
// Write a function called `wait` that takes a number as an argument (representing milliseconds) and returns a Promise. The Promise should resolve after the given number of milliseconds, using `setTimeout`. The resolved value can be anything you choose.
const wait = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Promise resolved, return this:
      resolve(`Promise resolved after waiting for ${milliseconds} ms.`);
    }, milliseconds);
  });
};

//Using promise
// Event Listener to Promise
btnPromise.addEventListener("click", () => {
  showPromise.innerText = "Waiting...";

  wait(2000) //Call function and pass milliseconds as param.
    .then((result) => {
      showPromise.innerText = result; //If resolve, return this result
    })
    .catch((error) => {
      showPromise.innerText = "Error"; //otherwise, throw error.
    });
});
