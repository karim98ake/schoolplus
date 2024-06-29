import { Logo, StoreIcon } from "@/public/imports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-1 px-6 rounded-full">
      <button className="btn bg-primary text-white gap-3">
        <Image src={StoreIcon} width={24} height={25} alt="Store-icon" />
        اطلب الان
      </button>
      <ul className="flex items-center">
        <li>
          <a href="">الرئيسية</a>
        </li>
        <li>
          <a href="">الخدمات</a>
        </li>
        <li>
          <a href="">اطلب الان</a>
        </li>
        <li>
          <a href="">تواصل معنا</a>
        </li>
      </ul>
      <Link href={"/"} className="">
        <Image src={Logo} width={180} height={60} alt="Logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
