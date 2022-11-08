import React, { useState, useEffect } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard'
import axios from "axios";

const ProductContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        var url = "http://localhost:3001/products"
        if (props.id != -1) {
            url = `http://localhost:3001/products/categoria/${props.id}`
        }
        axios
            .get(url)
            .then(function (response) {
                setProducts(response.data.products)
            });
    }, [])

    return (
        <>
            <Divider horizontal>{props.name}</Divider>
            <Grid stackable columns='equal' centered>
                {products.map(product => <Grid.Column width={5} key={product.IdProductos}><ProductCard product={product} /></Grid.Column>)}
            </Grid>
        </>
    );
};

export default ProductContainer;