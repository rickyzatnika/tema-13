/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const Prokes = () => {
  const images = [
    {
      id: 1,
      src: "/img/prokes-1.png",
    },
    {
      id: 2,
      src: "/img/prokes-2.png",
    },
    {
      id: 3,
      src: "/img/prokes-3.png",
    },
    {
      id: 4,
      src: "/img/prokes-4.png",
    },
  ];

  return (
    <>
      <AOSWrapper>
        <div className="w-full min-h-3xl bg-[#F5F5F5]  py-8 px-5 sm:px-3  ">
          <div className=" w-full flex flex-col py-8 items-center shadow-lg rounded-xl shadow-black/10  justify-between">
            <div className="text-md w-full   text-center ">
              <h1
                data-aos="fade-down"
                data-aos-duration="1200"
                className=" text-zinc-200 tracking-widest px-4 py-1 bg- w-fit mx-auto bg-zinc-600 rounded-full"
              >
                CORONAVIRUS
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-zinc-500"
              >
                PREVENTION
              </p>
            </div>
            <div className=" py-12 grid grid-cols-2 px-3 gap-4 items-center justify-center">
              {images.map((image) => (
                <div key={image.id} className=" px-1 ">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    src={image.src}
                    alt="protokol kesehatan"
                    className="w-28 h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Prokes;
