import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'


//Simple footer for the application. Provides a simple location to add all footer content.
const Footer = ({ product }) => (
    <div className='footer-container' >
        <div className='footer-text'>Copyright content here.</div>
        <div className='footer-text'>I hope you are happy with what you see :)</div>
    </div>
)
export default Footer