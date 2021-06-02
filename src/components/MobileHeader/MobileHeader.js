import React, { useState, useContext } from 'react';

import CartIndicator from '../CartIndicator/CartIndicator';
import VerticalNavBar from '../VerticalNavBar/VerticalNavBar';
import IcoText from '../IcoText/IcoText';
import CartMenu from '../CartMenu/CartMenu';

import icoHamburger from '../../images/ico/ico-hamburger.svg';
import icoExit from '../../images/ico/ico-exit.svg';
import navLogo from '../../images/nav-logo.svg';
import icoLocation from '../../images/ico/ico-location.svg';
import icoCall from '../../images/ico/ico-call.svg';
import icoMail from '../../images/ico/ico-mail.svg';

/**
 * Mobile header for E-Commerce websites. Has left side hamburger button that displays a dropdown
 * navigation bar and contact. The right side cart button displays a dropdown cart items menu
 * with an order button.
 * 
 * @param [{name: {string}, url: {string}}] props.navigation Navigation bar links.
 */

const MENU_CLOSED = 0;
const MENU_NAV = 1;
const MENU_CART = 2;

function MobileHeaderBar(props) {
    const [state, setState] = useState(MENU_CLOSED);
    
    function closeMenu(e) {
        e.preventDefault();
        setState(MENU_CLOSED);
    }

    function openNavMenu(e) {
        e.preventDefault();
        setState(MENU_NAV);
    }

    function openCartMenu(e) {
        e.preventDefault();
        setState(MENU_CART);
    }

    switch (state) {
        case (MENU_CLOSED):
            return (
                <div class="mobile-header-container"> 
                    <div class="mobile-header">
                        <button class="mobile-header-dropdown-button" aria-label="Open navigation and contact menu" onClick={openNavMenu}>
                            <img class="icon-img" src={icoHamburger} alt=""/>
                        </button>
                        <img src={navLogo} alt="Logo"/>
                        <button class="mobile-header-dropdown-button" aria-label="Open cart menu" onClick={openCartMenu}>
                            <CartIndicator itemCount="2"/>
                        </button>
                    </div>
                </div> 
            );

        case (MENU_NAV):
            return (
                <>
                    <div class="mobile-header-container">
                        <div class="mobile-header">
                            <button class="mobile-header-dropdown-button" aria-label="Close navigation and contact menu" onClick={closeMenu}>
                                <img class="icon-img" src={icoExit} alt=""/>
                            </button>
                            <img src={navLogo} alt="Logo"/>
                            <button class="mobile-header-dropdown-button" aria-label="Open cart menu" onClick={openCartMenu}>
                                <CartIndicator itemCount="2"/>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-header-dropdown">
                        <VerticalNavBar navigation={props.navigation}/>
                        <div class="contact">
                            <IcoText href="#" icon={icoLocation}>Visit us in Raleigh, NC</IcoText>
                            <IcoText href="tel:+1555-481-8336" icon={icoCall}>+1 (555) 481-8336</IcoText>
                            <IcoText href="#" icon={icoMail}>Contact Us</IcoText>
                        </div>
                    </div>
                </>
            );

        case (MENU_CART):
            return (
                <>
                    <div class="mobile-header-container">
                        <div class="mobile-header">
                            <button class="mobile-header-dropdown-button" aria-label="Open navigation and contact menu" onClick={openNavMenu}>
                                <img class="icon-img" src={icoHamburger} alt=""/>
                            </button>
                            <img src={navLogo} alt="Logo"/>
                            <button class="mobile-header-dropdown-button" aria-label="Close cart menu" onClick={closeMenu}>
                                <img class="icon-img" src={icoExit} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-header-dropdown">
                        <CartMenu/>
                    </div>
                </>
            );
    }
}

export default MobileHeaderBar;