// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  // add react router here
  return (
    <Provider store={store}>
      <Greeting />
      {/* <BrowserRouter> */}
        {/* <Router> */}
          {/* <Route path="/" component={<Greeting />} /> */}
        {/* </Router> */}
      {/* </BrowserRouter> */}
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
