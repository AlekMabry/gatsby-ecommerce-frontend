import React, { useEffect } from 'react';
import DesktopHeader from '../DesktopHeader/DesktopHeader'
import MobileHeader from '../MobileHeader/MobileHeader';

/**
 * Header rendering both mobile and desktop versions of the navigation bar, contact info, and cart.
 * 
 * @param {*} props.navigation
 * @param {*} props.meta
 */

function Header(props) {
    const [width, setWidth] = React.useState(0);

    function handleWindowResize() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    if (width >= 800) {
        return (
            <>
                <DesktopHeader navigation={props.navigation} ribbon={props.ribbon}/>
            </>
        );
    } else {
        return (
            <>
                <MobileHeader navigation={props.navigation} ribbon={props.ribbon}/>
            </>
        )
    }
}

export default Header;