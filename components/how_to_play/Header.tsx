import styles from "../../styles/how_to_play/how_to_play.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/how_to_play/melon.png";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>How to Play Fruityverse The NFT TCG</h1>
                    <p>Embark on an epic journey through the Fruityverse, where strategy meets collectibles. Learn the rules, master the tactics, and conquer the TCG world!</p>
                    <div className={styles.buttonContainer}>
                        <Link href="https://opensea.io/collection/genesisgrove-fruityverse" passHref={true}>
                            <button className={styles.buttonHeader}><span>View On Opensea</span></button>
                        </Link>
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