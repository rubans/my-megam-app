'use client';

import { useEffect } from 'react';
import styles from './ContactModal.module.css';

export default function ContactModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <h2 className={styles.title}>Get in Touch</h2>
                <p className={styles.subtitle}>Let's discuss how we can help you innovate with AI.</p>

                <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Request sent! (Testing)'); onClose(); }}>
                    <div className={styles.group}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" className={styles.input} placeholder="John Doe" required />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Email Address</label>
                        <input type="email" className={styles.input} placeholder="john@example.com" required />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>I'm interested in...</label>
                        <select className={styles.select} required defaultValue="">
                            <option value="" disabled>Select an option</option>
                            <option value="ai-solutions">AI Solutions</option>
                            <option value="workflow-automation">Workflow Automation</option>
                            <option value="voice-assistants">AI Voice Assistants</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea} placeholder="How can we help?" required></textarea>
                    </div>

                    <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
