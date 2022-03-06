function solve(matrix){
    let result = [];
    let leftSum = 0;
    let rightSum = 0;
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix.length; col++){
            if (row === col){
                leftSum += matrix[row][col];
            }
            if (row === matrix.length - col - 1){
                rightSum += matrix[row][col];
            }
            
        }
    }
    result.push(leftSum);
    result.push(rightSum);
    return result.join(' ');
}
console.log(solve([[20, 40],[10, 60]]));