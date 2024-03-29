import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Showjob from './components/Showjob/Showjob';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './components/Questions/Questions';

function App() {
  const [detail, setDetail] = useState([])

  const handleAddToDetails = (j) => {
    const newDetail = [...detail, j]
    // console.log(newDetail);
    setDetail(newDetail)
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <div className='col-md-8'>
          <Main handleAddToDetails={handleAddToDetails}></Main>
        </div>
        <div className='col-md-4'>
         <div className='bg-success rounded text-light sticky-top p-3'>
         <h5>Spent time on read : 0 min</h5>
          <h4> Bookmark Blogs: {detail.length}</h4>
          {
            detail.map(d => <Showjob d={d}></Showjob>)
          }
         </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Questions></Questions>
    </div>

  )
}

export default App
