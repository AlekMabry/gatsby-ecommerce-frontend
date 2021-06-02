import React from 'react';
import { useCartContext } from '../../contexts/CartContextProvider';
import icoCart from "../../images/ico/ico-cart.svg";

function CartIndicator(props) {
    const cartContext = useCartContext();
    return (
        <div class="cart-indicator">
            <div class="cart">
                <img src={icoCart} alt="Cart"/>
                <div class="cart-item-count">{cartContext.itemCount}</div>
            </div>
        </div>
    );
}

export default CartIndicator;