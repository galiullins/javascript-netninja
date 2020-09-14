/*
var myAge = 10;

if (myAge > 30) {
    document.write("You are over thirty");
} else if ( myAge > 20) {
    document.write("You are over twenty");
} else if ( myAge > 10) {
    document.write("You are over ten");
} else {
     document.write("You are too young");
}
*/

/* var links = document.getElementsByTagName('a');

for ( x=0; x < links.length; x++){

    links[x].className = "link-" + x;
}
*/

function getAverage(a,b){

    var average = (a+b) / 2;
    console.log (average);
    return average;
}


var myResult= getAverage(7,8);

console.log("the average is:" + myResult);

//lesson 37 
/*
var newLi = document.createElement("li");
var newA = document.createElement("a");
var menu =document.getElementById("main-nav").getElementsByTagName("ul")[0];
menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML="Link6";
newA.setAttribute("href", "#");
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);
*/

// Lesaon 38 Removing Elements from the DOM
/*
var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[0];
parent.removeChild(child);
or
var removed = parent.removeChild(child);
*/