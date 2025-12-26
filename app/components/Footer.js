import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <div className={styles.logo}>My Megam</div>
                        <p className={styles.description}>
                            Empowering businesses with intelligent AI solutions for a smarter tomorrow.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.heading}>Services</h4>
                        <ul className={styles.links}>
                            <li><a href="#">AI Assistants</a></li>
                            <li><a href="#">Automation</a></li>
                            <li><a href="#">Consulting</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.heading}>Company</h4>
                        <ul className={styles.links}>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.heading}>Contact</h4>
                        <ul className={styles.links}>
                            <li>hello@mymegam.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 AI Boulevard, Tech City</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} My Megam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
