import { findById } from './utils.js';
import { food } from './food.js';
import { renderFood } from './render-food.js';

// int global
const foodList = document.getElementById('food-list');

// set listeners
for (let food of foods){
    const foodCard = renderFood(food);
    foodList.append(foodCard);
}