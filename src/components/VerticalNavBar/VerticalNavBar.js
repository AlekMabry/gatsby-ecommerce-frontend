import React from 'react';

function VerticalNavBar(props) {
    const links = props.navigation.map((link) => (
        <li><a href={link.url}>{link.name}</a></li>
    ));

    return(
        <div class="vertical-nav-bar-container">
            <nav class="vertical-nav-bar">
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    );
}

export default VerticalNavBar;