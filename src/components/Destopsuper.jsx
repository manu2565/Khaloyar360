import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import Matchscore from "./Score/Matchscore";
import Footer from "./Footer/Footer";

import Dashbordcard from '../Card/Dashbordcard'
// import Sidebar from './Sidebar/Sidebar';

import Raceing from './Raceing';
import { Link, useNavigate } from "react-router-dom";
function Destopsuper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate()

  const images = [
    "assets/images/5335.webp",
    "assets/images/5617.webp",
    "assets/images/5127.webp",
    "assets/images/5170.webp",
    "assets/images/5323.webp",
    "assets/images/4199.webp",
    "assets/images/4187.webp",
    "assets/images/4052.webp",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);




  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (



    <>

      {/* 
      <div _ngcontent-ng-c344788945="" className="h-100"> */}
      {/* <header and marg/> */}
      <div
        _ngcontent-ng-c344788945=""
        className="content-with-news px-md-3 px-2"
      >
        {windowWidth <= 992 && (
          <div _ngcontent-ng-c344788945="" className="mobile-menu d-flex flex-nowrap pt-2 mb-md-2 border-bottom ng-star-inserted" style={{ overflowX: "auto", overflowY: "hidden" }}>
            <drag-scroll _ngcontent-ng-c344788945="" _nghost-ng-c556780884="" style={{ pointerEvents: "auto" }}>
              <div _ngcontent-ng-c556780884="" className="drag-scroll-content" drag-scroll="true" >
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/Inplay")} >
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/27.svg"
                      alt="In Play" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text" >
                    In Play
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block" }}>
                  <div _ngcontent-ng-c344788945="" className="position-relative avaitor" >
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/25.svg"
                      alt="Aviator" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Aviator
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/indian-casino")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/34.svg"
                      alt="Indian Casino" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Indian Casino
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/multi-ids-wallet")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/35.gif"
                      alt="Multi ID's Wallet" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Multi ID's Wallet
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted no-hover" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/all-casinos")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/24.svg"
                      alt="All Casino" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    All Casino
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block" }}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/33.svg"
                      alt="Virtual Sports" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Virtual Sports
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/indian-casino")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}

                      src="assets/images/26.svg"
                      alt="Teen Patti" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Teen Patti
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/slots-game")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/29.svg"
                      alt="Slot Game" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Slot Game
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/slots-game")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/30.svg"
                      alt="Table Game" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Table Game
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/slots-game")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/31.svg"
                      alt="Instant Win" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Instant Win
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", cursor: "pointer" }} onClick={() => navigate("/slots-game")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/32.svg"
                      alt="Shooting Game" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Shooting Games
                  </div>
                </a>
                <a _ngcontent-ng-c344788945="" routerlinkactive="active" drag-scroll-item=""
                  className="text-center cursor-pointer ng-star-inserted" style={{ display: "inline-block", marginRight: "0px", cursor: "pointer" }} onClick={() => navigate("/slots-game")}>
                  <div _ngcontent-ng-c344788945="" className="position-relative">
                    <img _ngcontent-ng-c344788945="" height={22}
                      src="assets/images/28.svg"
                      alt="Live Casino" />
                  </div>
                  <div _ngcontent-ng-c344788945="" className="description-text">
                    Live Casino
                  </div>
                </a>

              </div>
            </drag-scroll>
          </div>)}

        <marquee _ngcontent-ng-c344788945="" behavior="scroll" direction="left" scrollamount={8}
          className="bg-white text-dark mt-1 d-inline-block d-md-none ng-star-inserted">
          <div _ngcontent-ng-c344788945="" className="fs-12 fw-strong">
            For Deposit USDT and Hawala Service is also available. Click
            your branch or deposit link on website to avail the service
          </div>
        </marquee>
        {windowWidth <= 992 && (
          < div _ngcontent-ng-c1510972542="" className="row g-0 ng-star-inserted" style={{ overflowX: "auto", overflowY: "hidden" }}>
            <div _ngcontent-ng-c1510972542="" className="d-grid col-6 mx-auto">

              <button _ngcontent-ng-c1510972542="" type="button" routerlink=""
                className="btn btn-deposit text-white rounded-0" tabIndex={0} onClick={() => navigate("/payment")} style={{ cursor: "pointer" }}>
                <img _ngcontent-ng-c1510972542=""
                  src="assets/images/deposit.svg" />
                Deposit
              </button>

            </div>

            <div _ngcontent-ng-c1510972542="" className="d-grid col-6 mx-auto" onClick={() => navigate("/withdraw")} style={{ cursor: "pointer" }}>

              <button _ngcontent-ng-c1510972542="" type="button" routerlink="/withdraw"
                className="btn btn-withdraw text-white rounded-0" tabIndex={0}>
                <img _ngcontent-ng-c1510972542=""
                  src="assets/images/withdraw.svg" />
                Withdraw
              </button>

            </div>
          </div>
        )}



        <router-outlet _ngcontent-ng-c344788945="" />
        <app-dashboard
          _nghost-ng-c1510972542=""
          className="ng-star-inserted"
        >
          {/* <button///> */}

          {/* <div
                        _ngcontent-ng-c1510972542=""
                        className="text-center ng-star-inserted"
                      >
                        <div
                          _ngcontent-ng-c1510972542=""
                          className="d-inline-flex justify-content-between align-items-center tab-wrapper d-none"
                        >
                          <a
                            _ngcontent-ng-c1510972542=""
                            className="tab px-sm-5 px-3 description-text active"
                          >
                            <img
                              _ngcontent-ng-c1510972542=""
                              width={17}
                              alt="tab-exchs"
                              className="me-1"
                              src="assets/images/tab-exchs.svg"
                            />{" "}
                            Kheloyar Exchange{" "}
                          </a>
                          <a
                            _ngcontent-ng-c1510972542=""
                            className="tab px-sm-5 px-3 description-text"
                          >
                            <img
                              _ngcontent-ng-c1510972542=""
                              width={17}
                              alt="tab-premium"
                              className="me-1"
                              src="assets/images/tab-premium.svg"
                            />{" "}
                            Premium Book IDs{" "}
                          </a>
                        </div>
                      </div> */}

          <div
            _ngcontent-ng-c1510972542=""
            className="mt-3 mt-lg-0 dashboard ng-star-inserted"
          >
            <h1 _ngcontent-ng-c1510972542="" className="d-none">
              Banners
            </h1>


            <div _ngcontent-ng-c1510972542="" className="w-full h-screen flex justify-center items-center" style={{
              display: "flex"
            }}>
              <Swiper _ngcontent-ng-c1510972542=""
                className="w-[300px] h-[400px] swiper-desktop mb-4 w-100 hidden swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress ng-star-inserted swiper-desktop mb-4 w-100 hidden swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress ng-star-inserted"
                effect="cards" grabCursor={true} modules={[EffectCards, Autoplay]} autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}>
                <div className="swiper-wrapper" style={{ cursor: "grab", transitionDuration: "0ms" }}>

                  {images.map((image, index) => (
                    <div data-swiper-slide-index={0} className="swiper-slide ng-star-inserted" style={{
                      width: "1190px",
                      zIndex: 4, transform: "translate3d(calc(-17.25% + 0px), 0px, -300px) rotateZ(0deg) scale(1)",
                      transitionDuration: "0ms"
                    }}>
                      <SwiperSlide key={index} className="flex items-center justify-center">
                        <img src={image} alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white banners-img  ng-star-inserted ng-lazyloaded" />

                      </SwiperSlide>
                    </div>))}
                </div>

              </Swiper>
            </div>


            <app-casino-provider _ngcontent-ng-c1510972542="" _nghost-ng-c1837430704="" className="ng-star-inserted">
              <drag-scroll _ngcontent-ng-c1837430704="" _nghost-ng-c556780884="" style={{ pointerEvents: "auto" }}>
                <div _ngcontent-ng-c556780884="" className="drag-scroll-content" drag-scroll="true" style={{
                  display: "block"
                  , whiteSpace: "nowrap", width: "100%", height: "calc(100% + 2px)"
                }}>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(156, 49, 240) 0%, rgb(236, 98, 226) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      SportsBook
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2056.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(149, 215, 230) 0%, rgb(7, 171, 208) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Casino Lobby
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2083.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(239, 53, 138) 0%, rgb(230, 21, 55) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Election
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/5510.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(242, 215, 26) 0%, rgb(236, 176, 36) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Indian Casino
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/4418.svg" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(36, 33, 86) 0%, rgb(57, 132, 247) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Virtuals
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2060.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(196, 53, 239) 0%, rgb(102, 46, 243) 100%)",
                      display: "inline-block", marginRight: 0
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Live Casino
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2058.png" />
                  </div>

                </div>
              </drag-scroll>
            </app-casino-provider>

            <app-casino-provider _ngcontent-ng-c1510972542="" _nghost-ng-c1837430704="" className="ng-star-inserted">
              <drag-scroll _ngcontent-ng-c1837430704="" _nghost-ng-c556780884="" style={{ pointerEvents: "auto" }}>
                <div _ngcontent-ng-c556780884="" className="drag-scroll-content" drag-scroll="true" style={{
                  display: "block"
                  , whiteSpace: "nowrap", width: "100%", height: "calc(100% + 2px)"
                }}>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(239, 53, 138) 0%, rgb(230, 21, 55) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Teenpatti One Day
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/4486.webp" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(156, 49, 240) 0%, rgb(236, 98, 226) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Color Prediction
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/3355.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(36, 33, 86) 0%, rgb(57, 132, 247) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Mac88 Gaming
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/4053.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(156, 49, 240) 0%, rgb(236, 98, 226) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Ezugi
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2061.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(196, 53, 239) 0%, rgb(102, 46, 243) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Evolution
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2057.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(242, 215, 26) 0%, rgb(236, 176, 36) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      QTech
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2063.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(36, 33, 86) 0%, rgb(57, 132, 247) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      BetGames.TV
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2075.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(34, 255, 122) 0%, rgb(32, 166, 53) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      GAP
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2080.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(196, 53, 239) 0%, rgb(102, 46, 243) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Oddin.gg
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2079.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(242, 215, 26) 0%, rgb(236, 176, 36) 100%)",
                      display: "inline-block"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Red Tiger
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2081.png" />
                  </div>
                  <div _ngcontent-ng-c1837430704="" drag-scroll-item=""
                    className="d-flex justify-content-between align-items-center title px-2 py-1 ng-star-inserted" style={{
                      background: "linear-gradient(270deg, rgb(36, 33, 86) 0%, rgb(57, 132, 247) 100%)",
                      display: "inline-block", marginRight: "0px"
                    }}>
                    <h2 _ngcontent-ng-c1837430704="" className="text-truncate">
                      Relax Gaming
                    </h2>
                    <img _ngcontent-ng-c1837430704="" alt="" src="assets/images/2082.png" />
                  </div>

                </div>
              </drag-scroll>
            </app-casino-provider>



            <Raceing />

            <Matchscore />

            <Dashbordcard />



          </div>








        </app-dashboard>

      </div>




      {/* </div>
                */}

    </>
  );
}

export default Destopsuper;
