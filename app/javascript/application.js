// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting";
import { BrowserRouter, Route, Router } from "react-router-dom";


const App = () => {
  // add react router here
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" component={<Greeting />} />
      </Router>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
