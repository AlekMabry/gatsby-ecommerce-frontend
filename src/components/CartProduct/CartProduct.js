import React from 'react';

/**
 * A product with modifiable count displayed in the cart menu.
 * @param {string} props.product.id ID of product.
 * @param {string} props.product.thumbnail.url URL of thumbnail.
 * @param {string} props.product.name Name of product.
 * @param {string} props.product.slug Slug of product for link.
 * @param {float} props.product.price Price of product.
 * @param {float} props.product.previousPrice Optional. Previous price of product.
 */
function CartProduct(props) {
    // If previous price and current price are the same don't render it.
    const previousPriceStr = (props.product.previousPrice === props.product.price) ?
        null : '$' + props.product.previousPrice;
    const priceStr = '$' + props.product.price;

    return (
        <div class="cart-product">
            <div class="ratio-square-container">
                <img src={props.product.thumbnail.url} alt=""/>
            </div>
            <div class="description-container">
                <span class="title">{props.product.name}</span>
                <div class="price">{priceStr}<span class="previous-price">{previousPriceStr}</span></div>
            </div>
        </div>
    );
}

export default CartProduct;