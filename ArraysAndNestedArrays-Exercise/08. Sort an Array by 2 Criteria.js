function solve(array){
    let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join('\n'));
}
solve(['alpha', 
'beta', 
'gamma']
)