import React from 'react';
import Header from './elements/Header';
import LeftPanel from './elements/LeftPanel';
import Page from './elements/Page';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LeftPanel />
      <Page />
    </React.Fragment>
  );
}

export default App;
