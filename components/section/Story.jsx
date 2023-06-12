/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const data = [
  {
    id: 1,
    title: "Awal Bertemu - 2010",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .",
    image: "/image/gallery-4.png",
  },
  {
    id: 2,
    title: "Menjalin Kasih - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. rinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    image: "/image/gallery-2.png",
  },
  {
    id: 3,
    title: "Jenjang Pernikahan - 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/image/gallery-3.png",
  },
];

const Story = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="gallery"
          className="w-full bg-transparent  mx-auto md:px-3 px-2 py-8 "
        >
          <div className="flex relative items-center justify-center bg-gradient-to-tr from-[#E6E6FA] py-2 via-zinc-700 to-[#E6E6FA]  bg-clip-text text-transparent ">
            <div className="absolute opacity-75 -left-4 bg-goyang -bottom-10 ">
              <Image
                src="/image/daun.png"
                alt=""
                width={115}
                height={115}
                objectFit="cover"
                priority
              />
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="p-1 text-3xl alex border-b border-stone-500/50 "
            >
              Short
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              className="alex text-5xl"
            >
              {" "}
              Story
            </p>
          </div>
          <div className="posts relative z-30 overflow-hidden  pt-14 flex flex-wrap-reverse flex-col gap-10 md:gap-12">
            {data?.map((post, i) => (
              <div
                className="post flex flex-wrap-reverse flex-col-reverse sm:flex-row gap-3 "
                key={i}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  className="img relative"
                >
                  <img
                    src={post?.image}
                    alt={post?.title}
                    objectFit="cover"
                    className="rounded-[30px] w-44 shadow-md shadow-zinc-500"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  className="content flex flex-col justify-around items-start gap-4"
                >
                  <div className="title space-y-2 leading-relaxed">
                    <h1 className="text-xl titles font-semibold text-zinc-500/80">
                      {post?.title}
                    </h1>
                    <p className="text-zinc-500/70  leading-relaxed text-sm">
                      {post?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Story;
