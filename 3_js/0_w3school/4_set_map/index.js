const letters = new Set(["a", "b", "c"]);

// Set - Overview
let text1 = "";
for(let x of letters)
{ 
    text1 += x + " ";
}

// Map - Overview
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let text2 = "";
fruits.forEach(function(value, key){
    text2 += key + ' = ' + value + "<br>";
})


document.getElementById("demo").innerHTML = text2;