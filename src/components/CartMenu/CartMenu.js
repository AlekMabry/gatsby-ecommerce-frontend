import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import { useCartContext } from '../../contexts/CartContextProvider';

function CartMenu(props) {
    const cartContext = useCartContext();
    const cartItems = cartContext.items.map(item => 
        <CartProduct product={item}/>
    )

    return (
        <>{cartItems}</>
    );
}

export default CartMenu;