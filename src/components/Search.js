import * as BooksAPI from '../BooksAPI';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const Search = ({books, storeBook}) => {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const UpdateSearchValue = async (e) => {
        setSearchValue(e.target.value);
        if (e.target.value !== "") {
            const res = await BooksAPI.search(e.target.value, 20);
            if (res.length > 0) {
                const resultsArray = await res.map(b => {
                    let returnData = b
                    let someData = books.filter(book => book.id === b.id)

                    if (someData.length > 0){
                        returnData = someData[0];
                    }
                    
                    return(returnData)
                })
                setSearchResults(resultsArray);
            }
        }
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={searchValue}
                    onChange={UpdateSearchValue}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        (searchResults.length > 0 ? 
                            searchResults.map((bookData) => {
                                return(
                                    <Book key={bookData.id} bookData={bookData} storeBook={storeBook}/>
                                )
                            })
                            :
                            (searchValue.length > 0 ? 
                                <p>Searching...</p> 
                                : <p></p>
                            )
                        )
                    }
                </ol>
            </div>
        </div>
    );
}

export default Search;