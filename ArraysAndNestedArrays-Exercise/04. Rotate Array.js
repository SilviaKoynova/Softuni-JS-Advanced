function solve(array, n){
    let newArray = [];
    for (let i = 0; i < n; i++){
        let last = array.pop();
        array.unshift(last);
    }
    return array.join(' ');
}
console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));