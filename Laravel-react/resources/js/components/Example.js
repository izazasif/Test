import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";



import Category from "./Category";
import News from "./News";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render( <HashRouter>
        <div>
          <h1>Test Examination</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Category">Category</NavLink></li>
            <li><NavLink to="/News">News</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/Category" component={Category}/>
            <Route path="/News" component={News}/>
          </div>
        </div>
      </HashRouter>, document.getElementById('example'));
}


