import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHeader from './common/AppHeader'
import MarketPairs from './marketpairs'

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <main role="main">
        <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                    <Route exact path="/" component={MarketPairs} />
                  </div>
              </div>
          </div>
      </main>
    </React.Fragment>
  </Router>
);

export default App;
