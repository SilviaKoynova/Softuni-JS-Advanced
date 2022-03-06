function solve(array){
    let initial = 1;
    let list = [];
    for (let command of array){
        if (command === 'add'){
            list.push(initial);
        }else if (command === 'remove'){
            list.pop();
        }
        initial++;
    }
    return list.length > 0 ? list.join('\n') : 'Empty';
}
console.log(solve(['add', 
'add', 
'add', 
'add']

))