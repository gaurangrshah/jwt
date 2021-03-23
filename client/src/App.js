import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./contexts/AuthContext"


toast.configure();

function App() {

  const { user, isAuthenticated, setIsAuthenticated, setUser } = useAuth()

  return (
    <Fragment>
      <Router>
        {!isAuthenticated && <Redirect to='/login' />}
        <div className="container">
          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>{isAuthenticated ? 'Logout' : 'Login'}</button>
          <Switch>
            <Route
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setIsAuthenticated} />
                ) : (
                    <Redirect to="/dashboard" />
                  )
              }
            />

            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setIsAuthenticated} />
                ) : (
                    <Redirect to="/dashboard" />
                  )
              }
            />

            <Route
              exact
              path="/dashboard"
              render={props =>
                !isAuthenticated ? (
                  <Dashboard {...props} setAuth={setIsAuthenticated} />
                ) : (
                    <Redirect to="/login" />
                  )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment >
  );
}

export default App;
