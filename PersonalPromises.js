//Promises are objects.
//HOW PROMISES WORK
//It is a pending state to be fulfilled at a later date.
//Resolve method....give the store example 
resolve()
//Reject method....give the store example
reject()

let p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  });
  //let us break the code above down.
  
let p = new Promise//this is creating a new promise//
((resolve, reject) => {//the => represents an arrow function
    //The () before the arrow represents parameters
    //What comes after the arrow is what the function does.
    //A parameter is like a variable that you define in a function to accept input values.
    // When you create a function, you can specify parameters to make your function flexible and reusable. ie
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
//The parameters are name and it is a string
//Calling the Function: When you call the function, you provide an actual value for the parameter:
greet("Sharon"); // Here, "Sharon" is the argument passed to the parameter `name`.
//The function will then use the value of the argument to perform the operation.
    let isTrue = true;
    if (isTrue) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  });


  //SUMMARY
  //1. I have understood parameters.