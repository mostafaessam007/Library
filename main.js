const main = document.querySelector('main');
const booksContainer = document.querySelector('.booksContainer');
const library = [

];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author= author;
    this.pages= pages;
    this.isRead= isRead;
}
Book.prototype.toggleRead = function () {
    this.isRead = this.isRead === "yes" ? "no" : "yes";
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title,author,pages,isRead)
    book.id = crypto.randomUUID()
    library.push(book)
}

//adds book details to the DOM
function showLibrary() {
    booksContainer.innerHTML= "";
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
        readDiv.textContent=`Read:`;
        const readBtn = document.createElement('button');
    // read status button color
        if (book.isRead == 'yes') {
            readBtn.textContent="yes";
            readBtn.classList.add('readBtnYes')
        }
        else{
            readBtn.textContent="no";
            readBtn.classList.add('readBtnNo')

        };
       

        const removeBtn = document.createElement('button');
        removeBtn.textContent= `X`
        removeBtn.classList.add('removeBtn');

        removeBtn.addEventListener("click", ()=>{
        const index = library.findIndex(b => b.id === book.id);
        library.splice(index,1);
        card.remove()
        })

        card.append(titleDiv, authorDiv, pagesDiv, readDiv, removeBtn);
        readDiv.appendChild(readBtn)

        booksContainer.appendChild(card)

        //  read button status toggle 
        readBtn.addEventListener("click",()=>{
           book.toggleRead(); 

           readBtn.textContent = book.isRead;
             readBtn.classList.toggle("readBtnYes");
             readBtn.classList.toggle("readBtnNo");
        })
        

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

