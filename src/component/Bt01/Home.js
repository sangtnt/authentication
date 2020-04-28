import React, { Component } from 'react';
import { Switch , Route, Link} from 'react-router-dom';
import Category from './Category';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> | {" "}
                <Link to="category">Category</Link>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/category">
                        <Category/>
                    </Route>
                </Switch>
            </div>
        );
    }
}
function HomePage(){
    return(
        <h1>Home</h1>
    )
}

export default Home;