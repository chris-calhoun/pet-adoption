# Pet Adoption
 
This project allows users to browse dogs, cats, and dinos for pet adoption. Users can filter by type of animal.

## Motivation

This project tested my understanding of:
- using JavaScript to print to the DOM
- use event listeners to filter the animals when button is clicked.


## Build Status

Complete

## Screenshots

![Alt text](/images/pet-adoption-screenshot.png "Pet Adoption")

## Tech/Framwork
HTML5, CSS3, Javascript ES6

## Features

- displays animals with info 
- allows user to filter animals by dog, cat, and dino

## Code Example 
```
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

```

## Deployed Site


