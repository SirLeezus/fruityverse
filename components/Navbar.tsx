'use client'

import React from 'react';
import Image from "next/image";
import NavBanner from "../public/imgs/nav/nav_banner.svg";
import Link from "next/link";
import styles from '../styles/navbar.module.css';
import {usePathname} from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className={styles.bannerBG} />
            <nav className={styles.container}>
                <Image src={NavBanner} alt="Navbanner" className={styles.bannerImage} />
                <div className={styles.menu}>
                    <ul>
                        <Link href="/" prefetch>
                            <li className={pathname == "/" ? styles.currentPage : ""}>Home</li>
                        </Link>
                        <Link href="/card_specs" prefetch>
                            <li className={pathname == "/card_specs" ? styles.currentPage : ""}>Card Specs</li>
                        </Link>
                        <Link href="/how_to_play" prefetch>
                            <li className={pathname == "/how_to_play" ? styles.currentPage : ""}>How To Play</li>
                        </Link>
                        <Link href="/opensea" prefetch>
                            <li className={pathname == "/opensea" ? styles.currentPage : ""}>Opensea</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;