import React from 'react';
import FooterWidget from '../FooterWidget/FooterWidget';

/**
 * Footer component.
 * @param {*} props 
 */

function Footer(props)
{
    const widgets = props.footer.widgets.map((widget) => (
        <FooterWidget widget={widget}/>
    ));

    return (
        <div class="footer-container">
            <hr></hr>
            <footer>
                <div class="footer-widgets">
                    {widgets}
                </div>
                <div class="footer-text" dangerouslySetInnerHTML={{__html: props.footer.text}}/>
            </footer>
        </div>
    );
}

export default Footer;