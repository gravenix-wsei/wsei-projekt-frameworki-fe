import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './elements/Header';
import LeftPanel from './elements/LeftPanel';
import Page from './elements/Page';
import './App.css';
import './app-style.scss'
import UserInfo from './elements/UserInfo';
import Entities from './elements/Entities';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/user">
            <UserInfo />
          </Route>
          <Route path="/entities">
            <Entities />
          </Route>
          <Route path="/">
            <LeftPanel />
            <Page />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
