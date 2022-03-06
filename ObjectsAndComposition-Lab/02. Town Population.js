function solve(array){
    const towns = {};
    for (let town of array){
        let tokens = town.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);
        if (towns[name] == undefined){
            towns[name] = population;
        }else{
            towns[name] += population;
        }
        
    }
    for (let town in towns){
        console.log(`${town} : ${towns[town]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);