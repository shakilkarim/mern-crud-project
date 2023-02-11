import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import CreatePage from './Pages/CreatePage';
import ReadPage from './Pages/ReadPage';
import UpdatePage from './Pages/UpdatePage';



function App() {
  return (
   <>
   
  <NavBar>
    <Routes>
      <Route path='/' element={<ReadPage></ReadPage>} ></Route>
      <Route path='/create' element={<CreatePage></CreatePage>} ></Route>
      <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
    </Routes>
  </NavBar>
   </>
  );
}

export default App;
