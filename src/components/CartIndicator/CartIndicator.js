import React from 'react';
import icoCart from "../../images/ico/ico-cart.svg";

function CartIndicator(props) {
    return (
        <div class="cart-indicator">
            <div class="cart">
                <img src={icoCart} alt="Cart"/>
                <div class="cart-item-count">{props.itemCount}</div>
            </div>
        </div>
    );
}

export default CartIndicator;