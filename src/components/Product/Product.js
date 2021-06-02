import React from 'react';
import { useCartUpdateContext, ACTIONS } from "../../contexts/CartContextProvider";
import icoCart from "../../images/ico/ico-cart.svg"

function Product(props) {
    const cartUpdate = useCartUpdateContext();

    function addToCart() {
        
        let action = {
            type: ACTIONS.ADD_ITEM,
            payload: props.product,
        };
        cartUpdate(action);
    }

    let priceStr = '$' + props.product.price;
    let previousPriceStr = props.product.previousPrice ? 
        '$' + props.product.previousPrice : null;
    let promotion =
        props.product.previousPrice ?
        <div class="promotion">Sale</div> : null;

    return (
        <div class="item-frame product">
            {promotion}
            <div class="ratio-square-container">
                <img src={props.product.thumbnail.url} alt={props.product.thumbnail.alt}></img>
            </div>
            <div class="description-container">
                <h2>{props.product.name}</h2>
                <div class="price">{priceStr}<span class="previous-price">{previousPriceStr}</span></div>
                <p>{props.product.description}</p>
                <button type="button" onClick={addToCart}>
                    <div>Add to Cart</div>
                    <img src={icoCart} alt=""></img>
                </button>
            </div>
        </div>
    );
}

export default Product