function argumentInfo() {
    let types = {};

    for (let i = 0; i < arguments.length; i++) {
        let argument = argumentInfo.arguments[i];
        let type = typeof argument;

        console.log(`${type}: ${argument}`);
        if (type in types) {
            types[type] += 1;
        } else {
            types[type] = 1;
        }
    }

    let orderedTypes = [...Object.keys(types)].sort((a, b) => types[b] - types[a]);
    for (let type of orderedTypes) {
        
            console.log(`${type} = ${types[type]}`);
        
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })