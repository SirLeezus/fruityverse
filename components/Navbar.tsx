'use client'

import React, {useCallback, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import NavBanner from "../public/imgs/nav/nav_banner.svg";
import Link from "next/link";
import styles from '../styles/navbar.module.css';
import {usePathname} from 'next/navigation';
import Dropdown from "@/components/Dropdown";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleDocumentClick);
        return () => document.removeEventListener('mousedown', handleDocumentClick);
    }, [closeDropdown]);

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
                        <li ref={dropdownRef} className={pathname == '/how-to-play' ? styles.currentPage : ''} onClick={toggleDropdown}>
                            How To Play
                            {isOpen && <Dropdown />}
                        </li>
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