//Random background colour for heading h1s

let colours = ['#005aa7', '#008cb7', '#53b6b2', '#b4dabb', '#fffde4'];
let random = colours[Math.floor(Math.random() * colours.length)];
let headings = document.getElementsByClassName('heading');
console.log(headings);

for (i = 0; i < headings.length; i++) {
  headings[i].style.color = random;
}
