let currentDiv = document.createElement('div');
currentDiv.className = 'book';
let currentP = document.createElement('p');
currentP.textContent = `${title} [${year}]`;
let buyBtn = document.createElement('button');
buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
let moveBtn = document.createElement('button');
moveBtn.textContent = `Move to old section`;
currentDiv.appendChild(currentP);
currentDiv.appendChild(buyBtn);
currentDiv.appendChild(moveBtn);
newBooksSection.appendChild(currentDiv);