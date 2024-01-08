import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AuthGuard from './Auth/AuthGaurd';
import { AuthProvider } from './Auth/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
<>
 <AuthProvider>
    <Router>
      <div >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<AuthGuard/>} >
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
      </div>
    </Router>
   </AuthProvider>
    </>
    );
  }
  
  export default App;
  // <>
  //   <Ipo/>
  //   <CurrencyExchange/>
  // </>
  
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>