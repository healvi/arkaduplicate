import React from "react";

const Card = () => {
  return (
    <>
      <div class="card mt-[23px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:scroll-ml-6 sm:snap-start">
        <img
          src={require("../../assets/image/secone/backone.png")}
          class="rounded-t-lg"
          alt="backone"
        />
        <div class="px-[16px] my-[14px] card-body">
          <p class="mb-3 font-xs text-gray-700 text-gray-400 academi-text">
            Arkademi
          </p>
          <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 text-white title-card capitalize">
            membuat desain landing page bagi desainer website
          </h5>
          <p className="rating flex flex-row items-center">
            <img
              src={require("../../assets/icons/rating.svg").default}
              className="mr-[4px]"
              alt="rating"
            />
            <span className="text-secondary">
              <span className="font-bold mr-[2px]">4.5</span> {"(>1000)"}
            </span>
          </p>
          <p className="diskon flex flex-row items-center">
            <span class="bg-red-100 text-red-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
              30%
            </span>
            <span className="nominal text-secondary">Rp 230.000</span>
          </p>
          <p className="price font-bold">Rp 280.000</p>
        </div>
      </div>
    </>
  );
};

export default Card;
