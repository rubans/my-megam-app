import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <div className={styles.label}>About Us</div>
                        <h2 className={styles.title}>Driving the Future of Enterprise Intelligence</h2>
                        <p className={styles.description}>
                            At My Megam, we bridge the gap between complex AI technology and practical business value. Our mission is to empower organizations with intelligent tools that scalable, secure, and transformative.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>10+</div>
                                <div className={styles.statLabel}>Years in Tech</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>50+</div>
                                <div className={styles.statLabel}>AI Projects</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>100%</div>
                                <div className={styles.statLabel}>Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.process}>
                        <h3 className={styles.processTitle}>Our Process</h3>
                        <ul className={styles.steps}>
                            <li className={styles.step}>
                                <span className={styles.stepNum}>01</span>
                                <div className={styles.stepContent}>
                                    <h4>Discovery</h4>
                                    <p>We analyze your data and workflows to identify high-impact opportunities.</p>
                                </div>
                            </li>
                            <li className={styles.step}>
                                <span className={styles.stepNum}>02</span>
                                <div className={styles.stepContent}>
                                    <h4>Strategy</h4>
                                    <p>We design a custom AI roadmap tailored to your specific business goals.</p>
                                </div>
                            </li>
                            <li className={styles.step}>
                                <span className={styles.stepNum}>03</span>
                                <div className={styles.stepContent}>
                                    <h4>Implementation</h4>
                                    <p>We build, train, and deploy secure AI models into your existing systems.</p>
                                </div>
                            </li>
                            <li className={styles.step}>
                                <span className={styles.stepNum}>04</span>
                                <div className={styles.stepContent}>
                                    <h4>Optimization</h4>
                                    <p>Continuous monitoring and refinement to ensure peak performance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
