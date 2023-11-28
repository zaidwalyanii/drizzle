import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo from '../images/logo.png';

function Logo() {
    return (
        <Link to="/">
            <img src={companyLogo} alt="Drizzel. logo" />
        </Link>
    )
}

export default Logo