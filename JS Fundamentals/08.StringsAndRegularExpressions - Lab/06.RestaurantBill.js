function printRestaurantBill(input) {
    let productNames = [];
    let productPrices = [];

    for (let i = 0; i < input.length; i += 2) {
        let currentProduct = input[i];
        let currentProductPrice = +input[i + 1];

        productNames.push(currentProduct);
        productPrices.push(currentProductPrice);
    }

    let productsString = productNames.join(', ');
    let sum = productPrices
        .reduce((acc, curr) => {
            return acc + curr;
        }, 0);

    let outputString = `You purchased ${productsString} for a total sum of ${sum}`;

    console.log(outputString);
}

printRestaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
printRestaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);