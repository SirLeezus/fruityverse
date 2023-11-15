'use client'

import React, {useCallback, useRef, useState} from 'react';
import Image from "next/image";
import NavBanner from "../public/imgs/nav/nav_banner.svg";
import Link from "next/link";
import styles from '../styles/navbar.module.css';
import {usePathname} from 'next/navigation';
import Dropdown from "@/components/Dropdown";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const handleMouseEnter = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div>
            <div className={styles.bannerBG} />
            <nav className={styles.container}>
                <Image src={NavBanner} alt="Navbanner" className={styles.bannerImage} />
                <div className={styles.menu}>
                    <ul>
                        <Link href="/">
                            <li className={pathname == "/" ? styles.currentPage : ""}>Home</li>
                        </Link>
                        <Link href="/card-specs">
                            <li className={pathname == "/card-specs" ? styles.currentPage : ""}>Card Specs</li>
                        </Link>
                        <Link href="/how-to-play">
                            <li ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <span className={pathname == '/how-to-play' ? styles.currentPage : ''}>How To Play</span> ▾
                                {isOpen && <Dropdown />}
                            </li>
                        </Link>
                        <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">
                            <li>Opensea</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;