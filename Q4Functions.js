let books = ["The Great Gatsby", "To Kill a Mockingbird", "Pride and Prejudice", "War and Peace"];

function booksWithMostWords(){
    let maxWords = 0;
    let titleWithMostWords = books[0];

    for(let i=0; i<books.length; i++){
        let currentTitle=books[i];
        let currentWords = currentTitle.split(' ').length;
        if(currentWords > maxWords){
            maxWords = currentWords;
            titleWithMostWords = currentTitle;
        }
    
    }
    return titleWithMostWords;
}

console.log(bookWithMostWords());