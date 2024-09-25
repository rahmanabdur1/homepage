import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';
import './Cursor.css'; // Import CSS file for cursor styles

const Cursor = () => {
  useEffect(() => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");
    const $hoverables = document.querySelectorAll(".hoverable");

    const onMouseMove = (e) => {
      TweenMax.to($bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15
      });
      TweenMax.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      });
    };

    const onMouseHover = () => {
      TweenMax.to($bigBall, 0.3, {
        scale: 3,
        top: 20,
        left: 20
      });
    };

    const onMouseHoverOut = () => {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
        top: 0,
        left: 0
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);
    $hoverables.forEach(el => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      $hoverables.forEach(el => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
