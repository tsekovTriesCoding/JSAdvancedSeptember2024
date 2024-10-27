class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        if (this.books.some(book => book.title === title && book.author === author)) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }

        const book = {
            title,
            author
        };

        this.books.push(book);
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        if (!this.books.some(book => book.title === bookTitle)) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const assignedBook = this.books.find(book => book.title === bookTitle);

        this.books = this.books.filter(book => book.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport() {
        if (!this.members.length) {
            return 'No members in the book club.';
        }

        if (!this.books.length) {
            return `No available books in the library.`;
        }

        let output = [`Available Books in ${this.library} library:`];

        this.books.forEach(book => {
            const message = `"${book.title}" by ${book.author}`;
            output.push(message);
        });

        return output.join('\n');
    }
} 

// const myBookClub = new BookClub('The Bookaholics'); 
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald")); 
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee")); 
// console.log(myBookClub.addBook("1984", "George Orwell")); 
// console.log(myBookClub.addMember("Alice")); 
// console.log(myBookClub.addMember("Peter")); 
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// const myBookClub = new BookClub('The Bookaholics'); 
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald")); 
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee")); 
// console.log(myBookClub.addBook("1984", "George Orwell")); 
// console.log(myBookClub.addMember("Alice")); 
// console.log(myBookClub.addMember("Alice")); 
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby")); 
// console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics'); 
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald")); 
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee")); 
// console.log(myBookClub.addBook("1984", "George Orwell")); 
// console.log(myBookClub.addMember("Alice")); 
// console.log(myBookClub.addMember("Peter")); 
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

const myBookClub = new BookClub('The Bookaholics'); 
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee")); 
console.log(myBookClub.addBook("1984", "George Orwell")); 
console.log(myBookClub.addMember("Alice")); 
console.log(myBookClub.addMember("Peter")); 
console.log(myBookClub.assignBookToMember("Peter", "1984")); 
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird")); 
console.log(myBookClub.generateReadingReport());