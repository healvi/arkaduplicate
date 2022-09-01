import React from "react";

const TestimoniBox = () => {
  return (
    <div className="testimoni-box flex flex-col drop-shadow-md">
      <img
        src={require("../../assets/icons/petik.svg").default}
        class="rounded-t-lg"
        alt="backone"
      />
      <p>
        Kursus online di Arkademi sangat berkesan, materinya simple tidak
        berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi
        dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus
        buat Arkademi!
      </p>
      <div className="flex flex-row items-center">
        <img
          class="rounded-full avatar mt-[12px]"
          src={require("../../assets/image/person.png")}
          alt="Rounded avatar"
        />
        <div className="flex flex-col ml-[14px]">
          <p className="font-bold">Nizar Putra (Bandung)</p>
          <p>Siswa kelas Bootstrap</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TestimoniBox;
