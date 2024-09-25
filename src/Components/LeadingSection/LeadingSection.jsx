import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../assets/1 (1).webp';

gsap.registerPlugin(ScrollTrigger);

const LeadingSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const element = imageRef.current;

    gsap.fromTo(element,
      { y: 600 },
      {
        y: -200, // Distance to scroll
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', // Animation starts when top of the element hits the bottom of the viewport
          end: 'bottom top', // Animation ends when bottom of the element hits the top of the viewport
          scrub: 1, // Smoothly sync animation with scroll
          markers: false, // Set to true if you want to see the start and end markers for debugging
        },
      }
    );

    // Clean up ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  
    return (
      <div className='section'>
        <img 
          src={img}
          alt="Thumbnail"
          className='scroll-image'
          ref={imageRef}
        />
                
                <div>
                    <h2>
                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us

                    v
                    v
                    v

                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us
                    About Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us
                    vAbout Thumbnail
                    Who We Are
                    We are leading
                    digital marketing
                    agency.
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.

                    Explore Us
                    </h2>

                </div>
            </div>
    );
};

export default LeadingSection;