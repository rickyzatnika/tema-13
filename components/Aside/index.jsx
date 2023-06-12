/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
// import { images } from "../MyImage";
import Navbar from "../Navbar";
// import Slick from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Aside = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 2500,
  //   fade: true,
  //   className: "w-full h-full ",

  //   afterChange: (current) => setActiveIndex(current),
  // };

  return (
    <>
      <AOSWrapper>
        <div className="w-full overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
          {/* <Canvas /> */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="fixed z-40 top-6 titles text-zinc-700 text-2xl "
          >
            Wedding Invitation
          </div>

          <Navbar />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-[36%]  p-1 flex items-center justify-center fixed  z-30"
          >
            <Image
              src="/image/fixed.png"
              alt=""
              width={450}
              height={450}
              objectFit="contain"
              priority
              className="w-full h-auto relative shadow-md shadow-black "
            />

            <div className="absolute hidden rounded-full bg-gradient-to-t from-[#ffffff] via-transparent to-[#FBFBFB] top-0 z-30 w-full h-full" />
          </div>

          <div className="flex flex-col gap-9 items-center justify-center fixed bottom-4 z-30">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-center flex gap-1 capitalize"
            >
              <h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl text-zinc-600 font-[parisienne] tracking-widest"
              >
                Android
              </h1>
              <span className="text-5xl font-[parisienne] text-zinc-600">
                &
              </span>
              <h1 className="text-3xl text-zinc-600 font-[parisienne] tracking-widest">
                Apple
              </h1>
            </div>
            <p className="titles text-zinc-700 py-0 text-2xl">9 Mei 2024</p>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Aside;
