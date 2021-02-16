import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <p>Made By Abdullah : {year}</p>
            </footer>
        </>
    )
}

export default Footer;