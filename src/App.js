import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Preferences from './Components/Preferences';
import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();
 
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;