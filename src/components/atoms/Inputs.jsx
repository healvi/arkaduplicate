import React from "react";

const Inputs = () => {
  return (
    <div class="flex search-input  justify-start sm:order-last">
      <input
        type="text"
        id="website-admin"
        class="rounded-none p-[12px] rounded-l-lg bg-white-50  text-white-900 sm:order-1"
        placeholder="Cari Kelas"
      />
      <span class="inline-flex items-center px-3 text-sm text-white-900 bg-white-200 md:rounded-r-md bg-white sm:rounded-l-md">
        <img
          src={require("../../assets/icons/search.svg").default}
          className="search-logo sm:order-1"
          alt="mainlogo"
        />
      </span>
    </div>
  );
};

export default Inputs;
