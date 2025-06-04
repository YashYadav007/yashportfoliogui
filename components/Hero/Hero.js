import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";
import VanillaTilt from "vanilla-tilt";


const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const imgWrap = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    VanillaTilt.init(imgWrap.current, {
      max: 10,
      speed: 400,
      scale: 1.05,
      glare: true,
      "max-glare": 0.25,
    });
  }, []);


  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);


  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}
        >
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Yash
          </span>
          <span className="staggered-reveal"> Yadav</span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div className="staggered-reveal">
          <Profiles />
        </div>
        <div className="staggered-reveal pt-4">
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>
          
          {/* <Button href="https://yashportfolioterminal.vercel.app/" className="link" type="primary">
            You&apos;re a Developer Too?
          </Button> */}
        </div>
        <div className="staggered-reveal pt-4">
          <Button href="https://yashportfolioterminal.vercel.app/" classes="link" type="primary">
             You&apos;re a Developer Too?
          </Button>  
        </div>
      </div>
      <div
        ref={imgWrap}
        className="absolute w-4/12 bottom-1.5 lg:right-12 2xl:right-16 hidden lg:block 
                  rounded-[2rem] overflow-visible transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 🔹 Spinning Blob Background */}
         <img
          src="/svg/blob.svg"
          alt=""
          className="absolute -top-10 -left-8 w-[130%] animate-spin-slow
                    pointer-events-none -z-20"
        />

        {/* 🟢 Blob #2 – smaller, opposite spin */}
        <img
          src="/svg/blob2_2.png"
          alt=""
          className="absolute -bottom-12 -right-20 w-96 animate-spin-slow
                    opacity-70 pointer-events-none -z-30"
        />

        {/* 🟣 Blob #3 – static, just a tint */}
        <img
          src="/svg/blob.svg"
          alt=""
          className="absolute top-24 -left-24 w-80 opacity-60
                    blur-2xl pointer-events-none -z-40"
        />

        {/* 🔸 Glowing Ring */}
        

        {/* 👤 Your main photo */}
        <img
          src="/images/yellowKurta.png"
          alt="Yash Developer"
          className="relative rounded-[2rem] shadow-2xl w-full h-auto"
          style={{ transform: "translateZ(1rem)" }}
        />
      </div>

    </section>
  );
};

export default Hero;
