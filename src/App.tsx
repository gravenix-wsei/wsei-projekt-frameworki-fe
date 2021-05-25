import React from 'react';
import Header from './elements/Header';
import LeftPanel from './elements/LeftPanel';
import Page from './elements/Page';
import './App.css';
import './app-style.scss'

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <LeftPanel />
        <Page />
      </div>
    </React.Fragment>
  );
}

export default App;
