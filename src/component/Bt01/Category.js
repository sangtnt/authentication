import React from 'react';
import {Link, useRouteMatch, Switch, Route, useParams} from "react-router-dom";
export default function Category (){
    let {path, url} = useRouteMatch();
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                <li><Link to={`${url}/netflix`}>Netflix</Link></li>
                <li><Link to={`${url}/doraemon`}>Doraemon</Link></li>
                <li><Link to={`${url}/facebook`}>Facebook</Link></li>
            </ul>
            <Switch>
                <Route exact path={`${path}`}>Click on topics</Route>
                <Route path={`${path}/:topic`}><Topic/></Route>
            </Switch>
        </div>
    );
}
function Topic(){
    let {topic} = useParams();
    return(
    <h3>{topic}</h3>
    );
}