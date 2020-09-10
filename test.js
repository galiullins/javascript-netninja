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

var links = document.getElementsByTagName('a');

for ( x=0; x < links.length; x++){

    links[x].className = "link-" + x;
}