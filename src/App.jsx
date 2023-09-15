import Books from './Components/Books'
import './App.css'
import CourseDetails from './Components/CourseDetails'
import { useState } from 'react'
// import PropTypes from 'prop-types';

function App() {

  const [chosenCourses, setChosenCourses] = useState([]);

  const handleSelectButton = (course) =>
  {
    const selectedCourse = [...chosenCourses, course]
    setChosenCourses(selectedCourse);
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-8'>Course Registration</h1>

      <div className='w-11/12 mx-auto flex flex-col lg:flex-row'>

        {/* Cards of available Books */}
        <div className='w-11/12 mx-auto md:w-10/12 lg:w-9/12 lg:mr-3'>
          <Books handleSelectButton={handleSelectButton}> </Books>
        </div>
          
          {/* Taken Course Details */}
        <div className='w-11/12 md:w-10/12 lg:w-3/12'> 
          <div className='my-4 rounded-md bg-white py-3'>
            <CourseDetails></CourseDetails>
            {/* <h1 className="text-4xl">Cart</h1> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


// MyComponent.propTypes = {
//   // You can declare that a prop is a specific JS primitive. By default, these
//   // are all optional.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,

// border border-solid border-red-700