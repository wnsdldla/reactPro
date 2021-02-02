import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import App2 from "./App2";
import Board from "./Board";
import './App.css';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Profile from './Profile';
import {signIn} from "./auth";
import AuthRoute from './AuthRoute';
import LogoutButton from './LogoutButton';
import LoginForm from './LoginForm';

function App() {
  const [user,setUser ] = useState(null);
  const authenticated = user !=null;
  const login = ({email, password})=>setUser(signIn({email,password}));
  const logout = () => setUser(null);

  return (
  
      <Router>
        <header id="header">
        
          <Link to="/">
            <button>Profile</button>
          </Link>
          <Link to="/App2">
            <button>App2</button>
          </Link>
          <Link to="/Board">
            <button>Board</button>
          </Link>
          {authenticated ? (
            <LogoutButton logout={logout}/>
          ):(
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </header>
        
        <main>
          <switch>
            
            <AuthRoute
              authenticated={authenticated}
              exact path="/"
              render={props =><Profile user={user}{...props}/>}
            />
            <Route path="/App2" component={App2}/>
            <Route path="/Board" component={Board}/>
            <Route 
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login}{...props}/>
            )}
            />
          </switch>
        </main>
      </Router>
   
  );
}

export default App;
