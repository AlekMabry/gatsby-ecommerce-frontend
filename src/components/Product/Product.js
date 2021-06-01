import React from 'react';
import icoCart from "../../images/ico/ico-cart.svg"

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.priceStr = '$' + this.props.product.price;
        this.previousPriceStr = this.props.product.previousPrice ? 
            '$' + this.props.product.previousPrice : null;
        this.promotion =
            this.props.product.previousPrice ?
            <div class="promotion">Sale</div> : null;
    }

    render() {
        return (
            <div class="item-frame product">
                {this.promotion}
                <div class="ratio-square-container">
                    <img src={this.props.product.thumbnail.url} alt={this.props.product.thumbnail.alt}></img>
                </div>
                <div class="description-container">
                    <h2>{this.props.product.name}</h2>
                    <div class="price">{this.priceStr}<span class="previous-price">{this.previousPriceStr}</span></div>
                    <p>{this.props.product.description}</p>
                    <button type="button">
                        <div>Add to Cart</div>
                        <img src={icoCart} alt=""></img>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product