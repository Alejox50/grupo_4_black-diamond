import React from 'react';
import { Grid } from 'semantic-ui-react';


//Component Imports
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import ProductContainer from '../../../components/ProductContainer'

function App() {

  return (
    <div className="App">
      <Nav />
      <Grid centered stackable padded relaxed>
        <Grid.Column width={9}>
          <ProductContainer name="Gorras" id={1}/>
        </Grid.Column>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
