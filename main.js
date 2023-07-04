let bookDetails = [];

function reciveData() {
  const reciveBooks = localStorage.getItem('booksData');
  if (reciveBooks) {
    bookDetails = JSON.parse(reciveBooks);
    const bookStore = document.getElementById('allBooks');
    bookStore.innerHTML = '';
    for (let i = 0; i < bookDetails.length; i += 1) {
      bookStore.innerHTML += `<div id="book${i}" class="book-store">
                                     <p>${bookDetails[i].book}</p>
                                     <p>${bookDetails[i].author}</p>
                                     <button  class="remove-button">remove</button>
                                     <hr>
                                     </div>`;
    }
  }
}
function storeData() {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
  reciveData();
}

function removeBook(index) {
  bookDetails.splice(index, 1);
  storeData();
}

document.getElementById('addBook').addEventListener('click', () => {
  const book = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (book !== '' && author !== '') {
    bookDetails.push({ book, author });
    storeData();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

document.getElementById('allBooks').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const bookDiv = event.target.parentNode;
    const index = Array.from(bookDiv.parentNode.children).indexOf(bookDiv);
    removeBook(index);
  }
});

reciveData();


 