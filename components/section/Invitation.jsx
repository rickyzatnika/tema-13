import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import Link from "next/link";

const Invitation = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="event"
          className="w-full bg-gradient-to-t from-[#e3d3bf34]/10 via-[#E3D3BF]/50 to-[#e3d3bf34]/10 px-4 overflow-hidden flex items-center pt-28 flex-col py-5 justify-evenly relative"
        >
          <div className="absolute -top-3 left-0 right-0 w-full z-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#EDE5DC"
                fillOpacity="1"
                d="M0,64L720,320L1440,64L1440,0L720,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="absolute -top-2 left-0 right-0 w-full z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#E3D3BF"
                fillOpacity="1"
                d="M0,64L720,320L1440,64L1440,0L720,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="absolute -top-12 z-0 -right-14 ">
            <Image
              data-aos="fade-down"
              data-aos-duration="1200"
              src="/image/orn-top.png"
              width={260}
              height={260}
              objectFit="contain"
              priority
              alt=""
            />
          </div>

          <div className="z-40 relative flex flex-col items-center py-6 mt-6 justify-center  shadow-lg shadow-zinc-300/50">
            <div className="absolute w-full h-full bg-gradient-to-t from-white/70 via-transparent to-white/40 " />
            <div className="flex flex-col items-center justify-center  gap-4 w-full">
              <div className="w-[60%] relative rounded-t-full border-8  border-[#E3D3BF]  shadow-zinc-500 shadow-inner  text-center flex flex-col items-center gap-2  p-8 leading-relaxed">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-[#5F3F30] titles text-2xl "
                >
                  Akad Nikah
                </h3>
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  src="/image/rings.png"
                  alt=""
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  className="mix-blend-color-dodge -rotate-12 p-4"
                />
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="font-semibold titles text-zinc-500  "
                >
                  {" "}
                  08.30 WIB s/d Selesai
                </p>
              </div>
              <h2
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-easing="linear"
                className="w-full text-4xl  text-zinc-500 my-4 brush relative  z-50 text-center"
              >
                5 Juli 2023
              </h2>
              <div className="w-[60%] relative rounded-b-full border-8  border-[#E3D3BF] shadow-inner shadow-zinc-400 text-center flex flex-col-reverse items-center gap-2  p-8 leading-relaxed">
                <h3
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="text-[#5F3F30] titles text-2xl "
                >
                  Resepsi
                </h3>
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1100"
                  src="/image/glas.png"
                  alt=""
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  className="mix-blend-color-dodge -rotate-12 p-4"
                />
                <p
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="font-semibold titles text-zinc-500  "
                >
                  11.00 WIB s/d 16.00 WIB
                </p>
              </div>
            </div>
            <div className="py-4 leading-relaxed text-center relative z-40">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-zinc-500 mb-2 titles text-xl"
              >
                Lokasi :
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-zinc-500 capitalize mb-1 titles font-semibold flex text-md flex-col tracking-wide items-center gap-3 "
              >
                jl.karang tineung dalam rt05/04 kel.cipedes kec.sukajadi (gg.hj
                durahman) RT.05 / RW.04 <br />
              </p>
            </div>
            <div
              // data-aos="fade-up"
              // data-aos-duration="1300"
              className="w-full px-2 lg:px-8 flex flex-col items-center gap-5 py-3 relative z-40"
            >
              <Link
                href="https://goo.gl/maps/KkiXSjBf5ySepU7L6"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-2 text-sm px-5  bg-gradient-to-tr from-[#F5F5F5] via-[#f5f1ec] to-[#F5F5F5] shadow-lg shadow-zinc-400/50 text-zinc-500 rounded">
                  {" "}
                  Open Maps
                </button>
              </Link>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Invitation;
