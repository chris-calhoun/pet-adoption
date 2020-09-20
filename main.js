//console.log("TESTING. 123. TESTING");
'use strict';
const pets = [
  {
    image:
      'https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg',
    name: 'Mocha',
    color: 'brown',
    specialSkill: 'fetch',
    typeOfPet: 'cat',
  },
  {
    image:
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Murphy',
    color: 'light orange',
    specialSkill: 'Hiking',
    typeOfPet: 'dog',
  },
  {
    image:
      'https://i.pinimg.com/736x/ba/3c/40/ba3c40adc6258ae61a62ec455cf6dbd4.jpg',
    name: 'Earl',
    color: 'tan and black',
    specialSkill: 'protection',
    typeOfPet: 'dog',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDc9_9cfKkYVjzVIe-RLYcpK72Wib0aF7LNWPjO6DKwRLE--zoX2D3PDphmEwRLwfilI0UPoNlXrGYaVPGW040Di3q0KDJ24jexg&usqp=CAU&ec=45702845',
    name: 'Jessie',
    color: 'grey',
    specialSkill: 'scratching',
    typeOfPet: 'cat',
  },
  {
    image: 'https://pixy.org/download/4663301/',
    name: 'Kitters',
    color: 'spotted',
    specialSkill: 'sleeping',
    typeOfPet: 'cat',
  },
  {
    image:
      'https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg',
    name: 'Chomper',
    color: 'green',
    specialSkill: 'chomping',
    typeOfPet: 'dino',
  },
  {
    image:
      'https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8',
    name: 'BK',
    color: 'orange',
    specialSkill: 'boxing',
    typeOfPet: 'cat',
  },
  {
    image:
      'https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122',
    name: 'Littlefoot',
    color: 'purple',
    specialSkill: 'leadership',
    typeOfPet: 'dino',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
  let domString = '';
  for (let j = 0; j < pets.length; j++) {
    domString += `<div class="pet pet-${pets[j].typeOfPet}">`;
    domString += `  <div class="pet-name"><h2>${pets[j].name}</h2></div>`;
    domString += `  <div class="pet-image"><img src = "${pets[j].image}" alt = "Image of a ${pets[j].typeOfPet}"></div>`;
    domString += `  <div class="pet-color"><h3>${pets[j].color}</h3></div>`;
    domString += `  <div class="pet-skills"><p>This pet's special skill is ${pets[j].specialSkill}</p></div>`;
    domString += `  <div class="pet-type"><h3>${pets[j].typeOfPet}</h3></div>`;
    domString += `</div>`;
  }
  printToDom('pets', domString);
};

buildPetCards();

const dogButton = document.getElementById('dogButton');
const catButton = document.getElementById('catButton');
const dinoButton = document.getElementById('dinoButton');

const getCats = document.getElementsByClassName('pet-cat');
const getDogs = document.getElementsByClassName('pet-dog');
const getDinos = document.getElementsByClassName('pet-dino');

dinoButton.addEventListener('click', function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = 'none';
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = 'none';
  }
  for (let f = 0; f < getDinos.length; f++) {
    getDinos[f].style.display = 'block';
  }
});

dogButton.addEventListener('click', function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = 'none';
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = 'none';
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = 'block';
  }
});

catButton.addEventListener('click', function (event) {
  for (let l = 0; l < getDogs.length; l++) {
    getDogs[l].style.display = 'none';
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = 'none';
  }
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = 'block';
  }
});

allButton.addEventListener('click', function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = 'block';
  }
  for (let f = 0; f < getDinos.length; f++) {
    getDinos[f].style.display = 'block';
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = 'block';
  }
});
