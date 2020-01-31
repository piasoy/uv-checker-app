import React from 'react';
import './Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from '@material-ui/core/Button';

import 'typeface-roboto';

class Header extends React.Component {

    render() {
        return (
           
                <div className="container">
                    <div className="row">
                        <h1>Throw That Shade makes sure you're protected against daily UV rays</h1>
                        <p>It checks UV index and provides you with tips to minimize risk of sunburn and other uv-related health risks.</p>             
                            

                    </div>
                    <div className="row">
                        <Button variant="contained">Throw Shade</Button>
                    </div>
                </div> 
                
           
        )}
}

export default Header;