import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";

// We need to import the router component with the history component.
// The Routes component defines our actual routes and the components to be rendered when
// those routes are requested in the URL.
function App() {
      return (
            <Router history={history}>
                  <Routes />
            </Router>
      );
}

export default App;
