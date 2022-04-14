import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
