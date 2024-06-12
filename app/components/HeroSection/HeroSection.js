'use client';
import React from 'react';
import Image from "next/image";
import heroImage from '@/public/HeroSectionAssets/heroImage.png';
import {VscArrowRight} from "react-icons/vsc";
import styles from './herosection.module.css';
import {motion} from "framer-motion";

const HeroSection = () => {
    return (
        <div className={`flex w-full flex-col md:flex-row px-10 md:px-40 pt-20 pb-5 ${styles.heroSection} md:h-[100vh]`}>

            <div className={`w-full md:w-1/2 flex flex-col justify-center gap-10`}>
                <h1 className={`text-slate-500 text-3xl md:text-5xl font-semibold ${styles.heroText}`}>Turning your
                    concepts<br/> into <span className={`${styles.subText}`}>beautifully</span> functional websites.
                </h1>
                <p className={`text-slate-400 `}>We transform your ideas into stunning, high-performing websites that
                    captivate users and meet your business goals.</p>
                <button
                    className={`flex justify-center items-center gap-4 border-2 border-slate-300 py-2 w-52 md:w-72 text-slate-500 rounded-full`}>Inquire
                    now <VscArrowRight/></button>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0,scale:0 }}
                animate={{ y: 0, opacity: 1,scale:1 }}
                exit={{ y: 50, opacity: 0,scale:0 }}
                transition={{ delay: 0.4 }}
                className={`w-full md:w-1/2 flex flex-col justify-center`}>
                <Image src={heroImage} alt={"hero"} className={`w-3/4 m-auto ${styles.floatingRobo}`}/>
            </motion.div>


        </div>
    );
};

export default HeroSection;