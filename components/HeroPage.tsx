import { BackPack, Bg, Book, Layer, Line, StoreIcon } from "@/dist/imports";
import Image from "next/image";
import React from "react";

function HeroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <img
        src={Bg.src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover	z-[-1] opacity-[0.5]"
      />
      <img
        src={Layer.src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover	z-[-1] "
      />
      <h1 className="mt-[12%] max-sm:mt-[30%] hero-title text-center ">
        <img className="inline mx-2" src={Book.src} />
        استعد للعودة <img className="inline mx-2" src={BackPack.src} alt="" />
        إلى المدرسة
        <br />
        <span className="ml-6">معا</span>
        <span className="relative px-10 max-sm:px-0 text-primary">
          منصة قائمتي
          <img
            className="inline mx-2 absolute left-0 max-sm:top-0"
            src={Line.src}
            alt=""
          />
        </span>
      </h1>
      <p className="text-center my-12 text-gray-500">
        مرحبا بكم في منصة قائمتي هنا تجدون كل ما تحتاجونه لدخول مدرسي مريح{" "}
        <br />
        ادوات اولادكم تصلكم بكل اريحية
      </p>
      <button className="btn bg-primary text-white gap-3 w-fit">
        <Image
          src={StoreIcon}
          width={24}
          height={25}
          alt="Store-icon"
          className="icon"
        />
        اطلب أدواتك المدرسية الآن
      </button>
    </div>
  );
}

export default HeroPage;
