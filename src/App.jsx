import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <div className='col-md-8'>
          <Main></Main>
        </div>
        <div className='col-md-4'>

        </div>
      </div>
    </div>
    
  )
}

export default App
