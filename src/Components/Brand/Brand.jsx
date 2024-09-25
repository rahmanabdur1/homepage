import React, { useEffect, useRef, useState } from 'react';
import './Brand.css';
import brand1 from '../../assets/1.webp';
import brand2 from '../../assets/2.webp';
import brand3 from '../../assets/3.webp';
import brand4 from '../../assets/4.webp';
import brand5 from '../../assets/5.webp';
import brand6 from '../../assets/6.webp';

const Brand = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = titleRef.current;
            if (titleElement) {
                const rect = titleElement.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

    return (
        <div className='brand_container'>
            <div
                ref={titleRef}
                className={`brand_title ${isVisible ? 'flip-up' : 'hide-title'}`}
            >
                <h2>We worked with global largest brands</h2>
            </div>
            <div className='brand_images'>
                {brands.map((brand, index) => (
                    <img
                        key={index}
                        src={brand}
                        alt={`Brand ${index + 1}`}
                        className={isVisible && index >= 3 ? 'fade-up' : 'hide-images'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Brand;
