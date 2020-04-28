import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch,
  Redirect ,useHistory, useLocation} from "react-router-dom";

import Home from "./component/Bt01/Home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login"><Login/></Route>
          <PrivateRoute path="/">
              <Home logout={auth.logout}/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}
let auth={
  isLogin: false,
  login:(cb)=>{
    auth.isLogin=true;
    cb();
  },
  logout: (cb)=>{
    auth.isLogin=false;
  }
}
function PrivateRoute({children, ...rest}){
  return auth.isLogin?(
    children
  ):(
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Login(){
  let history= useHistory();
  let location= useLocation();
  let {from}=location.state||{from: "/"};
  let login=()=>{
    auth.login(()=>{
      history.replace(from);
    });
  }
  return(
      <div>
        <button onClick={login}>Login</button>
      </div>
  );
}
export default App;
