import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch,
  Redirect ,useHistory, useLocation} from "react-router-dom";

import Home from "./component/Bt01/Home";
import Category from "./component/Bt01/Category";
function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link> |{" "}
        <Link to="/category">Category</Link>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
          <PrivateRoute path="/category">
              <Category/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}
let auth={
  isLogin: false,
  login(cb){
    auth.isLogin=true;
    cb();
  },
  logout(cb){
    auth.isLogin=false;
    cb();
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
  let {from}=location.state || {from: "/"};
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
