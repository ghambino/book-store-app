import React, {useContext} from 'react'
import BooksContext from '../context/BooksContext'
import BookForm from './BookForm'
import {useParams, useHistory} from 'react-router-dom'

const EditBook = () => {
    const {books, setBooks} = useContext(BooksContext)
    const history = useHistory()
    const {id} = useParams()

    const bookToEdit = books.find(book => book.id === id);

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => book.id !== id)
        setBooks([book, ...filteredBooks])
        history.push('/')
    }

    return (
        <div>
            <BookForm handleOnSubmit={handleOnSubmit} book={bookToEdit}/>
        </div>
    )
}

export default EditBook
