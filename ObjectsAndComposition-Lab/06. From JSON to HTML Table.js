function solve(json){
    let arr = JSON.parse(json);
    let output = ['<table>'];
    output.push(makeKeyRow(arr));
    arr.forEach((obj) => output.push(makeValueRow(obj)));
    output.push("</table>");
    function makeKeyRow(arr) { }
    function makeValueRow(obj) { }
    function escapeHtml(value) { }
    console.log(output.join('\n'));
}
solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)
