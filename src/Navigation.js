import React from 'react';
import './Navigation.css';
import { Navbar} from 'react-bootstrap';


class Navigation extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg" className="nav-bar">
                <Navbar.Brand href="/">Sunshade</Navbar.Brand>
            </Navbar>
                
           
        )}
}

export default Navigation;