import React from 'react'
import styles from "@/components/Header/style.module.css"

const Header = () => {
  return (
    <>
        <div className={styles.headerContainer}>

            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <input type="text" placeholder='Pesquisar no blog' />
                </div>
            </div>

        </div>

    </>
  )
}

export default Header