import styles from"./Header.module.css"

function Header(){

    return(
        <>
           <div className={styles.contener}>
                <h1 >Contact App</h1>
                <p>Contact App By
                    <span>Hossein M.Z</span>
                </p>
           </div>
        </>
    )
}
export default Header 