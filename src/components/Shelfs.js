import Shelf from './Shelf';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Shelfs = ({books, storeBook}) => {

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {

    const currentlyReadingFilter = books.filter(book => book.shelf === "currentlyReading");
    setCurrentlyReadingBooks(currentlyReadingFilter);

    const wantToReadingFilter = books.filter(book => book.shelf === "wantToRead");
    setWantToReadBooks(wantToReadingFilter);

    const readFilter = books.filter(book => book.shelf === "read");
    setReadBooks(readFilter);
  },[books])

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf name="Currently Reading" id="currentlyReading" books={currentlyReadingBooks} storeBook={storeBook}/>
            <Shelf name="Want to Read" id="wantToRead" books={wantToReadBooks} storeBook={storeBook}/>
            <Shelf name="Read" id="read" books={readBooks} storeBook={storeBook}/>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
    );
}

export default Shelfs;