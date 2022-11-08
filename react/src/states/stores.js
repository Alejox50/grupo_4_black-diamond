// store/index.js
import create from 'zustand';

const useStore = create(set => ({
    user: {},
    products: [],
    addProduct: product =>
        set(state => ({
            products: [
                {
                    id: product.id,
                    product: product.product
                },
                ...state.products
            ]
        })),
    removeProduct: id =>
        set(state => ({
            products: state.products.filter(product => product.id !== id)
        })),

    addUser: data =>
        set({
            user: data
        }),
    removeUser: () =>
        set(state => ({
            user: {}
        })),
}));

export const storeData = useStore;