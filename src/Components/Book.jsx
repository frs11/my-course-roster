// import { FiDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Book = ({ book }) => {
    const {title, cover, price, details, credit} = book;
    // console.log("book connected")
    return (
        <div className="bg-white py-3 mx-2 my-1 rounded-lg px-2">
            <img className='w-full' src={cover} alt="" />
            <h1 className="text-lg font-semibold">{title}</h1>
            <p>{details}</p>

            <div className='flex justify-between'>
            <div className='flex'>
            <p><FiDollarSign></FiDollarSign> {price}</p>
            </div>
            <h1><IoBookOutline></IoBookOutline>{credit}</h1>

            </div>
            <button className='w-full bg-blue-500 text-white font-bold my-3 mr-6 py-2 rounded-md'> Select</button>
        </div>
    );
};
Book.propTypes = {

    book: PropTypes.object.isRequired
}

export default Book;