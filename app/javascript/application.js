// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting";
import { BrowserRouter, Route } from "react-router-dom";


const App = () => {
  // add react router here
  return (
    <BrowserRouter>
      <Route path="/" component={Greeting} />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
