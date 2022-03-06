function solve(arr) {
    let collection = [];
    arr.forEach(element => {
        [command, text] = element.split(' ');
        if (command === 'add') {
            collection.push(text);
        }
        else if (command === 'remove') {
            collection = collection.filter(x => x !== text);
        }
        else if ( command === 'print') {
            console.log(collection.join(','));
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);