import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Cars from './components/Cars'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') || false)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              isLogin ? (
                <Redirect
                  to={{
                    pathname: "/cars",
                    state: "true",
                  }}
                />
              ) : (
                  <Login {...props} setIsLogin={setIsLogin}/>
                )
            }
          />
          <Route path="/register" render={(props) =>
              isLogin ? (
                <Redirect
                  to={{
                    pathname: "/cars",
                    state: "true",
                  }}
                />
              ) : (
                  <Register {...props} />
                )
            }></Route>
          <Route path="/cars" render={(props) =>
              isLogin ? (
                <Cars />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: "true",
                  }}
                />
                )
            }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
