import React, { useState } from 'react';
import ItemFrame from '../ItemFrame/ItemFrame';

function DropdownFrame(props) {
    const [state, setState] = useState(true);

    function invertAccordianState(e) {
        e.preventDefault();
        setState(prevState => !prevState);
    }

    const children = state ? props.children : null;
    const accordianButtonClass = state ? "accordian-button" : "accordian-button accordian-button-hide";
    return(
        <ItemFrame modClass={props.modClass}>
            <div class="accordian-title-container">
                <div class="title">{props.title}</div>
                <button aria-label="Show or hide categories" class={accordianButtonClass} onClick={invertAccordianState}></button>
            </div>
            {children}
        </ItemFrame>
    );
}

export default DropdownFrame;