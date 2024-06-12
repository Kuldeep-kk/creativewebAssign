import React from 'react';
import { TbBrandGoogleHome } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { SiInternetcomputer, SiWebpack } from "react-icons/si";
import { BsPassportFill } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { FaSwatchbook } from "react-icons/fa";
import { PiContactlessPayment } from "react-icons/pi";
import { HiMenuAlt1 } from "react-icons/hi";
import styles from './navbar.module.css';

const Navbar = () => {
    const menuItems = [
        { icon: <TbBrandGoogleHome size={25} />, label: 'Home' },
        { icon: <FaSwatchbook size={20} />, label: 'About Us' },
        { icon: <MdDesignServices size={25} />, label: 'Services' },
        { icon: <SiWebpack size={25} />, label: 'Solutions' },
        { icon: <BsPassportFill size={20} />, label: 'Portfolio' },
        { icon: <ImBlog size={25} />, label: 'Blog' },
        { icon: <SiInternetcomputer size={25} />, label: 'Careers' },
    ];

    return (
        <nav className={`flex justify-between items-center w-full px-10 md:px-32 h-20 fixed ${styles.mainNav}`}>
            <div className="text-2xl font-semibold text-slate-600">
                <span className={styles.subLogo}>Cre</span>ative
            </div>
            <div className="hidden md:flex items-center gap-10 text-slate-500">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex justify-center items-center gap-1 transition ease-in-out delay-75 hover:scale-110 cursor-pointer">
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <button className={`flex items-center gap-1 ${styles.contactBtn} p-2 text-white rounded`}>
                    <span>Contact Us</span>
                    <PiContactlessPayment size={25} />
                </button>
                <HiMenuAlt1 size={30} className="text-slate-400 md:hidden" />
            </div>
        </nav>
    );
};

export default Navbar;
