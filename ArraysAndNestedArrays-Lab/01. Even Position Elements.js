function solve(array){
    let result = [];
    for (i = 0; i < array.length; i += 2){
        result.push(array[i]);
    }
    return result.join(' ')
}
console.log(solve(['5', '10']));