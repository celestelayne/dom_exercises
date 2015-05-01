//
// Part 1
//
var list = document.querySelectorAll(".datatype, .loop, .function");

for(var i = 0; i < list.length; i = i + 1) {
    list[i].style.borderBottom="thin solid red";
}


//
// Part 2
//
var things = document.querySelectorAll(".datatype");

for(var i = 0; i < list.length; i = i + 1) {
    list[i].style.color = "red";
}


//
// Part 3
//
var moreThings = document.querySelectorAll(".function");

for(var i = 0; i < moreThings.length; i = i + 1) {
    moreThings[i].style.color = "blue";
}