const cars = ["Mercedes", "BMW", "Honda"];
// Display full array
//document.getElementById("demo").innerHTML = cars;

// Display element
//document.getElementById("demo").innerHTML = cars[0];

// Changing element
//cars[0] = "CHANGE";
//document.getElementById("demo").innerHTML = cars;

// Length of array
//let len = cars.length;
//document.getElementById("demo").innerHTML = len;

// Looping array elements
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for(let i = 0; i < fLen; i++)
// { 
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>"
// document.getElementById("demo").innerHTML = text;

// Array in Object
// let x = "";
// const myObj = {
//     name: "Jone",
//     age: 30,
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// }

// for(let i in myObj.cars){
//     x += "<h2>" + myObj.cars[i].name + "</h2>";
//     for(let j in myObj.cars[i].models){
//         x += myObj.cars[i].models[j] + "<br>";
//     }
// }


// document.getElementById("demo").innerHTML = x;

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1(){
    points.sort();
    document.getElementById("demo").innerHTML = points;
}

function myFunction2(){
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
}
