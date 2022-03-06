function toggle() {
    let divEx = document.querySelector('#extra');
    let button = document.querySelector('.button');
    divEx.style.display = (divEx.style.display == 'none' || divEx.style.display == '') ? 'block' : 'none';
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
}