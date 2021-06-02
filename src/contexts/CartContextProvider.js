import React, { useReducer, createContext, useContext } from 'react';

/**
 * CartContextProvider can be added around the page to allow nested elements
 * to easily read and modify the cart.
 * 
 * To read from the cart in a nested component, use:
 * 
 *      import { useCartContext } from 'CartContextProvider';
 *      const cart = useCartContext();
 * 
 * To modify the cart from a nested component, use the CartUpdateContext context
 * with the *action* being the function and *payload* containing the arguments.
 * Action types are named after their respective functions documented below,
 * with the naming convention being ACTIONS.ACTION_NAME 
 * where actionName() is the function.
 * 
 *      import { useCartUpdateContext, ACTIONS } from 'CartContextProvider';
 *      const cartUpdate = useCartUpdateContext();
 *      cartUpdate(ACTIONS.ACTION_NAME, payload);
 */

/**
 * Calculates total cart price and savings.
 * 
 * @param {*} state State of cart.
 * @returns {*} New state of cart.
 */
function updatePrice(state) {
    let newState = { ...state };
    let totalPrice = 0;
    let savings = 0;
    for (let i = 0; i < state.items.length; i++) {
        totalPrice += state.items[i].price;
        savings += state.items[i].previousPrice - state.items[i].price;
    }
    newState.totalPrice = totalPrice;
    newState.savings = savings;
    return newState;
}

/**
 * Adds a product to the cart, incrementing an existing item if already in cart.
 * 
 * @param {*} state Existing state of the cart.
 * @param {string} product.id ID of product.
 * @param {string} product.name Name of product to display in cart menu.
 * @param {string} product.slug Slug of product for link.
 * @param {float} product.price Price of product.
 * @param {float} product.previousPrice Optional. Previous price of product if sale.
 * @returns {*} New state of cart.
 */
function addItem(state, product) {
    let i = state.items.findIndex(item => item.id === product.id);
    let newState = { ...state };
    if (i >= 0) {
        // Increment existing item in cart.
        newState.items[i].amount++;
    } else {
        // Add new item to cart.
        let prevPrice = product.previousPrice ? product.previousPrice : product.price;
        let newItem = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            previousPrice: prevPrice,
            amount: 1,
        };
        newState.items.push(newItem);
    }
    return newState;
}

/**
 * Removes a product from the cart, decrementing an existing item if already in cart.
 * 
 * @param {*} state Existing state of the cart.
 * @param {string} product.id ID of product.
 * @returns {*} New state of cart.
 */
function removeItem(state, id) {
    let i = state.items.findIndex(item => item.id === id);
    let newState = { ...state };
    if (i >= 0) {
        if (state.items[i].amount == 1) {
            // Delete item from cart.
            newState.items.slice(i, 1);
        } else {
            // Decrement item amount.
            newState.items[i].amount--;
        }
    }
    return newState;
}

export const ACTIONS = {
    ADD_ITEM: 1,
    REMOVE_ITEM: 2,
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            // action.payload: { product }
            let newState = addItem(state, action.payload);
            return updatePrice(newState);
        }

        case ACTIONS.REMOVE_ITEM: {
            // action.payload: { id }
            let newState = removeItem(state, action.payload);
            return updatePrice(newState);
        }

        default: 
            return state;
    }
}

const CartContext = createContext();
const CartUpdateContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

function CartContextProvider(props) {
    const [cart, dispatch] = useReducer(reducer, 
        { items: [
            { id: 1,
            name: "Smart Alek Robot Head",
            slug: "smart-alek-robot-head",
            price: 149.99,
            previousPrice: 179.99,
            amount: 2}
        ],
        itemCount: 0 });

    function modifyCart(action, payload) {
        dispatch({ type: action, payload: payload });
    }

    return (
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={modifyCart}>
                {props.children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    );
}

export default CartContextProvider;