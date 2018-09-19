//I could not thing about more creative names xD
function checkIfGivenThingIsFruitOrVegetable(thingName) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if (fruits.includes(thingName)) {
        console.log("fruit");
    } else if (vegetables.includes(thingName)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

checkIfGivenThingIsFruitOrVegetable("banana");
checkIfGivenThingIsFruitOrVegetable("tomato");
checkIfGivenThingIsFruitOrVegetable("random");