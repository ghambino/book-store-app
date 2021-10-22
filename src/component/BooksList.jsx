import React, {useContext} from 'react'
import BooksContext from '../context/BooksContext'
import Book from './Book'
import _ from 'lodash'

const BooksList = () => {
    const {books, setBooks} = useContext(BooksContext)
    console.log(books)

    const handleRemoveBook = id => {
        setBooks(books.filter((book) => book.id !== id))
    }

    return (
        <>

            <h2>list of books</h2>
            <div className='book-list'>
                {!_.isEmpty(books) ? (
                    books.map((book) => (
                        <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook}/>
                    ))
                ) : (
                    <p className='message'>No books available.. pls add some books</p>
                )}
            </div>
        </>
    )
}

export default BooksList
