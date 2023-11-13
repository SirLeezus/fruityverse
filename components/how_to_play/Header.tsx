import styles from "../../styles/how_to_play/how_to_play.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/how_to_play/melon.png";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>How to Play Fruityverse The NFT TCG</h1>
                    <p>Embark on an epic journey through the Fruityverse, where strategy meets collectibles. Learn the rules, master the tactics, and conquer the TCG world!</p>
                    <div className={styles.buttonContainer}>
                        <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">
                            <button className={styles.buttonHeader}><span>View On Opensea</span></button>
                        </a>
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