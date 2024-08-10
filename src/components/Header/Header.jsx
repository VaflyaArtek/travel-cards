import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <img src="/images/header-logo.svg" alt="planet"/>
            <p>my travel journal</p>
        </div>
    );
}