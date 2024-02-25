import styles from "./style.module.css";

const PageContent = ({ children }) => {
    return (
        <h1 className={styles.pagecontent}>{children}</h1>
    )
}

export default PageContent