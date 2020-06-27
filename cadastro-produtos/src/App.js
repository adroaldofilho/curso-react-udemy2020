import React, { Fragment } from 'react';
import Navbar from './components/navbar'
import Rotas from './rotas';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <div className="container">
          <Navbar />
          <Rotas />
        </div>
      </HashRouter>
    </Fragment>
  );
}

export default App;
