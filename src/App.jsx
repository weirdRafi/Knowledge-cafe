import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Showjob from './components/Showjob/Showjob';

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
          <Main></Main>
        </div>
        <div className='col-md-4'>
          {
            detail.map(d => <Showjob d={d}></Showjob>)
          }
        </div>
      </div>
    </div>

  )
}

export default App
