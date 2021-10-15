export function renderFood(food){
    const foodCard = document.createElement('div');
    foodCard.classList.add = 'food-list';

    const img = document.createElement('img');
    img.src = food.img;

    const foodName = document.createElement('span');
    foodName.textContent = food.name;

    foodCard.append(img, foodName);
    return foodCard;
}