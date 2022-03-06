function solve(array){
    const result = array.sort((a, b) => a - b).slice(Math.floor(array.length / 2), array.length);
    return result;
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));