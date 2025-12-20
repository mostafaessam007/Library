const main = document.querySelector('main');
const library = [
{
    
    title: 'good book',
    author: 'good author',
    pages: 298,
    isRead: true,
    id: crypto.randomUUID()
}
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
    this.id = crypto.randomUUID()
    library.push(book1 = {title, author, pages, isRead, id})
}

// addBookToLibrary('harry potter', 'j.k', 300, false)




function showLibrary() {
    library.forEach(book=>{
        const div = document.createElement('div');
        div.textContent= `Title: ${book.title} Author: ${book.author} Number of Pages: ${book.pages} Have you read the book? ${book.isRead ? "yes" : "no"}`;
        main.appendChild(div)
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

//closes pop up and submits book details
const addBookBtn = document.querySelector(".addBookBtn");

addBookBtn.addEventListener("click", ()=>{
     modal.classList.remove("open-modal")
     overlay.classList.remove("open-overlay")

})