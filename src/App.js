import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route } from "react-router-dom";
import Add_User from './NavTask/Add_User';
import User_Data from './NavTask/User_Data';
import Header from './NavTask/Header';


function App() {
  return (  
    <>
      <div className='container-fluid'>
        <div className='container'>
          {/* <Header/> */}
          <BrowserRouter>
            <Router>
            <Route path="/" element={<Add_User />} />
            <Route path="/User Data" element={<User_Data />} />
            </Router>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
