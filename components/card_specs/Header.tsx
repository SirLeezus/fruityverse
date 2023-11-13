import styles from "../../styles/card_specs/card_specs.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/card_specs/pineapple.svg";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Understanding Cards at a Glance</h1>
                    <p>Your visual guide to reading card elements and meanings.</p>
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