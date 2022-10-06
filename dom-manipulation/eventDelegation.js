//DOM Manipularion

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present and future descendents that match a selector.


document.querySelector('#sports').addEventListener
('click', function(e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('button')) {
        target.style.backgroundColor = 'red'
    }

})
// adicionar um novo botao ... onde sera. e oque sera adicionado.

// 1 selecionar onde ira ser criado guardar em uma variavel
// 2 e oque vai ser criado guardar em uma variavel  

const sports = document.querySelector("#sports");
const newSport = document.createElement('button');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'Rugby');

sports.appendChild(newSport);

