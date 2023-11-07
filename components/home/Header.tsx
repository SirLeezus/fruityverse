import styles from "../../styles/home.module.css";
import React from "react";
import Image from "next/image";
import HeaderImage from "@/public/imgs/home/home_banner.svg";

const Header = () => {
    return (
        <header>
            <div className={styles.headerTopSpace}></div>
            <div className={styles.header}>
                <Image src={HeaderImage} alt="Header" fill={true} />
                <h1>Fruityverse</h1>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonHome}><span>View On Opensea</span></button>
                </div>
            </div>
        </header>
    );
}

export default Header;