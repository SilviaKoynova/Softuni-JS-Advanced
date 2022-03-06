window.addEventListener('load', solve);

function solve() {
    let likesCounter = 0;
    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let collection = document.getElementsByClassName('all-hits-container')[0];
    let saved = document.getElementsByClassName('saved-container')[0]
    let likes = document.getElementsByTagName('p')[1];
    addBtn.addEventListener('click', addSong);
    function addSong(e) {
        e.preventDefault();
        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;
        let divCollection = document.createElement('div');
        divCollection.classList.add('hits-info')
        let imgCollection = document.createElement('img');
        imgCollection.src = './static/img/img.png';
        let h2Gnere = document.createElement('h2');
        h2Gnere.textContent = `Genre: ${genre}`;
        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${name}`;
        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;
        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date}`;
        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = `Save song`;
        saveBtn.addEventListener('click', saveSong);
        function saveSong() {
            let divSaved = document.createElement('div');
            divSaved.classList.add('hits-info');
            let imgSaved = document.createElement('img');
            imgSaved.src = './static/img/img.png';
            let h2Genre = document.createElement('h2');
            h2Genre.textContent = `Genre: ${genre}`;
            let h2NameSaved = document.createElement('h2');
            h2NameSaved.textContent = `Name: ${name}`;
            let h2AuthorSaved = document.createElement('h2');
            h2AuthorSaved.textContent = `Author: ${author}`;
            let h3DateSaved = document.createElement('h3');
            h3DateSaved.textContent = `Date: ${date}`;
            let deleteB = document.createElement('button');
            deleteB.className = 'delete-btn';
            deleteB.textContent = `Delete`;
            deleteB.addEventListener('click', deleteSaved);
            function deleteSaved() {
                divSaved.remove();
            }
            divSaved.appendChild(imgSaved);
            divSaved.appendChild(h2Genre);
            divSaved.appendChild(h2NameSaved);
            divSaved.appendChild(h2AuthorSaved);
            divSaved.appendChild(h3DateSaved);
            divSaved.appendChild(deleteB);
            saved.appendChild(divSaved);
            divCollection.remove();
        }
        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = `Like song`;
        likeBtn.addEventListener('click', liking);
        function liking(e) {
            likesCounter += 1;
            likes.textContent = `Total Likes: ${likesCounter}`;
            likeBtn.disabled = true;
        }
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = `Delete`;
        deleteBtn.addEventListener('click', deleteSong);
        function deleteSong() {
            divCollection.remove();
        }
        divCollection.appendChild(imgCollection);
        divCollection.appendChild(h2Gnere);
        divCollection.appendChild(h2Name);
        divCollection.appendChild(h2Author);
        divCollection.appendChild(h3Date);
        divCollection.appendChild(saveBtn);
        divCollection.appendChild(likeBtn);
        divCollection.appendChild(deleteBtn);
        collection.appendChild(divCollection);
        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }

}