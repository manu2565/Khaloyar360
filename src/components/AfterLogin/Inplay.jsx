import React, { useEffect, useState, useRef } from "react";
import "./Inplay.css";
import Insidebar from './Inplay/Insidebar';
import Inheader from './Inplay/Inheader';
import Inhome from "./Inplay/Inhome";
import Upcoming from "./Inplay/Upcoming";
import Favarite from "./Inplay/Favarite";
import { Outlet } from "react-router-dom";
import Homecomponent from "./Inplay/Homecomponent";
import Scorecardclik from "./Scoreboard/Scorecardclik";
import { ThemeProvider } from "./Inplay/ThemeContext";
import ThemeToggle from "./Inplay/ThemeToggle";
import Profitandlose from "./Profileheader/Profitandlose";
import Result from "./Profileheader/Result";
import Infooter from "./Inplay/Infooter";
function Inplay() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('inplay');
  const [scoreactive, setScoreactive] = useState('scorecard');

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const sidebarRef = useRef(null); // Reference to the sidebar


  const closeside = () => setSidebarOpen(false);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);

    localStorage.setItem("theme", theme);
  }, [theme]);



  return (
    <ThemeProvider>
      <div _ngcontent-ng-c344788945="" className="px-lg-3 content-with-news" style={{ position: "relative" }}>

        <router-outlet _ngcontent-ng-c344788945="" />
        <app-exchange _nghost-ng-c13408005 className="ng-star-inserted">
          <div _ngcontent-ng-c13408005 className="position-relative">
            <div _ngcontent-ng-c13408005 className="iframe-wrapper ng-star-inserted">
              <div style={{ position: "relative", minHeight: "100%", top: "0px" }}>
                <div className="bg-white dark:bg-[#2b2b2b] text-black dark:text-white min-h-screen flex justify-center items-center">
                  <app-root _nghost-jgr-c21="" ng-version="15.2.10">
                    <div _nghost-jgr-c22="">
                      <div _ngcontent-jgr-c22="" className="main-wrapper" >
                        <Inheader
                          toggleSidebar={toggleSidebar}
                          theme={theme}
                          setActiveComponent={setActiveComponent}
                          style={{ marginTop: "-10px" }} />
                        <div
                          _ngcontent-kea-c22=""
                          className="container-main d-flex left-menu-active justify-content-end"
                        >
                          {isSidebarOpen && (
                            <Insidebar
                              close={closeside}
                              setActiveComponent={setActiveComponent}
                              theme={theme}
                            />
                          )}

                          <div
                            _ngcontent-kea-c22=""
                            className="main-content-wrapper container-fluid p-0 m-0"
                          >


                            {activeComponent === "inplay" && <Homecomponent setActiveComponent={setActiveComponent} />}
                            {activeComponent === "home" && <Inhome />}
                            {activeComponent === "profit" && <Profitandlose />}
                            {activeComponent === "result" && <Result />}

                            {activeComponent === 'upcoming' && <Upcoming />}
                            {activeComponent === 'favourites' && <Favarite />}
                            {activeComponent === "scorecard" && < Scorecardclik />}
                          </div>
                        </div>

                      </div>
                      <Infooter />
                    </div>
                  </app-root>

                </div>
              </div>
            </div>
          </div>

        </app-exchange>
      </div>
    </ThemeProvider>
  );
}

export default Inplay;
