function solve(input) {
    let result = {};
    for (const infoData of input) {
        let [town, productName, price] = infoData.split(' | ');
        price = Number(price);
        

        if (!result[productName]) {
            result[productName] = { price, town };
        } else if (result[productName].price > price) {
            result[productName].price = price;
            result[productName].town = town;
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);
    }

}
solve(['Sofia City | Audi | 100000', 
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']
);