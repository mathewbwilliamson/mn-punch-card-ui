import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductListPage } from './pages/ProductListPage';
import { AdminPage } from './pages/AdminPage';
import { OrderHistoryPage } from './pages/OrderHistoryPage';
import { RefreshHistoryPage } from './pages/RefreshHistoryPage';

// [matt] TODO need to put the routing in its own component
// [matt] make sure everything else goes to Product List Page
const App: React.FC = () => {
  return (
    <>
      <div className='main-container'>
        <Router>
          <Switch>
            <Route exact path='/admin-thisisarealpath-so-this-should-work'>
              <AdminPage />
            </Route>
            <Route exact path='/admin-order-history'>
              <OrderHistoryPage />
            </Route>
            <Route exact path='/admin-refresh-history'>
              <RefreshHistoryPage />
            </Route>
            <Route path='/'>
              <ProductListPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
