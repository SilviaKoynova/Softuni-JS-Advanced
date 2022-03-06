function solve(first, second, operator){
    let result = {
        '+': first + second,
        '-': first - second,
        '*': first * second,
        '/': first / second,
        '%': first % second,
        '**': first ** second
    }
    return result[operator];
}
console.log(solve(5, 6, '+'))
console.log(solve(3, 5.5, '*'))