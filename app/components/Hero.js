import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>Next-Gen AI Consultancy</div>
                    <h1 className={styles.title}>
                        Transform Your Business with <br />
                        <span className="gradient-text">Intelligent Solutions</span>
                    </h1>
                    <p className={styles.description}>
                        My Megam delivers cutting-edge AI integration, process automation, and workflow optimization to propel your enterprise into the future.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn-primary">
                            Book a Consultation
                        </Link>
                        <Link href="#services" className={styles.btnSecondary}>
                            Explore Services
                        </Link>
                    </div>
                </div>

                {/* Abstract visual element/placeholder for 3D graphic */}
                <div className={styles.visual}>
                    <div className={styles.glow} />
                    <div className={styles.circle} />
                </div>
            </div>
        </section>
    );
}
