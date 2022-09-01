import React from "react";

const Cardmini = () => {
  return (
    <div class="card-mini flex justify-center items-center px-4 pt-4 bg-white rounded-lg border border-gray-200 shadow-md sm:justify-start">
      <div class="card-body flex flex-col items-center sm:flex-row">
        <img
          src={require("../../assets/icons/001-briefcase.svg").default}
          class="mb-3  rounded-full shadow-lg mr-[14px]"
          alt="backone"
        />
        <h6 class="mb-1 text-xl font-medium">Bonnie Green</h6>
      </div>
    </div>
  );
};

export default Cardmini;
