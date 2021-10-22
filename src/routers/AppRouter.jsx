import React from 'react'
import BooksContext from '../context/BooksContext'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../component/Header'
import AddBook from '../component/AddBook'
import BooksList from '../component/BooksList';
import useLocalStorage from '../hooks/useLocalStorage'
import EditBook from '../component/EditBook';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', [])
    console.log(books)
    return (
        <Router>
            <div>
                <Header />
                <div className='main-content'>
                    <BooksContext.Provider value={{ books, setBooks }}>
                        <Switch>

                            <Route component={BooksList} path='/' exact={true} />
                            <Route component={AddBook} path='/add' exact={true} />
                            <Route component={EditBook} path='/edit/:id' exact={true} />
                            <Route component={() => <Redirect to='/'/>} />

                            
                        </Switch>
                    </BooksContext.Provider>



                </div>
            </div>
        </Router>
    )
}

export default AppRouter
