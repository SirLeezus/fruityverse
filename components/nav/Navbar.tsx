'use client'

import React, {useCallback, useRef, useState} from 'react';
import Image from "next/image";
import NavBanner from "../../public/imgs/nav/nav_banner.svg";
import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import {usePathname} from 'next/navigation';
import Dropdown from "@/components/nav/Dropdown";
import MobileDropdown from "@/components/nav/MobileDropdown";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleMobileButtonClick = useCallback(() => {
        setMobileDropdownOpen(!isMobileDropdownOpen);
    }, [isMobileDropdownOpen]);

    return (
        <div>
            {/* Desktop Navigation */}
            <nav className={`${styles.container} ${styles.desktopNav}`}>
                <Image src={NavBanner} alt="Navbanner" className={styles.bannerImage} priority={true} />
                <div className={styles.menu}>
                    <ul>
                        <li className={pathname == "/" ? styles.currentPage : ""}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={pathname == "/card-specs" ? styles.currentPage : ""}>
                            <Link href="/card-specs">Card Specs</Link>
                        </li>
                        <li ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Link href="/how-to-play">
                                <span className={pathname == '/how-to-play' ? styles.currentPage : ''}>How To Play</span> ▾
                            </Link>
                            {isOpen && <Dropdown />}
                        </li>
                        <li>
                            <a href="https://opensea.io/collection/genesisgrove-fruityverse" target="_blank">Opensea</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`${styles.mobileNav} ${isMobileDropdownOpen ? styles.showMobileNav : ''}`}>
                <div className={styles.mobileNavContainer}>
                    <button className={styles.mobileNavButton} onClick={handleMobileButtonClick}>☰</button>
                    {isMobileDropdownOpen && <MobileDropdown />}
                </div>
            </div>

            <div className={styles.bannerBG} />
        </div>
    );
};

export default Navbar;