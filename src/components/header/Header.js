import React from 'react'
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
        <h1 className={styles.leftHeading}>
            <span className={styles.light}>INSTAWEATHER</span>
        </h1>
        <h3 className={styles.rightHeading}>
            <span className={styles.cels}>C</span> | <span className={styles.ferh}>F</span> 
        </h3>
    </div>
  )
}
