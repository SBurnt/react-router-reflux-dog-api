import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';

import './css/App.css';
import Header from './Header';
import Home from './Home';

// import DogSearchMini from './DogSearchMini';
const asyncDogSearchMini = asyncComponent(() => import('./DogSearchMini'));

// import DogsListAllMini from './DogsListAllMini';
const asyncDogsListAllMini = asyncComponent(() => import('./DogsListAllMini'));

// import NotFoundLink from './NotFoundLink';
const asyncNotFoundLink = asyncComponent(() => import('./NotFoundLink'));

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main className='main'>
          <Route path='/breeds' component={asyncDogsListAllMini} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/breeds' component={asyncDogSearchMini} />
            <Route path='/breeds/:breed' component={asyncDogSearchMini} />
            <Route component={asyncNotFoundLink} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
