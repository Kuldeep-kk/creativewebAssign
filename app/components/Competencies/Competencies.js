'use client';
import React, {useEffect} from 'react';
import {RiPresentationLine, RiTeamFill} from "react-icons/ri";
import {MdWebhook} from "react-icons/md";
import {BsBuildingsFill} from "react-icons/bs";
import {GiAutoRepair} from "react-icons/gi";
import {IoTimerOutline} from "react-icons/io5";
import {SiThirdweb} from "react-icons/si";
import {FaOpencart, FaServer} from "react-icons/fa";
import styles from './comp.module.css';
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Competencies = () => {
    const controls = useAnimation();
    const [refOneToOne,inViewOne]=useInView();
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const images = {
        hidden: {
            opacity: 0,
            x: 30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };

    useEffect(() => {
        if (inViewOne) {
            controls.start("show");
        }
    }, [controls, inViewOne]);

    const data=[
        {
          title:"Intranet Development",
            description:"Web Applications, Android App, IOS App, Windows App",
            imageSrc:<RiTeamFill />
        },
        {
            title:"Internet Development",
            description:"SEO, PPC, Social Media marketing, Online reputation management",
            imageSrc:<RiPresentationLine />
        },
        {
            title:"Web Design",
            description:"MobileFirst, Responsive, Wordpress, Tailwind, Next.js website design",
            imageSrc:<MdWebhook />
        },
        {
            title:"Enterprise Solutions",
            description:"Integrations, SAAS software, CRM, ERP, CAPEX, OPEX solutions",
            imageSrc:<BsBuildingsFill />
        },
        {
            title:"Bespoke Development",
            description:"ASP.Net, React.js, Next.js, Wordpress development",
            imageSrc:<GiAutoRepair />
        },
        {
            title:"IT Staffing",
            description:"Hire Resources permanent, on demand, man per hour, project basis.",
            imageSrc:<IoTimerOutline />
        },
        {
            title:"CMS",
            description:"Content Management System - Web, Intranet, Extranet",
            imageSrc:<SiThirdweb />
        },
        {
            title:"E-Commerce",
            description:"B2B, B2C, Bespoke Ecommerce website designing with SEO",
            imageSrc:<FaOpencart />
        },
        {
            title:"Email and Hosting",
            description:"Premium Email, Servers, Corporate Mailing Solutions",
            imageSrc:<FaServer />
        }
    ];
    return (
        <div className={`flex flex-col justify-center items-center  ${styles.mainDiv} py-10`}>
            <p className={`${styles.subHead} text-sm sm:text-md text-center`}>One-Stop Turkey Web and Software Solutions</p>
            <h1 className={`text-slate-500 text-xl md:text-3xl text-center font-semibold`}>Our Reputation of Competencies</h1>
            <motion.div
                variants={variants}
                initial="hidden"
                ref={refOneToOne}

                animate={controls} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 mx-10 md:mx-20 lg:mx-32">
                {data.map((item, index) => (
                    <motion.div variants={images} key={index} className={`flex flex-col justify-center items-center text-center ${styles.box} px-3 py-7`}>
                        <div className="text-4xl mb-4 text-slate-500">{item.imageSrc}</div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-600">{item.title}</h3>
                        <p className={`text-slate-400`}>{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Competencies;