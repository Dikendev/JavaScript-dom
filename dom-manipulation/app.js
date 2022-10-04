// // DOm Manipulation


// // const title = document.querySelector('#main-heading');

// // title.style.color = 'blue';

// const listitems = document.querySelectorAll('li');


// for(i = 0; i < listitems.length; i++) {
//     listitems[i].style.fontSize = '1rem';
// }

// console.log(listitems);



// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// adding Elements
ul.append(li);

// modifying the text

li.innerText = 'X-Men';

// Modifying Atttributes & Classes

li.classList.add