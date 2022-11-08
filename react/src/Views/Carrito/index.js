import React, { useState, useEffect } from 'react';
import './style.css'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import { storeData } from '../../states/stores';

function App() {
    const getProduct = storeData(state => state.products);
    const removeProduct = storeData(state => state.removeProduct);
    const [total, SetTotal] = useState(0);
    const [totalPrice, SetTotalPrice] = useState(0);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        if (getProduct.length > 0) {
            var precio = 0
            var articulos = getProduct.length
            for (let i = 0; i < getProduct.length; i++) {
                precio += getProduct[i].product.Precio;
            }
            SetTotal(articulos)
            SetTotalPrice(precio)
        }
        SetLoading(false)
        console.log(getProduct)
    }, [])

    return (

        <div>
            <Nav />
            {
                loading ?
                    <></>
                    :
                    <div className="card">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Carrito</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">{total} articulos</div>
                                </div>
                            </div>

                            {getProduct.map(product =>
                                <Grid centered stackable padded relaxed>
                                    <Grid.Column width={9}>
                                        <Card>
                                            <Image src={`http://localhost:3001/products/image/${product.product.NombreImagen}`} />
                                            <Card.Content>
                                                <Card.Header>{product.product.Nombre_p}</Card.Header>
                                                <Card.Meta>{product.product.Precio}</Card.Meta>
                                                <Button fluid className='add-button' onClick={() => {
                                                    var nuevoPrecio = totalPrice - product.product.Precio;
                                                    removeProduct(product.id);
                                                    SetTotal(total - 1);
                                                    SetTotalPrice(nuevoPrecio);
                                                }

                                                }>
                                                    Eliminar
                                                    <Icon name='trash' />
                                                </Button>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            )}

                        </div>
                        <div className="col-md-4 summary">
                            <div><h5><b>Summary</b></h5></div>
                            <hr />
                            <div className="row">
                                <div className="col" style={{ paddingLeft: 0 }}>PRODUCTOS {total}</div>
                                <div className="col text-right">{totalPrice}</div>
                            </div>
                            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                <div className="col">TOTAL</div>
                                <div className="col text-right">{totalPrice}</div>
                            </div>
                            <button className="btn">CHECKOUT</button>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    );
}

export default App;
