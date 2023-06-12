import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/router";
import AOSWrapper from "../AOS/AOSWrapper";

const CommentForm = () => {

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;

  const formSubmit = async ({ comments }) => {

    await axios
      .patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/comment/${uuid}`, {
        comments: comments,
        date: moment().format("DD MMMM YYYY, h:mm a"),
      },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          Swal.fire({
            title: "Terkirim",
            icon: "success",
            text: "Terima Kasih atas Partisipasinya",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          }),
            reset();
          setLoading(false);
          location.reload()
        }, 400);
        return () => clearTimeout();
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: "Error",
        });
        reset();
        console.log(error)
      });
  };


  return (
    <>
      <AOSWrapper>
        <div
          id="wish"
          className="overflow-hidden shadow-xl  pb-10  shadow-black/10 px-1 lg:px-3 relative bg-[#E3D3BF]"
        >
          <div className="pt-9 text-left">
            <div data-aos="fade-up"
              data-aos-duration="1200" className="flex gap-2 items-center bg-gradient-to-tr from-[#232324] py-2 via-zinc-600 to-[#181818]  bg-clip-text text-transparent ">
              <h3

                className="text-2xl alex ">Pesan</h3>
              <p

                className="titles text-4xl ">
                &
              </p>
              <h3 className="text-2xl alex">Harapan</h3>
            </div>
            <p data-aos="fade-up"
              data-aos-duration="1500" className="text-[#4e4e4e] px-2 text-sm">
              Do`a dan ucapan terbaik untuk kami
            </p>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="max-w-3xl mx-auto relative px-2 py-9 flex flex-col "
          >
            <div className="pt-3 antialiased">
              <textarea
                name=""
                cols="30"
                rows="10"
                className="w-full bg-[#f1eae1] p-4 text-sm focus:outline-[#E3D3BF] focus:border-none placeholder:italic rounded text-zinc-500 border-none  "
                placeholder="Tulis Pesan ..."
                {...register("comments", {
                  required: true,
                })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded text-sm sm:text-md w-full lg:w-fit mx-auto py-2 px-8 mt-3 bg-gradient-to-tr from-[#F5F5F5] via-[#eee6dc] to-[#F5F5F5] shadow text-zinc-500 transition-all duration-300 ease-linear hover:scale-95 "
            >
              {loading ? (
                "loading..."
              ) : (
                "Kirim"
              )}
            </button>
          </form>
        </div>
      </AOSWrapper>
    </>
  );
};

export default CommentForm;
