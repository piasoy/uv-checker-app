import React from 'react';
import './Header.css';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button'

import 'typeface-roboto';

class Header extends React.Component {

    render() {
        return (
           
                <div className="header">
                    <div class="inner-header">
                        <div className="header-text">
                            <h1>SUNSHADE</h1>
                            <h3>analyzes the daily UV index and provides you with tips to minimize risk of sunburn and other uv-related health risks.</h3>             
                        </div>
                        <div className="main-button-section">
                            <Button className="main-button">Get today's<br />UV Analysis </Button>
                        </div>
                    </div>
                    
                </div> 
                
           
        )}
}

export default Header;