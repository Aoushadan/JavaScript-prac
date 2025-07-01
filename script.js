console.log("Hello")
let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum:", sum);
let num = 7;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
let str = "hello";
let reversed = str.split('').reverse().join('');
console.log(reversed);



for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
for (let num = 2; num <= 20; num++) {
  let isPrime = true;
  

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;  
    }
  }


  if (isPrime) {
    console.log(num + " is prime");
  } else {
    console.log(num + " is not prime");
  }
}


function factorial(n) {
  let result = 1;  

  for (let i = 1; i <= n; i++) {
    result *= i;  
  }

  return result; 
}

let number = 5;
console.log("Factorial of " + number + " is: " + factorial(number));


let sentence1 = "Hello My Name is Java Script";
let words = sentence1.split(" ");
console.log(words);

let sentence2 = "apple,banana,cherry,grape";
let limitedSplit = sentence2.split(",", 2);
console.log(limitedSplit);



let sentence = "apple123banana456cherry789";
let splitWords = sentence.split(/\d+/);


let word = "hello";
let letters = word.split("");
console.log(letters);

let sentences = "apple,banana|cherry grape";
let fruits = sentences.split(/[,| ]/); 
console.log(fruits);



let fruit = ["apple", "banana", "cherry", "apple"];
console.log(fruit[0]); 
console.log(fruit.length); 

let fruit1 = ["apple", "banana", "cherry"];
fruit1.push("orange"); 
console.log(fruit1);

let fruity = ["apple", "banana", "cherry"];
let removed = fruity.pop(); 
console.log(fruity); 
console.log(removed);

let fruit2= ["apple", "banana", "cherry"];
let removed1 = fruit2.shift(); 
console.log(fruit2); 
console.log(removed1); 

let fruit3 = ["banana", "cherry"];
let newLength = fruit3.unshift("apple");
console.log(fruit3); 
console.log(newLength);  

let fruit4 = ["apple", "banana", "cherry", "date"];
let removed2 = fruit4.splice(1, 2);
console.log(fruit4); 
console.log(removed2); 



let fruit5 = ["apple", "banana", "cherry"];
fruit5.splice(2, 0, "date", "elderberry"); 
console.log(fruit5); 




let fruit6 = ["apple", "banana", "cherry"];
fruit6.splice(1, 1, "blueberry", "blackberry"); 
console.log(fruit6); 

let fruit7 = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let food = fruit7.concat(vegetables);
console.log(food); 


let fruit8 = ["apple", "banana", "cherry", "date"];
let newFruits = fruit8.slice(1, 3); 
console.log(newFruits); 
console.log(fruit8);

let fruit9 = ["apple", "banana", "cherry"];
let index = fruit9.indexOf("banana");
console.log(index);

let fruit10 = ["apple", "banana", "cherry"];
fruit10.forEach(function(fruit10) {
  console.log(fruit10);
});

let number1 = [1, 2, 3, 4];
let squares = number1.map(function(number1) {
  return number1 * number1;
});
console.log(squares);

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);


let person = {
  name: "John",
  age: 30,
  isEmployed: true
};

console.log(person.name); 
console.log(person["age"]); 

let map = new Map();
map.set('name', 'Aoushadan');
map.set('age', 25);
map.set('job', 'Developer');
map.set('gender', 'Male');

console.log(map.get('name')); 
console.log(map.size); 

let uniqueNumbers = new Set([1, 2, 3, 4, 5, 1, 2]);

console.log(uniqueNumbers); 
console.log(uniqueNumbers.size); 
console.log(uniqueNumbers.has(3)); 
uniqueNumbers.add(6); 
console.log(uniqueNumbers); 

let x = 10;
if (x == 10) {
let x = 20;
console.log(x); 
}
console.log(x); 

function say(message) {
console.log(message);
}
say();
function say(message) {
message = typeof message !== 'undefined' ? message : 'Hi';
console.log(message);
}
say(); 

function say(message='Hi') {
console.log(message);
}
say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); 

function fun(...input){
let sum = 0;
for(let i of input){
sum+=i;
}
return sum;
}
console.log(fun(1,2)); 
console.log(fun(1,2,3)); 
console.log(fun(1,2,3,4,5)); 

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

const ratings = [
{user: 'Job',score: 3},
{user: 'Manoj',score: 4},
{user: 'Jane',score: 5},
{user: 'Peter',score: 2},
];
let sum1 = 0;
for (const {score} of ratings) {
sum1 += score;
}
console.log(`Total scores: ${sum1}`); 

class Person {
constructor(name) {
this.name = name;
}
getName() {
return this.name;
}
static createAnonymous(gender) {
let name = gender == "male" ? "Job Aoushadan" : "Peter";
return new Person(name);
}
}
let anonymous = Person.createAnonymous("male");

class Item {
constructor(name, quantity) {
this.name = name;
this.quantity = quantity;
this.constructor.count++;
}
static count = 0;
static getCount() {
return Item.count;
}
}
let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);
console.log(Item.getCount()); 

let p = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(10);
}, 3 * 100);
});
p.then((result) => {
console.log(result);
return result * 2;
}).then((result) => {
console.log(result);
return result * 3;
});