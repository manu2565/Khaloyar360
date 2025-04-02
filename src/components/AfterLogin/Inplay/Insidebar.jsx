import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Circketmodel from './Circketmodel';
import Sccore from './Sccore';
import Tenish from './Tenish';
import Houseracing from './Houseracing';
import Politics from './Politics';
import { Link } from "react-router-dom";
import Inhome from './Inhome';
import Upcoming from './Upcoming';
import Favarite from './Favarite'
import Inplaymodel from './Inplaymodel';


function Insidebar({ close, setActiveComponent }) {

  const [isCricketSliderOpen, setCricketSliderOpen] = useState(false);
  const [isSoccerSliderOpen, setSoccerSliderOpen] = useState(false);
  const [istenishSliderOpen, setTenishSliderOpen] = useState(false);
  const [isHorsceSliderOpen, setHorsceSliderOpen] = useState(false);
  const [isPoliticsSliderOpen, setisPoliticsSliderOpen] = useState(false);
  // const [activeComponent, setActiveComponent] = useState(''); // State to track the active component

  // // Handle "In Play" click without changing the tab
  // const handleInPlayClick = (event) => {
  //   event.preventDefault(); // Prevent tab change behavior
  //   setActiveComponent('inplay'); // Set content for In Play
  // };


  // Handle sidebar click
  const handleInPlayClick = () => {
    setActiveComponent('inplay'); // Set active component to Inplay
  };

  const handleUpcomingClick = () => {
    setActiveComponent('upcoming'); // Set active component to Upcoming
  };

  const handleFavouritesClick = () => {
    setActiveComponent('favourites'); // Set active component to Favourites
  };

  const toggleCricketSlider = () => {
    setCricketSliderOpen(!isCricketSliderOpen);
    setSoccerSliderOpen(false);
    setTenishSliderOpen(false);
    setHorsceSliderOpen(false);

  };


  const toggletenishSlider = () => {
    setTenishSliderOpen(!istenishSliderOpen);
    setCricketSliderOpen(false);
    setSoccerSliderOpen(false);
    setHorsceSliderOpen(false);
  };

  const toggleSoccerSlider = () => {
    setSoccerSliderOpen(!isSoccerSliderOpen);
    setCricketSliderOpen(false);
    setTenishSliderOpen(false);
    setHorsceSliderOpen(false);
  };

  const toggleHorsceSliderOpen = () => {
    setHorsceSliderOpen(!isHorsceSliderOpen);
    setCricketSliderOpen(false);
    setTenishSliderOpen(false);

  };

  const togglePoliticsSliderOpen = () => {
    setisPoliticsSliderOpen(!isPoliticsSliderOpen);
    setCricketSliderOpen(false);
    setTenishSliderOpen(false);
    setHorsceSliderOpen(false);
  }


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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

      {/* <div _ngcontent-jgr-c22="" className="left-menu d-block left-menu-show">
        
        <div _ngcontent-ohc-c22="" className="page-container bgcolor" style={{ background: 'linear-gradient(132deg, #1D1D1D 8.33%, #1B1B1B 8.33%, #1B1B1B 50%, #1D1D1D 50%, #1D1D1D 58.33%, #1B1B1B 58.33%, #1B1B1B 100%)' }}>
            <div _ngcontent-jgr-c22="" className="sidebar-header-wrapper">
              <input _ngcontent-jgr-c22="" type="search" placeholder="Search event"
                className="ng-untouched ng-pristine ng-valid" />
              <i _ngcontent-jgr-c22="" className="search-icon fa fa-search" />
            </div>
            <div _ngcontent-jgr-c22="" id="left-menu">


              <div className="up-levels main">
              
                <Link to="#" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setActiveTab("inplay")}>
                  <div className={`item-level-inplay item-level ${activeTab === "inplay" ? "active" : ""}`} tabIndex={0}>
                    <div className="sidebar-menu-icon live-icon" />
                    <span>In Play</span>
                    <span className="badge ms-auto">4</span>
                  </div>
                </Link>

               
                <Link to="#" style={{ textDecoration: "none", color: "inherit", display: "block" }} onClick={() =>
                  setActiveTab("upcoming")}>
                  <div className={`item-level-inplay item-level ${activeTab === "upcoming" ? "active" : ""}`} tabIndex={0}>
                    <div className="sidebar-menu-icon upcoming" />
                    <span>Upcoming</span>
                    <span className="badge ms-auto">97</span>
                  </div>
                </Link>

               
                <Link to="#" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setActiveTab("favorites")}>
                  <div className={`item-level item-level-favorite ${activeTab === "favorites" ? "active" : ""}`} tabIndex={0}>
                    <div className="sidebar-menu-icon favorite" />
                    <span>Favourites</span>
                    <span className="badge ms-auto">0</span>
                  </div>
                </Link>

              </div>
              <div _ngcontent-jgr-c22="" className="downs-levels category">
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex" onClick={toggleCricketSlider}>
                      <div _ngcontent-jgr-c22="" className="sports-icon-image cricket" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Cricket
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        136
                      </span>
                    </div>
                  </div>
                  {isCricketSliderOpen && (
                    <Circketmodel />)}



                </div>
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex" onClick={toggleSoccerSlider}>
                      <div _ngcontent-jgr-c22="" className="sports-icon-image soccer" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Soccer
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        123
                      </span>
                    </div>
                  </div>
                  {isSoccerSliderOpen && (
                    <Sccore />)}



                </div>
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex" onClick={toggletenishSlider}>
                      <div _ngcontent-jgr-c22="" className="sports-icon-image tennis" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Tennis
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        53
                      </span>
                    </div>

                  </div>
                  {istenishSliderOpen && (
                    <Tenish />)}

                </div>
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex" onClick={toggleHorsceSliderOpen}>
                      <div _ngcontent-jgr-c22="" className="sports-icon-image horse-racing" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Horse Racing
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        79
                      </span>
                    </div>


                  </div>
                  {isHorsceSliderOpen && (
                    <Houseracing />)}

                </div>
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex" onClick={togglePoliticsSliderOpen}>
                      <div _ngcontent-jgr-c22="" className="sports-icon-image politics" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Politics
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        2
                      </span>
                    </div>
                  </div>
                  {isPoliticsSliderOpen && (
                    <Politics />)}


                </div>
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex">
                      <div _ngcontent-jgr-c22="" className="sports-icon-image greyhound-racing" />
                      <span _ngcontent-jgr-c22="" className="text-uppercase">
                        Greyhound Racing
                      </span>
                      <span _ngcontent-jgr-c22="" className="badge">
                        73
                      </span>
                    </div>
                  </div>


                </div>

              </div>


              <div _ngcontent-jgr-c22="" className="downs-levels category">
                <div _ngcontent-jgr-c22="" className="level">
                  <div _ngcontent-jgr-c22="" className="item-level1">
                    <div _ngcontent-jgr-c22="" className="d-flex cursor-pointer">
                      <div _ngcontent-jgr-c22="" className="game-img blog-icon d-flex">
                        <i _ngcontent-jgr-c22="" className="fa fa-language d-flex align-items-center" />
                      </div>
                      <select _ngcontent-jgr-c22="" name="languages" id="lang"
                        className="w-100 language-select goog-te-combo googletrans notranslate ml-0 ng-untouched ng-pristine ng-valid">
                        <option _ngcontent-jgr-c22="" value="en|en">

                          English
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|hi">

                          Hindi
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|te">

                          Telugu
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|ta">

                          Tamil
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|kn">

                          Kannada
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|mr">

                          Marathi
                        </option>
                        <option _ngcontent-jgr-c22="" value="en|gu">

                          Gujarati
                        </option>

                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* Render the selected component
        <div className="tab-content">
          {activeTab === "inplay" &&
            <Inplaymodel />}
          {activeTab === "upcoming" &&
            <Upcoming />}
          {activeTab === "favorites" &&
            < Favarite />}
        </div> */}


      {isSidebarOpen && (<div _ngcontent-ohc-c22="" className="left-menu d-block left-menu-show" ref={sidebarRef} >
        <div _ngcontent-ohc-c22="" className="page-container bgcolor" style={{ background: 'linear-gradient(132deg, #1D1D1D 8.33%, #1B1B1B 8.33%, #1B1B1B 50%, #1D1D1D 50%, #1D1D1D 58.33%, #1B1B1B 58.33%, #1B1B1B 100%)' }}>
          <div _ngcontent-ohc-c22="" className="sidebar-header-wrapper" >
            <input
              _ngcontent-ohc-c22=""
              type="search"
              placeholder="Search event"
              className="ng-pristine ng-valid ng-touched"
            />
            <i _ngcontent-ohc-c22="" className="search-icon fa fa-search" />
          </div>
          <div _ngcontent-ohc-c22="" id="left-menu" >
            <div _ngcontent-ohc-c22="" className="up-levels main" onClick={close}>
              <div
                _ngcontent-ohc-c22=""
                className="item-level-inplay item-level"
                onClick={handleInPlayClick}
                tabIndex={0}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  color: "#FFFFFF",
                  transition: "all 0.2s ease-in-out"
                }} >
                <div _ngcontent-ohc-c22="" className="sidebar-menu-icon live-icon" />
                <span _ngcontent-ohc-c22="">In Play</span>
                <span _ngcontent-ohc-c22="" className="badge ms-auto">
                  10
                </span>
              </div>
              <div
                _ngcontent-ohc-c22=""
                className="item-level-inplay item-level"
                tabIndex={0}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  color: "#FFFFFF",
                  transition: "all 0.2s ease-in-out"
                }}
                onClick={handleUpcomingClick}>
                <div _ngcontent-ohc-c22="" className="sidebar-menu-icon upcoming" />
                <span _ngcontent-ohc-c22="">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Upcoming</font>
                  </font>
                </span>
                <span _ngcontent-ohc-c22="" className="badge ms-auto">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>0</font>
                  </font>
                </span>
              </div>
              <div
                _ngcontent-ohc-c22=""
                className="item-level item-level-favorite"
                tabIndex={0}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  color: "#FFFFFF",
                  transition: "all 0.2s ease-in-out"
                }} onClick={handleFavouritesClick}>
                <div _ngcontent-ohc-c22="" className="sidebar-menu-icon favorite" />
                <span _ngcontent-ohc-c22="">Favourites</span>
                <span _ngcontent-ohc-c22="" className="badge ms-auto">
                  0
                </span>
              </div>

              <div
                _ngcontent-ohc-c22=""
                className="item-level0 active text-uppercase mb-1"
                style={{ color: "#FFFFFF" }}>
                Sports
              </div>
            </div>
            <div _ngcontent-ohc-c22="" className="downs-levels category">
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex"
                    onClick={toggleCricketSlider}
                  >
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image cricket"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Cricket
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      26
                    </span>
                  </div>
                </div>
                {isCricketSliderOpen && (
                  <Circketmodel close={close} />)}


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex" onClick={toggleSoccerSlider}>
                    <div _ngcontent-ohc-c22="" className="sports-icon-image soccer" />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Soccer
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      89
                    </span>
                  </div>
                </div>
                {isSoccerSliderOpen && (
                  <Sccore />)}


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex" onClick={toggletenishSlider}>
                    <div _ngcontent-ohc-c22="" className="sports-icon-image tennis" />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Tennis
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      58
                    </span>
                  </div>
                </div>
                {istenishSliderOpen && (
                  <Tenish />)}

              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex">
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image volleyball"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Volleyball
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      1
                    </span>
                  </div>
                </div>


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex" onClick={toggleHorsceSliderOpen}>
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image horse-racing"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Horse Racing
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      118
                    </span>
                  </div>

                </div>
                {isHorsceSliderOpen && (
                  <Houseracing close={close} />)}


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex">
                    <div _ngcontent-ohc-c22="" className="sports-icon-image boxing" />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Boxing
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>1</font>
                      </font>
                    </span>
                  </div>
                </div>


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex">
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image rugby-league"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Rugby League
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      2
                    </span>
                  </div>
                </div>


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex">
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image rugby-union"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Rugby Union
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      5
                    </span>
                  </div>
                </div>


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1">
                  <div _ngcontent-ohc-c22="" className="d-flex" onClick={togglePoliticsSliderOpen}>
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image politics"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase" style={{ color: "#FFFFFF" }}>
                      Politics
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>2</font>
                      </font>
                    </span>
                  </div>
                  {isPoliticsSliderOpen && (
                    <Politics close={close} />)}
                </div>


              </div>
              <div _ngcontent-ohc-c22="" className="level">
                <div _ngcontent-ohc-c22="" className="item-level1" style={{ color: "#FFFFFF" }}>
                  <div _ngcontent-ohc-c22="" className="d-flex">
                    <div
                      _ngcontent-ohc-c22=""
                      className="sports-icon-image greyhound-racing"
                    />
                    <span _ngcontent-ohc-c22="" className="text-uppercase">
                      Greyhound Racing
                    </span>
                    <span _ngcontent-ohc-c22="" className="badge">
                      166
                    </span>
                  </div>
                </div>


              </div>

            </div>


            <div _ngcontent-uas-c22="" className="downs-levels category">
              <div _ngcontent-uas-c22="" className="level">
                <div _ngcontent-uas-c22="" className="item-level1"
                >
                  <div _ngcontent-uas-c22="" className="d-flex cursor-pointer">
                    <div _ngcontent-uas-c22="" className="game-img blog-icon d-flex" >
                      <i
                        _ngcontent-uas-c22=""
                        className="fa fa-language d-flex align-items-center"
                      />
                    </div>
                    <select
                      _ngcontent-uas-c22=""
                      name="languages"
                      id="lang"
                      className="w-100 language-select goog-te-combo googletrans notranslate ml-0 ng-untouched ng-pristine ng-valid"
                      style={{
                        color: "#FFFFFF", fontSize: "14px",
                        fontWeight: "500",
                      }}>
                      <option _ngcontent-uas-c22="" value="en|en" >

                        English
                      </option>
                      <option _ngcontent-uas-c22="" value="en|hi">

                        Hindi
                      </option>
                      <option _ngcontent-uas-c22="" value="en|te">

                        Telugu
                      </option>
                      <option _ngcontent-uas-c22="" value="en|ta">

                        Tamil
                      </option>
                      <option _ngcontent-uas-c22="" value="en|kn">

                        Kannada
                      </option>
                      <option _ngcontent-uas-c22="" value="en|mr">

                        Marathi
                      </option>
                      <option _ngcontent-uas-c22="" value="en|gu">

                        Gujarati
                      </option>
                      {/**/}
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      )}



    </>
  )
}

export default Insidebar
