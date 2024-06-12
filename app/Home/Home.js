import React from 'react';
import HeroSection from "@/app/components/HeroSection/HeroSection";
import SoftMobWeb from "@/app/components/SoftMobWeb/SoftMobWeb";
import DownloadApp from "@/app/components/DownloadApp/DownloadApp";
import Competencies from "@/app/components/Competencies/Competencies";
import PageWrapper from "@/app/components/PageWrapper";

const Home = () => {
    return (
        <PageWrapper>
            <HeroSection/>
            <SoftMobWeb/>
            <DownloadApp/>
            <Competencies/>
        </PageWrapper>
    );
};

export default Home;