function solve(n, k){
    let result = [];
    result.push(1);
    for (let i = 1; i < n; i++){
        let start = result.length - k < 0 ? 0 : i - k;
        let  number = result.slice(start, i).reduce((first, current) => first + current, 0);
        result.push(number);
    }
    return result;
}
console.log(solve(6, 3));