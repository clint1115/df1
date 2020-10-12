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

function App() {
  return (
    <Router>
      <Suspense fallback = {(<div>로딩중...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>

            <Route path="/home" component = {HomePage} />
            <Route path="/register" component = { RegisterPage } />
            <Route path="/login" component = { LoginPage } />
              
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
    );
}

export default App;
