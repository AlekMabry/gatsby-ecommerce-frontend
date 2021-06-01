import React from 'react';

/**
 * Horizontal navigation bar.
 * 
 * @param [{name: {string}, url: {string}}] props.navigation Navigation bar links.
 */

function HorizontalNavBar(props) {
    const links = props.navigation.map((link) => (
        <li><a href={link.url}>{link.name}</a></li>
    ));

    return(
        <div class="horizontal-nav-bar-container">
            <nav class="horizontal-nav-bar">
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    );
}

export default HorizontalNavBar;