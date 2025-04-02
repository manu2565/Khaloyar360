import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Upcoming from './Upcoming';
import Homecomponent from './Homecomponent';
import Inhome from './Inhome'; // Import the Inhome component
import Profileheader from './Profileheader';
// import Inplay from '../Inplay';
// import Inplaymodel from './Inplaymodel';

function Inheader({ toggleSidebar, theme, toggleTheme, setActiveComponent }) {
  const [isSliderOpen, setIsSliderOpen] = useState(false);


  // const showHomeComponent = () => setActiveComponent('home');
  // const showUpcomingComponent = () => setActiveComponent('upcoming');

  // const closeComponent = () => setActiveComponent(null);

  // Handle sidebar click
  const handleInPlayClick = () => {
    setActiveComponent('home'); // Set active component to Inplay
  };

  const handleUpcomingClick = () => {
    setActiveComponent('inplay'); // Set active component to Upcoming
  };

  const handleFavouritesClick = () => {
    setActiveComponent('upcoming'); // Set active component to Favourites
  };


  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };


  return (
    <>
      <header _ngcontent-jgr-c22="" >
        <nav
          _ngcontent-jgr-c22=""
          className="navbar navbar-expand navbar-light bg-faded nav-height"
        >
          <Link
            _ngcontent-jgr-c22=""
            to=""
            className="menu-icon"
            onClick={toggleSidebar}
          >
            <svg
              _ngcontent-jgr-c22=""
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="18pt"
              height="18pt"
              viewBox="0 0 18 18"
              version="1.1"
            >
              <g _ngcontent-jgr-c22="" id="surface1">
                <path
                  _ngcontent-jgr-c22=""
                  d="M 0 9.28125 C 0 8.578125 0.578125 7.996094 1.28125 7.996094 L 16.863281 7.996094 C 17.566406 7.996094 18.144531 8.578125 18.144531 9.28125 C 18.144531 9.984375 17.566406 10.5625 16.863281 10.5625 L 1.28125 10.5625 C 0.578125 10.5625 0 9.984375 0 9.28125 Z M 0 2.453125 C 0 1.75 0.578125 1.171875 1.28125 1.171875 L 16.863281 1.171875 C 17.566406 1.171875 18.144531 1.75 18.144531 2.453125 C 18.144531 3.15625 17.566406 3.730469 16.863281 3.730469 L 1.28125 3.730469 C 0.578125 3.730469 0 3.15625 0 2.453125 Z M 0 15.691406 C 0 14.988281 0.578125 14.414062 1.28125 14.414062 L 16.863281 14.414062 C 17.566406 14.414062 18.144531 14.988281 18.144531 15.691406 C 18.144531 16.394531 17.566406 16.972656 16.863281 16.972656 L 1.28125 16.972656 C 0.578125 16.972656 0 16.394531 0 15.691406 Z M 0 15.691406 "
                  style={{
                    stroke: 'none',
                    fillRule: 'nonzero',
                    fillOpacity: 1,
                  }}
                />
              </g>
            </svg>
          </Link>

          <ul _ngcontent-jgr-c22="" className="navbar-nav mr-autod-lg-flex pl-5">
            <li
              _ngcontent-jgr-c22=""
              routerlink="/exchange/lobby"
              routerlinkactive="selected-tab"
              className="nav-item home-sports py-0 pointer"
              tabIndex={0}
            >
              <Link
                to="#"
                _ngcontent-jgr-c22=""
                className="nav-link"
                onClick={handleInPlayClick}
              >
                Home
              </Link>
            </li>

            <li
              _ngcontent-jgr-c22=""
              routerlink="/exchange/inplay"
              routerlinkactive="selected-tab"
              className="nav-item py-0 pointer selected-tab"
              tabIndex={0}
            >
              <Link
                _ngcontent-jgr-c22=""
                className="nav-link"
                onClick={handleUpcomingClick}
              >
                In-Play
              </Link>
            </li>
            <li
              _ngcontent-jgr-c22=""
              routerlink="/upcoming"
              routerlinkactive="selected-tab"
              className="d-none d-sm-flex nav-item pointer py-0"
              tabIndex={0}
            >
              <Link
                to="#"
                _ngcontent-jgr-c22=""
                className="nav-link"
                onClick={handleFavouritesClick}
              >
                Upcoming
              </Link>
            </li>
          </ul>

          <ul _ngcontent-qeq-c22="" className="navbar-nav ml-auto">
            <li _ngcontent-qeq-c22="" className="nav-item d-lg-flex dateTime">
              <span _ngcontent-qeq-c22="" className="date">
                <i _ngcontent-qeq-c22="" className="far fa-clock mr-1" /> Sat Feb 8,
                2025&nbsp;
              </span>
              <span _ngcontent-qeq-c22="" className="time">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>11:57:20&nbsp;</font>
                </font>
                <span _ngcontent-qeq-c22="">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>IST</font>
                  </font>
                </span>
              </span>
            </li>
            <li
              _ngcontent-qeq-c22=""
              className="position-relative balance-wallate pointer dropdown"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center"
              }}>
              <Link _ngcontent-qeq-c22="" style={{ fontSize: "12px" }}>



                <span _ngcontent-qik-c22="" className="svg-icon">
                  <svg
                    _ngcontent-qik-c22=""
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="transparent"
                    className="fill-trans"
                  >
                    <path
                      _ngcontent-qik-c22=""
                      d="M15.6741 11.8635C15.2775 12.2507 15.0509 12.8078 15.1075 13.4027C15.1925 14.4225 16.1273 15.1685 17.1472 15.1685H18.9413V16.2922C18.9413 18.2468 17.3455 19.8427 15.3908 19.8427H4.55049C2.59583 19.8427 1 18.2468 1 16.2922V9.93721C1 7.98256 2.59583 6.38672 4.55049 6.38672H15.3908C17.3455 6.38672 18.9413 7.98256 18.9413 9.93721V11.297H17.0338C16.505 11.297 16.0235 11.5047 15.6741 11.8635Z"
                      stroke="var(--balance-txt)"
                      fill="transparent"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      _ngcontent-qik-c22=""
                      d="M1 10.7869V6.47157C1 5.34788 1.68932 4.34691 2.73747 3.95031L10.235 1.11747C11.4059 0.673663 12.6618 1.54243 12.6618 2.79832V6.38656"
                      stroke="var(--balance-txt)"
                      fill="transparent"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      _ngcontent-qik-c22=""
                      d="M19.9449 12.261V14.2062C19.9449 14.7256 19.5294 15.1505 19.0006 15.1694H17.1498C16.13 15.1694 15.1952 14.4234 15.1102 13.4036C15.0535 12.8087 15.2801 12.2515 15.6767 11.8644C16.0261 11.5056 16.5077 11.2979 17.0365 11.2979H19.0006C19.5294 11.3167 19.9449 11.7416 19.9449 12.261Z"
                      stroke="var(--balance-txt)"
                      fill="transparent"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      _ngcontent-qik-c22=""
                      d="M5.25 10.4004H11.8599"
                      stroke="var(--balance-txt)"
                      fill="transparent"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span _ngcontent-qik-c22="" className="balance">
                  <span _ngcontent-qik-c22="" className="bal-val">
                    {" "}
                    0.00
                  </span>
                  <i _ngcontent-qik-c22="" className="fas fa-redo-alt mr-2 pl-1 pointer" />
                </span>

              </Link>
              <Link _ngcontent-qeq-c22="" style={{ fontSize: "12px" }}>
                <i
                  _ngcontent-qeq-c22=""
                  className="fa-chevron-down fas float-right mt-2 pointer balance-icon-bg p-lg-1 p-md-0"
                />
              </Link>


            </li>


            <li _ngcontent-qeq-c22="" className="nav-item dropdown show">
              <Link
                _ngcontent-qeq-c22=""
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                to=""
                className="nav-link dropdown-toggle my-account p-0"
                onClick={toggleSlider}>
                <div _ngcontent-qeq-c22="" className="justify-content-end d-flex">
                  <i _ngcontent-qeq-c22="" className="fa fa-user user-icon bg-svg" />
                </div>
                <div _ngcontent-qeq-c22="" className="user-name">
                  <div _ngcontent-qeq-c22="" className="marquee">
                    <marquee
                      _ngcontent-qeq-c22=""
                      scrollamount={1}
                      className="marquee-inner"
                    >

                      user223419
                    </marquee>
                  </div>
                </div>
              </Link>
              {isSliderOpen && (
                <Profileheader setActiveComponent={setActiveComponent} />)}
            </li>

          </ul>


        </nav>
      </header>

      {/* Conditional rendering based on active component
      {activeComponent === 'home' && <Homecomponent closecode={closeComponent} />}
      {activeComponent === 'upcoming' && <Upcoming closecode={closeComponent} />}
      {activeComponent === 'homepages' && <Inhome closecode={closeComponent} />} */}

    </>
  );
}

export default Inheader;
