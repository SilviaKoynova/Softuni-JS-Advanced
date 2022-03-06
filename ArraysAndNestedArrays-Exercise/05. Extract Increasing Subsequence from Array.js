function solve(array){
    let newArray = [];
    let temp = array[0];
    newArray.push(temp);
    for (let i = 0; i < array.length; i++){
        if (temp <= array[i + 1]){
            newArray.push(array[i + 1]);
            temp = array[i + 1];
        }
    }
    return newArray
}
console.log(solve([1, 
    2, 
    3,
    4]
    ));
    console.log(solve([20, 
        3, 
        2, 
        15,
        6, 
        1]
        ));