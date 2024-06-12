'use client';
import React, {useEffect} from 'react';
import {SiCakephp} from "react-icons/si";
import {FaRankingStar} from "react-icons/fa6";
import {BsGeoFill} from "react-icons/bs";
import {FaPuzzlePiece} from "react-icons/fa";
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const SoftMobWeb = () => {

    const data=[
        {
            title:"Since 2003",
            description:"Young at heart, but full of tradition",
            imageSrc:<SiCakephp size={50} />
        },
        {
            title:"5000+",
            description:"Satisfied clients and growing",
            imageSrc:<FaRankingStar size={50}/>
        },
        {
            title:"30",
            description:"Countries served",
            imageSrc:<BsGeoFill size={50}/>
        },
        {
            title:"3000+",
            description:"Custom development projects",
            imageSrc:<FaPuzzlePiece size={50}/>
        }
    ]
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
    return (
        <div className={`flex flex-col items-center justify-center mx-10 gap-5 md:mx-32 pb-28 `}>
            <h2 className={`text-2xl font-semibold text-slate-500`}>Enterprise Software, Mobile App and Web Applications</h2>
            <p className={`text-slate-400 text-center`} >The team which looks-after your goal to make you shine.</p>
            <motion.div
                variants={variants}
                initial="hidden"
                ref={refOneToOne}

                animate={controls} className={`grid grid-cols-2 md:grid-cols-4 items-center justify-center w-full`}>
                {data.map((item,index) => (
                    <motion.div variants={images} key={index} className={`flex flex-col items-center justify-center mt-20`}>
                        <div className={`text-slate-300`}>{item.imageSrc}</div>
                        <h2 className={`font-semibold text-slate-500 text-xl`}>{item.title}</h2>
                        <p className={`text-slate-500 text-sm text-center`}>{item.description}</p>


                    </motion.div>

                ))}

            </motion.div>
            
        </div>
    );
};

export default SoftMobWeb;