import React from 'react';
import CartIndicator from '../CartIndicator/CartIndicator';

class CartMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    /*
    <div class="cart-menu">
                    <div class="title">2 Items in Cart:</div>
                        <div class="price-container">
                        <div class="price">Total: $159.98</div>
                        <div class="savings">Saving: $60.00</div>
                    </div>
                    <button>Checkout</button>
                </div>
    */
    render() {
        return (
            <div class="cart-container">
                <CartIndicator itemCount="2"/>     
                
            </div>
            
        );
    }
}

export default CartMenu;