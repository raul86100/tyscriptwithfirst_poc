
import Add from './Add';
import './App.css';

import Home from './home';
import { Route, Routes } from 'react-router-dom';

 function App() {
 

  return (
    <>
    {/* <Home /> */}
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add' element={<Add />} />
    </Routes>
    </>
  );
}

export default App;
