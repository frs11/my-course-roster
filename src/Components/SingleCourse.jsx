// import { FiDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const SingleCourse = ({ course, handleSelectButton }) => {
    const {title, cover, price, details, credit} = course;

    return (
        <div className="bg-white py-3 mx-1 my-2 rounded-lg px-2 shadow-lg">
            <img className='w-full' src={cover} alt="" />
            <h1 className="text-lg my-1 font-semibold">{title}</h1>
            <p className='md:h-20 lg:h-24'>{details}</p>

            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <FiDollarSign></FiDollarSign> 
                    <p className='ml-1'>Price: {price}</p>
                </div>
                <div className='flex items-center'>
                    <IoBookOutline></IoBookOutline>
                    <p className='ml-2'>Credit: {credit}hr</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleSelectButton(course)} className='w-full bg-blue-500 text-white font-bold mt-2 py-2 rounded-md hover:bg-blue-800'> Select</button>
            </div>
        </div>
    );
};
SingleCourse.propTypes = {

    course: PropTypes.object.isRequired,
    handleSelectButton: PropTypes.func.isRequired
}

export default SingleCourse;