import styles from "../../styles/card_specs.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/card_specs/pineapple.svg";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Understanding Cards at a Glance</h1>
                    <p>Your visual guide to reading card elements and meanings.</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonHeader}><span>View On Opensea</span></button>
                    </div>
                </div>
                <div className={styles.headerImage}>
                    <Image src={HeaderImage} alt="Header" />
                </div>
            </div>
        </header>
    );
}

export default Header;