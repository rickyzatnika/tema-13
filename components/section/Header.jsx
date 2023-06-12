/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const Header = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full bg-[url('/image/bg-cover.png')] bg-cover bg-right-top bg-no-repeat overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="absolute -top-2 z-20 -left-8">
            <Image
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-ease="linear"
              src="/image/orn-top.png"
              alt="flower"
              width={190}
              height={190}
              priority
              objectFit="contain"
            />
          </div>
          <div className="absolute top-0 z-20 opacity-75 origin-center rotate-45 -right-5">
            <Image
              data-aos="fade-left"
              data-aos-duration="1500"
              src="/image/orn-top.png"
              alt="flower"
              width={120}
              height={120}
              priority
              objectFit="contain"
            />
          </div>
          <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-[#E3D3BF]/50 via-[#e3d3bf34]/10 to-[#E3D3BF] z-10"></div>
          <div className="w-full h-full relative z-20 flex flex-col items-center gap-5 justify-between">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-[#5F3F30] titles tracking-wide text-2xl "
            >
              The Wedding Of
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-ease="linear"
              className="w-[46%]  p-2 flex items-center justify-center z-30"
            >
              <Image
                src="/image/fixed.png"
                alt=""
                width={250}
                height={250}
                objectFit="contain"
                priority
                className="w-80 h-auto relative  "
              />
            </div>
            <div className="text-center flex items-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl md:text-4xl font-[parisienne]  px-2 font-semibold text-[#5F3F30] py-2 "
              >
                Android
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="alex text-[#5F3F30]  text-3xl "
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-3xl md:text-4xl font-[parisienne]  px-2 font-semibold  text-[#5F3F30]  py-2"
              >
                Apple
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Header;
