import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'


//Simple header for the application. Provides a simple location to add all header content
const Header = ({ product }) => (
    <div className='header-container' >
        <h1 className='application-title'>Interview Application</h1>
    </div>
)
export default Header