import React, { useState, useEffect } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard'

const ProductContainer = () => {

    const commerce = {
        "products": [
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":2,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":3,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":4,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },
            {
                "id":1,
                "image":"https://vansco.vteximg.com.br/arquivos/ids/285070-1000-1000/VN0A7YK7WHT-1.jpg",
                "name":"buso chido",
                "price":"12.444",
                "description":"esta muy chido we"
            },

            
        ]
    }
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(commerce.products)
    },[])

    return (
        <>
            <Divider horizontal>Camisas</Divider>
            <Grid stackable columns='equal' centered>
                {products.map(product => <Grid.Column width={5} key={product.id}><ProductCard product={product} /></Grid.Column>)}
            </Grid>
        </>
    );
};

export default ProductContainer;