import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E3D3BF] text-zinc-700 flex relative w-full h-28 lg:h-auto py-2 flex-nowrap items-start lg:items-center justify-center gap-1">
      <p className="text-sm">Powered By : </p>
      <Link href="https://webqodes.com" className="text-sm">
        WebQodes
      </Link>
    </footer>
  );
};

export default Footer;
