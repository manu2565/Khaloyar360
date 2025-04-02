import React, { useState, useEffect, useRef } from 'react'
import Scorecardclik from './AfterLogin/Scoreboard/Scorecardclik';

import { useNavigate } from 'react-router-dom';
function Secondsidebar({ closeSidebars, setShowScorcard }) {

  const [isInPlayOpen, setIsInPlayOpen] = useState(false);
  const [isCasinoGamesOpen, setIsCasinoGamesOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isHorseRacingOpen, setIsHorseRacingOpen] = useState(false);
  const [isPopularGamesOpen, setIsPopularGamesOpen] = useState(false);
  const [isInternationalCasinoGamesOpen, setIsInternationalCasinoGamesOpen] = useState(false);
  const [isIndianCasinoGamesOpen, setIsIndianCasinoGamesOpen] = useState(false);
  const [isCasinoProvidersOpen, setIsCasinoProvidersOpen] = useState(false);
  const [isMultiplayerGamesOpen, setIsMultiplayerGamesOpen] = useState(false);
  const [isEsportsOpen, setIsEsportsOpen] = useState(false);
  const [isCricketOpen, setIsCricketOpen] = useState(false);
  const [isBplOpen, setIsBplOpen] = useState(false);
  const [isBplTenishOpen, setIsBplTenishOpen] = useState(false);
  const [isBplSportOpen, setIsBplSportOpen] = useState(false);
  const [isTanishOpen, setIsTanishOpen] = useState(false);
  const [isSportOpen, setIsSportOpen] = useState(false);
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleList = (setStateFunc, otherStates) => {
    setStateFunc(prevState => !prevState);
    otherStates.forEach((stateFunc) => stateFunc(false));
  };




  const toggleCricket = (e) => {
    e.stopPropagation(); // Prevents closing parent
    setIsCricketOpen(true);
    console.log("hell")
    setIsBplOpen(true);
  };

  // Toggles BPL when clicking "add"
  const toggleBpl = (e) => {
    e.stopPropagation();
    console.log("hello")// Prevents closing parent
    setIsBplOpen(prev => !prev);
  };




  // Toggles Tanish when clicking
  const toggleTanish = (e) => {
    e.stopPropagation(); // Prevents closing parent
    setIsTanishOpen(true);
    setIsBplSportOpen(true); // Optionally open Sport as well
  };

  const toggletenishBpl = (e) => {
    e.stopPropagation();
    setIsBplTenishOpen(prev => !prev);
  };



  const toggleSport = (e) => {
    e.stopPropagation(); // Prevents closing parent
    setIsSportOpen(true);
    setIsBplSportOpen(true); // Optionally open Sport as well
  };
  const toggleSportBpl = (e) => {
    e.stopPropagation();
    setIsBplSportOpen(prev => !prev);
  };


  const sidebarRef = useRef(null);

  const closeSidebar = () => setIsSidebarOpen(false);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <>
      {isSidebarOpen && (
        <mat-drawer
          _ngcontent-ng-c344788945=""
          tabIndex={-1}
          ngskiphydration=""
          autofocus={false}
          id="mat-drawers"
          className="mat-drawer border-0 ng-tns-c2384444419-0 ng-trigger ng-trigger-transform ng-star-inserted py-0 mat-drawer-over mat-drawer-opened "
          style={{ transform: "none", visibility: "visible", position: "relative" }}
          ref={sidebarRef}>

          <div
            cdkscrollable=""
            className="mat-drawer-inner-container ng-tns-c2384444419-0"
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   overflow: "auto",
          //   WebkitOverflowScrolling: "touch" // Corrected the syntax for WebKit property
          // }}
          >
            <div
              _ngcontent-ng-c344788945=""
              className="rounded-end bg-theme-dark sidebar ng-tns-c2384444419-0 "
              style={{ height: "100%", overflowY: "auto" }}>
              <div _ngcontent-ng-c344788945="" _nghost-ng-c3403002472=""  >
                <div _ngcontent-ng-c3403002472="" id="sideNav">
                  <div _ngcontent-ng-c3403002472="" className="side-nav mobile">
                    <div _ngcontent-ng-c3403002472="">
                      <div
                        _ngcontent-ng-c3403002472=""
                        className="top p-3 d-flex align-items-center justify-content-between gapss"
                      >
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="d-flex align-items-center gap-2"
                        >
                          <div
                            _ngcontent-ng-c3403002472=""
                            role="img"
                            className="mat-icon notranslate d-flex align-items-center justify-content-center material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                            style={{}}
                            onClick={closeSidebars}>
                            close
                          </div>

                          <img
                            _ngcontent-ng-c3403002472=""
                            routerlink="/dashboard"
                            width={100}
                            alt="Logo"
                            className="logo ng-star-inserted"
                            tabIndex={0}
                            src="assets/images/105.svg"
                            style={{}}
                          />

                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="left-search d-flex"
                        >
                          <input
                            _ngcontent-ng-c3403002472=""
                            type="text"
                            autoComplete="off"
                            placeholder="Search in Casino"
                            className="searchinput"
                          />
                          <span _ngcontent-ng-c3403002472="" className="searchicon">
                            <i
                              _ngcontent-ng-c3403002472=""
                              className="fa-sharp fa-solid fa-magnifying-glass"
                            />
                          </span>
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="d-block d-lg-none ms-2"
                        >
                          <app-language-selector
                            _ngcontent-ng-c3403002472=""
                            _nghost-ng-c2530606509=""
                          >
                            <div
                              _ngcontent-ng-c2530606509=""
                              className="mat-mdc-menu-trigger d-flex gap-2 align-items-center justify-content-between cursor-pointer border px-2 br-10 border-charcoal theme-charcoal language-dd"
                              aria-haspopup="menu"
                              aria-expanded="false"
                            >
                              <div
                                _ngcontent-ng-c2530606509=""
                                className="d-flex align-items-center gap-1"
                              >
                                <div
                                  _ngcontent-ng-c2530606509=""
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >

                                  language
                                </div>
                                <span
                                  _ngcontent-ng-c2530606509=""
                                  className="fw-bold"
                                >
                                  ENG
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c2530606509=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >

                                expand_more
                              </div>
                            </div>

                            <mat-menu
                              _ngcontent-ng-c2530606509=""
                              ngskiphydration=""
                              className="ng-star-inserted"
                              style={{}}
                            >

                            </mat-menu>
                          </app-language-selector>
                        </div>
                      </div>

                      <div
                        _ngcontent-ng-c3403002472=""
                        className="menu mobile ng-star-inserted"
                        style={{}}
                      >
                        <ul _ngcontent-ng-c3403002472="">
                          <li
                            _ngcontent-ng-c3403002472=""
                            className={`ng-star-inserted ${isInPlayOpen ? "active" : ""}`}
                            style={{}}
                            onClick={() => toggleList(setIsInPlayOpen, [setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}>
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/9.webp"
                                  alt="In Play"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  In Play
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isInPlayOpen && (
                              <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleCricket}>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="d-flex justify-content-between"
                                  >
                                    <div _ngcontent-ng-c3403002472="">
                                      <img
                                        _ngcontent-ng-c3403002472=""
                                        alt=""
                                        src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Cricket.svg"
                                        className="ng-star-inserted"
                                      />


                                      <span _ngcontent-ng-c3403002472="">Cricket</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                      onClick={toggleBpl}>
                                      add
                                    </div>

                                  </div>
                                  {isBplOpen && (<div _ngcontent-ng-c3403002472="" className="grandChild">
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" style={{ cursor: "pointer" }} onClick={() => navigate("/Incard")}>

                                          Sri Lanka v Australia
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>

                                          Oman v USA
                                          <span _ngcontent-ng-c3403002472="">
                                            ICC Cricket World Cup League 2
                                          </span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          India v England{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          Pakistan v South Africa{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          Zimbabwe v Ireland{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>


                                  </div>)}
                                </li>

                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleTanish}>
                                  <div _ngcontent-ng-c3403002472="" className="d-flex justify-content-between">
                                    <div _ngcontent-ng-c3403002472="">
                                      <img
                                        _ngcontent-ng-c3403002472=""
                                        alt=""
                                        src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Tennis.svg"
                                        className="ng-star-inserted"
                                      />


                                      <span _ngcontent-ng-c3403002472="">Tennis</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                      onClick={toggletenishBpl}>
                                      add
                                    </div>

                                  </div>

                                  {isBplTenishOpen && (<div _ngcontent-ng-c3403002472="" className="grandChild">
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                          {" "}
                                          Dzumhur v Martinez{" "}
                                          <span _ngcontent-ng-c3403002472="">ATP Buenos Aires 2025</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                          {" "}
                                          Vickery v F Jones{" "}
                                          <span _ngcontent-ng-c3403002472="">WTA Cancun 2025</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                          {" "}
                                          Mad Sieg v Ma Joint{" "}
                                          <span _ngcontent-ng-c3403002472="">WTA Cancun 2025</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Skatov v An Ilagan{" "}
                                          <span _ngcontent-ng-c3403002472="">New Delhi Challenger 2025</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Vacherot v Schoolkate{" "}
                                          <span _ngcontent-ng-c3403002472="">New Delhi Challenger 2025</span>
                                        </div>

                                      </div>

                                    </div>


                                  </div>)
                                  }    </li>



                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleSport}>
                                  <div _ngcontent-ng-c3403002472="" className="d-flex justify-content-between">
                                    <div _ngcontent-ng-c3403002472="">
                                      <img
                                        _ngcontent-ng-c3403002472=""
                                        alt=""
                                        src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Soccer.svg"
                                        className="ng-star-inserted"
                                      />


                                      <span _ngcontent-ng-c3403002472="">Soccer</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                      onClick={toggleSportBpl} >
                                      add
                                    </div>

                                  </div>
                                  {isBplSportOpen && (<div _ngcontent-ng-c3403002472="" className="grandChild">
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                          {" "}
                                          Buriram Utd v Ulsan Hyundai Horang-i{" "}
                                          <span _ngcontent-ng-c3403002472="">AFC Champions League</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                          {" "}
                                          PSKC Cimahi v Persela Lamongan{" "}
                                          <span _ngcontent-ng-c3403002472="">Indonesian Liga 2</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Lokomotiva Zagreb U19 v Sturm Graz U19{" "}
                                          <span _ngcontent-ng-c3403002472="">UEFA Youth League</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Mumbai City FC v FC Goa{" "}
                                          <span _ngcontent-ng-c3403002472="">Indian Super League</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Deltras Sidoarjo v Psim Yogyakarta{" "}
                                          <span _ngcontent-ng-c3403002472="">Indonesian Liga 2</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Yokohama FM v Shanghai Shenhua{" "}
                                          <span _ngcontent-ng-c3403002472="">AFC Champions League</span>
                                        </div>

                                      </div>

                                    </div>


                                  </div>)}

                                </li>


                              </ul>

                            )}

                          </li>

                          <li
                            _ngcontent-ng-c3403002472=""
                            className={`ng-star-inserted ${isSportsOpen ? "active" : ""}`}
                            style={{}}
                            onClick={() => toggleList(setIsSportsOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}>
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/1.webp"
                                  alt="Sports"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Sports
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleCricket}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Cricket.svg"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Cricket</span>
                                  </div>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    role="img"
                                    className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                    onClick={toggleBpl}>
                                    add
                                  </div>

                                </div>
                                {isBplOpen && (
                                  <div _ngcontent-ng-c3403002472="" className="grandChild">
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                      onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          Sri Lanka v Australia{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          Oman v USA{" "}
                                          <span _ngcontent-ng-c3403002472="">
                                            ICC Cricket World Cup League 2
                                          </span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">

                                          India v England{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>

                                          Pakistan v South Africa{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>

                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="level3 activeLevel3 ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>

                                          Zimbabwe v Ireland{" "}
                                          <span _ngcontent-ng-c3403002472="">One Day Internationals</span>
                                        </div>

                                      </div>

                                    </div>


                                  </div>)}
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleTanish}>
                                <div _ngcontent-ng-c3403002472="" className="d-flex justify-content-between">
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Tennis.svg"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Tennis</span>
                                  </div>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    role="img"
                                    className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                    onClick={toggletenishBpl}>
                                    add
                                  </div>

                                </div>

                                {isBplTenishOpen && (<div _ngcontent-ng-c3403002472="" className="grandChild">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Dzumhur v Martinez{" "}
                                        <span _ngcontent-ng-c3403002472="">ATP Buenos Aires 2025</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Vickery v F Jones{" "}
                                        <span _ngcontent-ng-c3403002472="">WTA Cancun 2025</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Mad Sieg v Ma Joint{" "}
                                        <span _ngcontent-ng-c3403002472="">WTA Cancun 2025</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Skatov v An Ilagan{" "}
                                        <span _ngcontent-ng-c3403002472="">New Delhi Challenger 2025</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Vacherot v Schoolkate{" "}
                                        <span _ngcontent-ng-c3403002472="">New Delhi Challenger 2025</span>
                                      </div>

                                    </div>

                                  </div>


                                </div>)
                                }    </li>
                              <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Politics.svg"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Politics</span>
                                  </div>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    role="img"
                                    className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    add
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="">

                                        Delhi Assembly Elections 2025{" "}
                                        <span _ngcontent-ng-c3403002472="">Assembly Elections 2025</span>
                                      </div>

                                    </div>

                                  </div>


                                </div>
                              </li>

                              <li _ngcontent-ng-c3403002472="" className="ng-star-inserted activeLevel2" onClick={toggleSport}>
                                <div _ngcontent-ng-c3403002472="" className="d-flex justify-content-between">
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/sports/Soccer.svg"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Soccer</span>
                                  </div>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    role="img"
                                    className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                    onClick={toggleSportBpl} >
                                    add
                                  </div>

                                </div>
                                {isBplSportOpen && (<div _ngcontent-ng-c3403002472="" className="grandChild">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Buriram Utd v Ulsan Hyundai Horang-i{" "}
                                        <span _ngcontent-ng-c3403002472="">AFC Champions League</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        PSKC Cimahi v Persela Lamongan{" "}
                                        <span _ngcontent-ng-c3403002472="">Indonesian Liga 2</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Lokomotiva Zagreb U19 v Sturm Graz U19{" "}
                                        <span _ngcontent-ng-c3403002472="">UEFA Youth League</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Mumbai City FC v FC Goa{" "}
                                        <span _ngcontent-ng-c3403002472="">Indian Super League</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Deltras Sidoarjo v Psim Yogyakarta{" "}
                                        <span _ngcontent-ng-c3403002472="">Indonesian Liga 2</span>
                                      </div>

                                    </div>

                                  </div>

                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="level3 activeLevel3 ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      className="d-flex justify-content-between"
                                    >
                                      <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/Incard")} style={{ cursor: "pointer" }}>
                                        {" "}
                                        Yokohama FM v Shanghai Shenhua{" "}
                                        <span _ngcontent-ng-c3403002472="">AFC Champions League</span>
                                      </div>

                                    </div>

                                  </div>


                                </div>)}

                              </li>

                            </ul>
                          </li>

                          <li
                            _ngcontent-ng-c3403002472=""
                            className={`ng-star-inserted ${isHorseRacingOpen ? "active" : ""}`}
                            onClick={() => toggleList(setIsHorseRacingOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}
                            style={{}}
                          >
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/193.webp"
                                  alt="Horse Racing"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Horse Racing
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isHorseRacingOpen &&
                              <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted" onClick={toggleCricket}>
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="d-flex justify-content-between"
                                  >
                                    <div _ngcontent-ng-c3403002472="">

                                      <span
                                        _ngcontent-ng-c3403002472=""
                                        className="fi fi-ie mx-2 ng-star-inserted"
                                      />

                                      <span _ngcontent-ng-c3403002472="">IE</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                      onClick={toggleBpl}>
                                      add
                                    </div>

                                  </div>
                                  {isBplOpen && (
                                    <div _ngcontent-ng-c3403002472="" className="grandChild horse-racing">
                                      <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          className="d-flex justify-content-between"
                                        >
                                          <div _ngcontent-ng-c3403002472="">
                                            {" "}
                                            Dundalk <span _ngcontent-ng-c3403002472="" />
                                          </div>
                                          <div
                                            _ngcontent-ng-c3403002472=""
                                            role="img"
                                            className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            expand_more
                                          </div>

                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          className="greatGrandChild ng-star-inserted"
                                        >
                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            7f Mdn
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            7f Hcap
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            6f Hcap
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            5f Mdn
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            2m Hcap
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            1m4f Hcap
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            1m2f Hcap
                                          </div>

                                          <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                            1m Mdn
                                          </div>


                                        </div>

                                      </div>


                                    </div>

                                  )}
                                </li>
                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="d-flex justify-content-between"
                                  >
                                    <div _ngcontent-ng-c3403002472="">

                                      <span
                                        _ngcontent-ng-c3403002472=""
                                        className="fi fi-au mx-2 ng-star-inserted"
                                      />

                                      <span _ngcontent-ng-c3403002472="">AU</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      add
                                    </div>

                                  </div>
                                  <div _ngcontent-ng-c3403002472="" className="grandChild horse-racing">
                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Seymour <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R8 1400m Hcap
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R7 1600m Hcap
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Hawkesbury <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R7 1100m Hcap
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R6 1400m Hcap
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Sale <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R12 435m Heat
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R11 435m Heat
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R10 435m Heat
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Albion Park <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R9 395m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R8 395m Final
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R7 520m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R6 395m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R12 395m M5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R11 395m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R10 395m Gr5
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Maryborough <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R9 2190m Pace M
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R8 1690m Pace M
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Temora <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R9 330m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R7 457m Gr5
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R6 330m Heat
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R5 330m Heat
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R10 330m Gr5
                                        </div>


                                      </div>

                                    </div>


                                  </div>
                                </li>
                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="d-flex justify-content-between"
                                  >
                                    <div _ngcontent-ng-c3403002472="">

                                      <span
                                        _ngcontent-ng-c3403002472=""
                                        className="fi fi-gb mx-2 ng-star-inserted"
                                      />

                                      <span _ngcontent-ng-c3403002472="">GB</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      add
                                    </div>

                                  </div>
                                  <div _ngcontent-ng-c3403002472="" className="grandChild horse-racing">
                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Newcastle <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          HC 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          HC 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A9 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A8 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A8 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A7 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A7 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A6 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A5 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A5 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A4 480m
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          A4 480m
                                        </div>


                                      </div>

                                    </div>

                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Southwell <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          To Be Placed
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          1m4f Hcap
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          1m4f Hcap
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          1m Nov Stks
                                        </div>


                                      </div>

                                    </div>


                                  </div>
                                </li>
                                <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                  <div
                                    _ngcontent-ng-c3403002472=""
                                    className="d-flex justify-content-between"
                                  >
                                    <div _ngcontent-ng-c3403002472="">

                                      <span
                                        _ngcontent-ng-c3403002472=""
                                        className="fi fi-us mx-2 ng-star-inserted"
                                      />

                                      <span _ngcontent-ng-c3403002472="">US</span>
                                    </div>
                                    <div
                                      _ngcontent-ng-c3403002472=""
                                      role="img"
                                      className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      add
                                    </div>

                                  </div>
                                  <div _ngcontent-ng-c3403002472="" className="grandChild horse-racing">
                                    <div _ngcontent-ng-c3403002472="" className="level3 ng-star-inserted">
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="d-flex justify-content-between"
                                      >
                                        <div _ngcontent-ng-c3403002472="">
                                          {" "}
                                          Turf Paradise <span _ngcontent-ng-c3403002472="" />
                                        </div>
                                        <div
                                          _ngcontent-ng-c3403002472=""
                                          role="img"
                                          className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          expand_more
                                        </div>

                                      </div>
                                      <div
                                        _ngcontent-ng-c3403002472=""
                                        className="greatGrandChild ng-star-inserted"
                                      >
                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R9 5f Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R8 1m Stks
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R7 1m Allw Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R6 5f Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R5 6f Allw Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R4 1m Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R3 7f Claim
                                        </div>

                                        <div _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                                          R2 6f Mdn Claim
                                        </div>


                                      </div>

                                    </div>


                                  </div>
                                </li>

                              </ul>
                            }


                          </li>


                          <li _ngcontent-ng-c3403002472="" className={`ng-star-inserted ${isPopularGamesOpen ? "active" : ""}`} onClick={() => toggleList(setIsPopularGamesOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}
                          >
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/4.webp"
                                  alt="Popular Games"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Popular Games
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isPopularGamesOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/5.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Aviator</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/6.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Crazy Time</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/21.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Cygnus 2</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/22.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Hand Of Anubis</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/23.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Heads &amp; Tails</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/24.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Katmandu X</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/25.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Money Cart 3</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/26.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Roll The Dice</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/27.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Route777</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/28.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Snake Arena</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/29.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Wheel of Fortune</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/30.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Wild Chapo</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/31.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Win Win</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}

                          </li>



                          <li
                            _ngcontent-ng-c3403002472=""
                            className={`ng-star-inserted ${isInternationalCasinoGamesOpen ? "active" : ""}`}
                            style={{}}
                            onClick={() => toggleList(setIsInternationalCasinoGamesOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}
                          >
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/7.webp"
                                  alt="International Casino Games"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  International Casino Games
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isInternationalCasinoGamesOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="" onClick={() => navigate("/all-casinos")} style={{ cursor: "pointer" }}>
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Andar Bahar.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Andar Bahar</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }} >
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Baccarat.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Baccarat</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Blackjack.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Blackjack</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Crash Games.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Crash Games</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Dragon Tiger.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Dragon Tiger</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/ESports.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">ESports</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/all-casinos")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Indian Casino.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Indian Casino</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Instant Win.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Instant Win</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Lightning Games.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Lightning Games</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/Live Casino.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Live Casino</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="https://static-content1.b-cdn.net/kheloyar-club/assets/images/newUiAssets/side-nav-icons/casino-games/See All.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">See All</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}

                          </li>


                          <li _ngcontent-ng-c3403002472="" className={`ng-star-inserted ${isIndianCasinoGamesOpen ? "active" : ""}`} onClick={() => toggleList(setIsIndianCasinoGamesOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}

                          >
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/14.webp"
                                  alt="Indian Casino Games"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Indian Casino Games
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isIndianCasinoGamesOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/44.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">32 Card</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/45.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">7 up &amp; down</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/47.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Amar Akbar Anthony</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/48.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Andar Bahar</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/49.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Baccarat</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/50.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Dragon Tiger</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/51.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Teen Patti</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/52.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Teenpatti T20</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/slots-game")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/53.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Worli Matka</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}

                          </li>


                          <li _ngcontent-ng-c3403002472="" className={`ng-star-inserted ${isCasinoProvidersOpen ? "active" : ""}`} onClick={() => toggleList(setIsCasinoProvidersOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsMultiplayerGamesOpen, setIsEsportsOpen])}>
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/15.webp"
                                  alt="Casino Providers"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Casino Providers
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>

                            {isCasinoProvidersOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/55.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">BetGames.TV</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/56.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Evolution</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/57.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Ezugi</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/58.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Skywind Live</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/59.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">QTech</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted" onClick={() => navigate("/providers")} style={{ cursor: "pointer" }}>
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/61.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Vivo Gaming</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}


                          </li>


                          <li _ngcontent-ng-c3403002472="" onClick={() => toggleList(setIsMultiplayerGamesOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsEsportsOpen])}
                            className={`ng-star-inserted ${isMultiplayerGamesOpen ? "active" : ""}`}>
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/84.svg"
                                  alt="Multiplayer Games"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Multiplayer Games
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isMultiplayerGamesOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/85.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">7 UP-DOWN</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/96.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Ludo Quick</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/98.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Poker King</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/100.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Rummy</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/101.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Sic Bo</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/103.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">TeenPatti 20-20</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/104.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">TeenPatti Joker</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/106.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">See all</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}


                          </li>


                          <li _ngcontent-ng-c3403002472="" className={`ng-star-inserted ${isEsportsOpen ? "active" : ""}`} onClick={() => toggleList(setIsEsportsOpen, [setIsInPlayOpen, setIsCasinoGamesOpen, setIsSportsOpen, setIsHorseRacingOpen, setIsPopularGamesOpen, setIsInternationalCasinoGamesOpen, setIsIndianCasinoGamesOpen, setIsCasinoProvidersOpen, setIsMultiplayerGamesOpen])}>
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/62.webp.webp"
                                  alt="E Sports"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  E-Sports
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c3403002472=""
                                role="img"
                                className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                expand_more
                              </div>

                            </div>
                            {isEsportsOpen && <ul _ngcontent-ng-c3403002472="" className="sub-menus">
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/64.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Age of Empires</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/65.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">COD</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/66.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">CS-GO</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/67.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Dota 2</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/68.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Halo</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/69.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">League of Legends</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/70.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Mobile Legends</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/71.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Overwatch</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/72.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Starcraft 1</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/73.webp"
                                      className="ng-star-inserted"
                                    />
                                    <span _ngcontent-ng-c3403002472="">Valorant</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>
                              <li _ngcontent-ng-c3403002472="" className="activeLevel2 ng-star-inserted">
                                <div
                                  _ngcontent-ng-c3403002472=""
                                  className="d-flex justify-content-between"
                                >
                                  <div _ngcontent-ng-c3403002472="">
                                    <img
                                      _ngcontent-ng-c3403002472=""
                                      alt=""
                                      src="assets/images/74.webp"
                                      className="ng-star-inserted"
                                    />


                                    <span _ngcontent-ng-c3403002472="">Warcraft 3</span>
                                  </div>

                                </div>
                                <div _ngcontent-ng-c3403002472="" className="grandChild">

                                </div>
                              </li>

                            </ul>}

                          </li>


                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/11.webp"
                                  alt="Sports Book"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Sports Book
                                </span>
                              </div>

                            </div>
                            <ul _ngcontent-ng-c3403002472="" className="sub-menus">

                            </ul>
                          </li>


                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted">
                            <div _ngcontent-ng-c3403002472="">
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/16.webp"
                                  alt="Virtuals Sports"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Virtuals Sports
                                </span>
                              </div>

                            </div>
                            <ul _ngcontent-ng-c3403002472="" className="sub-menus">

                            </ul>
                          </li>



                        </ul>
                      </div>

                    </div>
                    <section _ngcontent-ng-c3403002472="" className="banner">
                      <div _ngcontent-ng-c3403002472="" className="keen-slider">
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide1 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/anjali.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide2 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/ashwariya.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide3 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/daisyShah.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide4 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/govinda.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide5 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/nikita.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide6 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/poonam.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide7 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/rajpalYadav.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide8 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/randeep.webp"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="keen-slider__slide number-slide9 ng-star-inserted"
                          style={{
                            minWidth: 310,
                            maxWidth: 310,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        >
                          <img
                            _ngcontent-ng-c3403002472=""
                            alt=""
                            src="assets/images/reshmi.webp"
                          />
                        </div>

                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </mat-drawer>
      )}
    </>
  )
}

export default Secondsidebar