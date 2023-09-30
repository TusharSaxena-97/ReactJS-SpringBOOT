import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = (props) => {
  return (
    <footer className='bg-dark'>
      <div className="container py-3">
        <div className="row text-light mt-3">
        <div className="col-md">
            <div className="d-flex align-items-center" style={{fontSize: '20px', fontWeight: '500'}}>
              <img src={logo} alt="NewsWave" style={{width: '42px', marginRight: '10px'}} /> {props.brandName}
            </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <h4 style={{fontWeight: 'normal'}}>Quick Links</h4>
          </div>

        </div>
          
      </div>
    </footer>
  )
}

export default Footer;
