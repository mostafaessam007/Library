const main = document.querySelector('main');

const library = [

];

function Book(title, author, pages, isRead) {
    this.bookName = title;
    this.authorName= author;
    this.numberOfPages= pages;
    this.isBookRead= isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    this.title = title;
    this.author= author;
    this.pages= pages;
    this.isRead= isRead;
    id = crypto.randomUUID()
    library.push(book1 = {title, author, pages, isRead, id})
}

//adds book details to the DOM
function showLibrary() {
    library.forEach(book=>{
        const card = document.createElement('section');
        card.classList.add('Library');
        card.dataset.bookId = book.id;

        const titleDiv = document.createElement('div');
        titleDiv.textContent=`Title: ${book.title}`

        const authorDiv = document.createElement('div');
        authorDiv.textContent=`Author: ${book.author}`
        
        const pagesDiv = document.createElement('div');
        pagesDiv.textContent=`Pages: ${book.pages}`

        const readDiv = document.createElement('div');
        readDiv.textContent=`Read: ${book.isRead ? "yes" : "no"}`

        const removeBtn = document.createElement('button');
        removeBtn.textContent= `X`
        removeBtn.classList.add('removeBtn');

        removeBtn.addEventListener("click", ()=>{
        const index = library.findIndex(b => b.id ===book.id);
        library.splice(index,1);
        card.remove()
        })

        card.append(titleDiv, authorDiv, pagesDiv, readDiv, removeBtn);
        main.appendChild(card)


    })
}



//opens pop up
const newBookBtn = document.querySelector(".newBookBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

newBookBtn.addEventListener("click", ()=>{
    modal.classList.add("open-modal");
    overlay.classList.add("open-overlay")

})


//takes data from the form and adds it to the library 
const form = document.querySelector('form');
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(form);

     addBookToLibrary(formData.get("bookTitle"),formData.get("bookAuthor"),formData.get("noOfPages"),formData.get("read"),)
    
     showLibrary()

})

//closes pop up and submits book details
const addBookBtn = document.querySelector(".addBookBtn");

addBookBtn.addEventListener("click", ()=>{
     modal.classList.remove("open-modal")
     overlay.classList.remove("open-overlay")

})

