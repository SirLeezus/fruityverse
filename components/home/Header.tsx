import styles from "../../styles/home/home.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/home/home_banner.svg";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="headerTopSpace" />
            <div className={styles.header}>
                <Image src={HeaderImage} alt="Header" fill={true} />
                <h1>Fruityverse</h1>
                <div className={styles.buttonContainer}>
                    <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">
                        <button className={styles.buttonHome}><span>View On Opensea</span></button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;