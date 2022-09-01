import React from "react";

const Menu = () => {
  return (
    <div className="menu flex-1 flex flex-row md:items-center container-xl justify-center">
      <div className="basis-180 w-full font-bold flex flex-row items-center sm:basis-130">
        Kategori
        <img
          src={require("../../assets/icons/Paths.svg").default}
          className="path-logo ml-[10px]"
          alt="mainlogo"
        />
      </div>
      <div className="list-menu basis-menu w-full  flex flex-row items-center mb-0 sm:justify-start">
        <div className="basis-1/9 sm:basis-1/2">Bisnis</div>
        <div className="basis-1/9 sm:basis-1/2">Keuangan</div>
        <div className="basis-1/9 sm:hidden">Pengembangan Karier</div>
        <div className="basis-1/9 sm:hidden">Sertifikasi</div>
        <div className="basis-1/9 sm:hidden">Teknologi</div>
        <div className="basis-1/9 sm:hidden">Bahasa</div>
        <div className="basis-1/9 sm:hidden">Koorporat</div>
        <div className="basis-1/9 sm:hidden">Hobi</div>
      </div>
      {/* <ul class="list-menu basis-menu w-full flex flex-row flex flex-row items-center mb-0">
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6 ">
            Bisnis
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Keuangan
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6 ">
            Pengembangan Karier
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Sertifikasi
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Teknologi
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Bahasa
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Koorporat
          </a>
        </li>
        <li className="basis-auto mr-[54px]">
          <a href="#" class="mr-4  hover:underline md:mr-6">
            Hobi
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Menu;
