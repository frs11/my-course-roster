import Books from './Components/Books'
import './App.css'
// import PropTypes from 'prop-types';

function App() {


  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-8'>Course Registration</h1>
      <div className='w-11/12 mx-auto flex'>
        <div className='w-9/12 h-96 mr-5'>
          <Books> </Books>
        </div>

        <div className='w-3/12 h-96 bg-white'>

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