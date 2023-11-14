import styles from "../../styles/battlefield-setup/battlefield.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/battlefield-setup/battlefield-atf.svg";

const Header = () => {
    return (
        <header className={styles.background}>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.headerTextCard}>
                        <h1>Placing Cards: The Battlefield</h1>
                        <p>Forge your strategy, conquer the realm – dive into the heart of the battle.</p>
                    </div>
                </div>
                <div className={styles.headerImage}>
                    <Image src={HeaderImage} alt="Header" />
                </div>
            </div>
            <div className={styles.spacer} />
        </header>
    );
}

export default Header;