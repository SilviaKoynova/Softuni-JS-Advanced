function population(townArray){
    const towns = {};
    for (let townAsStrings of townArray){
        let [name, population] = townAsStrings.split(' <-> ');
        population = Number(population);
        if (towns[name] != undefined){
            population += towns[name];
        }
        towns[name] = population
    }
    for (let [name, population] of Object.entries(towns)){
        console.log(`${name} : ${population}`);
    }
}
population(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);