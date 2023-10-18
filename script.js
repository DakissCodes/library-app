// ADDING CARD SYSTEM
// when submit btn is clicked, data is retrieved from all input elements
// data from each input is assigned into constructor
// a new book object is made using constructor
// book object is added into array


// dialog

const dialog = document.querySelector('dialog');
const addBook = document.querySelector('.add-book');
const closeDialog = document.querySelector('.close-dialog');



addBook.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})


// submit button

const submitBtn = document.querySelector('.submit-book')
const form = document.getElementById('add-book-form')
const bookTitle = document.querySelector('input[name="book-title"]')
const bookAuthor = document.querySelector('input[name="book-author"]')
const bookPages = document.querySelector('input[name="book-pages"]')
const bookRead = document.querySelector('input[name="book-read"]')
const myLibrary = []

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// let bookOne = new Book("game of thrones","george",1232,true)
// let bookTwo = new Book("game of asda","lewis",1232,false)

// myLibrary.push(bookOnje)
// myLibrary.push(bookTwo)

form.addEventListener('submit', function(event) {



    event.preventDefault();
    console.log('button is clicked!')
    var title = bookTitle.value
    var author = bookAuthor.value
    var pages = bookPages.value
    var read = ''
    if (bookRead.checked == true) {
        read = true
    } else {
        read = false
    }
    
    newBook = new Book(title,author,pages,read)
    
    myLibrary.push(newBook)

    dialog.close()

    myLibrary.forEach((book) => {
        console.log('adding')
        addCard(book.title,book.author,book.pages,book.read)

}) 
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.value = '';
    })
    

})

function addCard(title,author,pages,read) {
    // function that adds card element into DOM
    if (read == true) {
        read = 'Finished'
    } else {
        read = 'Currently Reading'
    }
    let textContentArray = [title,author,pages,read]
    const card = document.querySelector('.card , .placeholder');
    const cardContainer = document.querySelector('.card-container')

    let newCard = card.cloneNode(true)
    newCard.classList.toggle('placeholder')
    let bookInfo = newCard.querySelector('.book-info');

    let cardContents = bookInfo.children;
    console.log(cardContents)
    console.log(cardContents[0])
    for (let i = 0; i < cardContents.length; i++) {
        cardContents[i].textContent = textContentArray[i]

    }
    cardContainer.appendChild(newCard);
        
}







