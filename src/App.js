import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListingPage from './components/ListingPage/index';
import DetailsPage from './components/DetailsPage/index';
import Navigation from './components/Navigation/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <Switch>
      <Fragment>
        <Navigation />
        <Route exact path='/' component={ListingPage}/>
        <Route path='/case-study/:id' component={DetailsPage}/>
        <Footer />
      </Fragment>
    </Switch>
  );
}

export default App;
