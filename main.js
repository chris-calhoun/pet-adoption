//console.log("TESTING. 123. TESTING");
"use strict";
const pets = [
  {
    image:
      "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg",
    name: "Mocha",
    color: "brown",
    specialSkill: "fetch",
    typeOfPet: "cat",
  },
  {
    image: "https://pixy.org/download/4663301/",
    name: "Kitters",
    color: "spotted",
    specialSkill: "sleeping",
    typeOfPet: "cat",
  },
  {
    image:
      "https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg",
    name: "Chomper",
    color: "green",
    specialSkill: "chomping",
    typeOfPet: "dino",
  },
  {
    image:
      "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/s960x960/93366679_10221584510259882_1653151457899184128_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=Uvlk5CYAhrwAX-3RMpY&_nc_ht=scontent-atl3-1.xx&_nc_tp=7&oh=2a5eabade88f74514544ac279ca9f77c&oe=5F3F984C",
    name: "Souffle",
    color: "brown",
    specialSkill: "spin",
    typeOfPet: "dog",
  },
  {
    image:
      "https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8",
    name: "BK",
    color: "orange",
    specialSkill: "boxing",
    typeOfPet: "cat",
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122",
    name: "Littlefoot",
    color: "purple",
    specialSkill: "leadership",
    typeOfPet: "dino",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
  let domString = "";
  for (let j = 0; j < pets.length; j++) {
    domString += `<div class="pet pet-${pets[j].typeOfPet}">`;
    domString += `  <div class="pet-name"><h2>${pets[j].name}</h2></div>`;
    domString += `  <div class="pet-image"><img src = "${pets[j].image}" alt = "Image of a ${pets[j].typeOfPet}"></div>`;
    domString += `  <div class="pet-color"><h3>${pets[j].color}</h3></div>`;
    domString += `  <div class="pet-skills"><p>This pet's special skill is ${pets[j].specialSkill}</p></div>`;
    domString += `  <div class="pet-type"><h3>${pets[j].typeOfPet}</h3></div>`;
    domString += `</div>`;
  }
  printToDom("pets", domString);
};

buildPetCards();

const dogButton = document.getElementById("dogButton");
const catButton = document.getElementById("catButton");
const dinoButton = document.getElementById("dinoButton");

const getCats = document.getElementsByClassName("pet-cat");
const getDogs = document.getElementsByClassName("pet-dog");
const getDinos = document.getElementsByClassName("pet-dino");

dinoButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "none";
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = "none";
  }
});

dogButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "none";
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = "none";
  }
});

catButton.addEventListener("click", function (event) {
  for (let l = 0; l < getDogs.length; l++) {
    getDogs[l].style.display = "none";
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = "none";
  }
});

allButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "block";
  }
  for (let f = 0; f < getDinos.length; f++) {
    getDinos[f].style.display = "block";
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = "block";
  }
});
