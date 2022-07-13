import "./App.css";
import * as BooksAPI from './BooksAPI';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Shelfs from './components/Shelfs';

function App() {

  const [storedBooks, setStoredBooks] = useState([]);

  const gatherAllBooks = async () => {
    const res = await BooksAPI.getAll();
    setStoredBooks(res)
  }

  const updateBooksShelf = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf);
    if (res) {
      await gatherAllBooks();
    }
  }

  useEffect(() => {
    gatherAllBooks()
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <Shelfs books={storedBooks} storeBook={updateBooksShelf}/>
        }/>
        <Route path="/search" element={
          <Search books={storedBooks} storeBook={updateBooksShelf}/>
        } />
      </Routes>
    </div>
  );
}

export default App;
