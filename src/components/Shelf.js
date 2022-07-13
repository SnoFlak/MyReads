import Book from './Book';
import { Link } from 'react-router-dom';

const Shelf = ({name, books, storeBook}) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        (books !== undefined ? 
                        books.map(book => {
                            return(<Book key={book.id} bookData={book} storeBook={storeBook}/>)
                        })
                        : <p>No books on this shelf, <Link to="/search" >Search</Link> for some books!</p>
                        )
                    }
                </ol>
            </div>
        </div>
    );
}

export default Shelf;