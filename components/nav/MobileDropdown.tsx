'use client'

import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import React from "react";

const MobileDropdown: React.FC = () => {
    return (
        <div className={styles.mobileNavDropdown}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/card-specs">Card Specs</Link>
                </li>
                <li>
                    <Link href="/how-to-play">How To Play</Link>
                </li>
                <li>
                    <Link href="/battlefield-setup">Battlefield Setup</Link>
                </li>
                <li>
                    <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">Opensea</a>
                </li>
            </ul>
        </div>
    );
};

export default MobileDropdown;