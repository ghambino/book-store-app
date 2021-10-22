import React, {useContext} from 'react'
import BooksContext from '../context/BooksContext'
import BookForm from './BookForm'

const AddBook = ({history}) => {
const {books, setBooks} = useContext(BooksContext)
console.log(books)

    const handleOnSubmit = (book) => {
        setBooks([book, ...books])
        history.push('/')
    }
    return (
        <React.Fragment>
         <BookForm handleOnSubmit={handleOnSubmit}/>   
        </React.Fragment>
    )
}

export default AddBook
