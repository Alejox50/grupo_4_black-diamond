import React from 'react';
import { Card } from 'semantic-ui-react';

const ProductCard = ({product}) => {
    console.log(product, 'props from Container')
    return (
        // <Grid.Column width={5}>
            <Card 
                image={product.image}
                header={product.name}
                meta={product.price}
                description={product.description}
            />
        // </Grid.Column>
    );
};

export default ProductCard;