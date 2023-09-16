import AllCourses from './Components/allCourses'
import './App.css'
import { useState, useEffect } from 'react'
import ShowSelectedCourse from './Components/ShowSelectedCourse'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [allCourse, setAllCourse] = useState([])
  const [chosenCourses, setChosenCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect( () => {
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setAllCourse(data))
  },[])

  const notify = (message) => 
  {
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const handleSelectButton = (course) =>
  {
    const isExist = chosenCourses.find((item) => item.id == course.id);
    if(isExist)
    {
      notify("Already Taken!!! Try Another Course!");
    }
    else
    {
  
      if(totalCredit + course.credit >20 && remainingCredit - course.credit < 0)
      {
        return notify("Credit Limit Exceed!!! You Don't Have Enough Credit!!");
      }
      else
      {
          setTotalCredit(totalCredit+ course.credit);
          setTotalPrice(totalPrice + course.price);
          setRemainingCredit(remainingCredit - course.credit);

          const selectedCourse = [...chosenCourses, course]
          setChosenCourses(selectedCourse);
      }
      
    }
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-8'>Course Registration</h1>

      <div className='w-11/12 mx-auto flex flex-col lg:flex-row'>


        {/* Cards of available allCourses */}
        <div className='w-11/12 mx-auto md:w-10/12 lg:w-9/12 lg:mr-3'>
          <AllCourses 
          allCourse={allCourse}
          handleSelectButton={handleSelectButton}> </AllCourses>
        </div>

        <ToastContainer />
          {/* Taken Course Details */}
        <div className='w-11/12 mx-auto md:w-10/12 lg:w-3/12'> 
          <div className='my-4 rounded-md mx-auto bg-white py-3 px-3'>
          <ShowSelectedCourse
            chosenCourses={chosenCourses}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            remainingCredit={remainingCredit}
            ></ShowSelectedCourse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
