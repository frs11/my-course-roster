import { useEffect, useState } from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

const Books = ({handleSelectButton}) => {
    const [books, setBooks] = useState([])

    useEffect( () => {
      fetch('courses.json')
      .then(res => res.json())
      .then(data => setBooks(data))
    },[])
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            // console.log(books)
            books.map(book => 
                    <Book key={book.id} book={book} handleSelectButton={handleSelectButton}></Book>
                )
           } 
        </div>
    );
};

Books.propTypes = {

    handleSelectButton: PropTypes.func.isRequired
}

export default Books;