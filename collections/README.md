# DOM Example - Collections

We're going to practice DOM manipulation for collections of elements.

In the first example, we only grabbed elements that had IDs. This
allowed us to work with individual elements.

However, in this example we're going to select groups of elements and
see how to work with them.

- Look at `collections.html` and examine the HTML.
- Also open `collections.js` in Sublime. We're going to write our JavaScript here.
- Open `collections.html` in Chrome.

## Part 1

- Use `.querySelectorAll` to retrieve all of the `<li>` elements.

// ANSWER

var list = document.querySelectorAll(".datatype, .loop, .function");

- Set `.style.borderBottom` on *each* of them.

for(var i = 0; i < list.length; i = i + 1) {
    list[i].style.borderBottom="thin solid red";
}

## Part 2

- Use `.querySelectorAll` to retrieve all of the elements with
  the class of `datatype`.

// ANSWER ::

var things = document.querySelectorAll(".datatype");

- Turn all of them `red`.

// ANSWERS

for(var i = 0; i < list.length; i = i + 1) {
    list[i].style.color = "red";
}

- Hint: you'll need to use the `.style.color` property and loop over each element.

## Part 3
- Use `.querySelectorAll` to retrieve all of the elements with a class
  of `function`.

// ANSWER ::

var moreThings = document.querySelectorAll(".function");

- Use a loop to change color of each one to `blue`.

// ANSWER ::

for(var i = 0; i < moreThings.length; i = i + 1) {
    moreThings[i].style.color = "blue";
}

## Further Questions

- What are the differences between `.getElementById`,
  `.getElementsByClassName`, `.getElementsByTagName`, and
  `querySelectorAll`?
- How did you loop over the lists of elements?
