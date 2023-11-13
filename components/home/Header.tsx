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
                    <Link href="https://opensea.io/collection/genesisgrove-fruityverse" passHref={true}>
                        <button className={styles.buttonHome}><span>View On Opensea</span></button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;