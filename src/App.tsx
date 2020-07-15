import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductListPage } from './pages/ProductListPage';
import { AdminPage } from './pages/AdminPage';

// [matt] TODO need to put the routing in its own component
const App: React.FC = () => {
  return (
    <div className='main-container'>
      <Router>
        <Switch>
          <Route exact path='/admin'>
            <AdminPage />
          </Route>
          <Route path='/'>
            <ProductListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
