'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import ContactModal from './ContactModal';

export default function Navbar() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/icon.png"
                            alt="My Megam Logo"
                            width={60}
                            height={60}
                            className={styles.logoImage}
                        />
                        <span>My Megam</span>
                    </Link>

                    <div className={styles.links}>
                        <Link
                            href="#services"
                            className={styles.link}
                            onClick={() => {
                                if (window.gtag) window.gtag('event', 'nav_click', { value: 'services' });
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            className={styles.link}
                            onClick={() => {
                                if (window.gtag) window.gtag('event', 'nav_click', { value: 'about' });
                            }}
                        >
                            About
                        </Link>
                        <button
                            onClick={() => {
                                setIsContactOpen(true);
                                if (window.gtag) window.gtag('event', 'button_click', { value: 'contact_nav' });
                            }}
                            className={`${styles.link} ${styles.navButton}`}
                        >
                            Contact
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            setIsContactOpen(true);
                            if (window.gtag) window.gtag('event', 'button_click', { value: 'get_started_nav' });
                        }}
                        className="btn-primary"
                    >
                        Get Started
                    </button>
                </div>
            </nav>
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
}
