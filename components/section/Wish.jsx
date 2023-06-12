import { FaUserCircle } from "react-icons/fa";
import AOSWrapper from "../AOS/AOSWrapper";
import dynamic from "next/dynamic";

const CommentForm = dynamic(() => import("../commentForm"));

const Wish = ({ guest, posts }) => {
  return (
    <>
      <AOSWrapper>
        <div className="w-full min-h-screen" id="wish">
          <CommentForm guest={guest} />
          <div className="w-full pt-10 pb-24 relative overflow-y-scroll h-[95%] bg-gradient-to-t from-[#E3D3BF]/50 via-[#e3d3bf34]/10 to-[#E3D3BF]   pl-3 lg:px-10 ">
            <h2 className="text-[#161616] text-lg titles">
              {posts?.length + 1} <span className=" text-lg">Post Comment</span>
            </h2>
            <ol className=" p-8   ">
              <li className="w-full border-b pb-4 border-zinc-300">
                <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                  <FaUserCircle
                    className="text-[#3f3f3f] shadow-md shadow-zinc-400/80 rounded-full"
                    size={26}
                  />
                </div>
                <span className="mb-1 text-md titles font-semibold leading-none text-[#3f3f3f]">
                  WebQodes Digital Invitation
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="mb-2 p-2 text-sm leading-relaxed lg:text-md  text-[#4e4e4e] "
                >
                  Happy wedding Apple & Android, semoga menjadi keluarga yang
                  Sakinah, Mawadah & Warohmah.. Amiin ..
                </p>
                <small className="text-[#4e4e4e] p-2 ">
                  10 Juni 2023, 9:14 pm
                </small>
              </li>
            </ol>

            {posts?.map((post, i) => (
              <ol key={i} className="p-8  ">
                <li className="w-full border-b pb-4 border-zinc-300">
                  <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                    <FaUserCircle
                      className="text-[#4e4e4e] shadow-md shadow-zinc-400/80 rounded-full"
                      size={24}
                    />
                  </div>
                  <span className="mb-1 capitalize text-md titles font-semibold  text-[#4e4e4e]">
                    {post?.name}
                  </span>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="mb-4 p-2 text-sm leading-relaxed lg:text-md  text-[#4e4e4e] "
                  >
                    {post?.comments}
                  </p>

                  <small className="text-[#6b6a6a] p-2">{post?.date}</small>
                </li>

                {!post?.reply ? (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-sm italic text-[#4e4e4e]"
                  >
                    Belum ada balasan ...
                  </p>
                ) : (
                  <div className="bg-stone-100/20 w-full h-auto py-10 pt-4 px-4 relative">
                    <h1 className="mb-2  text-sm text-[#4e4e4e]">
                      Balasan dari Rahmadi & Dinda
                    </h1>
                    <div className="relative ">
                      <p className="text-[#4e4e4e] text-sm">{post?.reply}</p>
                    </div>
                  </div>
                )}
              </ol>
            ))}
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Wish;
