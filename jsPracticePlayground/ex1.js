//named function with no parameters
function randomNumber() {
    return Math.random()
}
console.log(randomNumber())

//named function with 1 parameter
function myFunc(x){
    return x + 1
}

console.log(myFunc(1))

//named fucntion with 2 parameters
function greeting(name, greet) {
    return greet + " " + name + "!"
}

console.log(greeting("Steve", "hi there"))


//arrow functions
let sum = (num1, num2) => num1 +num2; 
console.log(sum(1,2))

let lengthOfString = str => console.log(`the length of ${str} is, `, str.length)
let string1 = "Florence and the Machine"
lengthOfString(string1)

//objects 
const user = {
    name: "bob",
    age: 75,
    greet() {
        console.log("hello")
        console.log(this.age)
    }
}

console.log(user.name)
user.greet();

//class. creates an object template
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

//using class to create a new object
const myCar1 = new Car("honda", 2020)
console.log(myCar1)