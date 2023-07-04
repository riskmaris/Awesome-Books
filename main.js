class BookLibrary {
  constructor() {
    const previousData = localStorage.getItem('booksData');
    this.bookDetails = previousData ? JSON.parse(previousData) : [];
  }

  displayBook() {
    const reciveBooks = localStorage.getItem('booksData');
    const allBooksTable = document.getElementById('allBooks');
    const tableTitle = document.getElementById('table-title');

    if (reciveBooks && JSON.parse(reciveBooks).length > 0) {
      this.bookDetails = JSON.parse(reciveBooks);
      const bookStore = document.getElementById('bookStore');
      bookStore.innerHTML = '';
      for (let i = 0; i < this.bookDetails.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookRow.id = `book${i}`;
        bookRow.className = 'book-store';
        bookRow.innerHTML = `
          <td>"${this.bookDetails[i].title}" <span>by</span> ${this.bookDetails[i].author}</td>
          <td><button class="remove-button">Remove</button></td>
        `;
        bookStore.appendChild(bookRow);
      }
      allBooksTable.style.display = 'flex';
      tableTitle.style.display = 'block';
    } else {
      allBooksTable.style.display = 'none';
      tableTitle.style.display = 'none';
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

document.getElementById('addBook').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    book.addBook(title, author);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

document.getElementById('bookStore').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const bookRow = event.target.parentNode.parentNode;
    const index = Array.from(bookRow.parentNode.children).indexOf(bookRow);
    book.removeBook(index);
  }
});
