import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductListPage } from './pages/ProductListPage';
import { AdminPage } from './pages/AdminPage';
import { Header } from './components/Header';

// [matt] TODO need to put the routing in its own component
// [matt] Make an exact path admin page that is /admin/somerandomtexttoavoidauthissues
// [matt] make sure everything else goes to Product List Page
const App: React.FC = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
