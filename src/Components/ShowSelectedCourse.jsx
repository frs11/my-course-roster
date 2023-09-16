import PropTypes from 'prop-types';

const ShowSelectedCourse = ({chosenCourses, totalCredit, totalPrice, remainingCredit}) => 
{
    return (
        <div className='mx-auto'>
            <h3 className='text-blue-500 font-bold my-4'>Credit Hour Remaining {remainingCredit} hr</h3>
            <hr className='bg-gray-300 h-0.5' />
            <div>
                <h1 className='text-xl font-semibold ml-3 mt-3'>Course Name</h1>
                <ul className='list-decimal pl-5 py-4'>
                    {
                    chosenCourses.map((item, idx) => <li key={idx} className='bg-sky-200 text-gray-700 py-1 px-2 my-2 rounded-md'> {item.title}</li>) 
                    }
                </ul>
            </div>
            <hr className='bg-gray-300 h-0.5' />
            
            <h3 className='my-3'>Total Credit Hour: {totalCredit}hr</h3>

            <hr className='bg-gray-300 h-0.5' />
            <h3 className='my-3'>Total Credit Price: {totalPrice}$</h3>
        </div>
    );
};
ShowSelectedCourse.propTypes = {

    chosenCourses: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
}

export default ShowSelectedCourse;