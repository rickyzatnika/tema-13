/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/legacy/image";
import { useForm } from "react-hook-form"
import { GiLoveLetter } from 'react-icons/gi'
import BackSound from '../components/Backsound';
import AOSWrapper from '../components/AOS/AOSWrapper';

const GetUniqueCode = ({ guest }) => {
  const [isPlay, setIsPlay] = useState(false);

  const router = useRouter();
  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();

  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async ({ status }) => {

    try {
      const userId = guest?.userId;
      await axios.patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`, {
        status: selectedValue,
      })
      setLoading(true);
      const timeoutId = setTimeout(() => {
        router.push(`/invitation/${uuid}?userId=${userId}`);

        setIsPlay(true);
      }, 1000)

      return () => clearTimeout(timeoutId);

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };


  return (
    <>
      <div className='hidden'>
        <BackSound setIsPlay={setIsPlay} isPlay={isPlay} />
      </div>

      <AOSWrapper>
        <div className="overflow-hidden w-full bg-[url('/image/BGS.png')] bg-cover h-full z-50 fixed top-0 lg:relative flex flex-col gap-2 px-2 items-center justify-center pt-0 ">

          <div className='absolute -z-40 -left-28 bg-goyang lg:left-0 -top-12 '>
            <Image src="/image/orn-top-left.png" alt='' width={320} height={320} objectFit='contain' priority ></Image>
          </div>

          <div className='absolute -right-20 bg-goyang-2 lg:right-0 -bottom-8 '>
            <Image src="/image/orn-bottom-right.png" alt='' width={230} height={230} objectFit='contain' priority ></Image>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className='mb-3 text-[#252525] titles'>UNDANGAN PERNIKAHAN</h1>
          <div data-aos="zoom-in"
            data-aos-duration="2000" data-aos-ease="linear" className='mempelai block lg:hidden'>
            <Image src="/image/fixed.png" alt='mempelai' width={210} height={210} priority objectFit='contain' />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="z-50 w-fit mx-auto flex text-zinc-900 pt-1 gap-2 items-center">
            <h1 className='text-3xl alex'>Android</h1>
            <p className='font-[parisienne] text-4xl'>&</p>
            <h2 className='text-3xl alex'>Apple</h2>
          </div>
          <div className='flex items-center flex-col justify-center relative'>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className='w-fit rounded-lg mt-3  bg-white/60 border border-stone-300 px-8 py-3 sm:py-4 text-center leading-relaxed'>
              <h4 className='mb-2 brush text-lg text-zinc-700'>Kepada Yth, Bpk/Ibu/Saudara/i :</h4>
              <p className='py-2 text-2xl capitalize titles text-zinc-700'>{guest?.name}</p>
              <p className='text-zinc-700 text-lg brush'>Di Tempat.</p>
            </div>
            <form className='w-fit items-center justify-center flex flex-col' onSubmit={handleSubmit(formSubmit)}>
              <input
                type="text"
                onChange={() => handleClick("Opened")}
                {...register("status", { required: true })}
                checked={selectedValue === "Opened"}
                value="Opened"
                className="opacity-0 flex flex-col items-center justify-center"

              />
              {/* fixed status opened*/}
              {!guest?.status ? (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-500 hover:text-zinc-700 bg-[#F5F5F5] hover:bg-[#F5F5F5] "
                  >

                    sedang memuat...
                  </button> : <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-500 hover:text-zinc-700 bg-[#F5F5F5]  hover:bg-[#F5F5F5] "
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              ) : (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-500 hover:text-zinc-600 bg-[#F5F5F5]  hover:bg-[#F5F5F5] "
                  >

                    sedang memuat...
                  </button> : <button
                    className="py-2 flex text-sm items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-500 hover:text-zinc-600 bg-[#F5F5F5]  hover:bg-[#F5F5F5] "
                    onClick={() => handleClick(guest?.status)}
                    type="submit"
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              )}
            </form>
          </div>
        </div>
      </AOSWrapper>
    </>
  )
}

export default GetUniqueCode





// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };


export const getServerSideProps = async ({ params }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  return {
    props: {
      guest,
      revalidate: 1
    },
  };
};