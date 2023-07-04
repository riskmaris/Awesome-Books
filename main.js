

class BookLibrary {
  constructor() {
     this.bookDetails=[];

  }


  addBook(title,author){
    this.bookDetails.push({title,author});
    localStorage.setItem('booksData',JSON.stringify(this.bookDetails));
    this.displayBook();
  }




}

const book=new BookLibrary();

book.displayBook();

document.getElementById('addBook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    book.addBook(title,author);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});



