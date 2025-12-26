import styles from './Process.module.css';

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description: "We analyze your current infrastructure and identify high-impact opportunities for AI integration."
        },
        {
            number: "02",
            title: "Strategy",
            description: "Our team designs a tailored roadmap, selecting the right tools and models for your specific needs."
        },
        {
            number: "03",
            title: "Implementation",
            description: "We build, train, and deploy your AI solutions, ensuring seamless integration with existing systems."
        },
        {
            number: "04",
            title: "Optimisation",
            description: "Continuous monitoring and refinement to ensure your AI agents evolve with your business."
        }
    ];

    return (
        <section id="process" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>How We Work</h2>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
