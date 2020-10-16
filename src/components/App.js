import React, { Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './views/Footer/Footer'
import NavBar from './views/NavBar/NavBar'
import HomePage from './HomePage'
import LoginPage from './Login'
import RegisterPage from './Register'
import User from './User'
import Auth from '../hoc/auth'
function App() {
  return (
    <Router>
      <Suspense fallback = {(<div>로딩중...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component = {Auth(HomePage, null)} />
            <Route exact path="/register" component = {Auth(RegisterPage, false)} />
            <Route exact path="/login" component = {Auth(LoginPage , false)} />
            <Route exact path="/user/resource"  component = {Auth(User, true) } />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
    );
}

export default App;
