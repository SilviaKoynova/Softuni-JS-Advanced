function deleteByEmail() {
    // select input field and read value
    const input = document.querySelector('input[name="email"]');
    // get tbody children
    const rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    // repeat for every row
    // -- select second cell
    // -- if textConten matches input value -> remove row
    for (let row of rows) {
        if (row.children[1].textContent == input.value){
            row.remove();
            removed = true;
        };
    }
    // if there is a match print 'deleted', otherwise 'Not found'
    if (removed) {
        document.getElementById('result').textContent = 'Deleted.';
    }else {
        document.getElementById('result').textContent = 'Not found.';
    }
    input.value = '';
    
}

function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = Array
        .from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent == input.value);
    rows.forEach(r => r.remove());
    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.'
}