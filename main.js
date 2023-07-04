

class BookLibrary {
  constructor() {
     this.bookDetails=[];

  }

  displayBook(){
    console.log("hellow")
    const reciveBooks = localStorage.getItem('booksData');
      if (reciveBooks) {
        this.bookDetails = JSON.parse(reciveBooks);
        const bookStore = document.getElementById('allBooks');
        bookStore.innerHTML = '';
        for (let i = 0; i < this.bookDetails.length; i += 1) {
          bookStore.innerHTML += `<div id="book${i}" class="book-store">
                                         <p>${this.bookDetails[i].title}</p>
                                         <p>${this.bookDetails[i].author}</p>
                                         <button  class="remove-button">remove</button>
                                         <hr>
                                         </div>`;
        }
      }
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



