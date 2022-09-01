import React from "react";
import Inputs from "../atoms/Inputs";

const Navbar = () => {
  return (
    <div className="navbar p-0 flex flex-row bg-brandColor justify-center">
      <div className="space flex flex-wrap items-center flex-row  py-[5px] sm:justify-center space">
        <img
          src={require("../../assets/MainLogo.png")}
          className="main-logo mr-[40px] sm:order-1"
          alt="mainlogo"
        />
        <Inputs />

        <img
          src={require("../../assets/icons/love.svg").default}
          className="fav-logo mx-[35px] fav-logo sm:order-1"
          alt="mainlogo"
        />
        <button className="btn-auth text-xs py-[5px] bg-white rounded text-brandColor font-bold mr-[8px] sm:order-2">
          Masuk
        </button>
        <button className="btn-auth text-xs py-[5px]  bg-SeblueColor rounded text-white font-bold sm:order-3">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
