function solve() {
    let totalPrice = 0;
    let inputTitle = document.getElementsByTagName('input')[0];
    let inputYear = document.getElementsByTagName('input')[1];
    let inputPrice = document.getElementsByTagName('input')[2];
    let totalStorePrice = document.querySelector("body > h1:nth-child(3)");
    let oldBooksSection = document.querySelector("#outputs > section:nth-child(1) > div");
    let newBooksSection = document.querySelector("#outputs > section:nth-child(2) > div");
    let addNewBookBtn = document.querySelectorAll('button')[0];
    addNewBookBtn.addEventListener('click', addBook);
    function addBook(e) {
        e.preventDefault();
        let title = inputTitle.value;
        let year = inputYear.value;
        let price = Number(inputPrice.value);
        if (title === '' && price <= 0 && year <= 0) {
            return;
        }
        if (year >= 2000) {
            let currentDiv = document.createElement('div');
            currentDiv.className = 'book';
            let currentP = document.createElement('p');
            currentP.textContent = `${title} [${year}]`;
            let buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            buyBtn.addEventListener('click', buy);
            let moveBtn = document.createElement('button');
            moveBtn.textContent = `Move to old section`;
            moveBtn.addEventListener('click', moveToOld)
            currentDiv.appendChild(currentP);
            currentDiv.appendChild(buyBtn);
            currentDiv.appendChild(moveBtn);
            newBooksSection.appendChild(currentDiv);
            function buy() {
                totalPrice += price;
                totalStorePrice.textContent = `Total Store Profit: ${totalPrice.toFixed(2)} BGN`;
                currentDiv.remove();
            }
            function moveToOld() {
                let btnToDelete = currentDiv.querySelector("button:nth-child(3)");
                price *= 0.85;
                buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                btnToDelete.remove();
                currentDiv.remove();
                oldBooksSection.appendChild(currentDiv);
            }
        } else {
            let oldDiv = document.createElement('div');
            oldDiv.className = 'book';
            let oldP = document.createElement('p');
            oldP.textContent = `${title} [${year}]`;
            let oldBuyBtn = document.createElement('button');
            oldBuyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            oldBuyBtn.addEventListener('click', buy);
            function buy() {
                totalPrice += price;
                totalStorePrice.textContent = `Total Store Profit: ${totalPrice.toFixed(2)} BGN`;
                currentDiv.remove();
            }
            oldDiv.appendChild(oldP);
            oldDiv.appendChild(oldBuyBtn);
            oldBooksSection.appendChild(oldDiv);
            
        }


    }
}