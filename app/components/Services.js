import styles from './Services.module.css';

const services = [
    {
        title: "AI Assistants",
        description: "Custom-trained chatbots and virtual assistants that handle customer support, internal queries, and data retrieval with human-like accuracy.",
        icon: "🤖"
    },
    {
        title: "Process Automation",
        description: "End-to-end automation of repetitive workflows, reducing manual effort and operational costs while minimizing errors.",
        icon: "⚙️"
    },
    {
        title: "Workflow Optimization",
        description: "Intelligent analysis of your business processes to identify bottlenecks and implement streamlined, AI-driven solutions.",
        icon: "📈"
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>What We Offer</h2>
                    <p className={styles.subtitle}>
                        Comprehensive AI solutions tailored to elevate your business operations.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
