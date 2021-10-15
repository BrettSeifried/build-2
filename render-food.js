export function renderFood(food){
    const foodCard = document.createElement('li');
    foodCard.classList.add('food-item');

    // const foodSpan = document.createElement('span');
    // foodSpan.classList.add = 'food-name';

    const img = document.createElement('img');
    img.src = food.img;

    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = food.name;

    foodCard.append(img, foodName);
    return foodCard;
}