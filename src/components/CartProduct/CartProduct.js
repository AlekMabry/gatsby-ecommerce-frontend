import React from 'react';

/**
 * A product with modifiable count displayed in the cart menu.
 * @param {string} props.product.id ID of product.
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
            <h2>{props.product.name}</h2>
            <div class="price">{priceStr}<span class="previous-price">{previousPriceStr}</span></div>
        </div>
    );
}

export default CartProduct;