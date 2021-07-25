import React from 'react'
import {NavHashLink } from 'react-router-hash-link';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbarGrid}>
                <NavHashLink className={styles.navlinkClass} to="/home" >Home</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/home#about" >About Me</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/home#projects" >Projects</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/home#projects" >Projects</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/home#contact" >Contact Me!</NavHashLink>
                
            </div>
            
        </div>
    )
}

export {Navbar}
