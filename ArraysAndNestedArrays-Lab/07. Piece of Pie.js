function solve(array, firstPie, secondPie){
    let firstInput = array.indexOf(firstPie);
    let secondInput = array.indexOf(secondPie);
    let result = array.slice(firstInput, secondInput + 1);
    return result;
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))