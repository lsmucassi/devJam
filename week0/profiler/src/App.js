import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core'
import Header from './Header/Header';
import Profiles from './Profiles/Profiles';
import Login from './Login/Login'

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Login/>
        {/* <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
           <Profiles/>
        </Grid>
        <Grid item xs={0} sm={1} /> */}
      </Grid>
    </Grid>
  );
}

export default App;
 