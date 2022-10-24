import React from 'react'

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.header}>
        <h1>Mundial</h1>
        <div className={classes['header-menu']}>
            <a href="#">Group Stage</a>
            <a href="#">Knock Out Stage</a>
            <a href="#">About</a>
        </div>
    </div>
  )
}

export default Header