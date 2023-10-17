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

let bookOne = new Book("game of thrones","george",1232,true)
let bookTwo = new Book("game of asda","lewis",1232,false)

myLibrary.push(bookOne)
myLibrary.push(bookTwo)

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
        console.log(book.title)
        console.log(book.author)

}) 

    
})

// loop through library array
// get each element inside array
// assign text content for each elmeent for card
// assign class for card

// let newCard = createElement('div')
// let cardContent = createElement('div')

// let title = createElement('div')
// let author = createElement('div')
// let pages = createElement('div')
// let read = createElement('div')

myLibrary.forEach((book) => {
    console.log(book.title)
    console.log(book.author)

}) 








