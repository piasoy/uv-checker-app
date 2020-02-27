import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button'
import { API_KEY } from './utils/Key';
import Results from './Results.js';

class Header extends React.Component {

    state = {
        lat: null,
        lon: null,
        uvIndex: null,
        geoError:null,
        uvError: null      
      };


  
  //use Geolocation Web API to get device location    
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        console.log('position', position)        
      },
      error => {
        console.log(error)
        this.setState({
            geoError: error
        });
      }
    );
  }
    //make request to Weateher API to get UV index
    handleClick = () => {
        console.log('this is:', this);
        console.log('location stat:', this.state.lat, this.state.lon)
        let url = `http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('uv data:', result)
                    this.setState({
                        uvIndex: result.value
                    });
                },
                (error) => {
                    console.log(error)
                    this.setState({
                        uvError: error
                    });
                }
            )
      }

    render() {
        console.log('state:', this.state)
        const { uvIndex } = this.state;
        return (
           
                <div className="header">
                    {uvIndex ?
                        (<Results uvIndex={uvIndex} />)
                    :
                        (<div className="inner-header">
                            <div className="header-text">
                                <h1>SUNSHADE</h1>
                                <h3>analyzes the daily UV index and provides you with tips to minimize risk of sunburn and other uv-related health risks.</h3>             
                            
                            {/* <div className="main-button-section"> */}
                                <Button className="main-button" onClick={this.handleClick}>Get today's UV Analysis </Button>
                            {/* </div> */}
                            </div>
                        </div>)
                    }
                </div> 
                
           
        )}
}

export default Header;



