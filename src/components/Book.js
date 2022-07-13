import Option from './Option';

const Book = ({bookData, storeBook}) => {

    const {title, authors, imageLinks, shelf} = bookData;
    const thumbnail = (imageLinks ? imageLinks.thumbnail : '')

    const updateBookStorageState = (e) => {
        storeBook(bookData, e.target.value);
    }

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height:180,
                            backgroundImage: `url(${thumbnail})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={updateBookStorageState} defaultValue={shelf}>
                            <Option val='none' available={false} msg='Move to...' curSelection={shelf} />
                            <Option val='none' available={true} msg='None' curSelection={shelf} />
                            <Option val='currentlyReading' available={true} msg='Currently Reading' curSelection={shelf} />
                            <Option val='wantToRead' available={true} msg='Want to Read' curSelection={shelf} />
                            <Option val='read' available={true} msg='Read' curSelection={shelf} />
                        </select> 
                    </div>
                </div>
                <div className="book-title">
                        {title}
                    </div>
                    <div className="book-authors">
                        {
                            authors && authors.join(', ')
                        }
                </div>
            </div>
        </li>
    );
}

export default Book;