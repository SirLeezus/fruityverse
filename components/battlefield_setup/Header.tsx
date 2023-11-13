import styles from "../../styles/battlefield_setup/battlefield.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/battlefield_setup/battlefield-atf.svg";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Placing Cards: The Battlefield</h1>
                    <p>Forge your strategy, conquer the realm – dive into the heart of the battle.</p>
                </div>
                <div className={styles.headerImage}>
                    <Image src={HeaderImage} alt="Header" />
                </div>
            </div>
        </header>
    );
}

export default Header;