export function findById(id, foods){
    for (let food of foods){
        if(food.id === id){
            return food;
        }
    }
}