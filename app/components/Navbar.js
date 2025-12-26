import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    My Megam
                </Link>

                <div className={styles.links}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                <Link href="#contact" className="btn-primary">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
