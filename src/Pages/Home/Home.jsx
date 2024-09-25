import React, { useEffect, useRef } from 'react';
import img from '../../assets/1 (1).webp';
import './Home.css';
import Brand from '../../Components/Brand/Brand';
import LeadingSection from '../../Components/LeadingSection/LeadingSection';

const Home = () => {
   

    return (
        <div className='home_container'>
            <Brand />
         <LeadingSection/>
        </div>
    );
};

export default Home;