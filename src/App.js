import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListingPage from './components/ListingPage';
import DetailsPage from './components/DetailsPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Navigation />
          <Route exact path='/' component={ListingPage}/>
          <Route path='/case-study/:id' component={DetailsPage}/>
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
