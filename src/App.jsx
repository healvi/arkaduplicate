import "./App.scss";
import { Card, Cardmini, Menu, Navbar, TestimoniBox } from "./components";

function App() {
  return (
    <div className="App">
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
          <div className="flex-1 flex relative flex flex-col mt-[65px]">
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
      </div>
      <div className=" testimoni flex flex-col items-center justify-center ">
        <h1 className="uppercase text-[41px] mt-[65px] text-transparent font-bold">
          testimoni
        </h1>
        <div className="container-xl grid grid-cols-3 gap-4 justify-center">
          <TestimoniBox />
          <TestimoniBox />
          <TestimoniBox />
        </div>
      </div>
    </div>
  );
}

export default App;
