import React from 'react'
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';


function Profileheader({ closeSlider, setActiveComponent }) {


  const handleprofit = () => {
    setActiveComponent('profit'); // Set active component to Inplay
  };

  const handleResult = () => {
    setActiveComponent('result'); // Set active component to Upcoming
  };




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSlider();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSlider]);


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
      {isSidebarOpen && (<div
        _ngcontent-qeq-c22=""
        aria-labelledby="dropdownId"
        className="dropdown-menu dropdown-menu-right show"
        ref={sidebarRef}>
        <h6 _ngcontent-qeq-c22="" className="dropdown-header" style={{
          padding: "0 10px",
          fontSize: "15px",
          fontWeight: "bolder",
          color: "#FFFFFF",
          transition: "all 0.4s",
          display: "block",

          marginBottom: "0",

        }}>
          user223419
        </h6>
        <div _ngcontent-qeq-c22="" className="dropdown-divider" />
        <div
          _ngcontent-qeq-c22=""
          className="row m-0 d-flex d-lg-none"
          style={{ fontSize: "13px", borderBottom: "1px solid var(--8a8a8a-black)" }}
        >
          <div
            _ngcontent-qeq-c22=""
            className="col-6 text-center"
            style={{ borderRight: "1px solid var(--8a8a8a-black)" }}
          >
            <span
              _ngcontent-qeq-c22=""
              className="title"
              style={{ color: "var(--primary-font-color)" }}
            >
              <strong _ngcontent-qeq-c22="">Balance</strong>
            </span>
            <br _ngcontent-qeq-c22="" />
            <span
              _ngcontent-qeq-c22=""
              className="bal-val"
              style={{ color: "var(--primary-font-color)" }}
            >
              0.04
            </span>
          </div>
          <div _ngcontent-qeq-c22="" className="col-6 text-center">
            <span
              _ngcontent-qeq-c22=""
              className="title"
              style={{ color: "var(--primary-font-color)" }}
            >
              <strong _ngcontent-qeq-c22="">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Outstanding</font>
                </font>
              </strong>
            </span>
            <br _ngcontent-qeq-c22="" />
            <span
              _ngcontent-qeq-c22=""
              className="lia-val"
              style={{ color: "var(--primary-font-color)" }}
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}> 0.00</font>
              </font>
            </span>
          </div>
        </div>
        <a
          _ngcontent-qeq-c22=""
          routerlink="#"
          className="dropdown-item"
          href="#"
          onClick={handleprofit}>
          <svg
            _ngcontent-qeq-c22=""
            width={11}
            height={11}
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-qeq-c22=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H0.6875V10.3125H11V11H0V0ZM6.875 2.40625C6.875 2.31508 6.91122 2.22765 6.97568 2.16318C7.04015 2.09872 7.12758 2.0625 7.21875 2.0625H9.96875C10.0599 2.0625 10.1474 2.09872 10.2118 2.16318C10.2763 2.22765 10.3125 2.31508 10.3125 2.40625V5.15625C10.3125 5.24742 10.2763 5.33485 10.2118 5.39932C10.1474 5.46378 10.0599 5.5 9.96875 5.5C9.87758 5.5 9.79015 5.46378 9.72568 5.39932C9.66122 5.33485 9.625 5.24742 9.625 5.15625V3.36875L7.14106 6.40544C7.11065 6.44255 7.07281 6.47289 7.02997 6.4945C6.98713 6.51611 6.94025 6.52851 6.89232 6.53091C6.8444 6.5333 6.79651 6.52564 6.75173 6.50841C6.70695 6.49118 6.66627 6.46477 6.63231 6.43088L4.85375 4.65231L2.34025 8.10837C2.28527 8.17829 2.20532 8.22417 2.11721 8.23638C2.02911 8.24858 1.9397 8.22616 1.86778 8.17382C1.79586 8.12149 1.74703 8.04331 1.73154 7.95572C1.71606 7.86813 1.73513 7.77795 1.78475 7.70413L4.53475 3.92287C4.56394 3.88267 4.6015 3.84926 4.64484 3.82497C4.68818 3.80067 4.73627 3.78606 4.7858 3.78214C4.83534 3.77822 4.88513 3.78508 4.93175 3.80226C4.97838 3.81943 5.02072 3.84651 5.05588 3.88162L6.84956 5.676L9.24344 2.75H7.21875C7.12758 2.75 7.04015 2.71378 6.97568 2.64932C6.91122 2.58485 6.875 2.49742 6.875 2.40625Z"
              fill="#012984"
            />
          </svg>
          Profit &amp; Loss
        </a>
        <a
          _ngcontent-qeq-c22=""
          routerlink="/exchange/results"
          className="dropdown-item"
          href="#"
          onClick={handleResult}>
          <svg
            _ngcontent-qeq-c22=""
            width={11}
            height={12}
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-qeq-c22=""
              d="M2.04651 1.375C2.04651 1.01033 2.19475 0.660591 2.45861 0.402728C2.72246 0.144866 3.08033 0 3.45349 0H7.54651C7.91967 0 8.27754 0.144866 8.54139 0.402728C8.80525 0.660591 8.95349 1.01033 8.95349 1.375V1.5H10.1047C10.5989 1.5 11 1.892 11 2.375V3.875C11 4.43677 10.7724 4.97569 10.3669 5.3739C9.96147 5.77212 9.41115 5.99722 8.83633 6C8.65596 6.6553 8.27782 7.24233 7.75117 7.68459C7.22451 8.12686 6.57377 8.40386 5.88372 8.4795V9.5H7.2907C7.7317 9.5 8.15463 9.6712 8.46647 9.97595C8.7783 10.2807 8.95349 10.694 8.95349 11.125V11.375C8.95349 11.72 8.66698 12 8.31395 12H2.68605C2.33302 12 2.04651 11.72 2.04651 11.375V11.125C2.04651 10.694 2.2217 10.2807 2.53353 9.97595C2.84537 9.6712 3.2683 9.5 3.7093 9.5H5.11628V8.4795C4.42616 8.40382 3.77537 8.12675 3.24872 7.68439C2.72206 7.24203 2.34395 6.6549 2.16367 5.9995C1.58894 5.99672 1.0387 5.77169 0.63325 5.37358C0.227802 4.97547 0.000128218 4.43668 0 3.875V2.375C0 1.892 0.401116 1.5 0.895349 1.5H2.04651V1.375ZM2.04651 2.25H0.895349C0.861426 2.25 0.828892 2.26317 0.804905 2.28661C0.780918 2.31005 0.767442 2.34185 0.767442 2.375V3.875C0.767311 4.21847 0.898721 4.54955 1.13581 4.80309C1.37291 5.05663 1.69851 5.21428 2.04856 5.245C2.04716 5.20501 2.04648 5.16501 2.04651 5.125V2.25ZM8.95144 5.245C9.30149 5.21428 9.62709 5.05663 9.86419 4.80309C10.1013 4.54955 10.2327 4.21847 10.2326 3.875V2.375C10.2326 2.34185 10.2191 2.31005 10.1951 2.28661C10.1711 2.26317 10.1386 2.25 10.1047 2.25H8.95349V5.125C8.95349 5.165 8.95298 5.205 8.95144 5.245V5.245ZM3.45349 0.75C3.10047 0.75 2.81395 1.03 2.81395 1.375V5.125C2.81395 5.46972 2.88343 5.81106 3.01842 6.12954C3.1534 6.44802 3.35126 6.7374 3.60068 6.98116C3.8501 7.22491 4.14621 7.41827 4.47209 7.55018C4.79798 7.6821 5.14726 7.75 5.5 7.75C5.85274 7.75 6.20202 7.6821 6.52791 7.55018C6.85379 7.41827 7.1499 7.22491 7.39932 6.98116C7.64874 6.7374 7.8466 6.44802 7.98158 6.12954C8.11657 5.81106 8.18605 5.46972 8.18605 5.125V1.375C8.18605 1.03 7.89953 0.75 7.54651 0.75H3.45349ZM2.81395 11.125V11.25H8.18605V11.125C8.18605 10.8929 8.09172 10.6704 7.9238 10.5063C7.75589 10.3422 7.52816 10.25 7.2907 10.25H3.7093C3.47184 10.25 3.24411 10.3422 3.07619 10.5063C2.90828 10.6704 2.81395 10.8929 2.81395 11.125Z"
              fill="#012984"
            />
          </svg>
          Results
        </a>
        <a
          _ngcontent-qeq-c22=""
          href="#"
          className="dropdown-item"
        >
          <svg
            _ngcontent-qeq-c22=""
            width={14}
            height={13}
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-qeq-c22=""
              d="M6.28127 3C6.20668 3 6.13514 3.03687 6.0824 3.10251C6.02965 3.16815 6.00002 3.25717 6.00002 3.35C6.00002 3.44282 6.02965 3.53185 6.0824 3.59749C6.13514 3.66312 6.20668 3.7 6.28127 3.7H7.31251C7.64363 3.7 7.9305 3.938 8.06849 4.28333H6.28127C6.20668 4.28333 6.13514 4.3202 6.0824 4.38584C6.02965 4.45148 6.00002 4.5405 6.00002 4.63333C6.00002 4.72615 6.02965 4.81518 6.0824 4.88081C6.13514 4.94645 6.20668 4.98333 6.28127 4.98333H8.13524C8.09275 5.21532 7.98821 5.42248 7.83873 5.57085C7.68925 5.71923 7.50371 5.80002 7.31251 5.79999H6.28127C6.22736 5.79999 6.17458 5.81926 6.12922 5.85553C6.08387 5.89179 6.04784 5.94352 6.02544 6.00454C6.00303 6.06556 5.99519 6.13332 6.00285 6.19973C6.01052 6.26614 6.03335 6.32841 6.06865 6.37912L8.50611 9.87911C8.55495 9.94929 8.62418 9.99245 8.69858 9.9991C8.77299 10.0058 8.84647 9.97535 8.90286 9.91458C8.95925 9.85381 8.99393 9.76765 8.99928 9.67506C9.00462 9.58246 8.98019 9.49102 8.93136 9.42085L6.89701 6.49999H7.31251C7.65301 6.50004 7.98197 6.34634 8.23831 6.06742C8.49465 5.78849 8.66096 5.40329 8.70636 4.98333H8.71874C8.79333 4.98333 8.86486 4.94645 8.91761 4.88081C8.97035 4.81518 8.99998 4.72615 8.99998 4.63333C8.99998 4.5405 8.97035 4.45148 8.91761 4.38584C8.86486 4.3202 8.79333 4.28333 8.71874 4.28333H8.66811C8.6213 4.07262 8.54307 3.87473 8.43749 3.7H8.71874C8.79333 3.7 8.86486 3.66312 8.91761 3.59749C8.97035 3.53185 8.99998 3.44282 8.99998 3.35C8.99998 3.25717 8.97035 3.16815 8.91761 3.10251C8.86486 3.03687 8.79333 3 8.71874 3H6.28127Z"
              fill="#012984"
            />
            <path
              _ngcontent-qeq-c22=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 0.837209C4.15026 0.837209 1.83721 3.15026 1.83721 6C1.83721 8.84974 4.15026 11.1628 7 11.1628C9.84974 11.1628 12.1628 8.84974 12.1628 6C12.1628 5.76881 12.3502 5.5814 12.5814 5.5814C12.8126 5.5814 13 5.76881 13 6C13 9.31212 10.3121 12 7 12C3.68788 12 1 9.31212 1 6C1 2.68788 3.68788 0 7 0C7.23119 0 7.4186 0.187416 7.4186 0.418605C7.4186 0.649794 7.23119 0.837209 7 0.837209Z"
              fill="#012984"
            />
            <path
              _ngcontent-qeq-c22=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4091 1C10.635 1 10.8182 1.18316 10.8182 1.40909V3.18182H12.5909C12.8168 3.18182 13 3.36497 13 3.59091C13 3.81684 12.8168 4 12.5909 4H10.4091C10.1832 4 10 3.81684 10 3.59091V1.40909C10 1.18316 10.1832 1 10.4091 1Z"
              fill="#012984"
            />
            <path
              _ngcontent-qeq-c22=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8986 0.135181C13.0338 0.315423 13.0338 0.607653 12.8986 0.787895L10.5909 3.86482C10.4557 4.04506 10.2366 4.04506 10.1014 3.86482C9.9662 3.68458 9.9662 3.39235 10.1014 3.2121L12.4091 0.135181C12.5443 -0.0450605 12.7634 -0.0450605 12.8986 0.135181Z"
              fill="#012984"
            />
          </svg>
          Chip Settings
        </a>
        <ThemeToggle />
      </div>)}


    </>
  )
}

export default Profileheader
