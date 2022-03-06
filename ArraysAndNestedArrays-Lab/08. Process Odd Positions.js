/* function solve(array){
    let result = [];
    for (let i = 1; i < array.length; i+=2){
        result.push((array[i]) * 2)
    }
    let reversedResult = result.reverse();
    return reversedResult;

}
console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));
*/

function solve(numbers){
    const oddNums = numbers.filter((v, i) => i % 2 == 1);
    const doubled = oddNums.map(x => x * 2);
    const final = doubled.reverse();
    return final;
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));