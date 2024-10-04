// Loop for
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text1 = "";
for(let i = 0; i < cars.length; i++)
{ 
    text1 += cars[i] + "<br>";
}

// For In loop
const person = {fname:"John", lname: "Doe", age: 25};
let text2 = "";
for(let x in person){
    text2 += person[x] + " ";
}

// Array.forEach()
const numbers = [45, 4, 9, 16, 25];
let text3 = "";
numbers.forEach(myFunction) // Buộc phải truyền một hàm vào chỗ này

function myFunction(value, index, array){
    text3 += value;
}

// For Of loop
const supercars = ["BMW", "Volvo", "Mini"];
let text4 = "";
for(let x of supercars){
    text4 += x + "<br>";
}

let language = "JavaScript";
let text5 = "";
for(let x of language){
    text5 += x;
}

// While loop
let text6 = "";
let i = 0;
while(i < 10){
    text6 += "<br> The number is " + i;
    i++;
}

// Break and continue loop
let text7 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text7 += "The number is " + i + "<br>";
  }

let text8 = "";
for(let i = 0; i < 10; i++){
    if(i === 3){ continue; }
    text8 += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text8;