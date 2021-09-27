import {Container,Grid} from '@material-ui/core'
import React from 'react';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:'grey'}}>
          <Profile/>
        </Grid>

        <Grid item xs >
        <Router>
          <Header/>
          <div className="main-content container_shadow">
          <Switch>
           

         <Route path="/">
         <Resume/>
         </Route>
            </Switch>
          </div>
      
          </Router>

         
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
