class BookLibrary {
  constructor() {
    this.bookDetails = [];
  }

  displayBook() {
    const reciveBooks = localStorage.getItem('booksData');
    if (reciveBooks) {
      this.bookDetails = JSON.parse(reciveBooks);
      const bookStore = document.getElementById('allBooks');
      bookStore.innerHTML = '';
      for (let i = 0; i < this.bookDetails.length; i += 1) {

        bookStore.innerHTML += 
        `<tbody id="book${i}" class="book-store">
          <tr> 
          <td> "${this.bookDetails[i].title}"  <span>by</span> ${this.bookDetails[i].author} </td>
          <td> <button  class="remove-button">Remove</button> </td>
          </tr>
        </tbody>`;
      }
    }
  }

  addBook(title, author) {
    this.bookDetails.push({ title, author });
    localStorage.setItem('booksData', JSON.stringify(this.bookDetails));
    this.displayBook();
  }

  removeBook(index) {
    this.bookDetails.splice(index, 1);
    localStorage.setItem('booksData', JSON.stringify(this.bookDetails));
    this.displayBook();
  }
}

const book = new BookLibrary();

book.displayBook();

document.getElementById('addBook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    book.addBook(title, author);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

document.getElementById('allBooks').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const bookDiv = event.target.parentNode;
    const index = Array.from(bookDiv.parentNode.children).indexOf(bookDiv);
    book.removeBook(index);
  }
});
