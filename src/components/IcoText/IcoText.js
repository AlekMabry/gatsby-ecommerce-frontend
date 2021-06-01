import React from 'react';

function IcoText(props) {
    return (
        <a href={props.href} class="ico-text"><img src={props.icon} alt=""/>{props.children}</a>
    );
}

export default IcoText;