import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import MarketPairs from './containers/MarketPairs';

const App = () => (
  <Router basename="/Binance/">
    <React.Fragment>
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
    </React.Fragment>
  </Router>
);

export default App;
