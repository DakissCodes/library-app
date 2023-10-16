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


console.log(form)
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
})





const myLibrary = []

function Book() {
    
}


