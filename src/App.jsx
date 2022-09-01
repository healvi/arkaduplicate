import "./App.scss";
import { Card, Cardmini, Menu, Navbar, TestimoniBox } from "./components";
import Footer from "./components/molekul/Footer";

function App() {
  return (
    <div className="App flex flex-col relative">
      <Navbar />
      <div className="main-menu m-1 flex flex-col  my-[14px] items-center sm:justify-start sm:py-[5px]">
        {/* Main -Menu */}
        <div className="container-xl">
          <Menu />
          {/* main banner */}
          <div className="flex-1 flex row justify-center relative">
            <img
              src={require("./assets/image/secone/backone.png")}
              className="sm:order-1 main-banner"
              alt="backone"
            />
            <img
              src={require("./assets/icons/kanan.svg").default}
              className="sm:order-1 absolute slider-kanan"
              alt="backone"
            />
            <img
              src={require("./assets/icons/kiri.svg").default}
              className="sm:order-1 absolute slider-kiri"
              alt="backone"
            />
          </div>
          {/* sub banner */}
          <div className="flex-1 grid grid-cols-3 grid-flow-col gap-x-6 mt-[20px] justify-center relative sm:grid-cols-1 sm:gap-0">
            <div className="sub-banner relative">
              <img
                src={require("./assets/image/secone/backone.png")}
                className="sm:order-1 "
                alt="subbanner"
              />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className=" absolute slider-kanan hidden sm:order-2 sm:block"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className=" absolute slider-kiri hidden sm:order-2 sm:block"
                alt="backone"
              />
            </div>
            <div className="sub-banner">
              <img
                src={require("./assets/image/secone/backone.png")}
                className="sm:hidden"
                alt="subbanner"
              />
            </div>
            <div className="sub-banner">
              <img
                src={require("./assets/image/secone/backone.png")}
                className="sm:hidden"
                alt="subbanner"
              />
            </div>
          </div>
          {/* Trending */}
          <div className="flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center">
              <img
                src={require("./assets/icons/trending.svg").default}
                className="sm:order-1 mr-[12px]"
                alt="backone"
              />
              <span>Trending</span>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll  hide-scroll-bar">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className="sm:order-1 absolute slider-kanan"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className="sm:order-1 absolute slider-kiri"
                alt="backone"
              />
            </div>
          </div>
          {/* Flash sale */}
          <div className="flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center sm:flex-col sm:items-start">
              <div className="flex flex-row items-center">
                <img
                  src={require("./assets/icons/discount.svg").default}
                  className=" mr-[12px]"
                  alt="backone"
                />
                <span>Flash Sale</span>
              </div>
              <div className="countdown ml-[19px] flex flex-row items-center ">
                <span className=" text-secondary mr-[10px]">
                  Berakhir Dalam
                </span>
                <div className="bg-orangeColor time flex flex-row items-center text-white">
                  <img
                    src={require("./assets/icons/time.svg").default}
                    className="sm:order-1 mr-[5px]"
                    alt="backone "
                  />
                  <span>08:35:00</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className="sm:order-1 absolute slider-kanan"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className="sm:order-1 absolute slider-kiri"
                alt="backone"
              />
            </div>
          </div>
          {/* KAtegory-terpopular */}
          <div className="kategory-popular flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center sm:flex-col sm:items-start">
              <div className="flex flex-row items-center">
                <span>Kategory Terpopuler</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 sm:grid-cols-1 sm:gap-0">
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
            </div>
            <div className="flex flex-row items-center justify-center mt-[34px]">
              <button>Lihat Semua Kategory</button>
            </div>
          </div>
          {/* Promo spesial */}
          <div className="kategory-popular flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center sm:flex-col sm:items-start">
              <div className="flex flex-row items-center">
                <span>Promo Spesial Untukmu</span>
              </div>
            </div>
            <div className="grid mt-[27px] grid-cols-3 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll hide-scroll-bar ">
              <div className="content-populer bg-blueColor">
                <div></div>
              </div>
              <div className="content-populer bg-SeblueColor">
                <div></div>
              </div>
              <div className="content-populer bg-greenColor">
                <div></div>
              </div>
            </div>
          </div>
          {/* Lembaga */}
          <div className="lembaga flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center justify-between sm:flex-row ">
              <div className="flex flex-row items-center">
                <span>Lembaga</span>
              </div>
              <div className="flex flex-row items-center text-SeblueColor ">
                <span className="lookup">Lihat Semua</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 sm:grid-cols-3 sm:gap-0">
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              {/*  */}
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
              <Cardmini />
            </div>
          </div>
          {/* Terbaru */}
          <div className="flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center justify-between sm:flex-row ">
              <div className="flex flex-row items-center">
                <span>Terbaru</span>
              </div>
              <div className="flex flex-row items-center text-SeblueColor ">
                <span className="lookup">Lihat Semua</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className="sm:order-1 absolute slider-kanan"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className="sm:order-1 absolute slider-kiri"
                alt="backone"
              />
            </div>
          </div>
          {/* Bisnis */}
          <div className="flex-1 flex relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center justify-between sm:flex-row ">
              <div className="flex flex-row items-center">
                <span>Bisnis</span>
              </div>
              <div className="flex flex-row items-center text-SeblueColor ">
                <span className="lookup">Lihat Semua</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className="sm:order-1 absolute slider-kanan"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className="sm:order-1 absolute slider-kiri"
                alt="backone"
              />
            </div>
          </div>
          {/* Pengembangan Carier */}
          <div className="flex-1 relative flex flex-col mt-[65px]">
            <div className="title-section flex-1 flex flex-row items-center justify-between sm:flex-row ">
              <div className="flex flex-row items-center">
                <span>Pengembangan Carier</span>
              </div>
              <div className="flex flex-row items-center text-SeblueColor ">
                <span className="lookup">Lihat Semua</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 sm:flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <img
                src={require("./assets/icons/kanan.svg").default}
                className="sm:order-1 absolute slider-kanan"
                alt="backone"
              />
              <img
                src={require("./assets/icons/kiri.svg").default}
                className="sm:order-1 absolute slider-kiri"
                alt="backone"
              />
            </div>
          </div>
        </div>
        {/* Testimoni */}
        <div className=" testimoni flex-1 flex relative flex-col items-center justify-center">
          <h1 className="uppercase text-[41px] mt-[65px] text-transparent font-bold">
            testimoni
          </h1>
          <div className=" grid grid-cols-3 gap-2 sm:grid-cols-1 sm:flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
            <TestimoniBox />
            <TestimoniBox hidden={true} />
            <TestimoniBox hidden={true} />
          </div>
        </div>
        {/* Telco */}
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-4 justify-start sm:grid-cols-1">
            <div className="mr-[40px] sm:mr-[20px]">
              <img
                src={require("./assets/image/telco.png")}
                className="sm:order-1"
                alt="mainlogo"
              />
            </div>
            <div className="mt-[90px]">
              <img
                src={require("./assets/mainLogoBlue.png")}
                className="main-logo sm:order-1 mb-[14px]"
                alt="mainlogo"
              />
              <p className="text-xs leading-5 mb-[25px] font-semibold">
                Arkademi adalah massive open online course (MOOC) platform karya
                anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan
                untuk skill based learning atau pembelajaran berbasis keahlian
                yang diantarkan melalui kelas belajar dan kursus online melalui
                aplikasi Arkademi berbasis mobile app dan web. Di Arkademi
                setiap individu dan lembaga kursus dapat membuka dan
                mengkomersialkan kelas onlinenya dan menjangkau siswa dari
                seluruh Indonesia.
              </p>

              <p className="font-bold">Akselerator</p>
              <p className="font-transparent text-xs leading-5">
                Arkademi adalah bagian program inkubasi dan akselerator dari
                perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator),
                Amazon Web Service (Edstart Program) dan Y Combinator (Startup
                School) yang dipilih dari tech startup edukasi terbaik dunia.
              </p>
              <div className="mt-[20px] flex flex-row w-3/4 justify-center sm:w-full">
                <div className="basis-2/6 flex justify-center mr-[25px] flex-row m-0 items-center">
                  <img
                    src={require("./assets/image/secthree/mox.png")}
                    className="sm:order-1 h-7 m-0"
                    alt="mainlogo"
                  />
                </div>
                <div className="basis-2/6 flex justify-center mr-[25px] flex-row m-0 items-center">
                  <img
                    src={require("./assets/image/secthree/combinator.png")}
                    className="sm:order-1 h-7 m-0"
                    alt="mainlogo"
                  />
                </div>
                <div className="basis-2/6 flex justify-center mr-[25px] flex-row m-0 items-center">
                  <img
                    src={require("./assets/image/secthree/three.png")}
                    className="sm:order-1 h-7 m-0"
                    alt="mainlogo"
                  />
                </div>
                <div className="basis-3/6 flex justify-center flex-row m-0 items-center">
                  <img
                    src={require("./assets/image/secthree/google.png")}
                    className="sm:order-1 h-7 m-0"
                    alt="mainlogo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* semi footer */}
          <div className="semi-footer grid grid-cols-4 gap-4 justify-start sm:grid-cols-1 md:justify-center sm:justify-start">
            <div>
              <ul className="list-none">
                <li className="mb-[15px] font-bold">Kategory Populer</li>
                <li className="mb-2">Keuangan</li>
                <li className="mb-2">Perpajakan</li>
                <li className="mb-2">Bisnis</li>
                <li className="mb-2">Marketing</li>
                <li className="mb-2">Kewirausahaan</li>
                <li className="mb-2">Investasi</li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li className="mb-[15px] font-bold">Kategory Populer</li>
                <li className="mb-2">Panduan</li>
                <li className="mb-2">FAQ</li>
                <li className="mb-2">Tentang Kami</li>
                <li className="mb-2">Karier</li>
                <li className="mb-2">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className="mb-[15px] font-bold">Metode Pembayaran</p>

              <div className="flex flex-row flex-wrap ">
                <img
                  src={require("./assets/image/pembayaran/alfa.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/atm.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/bca.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/bni.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/cimb.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/GoPay.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/mandiri.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/mastercard.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/permata.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
                <img
                  src={require("./assets/image/pembayaran/shopee.png")}
                  className="sm:order-1 h-5 m-[5px]"
                  alt="mainlogo"
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="">
                <p className="mb-[15px] font-bold">Ikuti kami</p>
                <div className="flex flex-row">
                  <img
                    src={require("./assets/icons/001-facebook.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                  <img
                    src={require("./assets/icons/002-youtube.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                  <img
                    src={require("./assets/icons/004-instagram.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                  <img
                    src={require("./assets/icons/003-linkedin.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                </div>
              </div>
              <div className="">
                <p className="mb-[15px] font-bold">Arkademi Mobile App</p>
                <div className="flex flex-row">
                  <img
                    src={require("./assets/icons/appstore.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                  <img
                    src={require("./assets/icons/googleplay.svg").default}
                    className="sm:order-1 h-5 m-[5px]"
                    alt="mainlogo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
