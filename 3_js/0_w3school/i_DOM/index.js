// FINDING HTML ELEMENTS
// document.getElementById(id) --> Find an element by element id 
//const element_id = document.getElementById("intro");

// document.getElementsByTagName(name) --> Find elements by tag name
//const element_tag = document.getElementsByTagName("p");


// document.getElementsByClassName(name) --> Find elements by class name
//const element_clas = document.getElementsByClassName("intro");

// document.querySelectorAll(name)
//const element_selector = document.querySelectorAll("p.intro");

// Finding HTML Elements by HTML Object Collections
// const x = document.forms["frm1"];
// let text="";
// for(let i = 0; i < x.length; i++){
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// CHANGING HTML ELEMENTS
// element.innerHTML = new html content --> Change the inner HTML of an element.
// element.attribute = new value --> Change the attribute value of an HTML element.
//document.getElementById('myImage').src = "landscape.jpg";

// element.style.property = new style --> Change the style of an HTML element.

// element.setAttribute(attribute, value) --> Change the attribute value of an HTML value.

// document.write()
//document.write(Date());

// ADDING AND DELETING ELEMENTS
// document.createElement(element) --> Create an HTML element.
// document.removeChild(element) --> Remove an HTML element.
// document.appendChild(element) --> Add an HTML element.
// document.replaceChild(new, old) --> Replace an HTML element.
// docuemnt.write(text) --> Write into the HTML output stream.

// ADDING EVENTS HANDLERS
// document.getElementById(id).onclick = function(){code} --> Adding event handler coode to an onclick event.

// FINDING HTML OBJECTS --> READING ON WEBSITE

// FORM VALIDATION
// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;
//     if(x == ""){
//         alert("Name must be filled out");
//         return false;
//     }
// }

// function myFunction(){
//     let x = document.getElementById("numb").value;
//     let text;
//     if(isNaN(x) || x < 1 || x > 10){
//         text = "Input not valid";
//     }else{
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// DOM CSS
// document.getElementById("p2").style.color = "blue"

// document.getElementsByClassName("test")[0].innerHTML 

// DOM ANIMATION
// function myMove(){
//     let id = null;
//     const elem = document.getElementById("animate");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);

//     function frame(){
//         if(pos == 350){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

function changeText(id){
    id.innerHTML = "Oppps!";
}
