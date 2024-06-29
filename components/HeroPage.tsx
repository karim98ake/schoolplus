import { Bg } from "@/dist/imports";
import React from "react";

function HeroPage() {
  return (
    <div className="min-h-screen">
      <img
        src={Bg.src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover	z-[-1] opacity-[0.5]"
      />
    </div>
  );
}

export default HeroPage;
