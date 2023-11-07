import React from 'react';
import Image from "next/image";
import NavBanner from "../public/imgs/nav/nav_banner.svg";
import Link from "next/link";
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <div className={styles.bannerBackgroundImage} />
            <nav className={styles.container}>
                <Image src={NavBanner} alt="Navbanner" className={styles.bannerImage} />
                <div className={styles.menu}>
                    <ul>
                        <Link href="/home">
                            <li>Home</li>
                        </Link>
                        <Link href="/card_specs">
                            <li>Card Specs</li>
                        </Link>
                        <Link href="/how_to_play">
                            <li>How To Play</li>
                        </Link>
                        <Link href="/opensea">
                            <li>Opensea</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;