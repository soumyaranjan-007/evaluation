function arrangement_fruits(fruits){
    let removedfruits = fruits.splice(-4);
    fruits.splice(0,0,...removedfruits);
    return fruits ;
}
let fruits = ["apple","banana","orange","mango","pineapple","grapes","strabwrrys","watermelon","peach","kiwi"];
console.log(arrangement_fruits(fruits));