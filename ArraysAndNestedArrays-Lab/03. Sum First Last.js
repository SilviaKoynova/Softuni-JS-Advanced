function solve(array){
    let firstElement = array.shift();
    let lastElement = array.pop();
    let result = Number(firstElement) + Number(lastElement);
    return result;
}
console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));