// Creating a JavaScript Object
// const Person1 = {};
// //const Person1 = new Object();
// Person1.firstName = "John";
// Person1.lastName = "Doe";
// Person1.age = 50;
// Person1.eyeColor = "blue";
// let text1 = " ";
// for(let x in Person){
//     text1 += Person1[x] + "<br>";
// }

// Object Constructor Functions
// function Person2(first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// Person2.prototype.nationality = "English";
// const myFather2 = new Person2("John", "Doe", 50, "blue");

// let text2 = "";
// for(let x in myFather2){
//     text2 += myFather2[x] + "<br>";
// }



// Object.assign()
// const Person3 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// }

// const Person3cpy = { firstName: "Anne", lastName: "Smith" };
// Object.assign(Person3, Person3cpy);

// Object.entries() --> Return key and value
// Simpler than loop
//let text3 = Object.entries(Person3);

// Object.values() --> Return only value
//let text4 = Object.values(Person3);

// Object.keys() --> Return only key
//let text5 = Object.keys(Person3);

// Loop: For in


// Object.defineProperty()
// const Person4 = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };
// Adding a new property
//Object.defineProperty(Person4, "year", {value: "2008"});
// Changing property value
//Object.defineProperty(Person4, "language", {value : "NO"});
// Changing meta data
//Object.defineProperty(Person4, "language", {writable: false});

// The getOwnPropertyNames() method returns all properties.
//The Object.keys() method returns all enumerable properties.

// Define Getter
// const Person5 = {firstName:"John", lastName:"Doe"};

// Define a Getter
// Object.defineProperty(Person5, "fullName", {
//     get: function () {return this.firstName + " " + this.lastName;}
//   });

// document.getElementById("demo").innerHTML = Person5.fullName;

// const obj = { counter: 0 };

// Object.defineProperty(obj, "reset", {
//     get: function () { this.counter = 0; }
// });

// Object.defineProperty(obj, "increment", {
//     get: function () { this.counter++; }
// });

// Object.defineProperty(obj, "decrement", {
//     get: function () { this.counter--; }
// })
// Object.defineProperty(obj, "add", {
//     set: function (value) { this.counter += value; }
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) { this.counter -= value; }
// });

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;

// document.getElementById("demo").innerHTML = obj.counter;


// Define Getter and Setter NEW
