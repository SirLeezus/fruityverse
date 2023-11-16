'use client'

import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import React from "react";

const Dropdown: React.FC = () => {
    return (
        <div className={styles.dropdown}>
            <ul>
                <Link href="/battlefield-setup">
                    <li>Battlefield Setup</li>
                </Link>
            </ul>
        </div>
    );
};

export default Dropdown;