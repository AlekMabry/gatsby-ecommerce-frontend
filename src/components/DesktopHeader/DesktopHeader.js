import React from 'react';
import HorizontalNavBar from '../HorizontalNavBar/HorizontalNavBar';
import { brandLogo, contactInfo } from '../../config/siteConfig';

import icoLocation from '../../images/ico/ico-location.svg';
import icoCall from '../../images/ico/ico-call.svg';
import icoMail from '../../images/ico/ico-mail.svg';

/**
 * Desktop header with navbar, contact information, and cart dropdown.
 * 
 * @param {*} props 
 * @returns 
 */

function DesktopHeader(props) {
    return (
        <>
            <div class="desktop-header-container">
                <div class="desktop-header">
                    <img src={brandLogo} alt="Logo"/>
                    <div class="contact">
                        <a href="#" class="ico-text"><img src={icoLocation} alt=""/>Visit Us<br/>{contactInfo.cityString}</a>
                        <div class="divider"></div>
                        <a href={contactInfo.phoneURL} class="ico-text"><img src={icoCall} alt=""/>{contactInfo.phoneString}</a>
                        <div class="divider"></div>
                        <a href="#" class="ico-text"><img src={icoMail} alt=""/>Contact Us</a>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
            <HorizontalNavBar navigation={props.navigation}/>
        </>
    );
}

export default DesktopHeader;