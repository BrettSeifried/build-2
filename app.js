import { food } from './food.js';
import { renderFood } from './render-food.js';

// int global
const foodList = document.getElementById('food-list');

// set listeners
for (let foods of food){
    const foodCard = renderFood(foods);
    foodList.append(foodCard);
}