// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector(".heading");
const firstCard = document.querySelector(".card");
// B- finding within one particular element
const imageFirstCard = document.querySelector(".card-img-top");
const titleFirstCard = document.querySelector(".card-title");
const subtitleFirstCard = document.querySelector(".card-subtitle");
const textFirstCard = document.querySelector(".card-text");
// C- traversing with dot notation
const link1FirstCard = document.querySelectorAll(".card-link")[0];
const link2FirstCard = document.querySelectorAll(".card-link")[1];

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav .menu-item");
// B- Loop over the links and console.log their text content
links.forEach((item) => {
  console.log("elements: ", item.textContent);
});
// C- Turn the collection of links into a real array
const realArr = Array.from(links);
// console.log("Real Arrays: ", realArr);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAlone = realArr.find((link) => link.textContent === "Home");
console.log(homeAlone);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Lambda Dog";
imageFirstCard.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNF05Ymlsd3de84JpDW08jpblIY5a7GLu5w&usqp=CAU";
titleFirstCard.textContent = "Air Bud";
subtitleFirstCard.textContent = "Dog";
textFirstCard.textContent =
  "Fetches like lighting, wags tails, gives unconditional love, eats food, plays, runs";
//  B- Have the students research online the difference between textContent and innerText

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.href = "https://www.petfinder.com/dog-breeds/";
link2FirstCard.textContent = "Dog Ipsum";
link2FirstCard.href = "https://doggoipsum.com/";

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add = "sky";
header.classList.remove = "sky";
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
console.log("Blog Link", blogLink);

document.querySelector("nav").appendChild(blogLink);
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
