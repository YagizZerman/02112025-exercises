class Book {
  constructor(title, author, isbn) {
    if (typeof title !== 'string' || title.trim().length < 3) {
      throw new Error('Title must be a string with at least 3 characters.');
    }

    if (typeof author !== 'string' || author.trim().length < 3) {
      throw new Error('Author must be a string with at least 3 characters.');
    }

    if (typeof isbn !== 'string' || isbn.trim().length === 0) {
      throw new Error('ISBN must be a non-empty string.');
    }

    this.title = title.trim();
    this.author = author.trim();
    this.isbn = isbn.trim();
    this.isBorrowed = false;
  }

  toggleBorrowedStatus() {
    this.isBorrowed = !this.isBorrowed;
  }
}

class Member {
  constructor(name, memberId) {
    if (typeof name !== 'string' || name.trim().length < 3) {
      throw new Error('Name must be a string with at least 3 characters.');
    }

    if (
      (typeof memberId !== 'string' && typeof memberId !== 'number') ||
      String(memberId).trim().length === 0
    ) {
      throw new Error('Member ID must be a non-empty string or number.');
    }

    this.name = name.trim();
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrowBook(isbn) {
    if (!this.borrowedBooks.includes(isbn)) {
      this.borrowedBooks.push(isbn);
    }
  }

  returnBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter((bookIsbn) => bookIsbn !== isbn);
  }
}

class Library {
  #books;
  #members;
  #lateFeesPerDay;
  #borrowRecords;

  constructor(lateFeesPerDay = 0.5) {
    this.#books = [];
    this.#members = [];
    this.#borrowRecords = {};
    this.#lateFeesPerDay = lateFeesPerDay;
  }

  addBook(book) {
    if (!(book instanceof Book)) {
      console.log('Only Book instances can be added.');
      return;
    }

    const existingBook = this.#books.find((item) => item.isbn === book.isbn);

    if (existingBook) {
      console.log(`Book with ISBN ${book.isbn} already exists. Not added.`);
      return;
    }

    this.#books.push(book);
    console.log(`Book added: "${book.title}"`);
  }

  removeBook(isbn) {
    const bookIndex = this.#books.findIndex((book) => book.isbn === isbn);

    if (bookIndex === -1) {
      console.log(`Book with ISBN ${isbn} was not found.`);
      return;
    }

    const book = this.#books[bookIndex];

    if (book.isBorrowed) {
      console.log(`Book "${book.title}" is currently borrowed and cannot be removed.`);
      return;
    }

    this.#books.splice(bookIndex, 1);
    console.log(`Book with ISBN ${isbn} removed successfully.`);
  }

  registerMember(member) {
    if (!(member instanceof Member)) {
      console.log('Only Member instances can be registered.');
      return;
    }

    const existingMember = this.#members.find(
      (item) => String(item.memberId) === String(member.memberId)
    );

    if (existingMember) {
      console.log(`Member with ID ${member.memberId} already exists.`);
      return;
    }

    this.#members.push(member);
    console.log(`Member registered: ${member.name}`);
  }

  borrowBook(memberId, isbn, borrowDate) {
    const member = this.#members.find(
      (item) => String(item.memberId) === String(memberId)
    );
    const book = this.#books.find((item) => item.isbn === isbn);

    if (!member) {
      console.log(`Member with ID ${memberId} not found.`);
      return;
    }

    if (!book) {
      console.log(`Book with ISBN ${isbn} not found.`);
      return;
    }

    if (book.isBorrowed) {
      console.log(`Book "${book.title}" is not available right now.`);
      return;
    }

    const parsedBorrowDate = new Date(borrowDate);

    if (Number.isNaN(parsedBorrowDate.getTime())) {
      console.log('Invalid borrow date.');
      return;
    }

    book.toggleBorrowedStatus();
    member.borrowBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    this.#borrowRecords[recordKey] = parsedBorrowDate;

    console.log(`${member.name} borrowed "${book.title}" on ${parsedBorrowDate.toDateString()}.`);
  }

  returnBook(memberId, isbn, returnDate) {
    const member = this.#members.find(
      (item) => String(item.memberId) === String(memberId)
    );
    const book = this.#books.find((item) => item.isbn === isbn);

    if (!member) {
      console.log(`Member with ID ${memberId} not found.`);
      return;
    }

    if (!book) {
      console.log(`Book with ISBN ${isbn} not found.`);
      return;
    }

    if (!book.isBorrowed) {
      console.log(`Book "${book.title}" is already marked as available.`);
      return;
    }

    const recordKey = `${memberId}-${isbn}`;
    const borrowDate = this.#borrowRecords[recordKey];
    const parsedReturnDate = new Date(returnDate);

    if (Number.isNaN(parsedReturnDate.getTime())) {
      console.log('Invalid return date.');
      return;
    }

    book.toggleBorrowedStatus();
    member.returnBook(isbn);

    if (!borrowDate) {
      console.log(`No borrow record found for member ${memberId} and book ${isbn}.`);
      return;
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor(
      (parsedReturnDate - borrowDate) / millisecondsPerDay
    );

    console.log(
      `${member.name} returned "${book.title}" on ${parsedReturnDate.toDateString()}.`
    );

    if (daysPassed > 14) {
      const lateDays = daysPassed - 14;
      const lateFee = lateDays * this.#lateFeesPerDay;
      console.log(
        `Late return: ${lateDays} day(s) late. Fee: $${lateFee.toFixed(2)}`
      );
    } else {
      console.log('Book returned on time. No late fee.');
    }

    delete this.#borrowRecords[recordKey];
  }

  viewAvailableBooks() {
    const availableBooks = this.#books.filter((book) => !book.isBorrowed);

    console.log('Available Books:');

    if (availableBooks.length === 0) {
      console.log('No available books.');
      return;
    }

    availableBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} | ISBN: ${book.isbn}`);
    });
  }

  viewBorrowedBooks() {
    const borrowedBooks = this.#books.filter((book) => book.isBorrowed);

    console.log('Borrowed Books:');

    if (borrowedBooks.length === 0) {
      console.log('No borrowed books.');
      return;
    }

    borrowedBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} | ISBN: ${book.isbn}`);
    });
  }
}

/*
  TESTING THE LIBRARY
*/

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 'ISBN-001');
const book2 = new Book('1984', 'George Orwell', 'ISBN-002');
const book3 = new Book('Dune', 'Frank Herbert', 'ISBN-003');

const member1 = new Member('Elit', 'M001');
const member2 = new Member('Pinar', 'M002');

const library = new Library(0.5);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book1);

library.registerMember(member1);
library.registerMember(member2);
library.registerMember(member1);

console.log('\n--- Initial Available Books ---');
library.viewAvailableBooks();

console.log('\n--- Borrowing Books ---');
library.borrowBook('M001', 'ISBN-001', '2025-11-01');
library.borrowBook('M002', 'ISBN-002', '2025-11-05');
library.borrowBook('M002', 'ISBN-001', '2025-11-06');

console.log('\n--- Available Books After Borrowing ---');
library.viewAvailableBooks();

console.log('\n--- Borrowed Books ---');
library.viewBorrowedBooks();

console.log('\n--- Returning Book On Time ---');
library.returnBook('M002', 'ISBN-002', '2025-11-10');

console.log('\n--- Returning Book Late ---');
library.returnBook('M001', 'ISBN-001', '2025-11-20');

console.log('\n--- Final Available Books ---');
library.viewAvailableBooks();

console.log('\n--- Final Borrowed Books ---');
library.viewBorrowedBooks();

console.log('\n--- Remove Book Tests ---');
library.removeBook('ISBN-003');
library.removeBook('ISBN-001');
library.removeBook('ISBN-999');