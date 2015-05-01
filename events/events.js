// ## Part 1

var thing = document.querySelector("#clicker");

thing.addEventListener("click", function (event) {
  alert("Wuut, you clicked me!");
});

// ## Part 2

var box = document.querySelector("#mouser");

box.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function (event) {
  event.target.style.backgroundColor = "green";
});

// ## Part 3

var thing = document.querySelector("#former");

thing.addEventListener("submit", function (event) {
  alert("...");
});

// ## Part 4