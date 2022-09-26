import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register'
import CompanyUsers from './CompanyUsers';
import UserProfile from './UserProfile';


function App() {
  return (
  <>
    <Navbar/>
       <div>
          <Routes>
            <Route path='/' element='' />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/company/profile' element={<UserProfile/>} />
            <Route path='/company/users' element={<CompanyUsers/>} />
          </Routes>
        </div>
  </>
  
  );
}

export default App;
