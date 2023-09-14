import { useEffect, useState } from 'react'
import Book from './Book';
const Books = () => {
    const [books, setBooks] = useState([])

    useEffect( () => {
      fetch('courses.json')
      .then(res => res.json())
      .then(data => setBooks(data))
    },[])
  
    return (
        <div className=' grid grid-cols-3'>
           {
            // console.log(books)
            books.map(book => 
                    <Book key={book.id} book={book}></Book>
                )
           } 
        </div>
    );
};


export default Books;