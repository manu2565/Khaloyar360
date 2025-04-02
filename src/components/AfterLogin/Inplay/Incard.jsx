import React, { useEffect, useState, useRef } from "react";

import Insidebar from "./Insidebar";
import Inheader from "./Inheader";
import Scorecardclik from '../Scoreboard/Scorecardclik';
import { ThemeProvider } from './ThemeContext';
import Infooter from "./Infooter";
import '../Inplay.css';
function Incard() {


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
    <>
      <ThemeProvider>
        <div className="bg-white dark:bg-[#2b2b2b] text-black dark:text-white min-h-screen flex justify-center items-center">
          <app-root _nghost-jgr-c21="" ng-version="15.2.10">
            <div _nghost-jgr-c22="">
              <div _ngcontent-jgr-c22="" className="main-wrapper">
                <Inheader
                  toggleSidebar={toggleSidebar}
                  theme={theme}
                  setActiveComponent={setActiveComponent}
                />
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



                    < Scorecardclik />
                  </div>
                </div>

              </div>
              <Infooter />
            </div>
          </app-root>

        </div>
      </ThemeProvider>
    </>
  )
}

export default Incard
