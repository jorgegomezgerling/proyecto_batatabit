import React from 'react'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-links">
                    <td> 
                        <tr>Linkedin</tr>
                        <tr>Crunchbase</tr>
                        <tr>Hackernews</tr>
                    </td>
                </div>
            </div>
            <div className="footer--batata-container">
                <span className="footer--batata-logo"></span>
                <div className="batata-subtitle">® Batabit 2020</div> 
            </div>
        </footer>
    );
};

export default Footer;
