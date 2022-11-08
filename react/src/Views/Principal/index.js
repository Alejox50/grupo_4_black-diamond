import React from 'react';
import './styles.css'
//Component Imports
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Grid } from 'semantic-ui-react';
import ProductContainer from '../../components/ProductContainer';

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="banner">
        <div className="info">
          <h2>Bienvenidos a Black Diamond</h2>
        </div>
      </div>
      <Grid centered stackable padded relaxed>
        <Grid.Column width={9}>
          <ProductContainer />
        </Grid.Column>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
