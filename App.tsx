import React from 'react'
import Homepage from './Homepage.tsx';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Homepage />} />
      </Routes>
    </div>
  )
} 

export default App
