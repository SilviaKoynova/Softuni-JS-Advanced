function solve(arr, command) {
    if (command === 'asc') {
        return arr.sort((a, b) => a - b);
    }else {
        return arr.sort((a, b) => b - a);
    }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));