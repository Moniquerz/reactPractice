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



//arrays 

//map
const myNumbers = [55, 13, 78]
const newNumbers = myNumbers.map(index => index + 1)
console.log(newNumbers)

const [firstName, lastName] = ["Annie", "Smith"]
console.log(firstName)


const {name : userName, age : userAge} = {name: "Max", age: 35}
console.log(userAge)
console.log(userName)

//merging arrays using spread operator
const mergedNumbers = [...myNumbers, ...newNumbers]
console.log(mergedNumbers)

//control structures
//if else 
//for loop
//switch case
//while loop
//do while loops

//for loop through an array 
const sports = ["basketball", "baseball", "football"]

//creating a new const variable for every index of the sports array
for (const hobby of sports) {
    console.log(hobby)
}

//passing function as a value to another function
//this one will console log the message after 2000 ms
setTimeout(()=> {
    console.log("Timed out")
}, 2000)

//defining a function inside a function 
function init() {
    function greet() {
        console.log("hellooo from init greet")
    }
    greet();
}

init()