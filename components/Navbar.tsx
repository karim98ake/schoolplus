"use client";
import { Logo, Menu, StoreIcon } from "@/dist/imports";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex items-center justify-between p-1 px-6 rounded-full">
      <div
        className={
          showNav
            ? "flex items-center justify-between w-[80%] max-sm:shadow-xl max-sm:hidden show"
            : "flex items-center justify-between w-[80%] max-sm:shadow-xl max-sm:hidden "
        }
      >
        <button className="btn bg-primary text-white gap-3">
          <Image
            src={StoreIcon}
            width={24}
            height={25}
            alt="Store-icon"
            className="icon"
          />
          اطلب الان
        </button>
        <ul className="flex items-center w-2/4 gap-5">
          <li>
            <a href="">تواصل معنا</a>
          </li>
          <li>
            <a href="">اطلب الان</a>
          </li>
          <li>
            <a href="">الخدمات</a>
          </li>
          <li>
            <a href="">الرئيسية</a>
          </li>
        </ul>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        className="bg-trnaparent text-white w-fit hidden max-sm:flex max-sm:order-1"
      >
        <Image src={Menu} width={44} height={45} alt="" />
      </button>
      <Link href={"/"} className="max-sm:order-2">
        <Image src={Logo} width={180} height={60} alt="Logo" className="logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
