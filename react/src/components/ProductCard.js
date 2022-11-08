import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { storeData } from '../states/stores';
import Swal from 'sweetalert2'
import uuid from 'react-uuid'

const ProductCard = ({ product }) => {
    const addProduct = storeData(state => state.addProduct);

    const handleButtonAddCart = e => {
        addProduct({ id: uuid(), product: product });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto Agregado'
        })
    }
    return (
        <Card>
            <Image src={`http://localhost:3001/products/image/${product.NombreImagen}`} />
            <Card.Content>
                <Card.Header>{product.Nombre_p}</Card.Header>
                <Card.Meta>{product.Precio}</Card.Meta>
                <Card.Description>{product.Descripcion}</Card.Description>
                <Button fluid className='add-button' onClick={handleButtonAddCart}>
                    Agregar al carrito
                    <Icon name='arrow right' />
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ProductCard;