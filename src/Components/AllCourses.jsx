// import { useEffect, useState } from 'react'
import SingleCourse from './SingleCourse';
import PropTypes from 'prop-types';

const AllCourses = ({handleSelectButton, allCourse}) => {
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            // console.log(books)
            allCourse.map(course => 
                    <SingleCourse key={course.id} course={course} handleSelectButton={handleSelectButton}></SingleCourse>
                )
           } 
        </div>
    );
};

AllCourses.propTypes = {
    allCourse: PropTypes.array.isRequired,
    handleSelectButton: PropTypes.func.isRequired
}

export default AllCourses;