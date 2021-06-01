import React from 'react';

function FooterWidget(props)
{
    /*let list = null;
    if (props.widget.list) {
        const items = props.widget.list.map((item) => {
            let icon = null;
            if (item.icon) {
                const iconImage = require(item.icon);
                icon = <img src={iconImage} alt=""/>
            }
            return (
                <li><a href={item.link}>{item.title}{icon}</a></li>
            );
        });
        list = <ul>{items}</ul>
    }*/

    return (
        <div class={"footer-widget" + (props.widget.align === "right" ? "" : " right-widget-start")}>
            <div class="title">{props.widget.title}</div>
            
        </div>
    );
}

export default FooterWidget;