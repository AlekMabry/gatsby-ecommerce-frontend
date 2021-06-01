import React from 'react';
import { useState } from 'react';
import icoExit from "../../images/ico/ico-exit.svg";

/**
 * Promotional/message ribbon bar at top of page.
 * 
 * @param {*} props.ribbon Ribbon object.
 * @param {string} props.ribbon.message Message to display on ribbon.
 * @param {string} props.ribbon.url Link if ribbon is clicked. Optional.
 */

function Ribbon(props)
{
    const [state, setState] = useState(true);

    function close(e) {
        e.preventDefault();
        setState(false);
    }

    if (state) {
        return (
            <div class="ribbon-container">
                <div class="ribbon">
                    {props.ribbon.message}
                    <button class="ribbon-button" aria-label="Close message" onClick={close}>
                        <img src={icoExit} alt=""/>
                    </button>
                </div>
            </div>
        );
    } else {
        return (null);
    }
}

export default Ribbon;