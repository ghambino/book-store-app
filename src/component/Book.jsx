import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


const Book = (props) => {
    const {id, bookname, author, price, quantity, date, handleRemoveBook} = props
    const history = useHistory()
    console.log(props)
    return (
        <Card className='book' style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title className="book-title">
                    {bookname}
                </Card.Title>
                <div className='book-details'>
                    <div>Author: {author}</div>
                    <div>Quantity: {quantity}</div>
                    <div>Price: ${price}</div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
                <Button variant='danger' onClick={() => handleRemoveBook(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Book
