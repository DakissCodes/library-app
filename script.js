const addBookModal = document.querySelector('#add-book-modal');
const addBook = document.querySelector('.add-book');
const closeAddBookModal = document.querySelector('dialog > .close-dialog');



// MAIN TASkS
// When submit is clicked, all values on input of modal (submit) are created as a new Object
// Get index of that object of library and set to data attribute on div, attach this when updating the dom
// because when a card is removed, the index of the card will change
// Update feature: 
// When update is clicked, refer that button to the div containing index attribute
// access library object, and use that to fill placeholders
// when update submit is clicked, all input values must update the object in library
// then update dom using updateDOM function



addBook.addEventListener('click', () => {
    addBookModal.classList.toggle('closed')
    addBookModal.showModal();
})

closeAddBookModal.addEventListener('click', () => {
    addBookModal.classList.toggle('closed')
    addBookModal.close();
})

// input values of addbook modal
const submitBtn = document.querySelector('.submit-book');
const form = document.getElementById('add-book-form');
const bookTitle = document.querySelector('input[name="book-title"]');
const bookAuthor = document.querySelector('input[name="book-author"]');
const bookPages = document.querySelector('input[name="book-pages"]');
const bookRead = document.querySelector('input[name="book-read"]');
const myLibrary = [];

// book constructor
function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

form.addEventListener('submit', function(event) {

    event.preventDefault();
    // 

    
    newBook = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.checked)
    
    // object gets pushed into the library
    myLibrary.push(newBook)

    addBookModal.close()
    
    removeAllChildNodes(document.querySelector('.card-container'))
    // function refreshes card-container contents (cards)
    addBooksDOM();

    // removes all placeholder values on add book modal
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.checked = false;
    })
    addBookModal.classList.toggle('closed')
    
    
    
})

function removeAllChildNodes(parent) {
    console.log('removed!')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let cardUpdateOnGoing = '';

function addBooksDOM() {

    myLibrary.forEach((book) => {   
        

        let readToggle = ''
        // converts the book.read value of object into text for read button
        if (book.read == true) {
            readToggle = 'Read'
        } else {
            readToggle = 'Not Read'
        }
        
        
        // creates an identical card
        
        // object values ie. book information from library
        let textContentArray = [book.title, book.author, book.pages]
        

        const card = document.querySelector('.card , .placeholder');
        const cardContainer = document.querySelector('.card-container')

        // new card element (cloned)
        // for every object there is one newCard element
        let newCard = card.cloneNode(true)
        
        // remove placeholder for copying
        newCard.classList.toggle('placeholder')
        
        // children nodes of book info section on card (info of card display on DOM)
        let cardContents= newCard.querySelector('.book-info').children;

        // fills in all information from object into DOM or textcontent on book info section
        for(let i = 0; i < cardContents.length; i++) {
            cardContents[i].textContent = textContentArray[i]
        }
        
        let bookPagesTxtContent = cardContents[2].textContent;
        console.log(bookPagesTxtContent)
        cardContents[2].textContent = bookPagesTxtContent + ' Pages';
        
        // add data attribute of index of card on library
        
         //  set text content of read button (read/not read)
         let readBtnContent = newCard.querySelector('.button-sec > .read > div');
         readBtnContent.textContent = readToggle;
         if (readToggle == 'Read') {
            readBtnContent.parentElement.classList.toggle('read-not') 
         }
        newCard.setAttribute('index', myLibrary.indexOf(book)) 
        
        // update button feature on card
        newCard.querySelector('.update').addEventListener("click", function() {
            // when update button on card section is clicked
            
            cardUpdateOnGoing = newCard; 
            // show modal
            updateBookModal.classList.toggle('closed')
            updateBookModal.showModal()
            
            // index of card
            let indexBook = newCard.getAttribute('index');
            let cardObj = myLibrary[indexBook];
            // setting place holder values on input 
            let i = 0;
            console.log(Object.values(cardObj))
            for (let value of Object.values(cardObj)) {
                console.log(value);
                inputsUpdate[i].value = value;
                inputsUpdate[i].checked = value;
                i++
            }
        })
        
        

        // remove feature

        newCard.querySelector('.remove').addEventListener('click', function () {
            let titleValue = newCard.querySelector('.title').textContent;
            console.log(titleValue)
            myLibrary.forEach(book=> {
                if(book.title == titleValue) {
                    let index = myLibrary.indexOf(book)
                    console.log(index)
                    myLibrary.splice(index,1);
                }
            })
            newCard.remove();
            

            
        })

        
        // read button feature on card!
        let readBtnCard = newCard.querySelector('.read')
        readBtnCard.addEventListener('click', function() {
            let indexBook = newCard.getAttribute('index');
            let cardObj = myLibrary[indexBook];
            
            console.log(newCard.querySelector('.button-sec .read').classList)
            if (cardObj.read == true) {
                readBtnCard.querySelector('.read-button-content').textContent = 'Not Read';
                cardObj.read = false;
                newCard.querySelector('.button-sec .read').classList.toggle('read-not')
            } else {
                readBtnCard.querySelector('.read-button-content').textContent = 'Read';
                cardObj.read = true;
                newCard.querySelector('.button-sec .read').classList.toggle('read-not')
            }

            
        })

        cardContainer.appendChild(newCard);
    })        


}
// creating a clone of addbook modal for updatebook modal
const updateBookModal = addBookModal.cloneNode(true)
// update button on updatebook modal
const submitUpdateBtn = updateBookModal.querySelector('.submit-book').children[0]
submitUpdateBtn.textContent = 'Update'
updateBookModal.setAttribute('id','update-book-modal')
updateBookModal.querySelector('.close-dialog').addEventListener('click', function() {
    updateBookModal.classList.toggle('closed')
    updateBookModal.close()
})

updateBookModal.querySelector('p').textContent = 'Update a Book'
document.body.appendChild(updateBookModal)


// all input elements of updatebook modal
const inputsUpdate = updateBookModal.querySelectorAll('input');


submitUpdateBtn.addEventListener('click', function(event) {
    // when update button is clicked no updatebookmodal
    event.preventDefault();
    // get index of card in library
    let indexBook = cardUpdateOnGoing.getAttribute('index');
    // we set each value of inputs in updatemodal to the values in book object 
    // we then use adddom function to update the cards on the screen
    
    
    let inputValues = []
    
    for(let i = 0; i < inputsUpdate.length; i++) {
        if (i == 3) {
            inputValues.push(inputsUpdate[i].checked)
        } else {
            inputValues.push(inputsUpdate[i].value)
        }
    }
    
    // replace each value from object with new values from inputValues
    //
    console.log(myLibrary[indexBook])
    let cardObj = myLibrary[indexBook]
    let i = 0;
    Object.keys(cardObj).forEach(key=>{
        cardObj[key] = inputValues[i];
        i++;
    })
    
    console.log(myLibrary[indexBook])
    removeAllChildNodes(document.querySelector('.card-container'))

    addBooksDOM();
    updateBookModal.classList.toggle('closed')
    updateBookModal.close();
    
})


