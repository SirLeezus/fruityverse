'use client'

import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import React from "react";

const MobileDropdown: React.FC = () => {
    return (
        <div className={styles.mobileNavDropdown}>
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/battlefield-setup">
                    <li>Battlefield Setup</li>
                </Link>
                <Link href="/card-specs">
                    <li>Card Specs</li>
                </Link>
                <Link href="/how-to-play">
                    <li>How To Play</li>
                </Link>
                <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">
                    <li>Opensea</li>
                </a>
            </ul>
        </div>
    );
};

export default MobileDropdown;