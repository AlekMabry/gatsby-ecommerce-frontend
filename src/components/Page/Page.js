import React from 'react';
import Ribbon from '../Ribbon/Ribbon'
import HeaderBar from '../Header/Header';
import Footer from '../Footer/Footer';
import CartContextProvider from '../../contexts/CartContextProvider';

/**
 * Page with header and footer.
 * 
 * @param {*} props.children 
 * @param {*} props.ribbonMessages
 */
function Page(props) {
    const ribbons = props.ribbonMessages.map((ribbon) => 
        <Ribbon ribbon={ribbon}/>
    );

    return (
        <CartContextProvider>
            <div class="page-container">
                {ribbons}
                <HeaderBar navigation={props.page.navigation} meta={props.page.meta}/>
                <div class="body-container">
                    {props.children}
                </div>
                <Footer footer={props.page.footer}/>
            </div>
        </CartContextProvider>
    );
}

export default Page;