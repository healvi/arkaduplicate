import React from "react";

const Footer = () => {
  return (
    <footer class=" p-4 flex bg-white flex-row shadow md:flex md:items-center justify-between order-last md:p-6">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="#" class="hover:underline">
          PT Arkademi Daya Indonesia
        </a>
        . All Rights Reserved.
      </span>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 w-1/4 flex flex-row justify-evenly">
        <span>Ketentuan Layanan</span>
        <span>Kontak</span>
      </span>
    </footer>
  );
};

export default Footer;
