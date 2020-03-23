import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MarketPairs from './containers/MarketPairs';
import Header from './components/Header';

const App = () => (
  <Router basename="/Binance/">
    <Fragment>
      <Header />
      <main role="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Route exact path="/" component={MarketPairs} />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  </Router>
);

export default App;
