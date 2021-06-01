import React from 'react';

function ItemFrame(props) {
    return (
        <div class={"item-frame " + props.modClass}>
            {props.children}
        </div>
    );
}

export default ItemFrame;