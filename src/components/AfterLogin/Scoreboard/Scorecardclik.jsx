import { useState } from 'react';
import React from 'react'
import './Scocorecard.css'
import Scoredmethod from './Scoredmethod';

function Scorecardclik() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issmallmethod, setIsSmallmethod] = useState(false)

  const handleclick = () => {
    setIsSmallmethod(!issmallmethod);
  }

  return (
    <div
      _ngcontent-kea-c22=""
      className="container-main d-flex left-menu-active justify-content-end"
    >


      <div
        _ngcontent-kea-c22=""
        className="main-content-wrapper container-fluid p-0 m-0 fullWidthChange"
      >
        <div _ngcontent-kea-c22="" className="row main-body">
          <div _ngcontent-kea-c22="" className="col-12 p-0">
            <div _ngcontent-kea-c22="" className="main-content m-0">
              <router-outlet _ngcontent-kea-c22="" />
              <app-market _nghost-vnv-c43="">
                <div
                  _ngcontent-vnv-c43=""
                  className="row m-0 div-scroll"
                  style={{ overflow: "scroll" }}
                >
                  <div _ngcontent-vnv-c43="" className="col-12 col-lg-12 p-0">
                    <div _ngcontent-vnv-c43="" className="row m-0 no-gutters">
                      <div _ngcontent-vnv-c43="" className="col-lg-8 col-md-12">
                        <div _ngcontent-vnv-c43="" className="highlight-page market">
                          <div _ngcontent-vnv-c43="" className="team-names col-12 px-2 mb-2">
                            <div _ngcontent-vnv-c43="" className="match-container d-flex">
                              <div _ngcontent-vnv-c43="" className="live-status ml-2">
                                <img
                                  _ngcontent-vnv-c43=""
                                  width={20}
                                  src="assets/images/in-play-events-icon.png"
                                  alt=""
                                />
                                LIVE
                              </div>

                              <div _ngcontent-vnv-c43="" className="w-100">
                                <div _ngcontent-vnv-c43="" className="match-date">

                                  <span _ngcontent-vnv-c43="" style={{ fontSize: 13 }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Feb 6, 10:00 AM
                                      </font>
                                    </font>
                                  </span>

                                </div>
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="match-teams row m-0 mt-1"
                                >
                                  <span _ngcontent-vnv-c43="" className="col p-0 text-right">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Sri Lanka
                                      </font>
                                    </font>
                                  </span>
                                  <div _ngcontent-vnv-c43="" className="vs-circle mx-2">
                                    <div
                                      _ngcontent-vnv-c43=""
                                      style={{ transform: "rotateZ(-320deg)" }}
                                    >
                                      VS
                                    </div>
                                  </div>
                                  <span _ngcontent-vnv-c43="" className="col p-0 text-left">
                                    Australia
                                  </span>
                                </div>
                                <div _ngcontent-vnv-c43="" className="match-type mt-1">
                                  Test Matches
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-vnv-c43="" className="col-12 px-2 mb-2">
                            <div
                              _ngcontent-vnv-c43=""
                              className="btn-group-market text-center"
                            >
                              <div _ngcontent-vnv-c43="" className="market-button">

                                <button
                                  _ngcontent-vnv-c43=""
                                  type="button"
                                  className="btn-tv-score"
                                >
                                  <svg
                                    _ngcontent-vnv-c43=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={16}
                                    viewBox="0 0 17 16"
                                    fill="none"
                                  >
                                    <path
                                      _ngcontent-vnv-c43=""
                                      d="M15.4259 3.69472H10.7824L12.9483 1.57821C13.1258 1.40484 13.2254 1.16969 13.2254 0.924497C13.2254 0.679305 13.1258 0.444156 12.9483 0.270779C12.7709 0.097402 12.5303 0 12.2794 0C12.0284 0 11.7878 0.097402 11.6104 0.270779L8.5 3.31018L5.39042 0.273086C5.21299 0.0997093 4.97235 0.00230722 4.72144 0.00230722C4.47052 0.00230722 4.22988 0.0997093 4.05245 0.273086C3.87503 0.446463 3.77535 0.681612 3.77535 0.926804C3.77535 1.172 3.87503 1.40714 4.05245 1.58052L6.21759 3.69472H1.57407C1.1566 3.69472 0.756232 3.85678 0.461036 4.14524C0.165839 4.4337 0 4.82494 0 5.23288V14.4618C0 14.8698 0.165839 15.261 0.461036 15.5495C0.756232 15.8379 1.1566 16 1.57407 16H15.4259C15.8434 16 16.2438 15.8379 16.539 15.5495C16.8342 15.261 17 14.8698 17 14.4618V5.23288C17 4.82494 16.8342 4.4337 16.539 4.14524C16.2438 3.85678 15.8434 3.69472 15.4259 3.69472ZM1.88889 5.54051H8.5V14.1542H1.88889V5.54051ZM15.1111 14.1542H10.3889V5.54051H15.1111V14.1542ZM11.6481 8.00157C11.6481 7.75819 11.722 7.52028 11.8604 7.31792C11.9987 7.11557 12.1954 6.95785 12.4255 6.86471C12.6556 6.77157 12.9088 6.74721 13.1531 6.79469C13.3973 6.84217 13.6217 6.95936 13.7978 7.13146C13.9739 7.30355 14.0939 7.52281 14.1425 7.76151C14.1911 8.00021 14.1661 8.24762 14.0708 8.47247C13.9755 8.69732 13.8141 8.8895 13.607 9.02472C13.3999 9.15993 13.1565 9.2321 12.9074 9.2321C12.5734 9.2321 12.2531 9.10245 12.017 8.87168C11.7808 8.64091 11.6481 8.32793 11.6481 8.00157ZM14.1667 11.6932C14.1667 11.9365 14.0928 12.1744 13.9544 12.3768C13.8161 12.5792 13.6194 12.7369 13.3893 12.83C13.1592 12.9231 12.906 12.9475 12.6617 12.9C12.4175 12.8526 12.1931 12.7354 12.017 12.5633C11.8409 12.3912 11.7209 12.1719 11.6723 11.9332C11.6238 11.6945 11.6487 11.4471 11.744 11.2222C11.8393 10.9974 12.0007 10.8052 12.2078 10.67C12.4149 10.5348 12.6583 10.4626 12.9074 10.4626C13.2414 10.4626 13.5617 10.5923 13.7978 10.823C14.034 11.0538 14.1667 11.3668 14.1667 11.6932Z"
                                    />
                                  </svg>
                                  Live Tv
                                </button>


                                <button
                                  _ngcontent-vnv-c43=""
                                  type="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  className="btn-tv-score"
                                  data-target="#scorecard0"
                                  aria-controls="scorecard0"
                                >
                                  <svg
                                    _ngcontent-vnv-c43=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={16}
                                    viewBox="0 0 12 16"
                                    fill="none"
                                  >
                                    <path
                                      _ngcontent-vnv-c43=""
                                      d="M3 5.6C3 5.81217 3.07902 6.01566 3.21967 6.16569C3.36032 6.31571 3.55109 6.4 3.75 6.4H8.25C8.44891 6.4 8.63968 6.31571 8.78033 6.16569C8.92098 6.01566 9 5.81217 9 5.6C9 5.38783 8.92098 5.18434 8.78033 5.03431C8.63968 4.88429 8.44891 4.8 8.25 4.8H3.75C3.55109 4.8 3.36032 4.88429 3.21967 5.03431C3.07902 5.18434 3 5.38783 3 5.6ZM3.75 9.6C3.55109 9.6 3.36032 9.51571 3.21967 9.36569C3.07902 9.21566 3 9.01217 3 8.8C3 8.58783 3.07902 8.38434 3.21967 8.23431C3.36032 8.08429 3.55109 8 3.75 8H8.25C8.44891 8 8.63968 8.08429 8.78033 8.23431C8.92098 8.38434 9 8.58783 9 8.8C9 9.01217 8.92098 9.21566 8.78033 9.36569C8.63968 9.51571 8.44891 9.6 8.25 9.6H3.75ZM3 12C3 12.2122 3.07902 12.4157 3.21967 12.5657C3.36032 12.7157 3.55109 12.8 3.75 12.8H5.25C5.44891 12.8 5.63968 12.7157 5.78033 12.5657C5.92098 12.4157 6 12.2122 6 12C6 11.7878 5.92098 11.5843 5.78033 11.4343C5.63968 11.2843 5.44891 11.2 5.25 11.2H3.75C3.55109 11.2 3.36032 11.2843 3.21967 11.4343C3.07902 11.5843 3 11.7878 3 12ZM3 0.8C3 0.587827 3.07902 0.384344 3.21967 0.234315C3.36032 0.0842854 3.55109 0 3.75 0C3.94891 0 4.13968 0.0842854 4.28033 0.234315C4.42098 0.384344 4.5 0.587827 4.5 0.8V1.6H7.5V0.8C7.5 0.587827 7.57902 0.384344 7.71967 0.234315C7.86032 0.0842854 8.05109 0 8.25 0C8.44891 0 8.63968 0.0842854 8.78033 0.234315C8.92098 0.384344 9 0.587827 9 0.8V1.6C9.79565 1.6 10.5587 1.93714 11.1213 2.53726C11.6839 3.13737 12 3.95131 12 4.8V11.2L7.5 16H3C2.20435 16 1.44129 15.6629 0.87868 15.0627C0.31607 14.4626 0 13.6487 0 12.8V4.8C0 3.95131 0.31607 3.13737 0.87868 2.53726C1.44129 1.93714 2.20435 1.6 3 1.6V0.8ZM7.5 14.4V12C7.5 11.7878 7.57902 11.5843 7.71967 11.4343C7.86032 11.2843 8.05109 11.2 8.25 11.2H10.5V4.8C10.5 4.37565 10.342 3.96869 10.0607 3.66863C9.77936 3.36857 9.39782 3.2 9 3.2H3C2.60218 3.2 2.22064 3.36857 1.93934 3.66863C1.65804 3.96869 1.5 4.37565 1.5 4.8V12.8C1.5 13.2243 1.65804 13.6313 1.93934 13.9314C2.22064 14.2314 2.60218 14.4 3 14.4H7.5Z"
                                    />
                                  </svg>
                                  Scorecard
                                </button>

                                <span
                                  _ngcontent-vnv-c43=""
                                  className="act-back full-width hide-act"
                                />
                              </div>
                            </div>



                          </div>

                          <div _ngcontent-vnv-c43="" className="list-market">
                            <div _ngcontent-vnv-c43="" className="match-box">
                              <div _ngcontent-vnv-c43="" className="top-navbar-container">
                                <nav
                                  _ngcontent-vnv-c43=""
                                  className="navbar navbar-expand-sm overflow-auto p-0 d-flex justify-content-between"
                                >
                                  <ul _ngcontent-vnv-c43="" className="navbar-nav flex-row">
                                    <li _ngcontent-vnv-c43="" className="nav-item">
                                      <a _ngcontent-vnv-c43="" className="nav-link activeTp">

                                        All
                                      </a>
                                    </li>
                                    <li _ngcontent-vnv-c43="" className="nav-item">
                                      <a _ngcontent-vnv-c43="" className="nav-link">

                                        Match Odds
                                      </a>
                                    </li>
                                    <li _ngcontent-vnv-c43="" className="nav-item">
                                      <a _ngcontent-vnv-c43="" className="nav-link">

                                        Fancy
                                      </a>
                                    </li>
                                  </ul>


                                  <div
                                    _ngcontent-vnv-c43=""
                                    className="m-0 row one-click-accept-all"
                                  >
                                    <div
                                      _ngcontent-vnv-c43=""
                                      className="one-click mr-1 pointer one-click-act"
                                      onClick={handleclick}>
                                      <label _ngcontent-vnv-c43="" className="switch">
                                        <input
                                          _ngcontent-vnv-c43=""
                                          type="checkbox"
                                          className="ng-untouched ng-pristine ng-valid"
                                        />
                                        <span
                                          _ngcontent-vnv-c43=""
                                          className="slider round"
                                        />
                                      </label>
                                      <span _ngcontent-vnv-c43="" className="ml-2">
                                        1 Click Betting
                                      </span>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c43=""
                                      className="accept-all-odds pointer"
                                    >
                                      <label _ngcontent-vnv-c43="" className="switch">
                                        <input
                                          _ngcontent-vnv-c43=""
                                          type="checkbox"
                                          className="ng-valid ng-dirty ng-touched"
                                        />
                                        <span
                                          _ngcontent-vnv-c43=""
                                          className="slider round"
                                        />
                                      </label>
                                      <span _ngcontent-vnv-c43="" className="ml-2">
                                        Accept All Odds
                                      </span>
                                    </div>

                                  </div>
                                </nav>
                                {issmallmethod && (<div _ngcontent-vnv-c43="" className="row m-0">
                                  <div _ngcontent-vnv-c43="" className="col-12 p-0">
                                    <div
                                      _ngcontent-vnv-c43=""
                                      className="m-0 mt-2 row one-click-edit"
                                    >
                                      <div
                                        _ngcontent-vnv-c43=""
                                        className="one-click-in-edit my-1"
                                      >
                                        <label _ngcontent-vnv-c43="" className="switch">
                                          <input
                                            _ngcontent-vnv-c43=""
                                            type="checkbox"
                                            className="ng-untouched ng-pristine ng-valid"
                                          />
                                          <span
                                            _ngcontent-vnv-c43=""
                                            className="slider round"
                                          />
                                        </label>
                                        <span _ngcontent-vnv-c43="" className="ml-2">
                                          <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                              1 Click Betting
                                            </font>
                                          </font>
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c43="" className="d-flex my-1">
                                        <input
                                          _ngcontent-vnv-c43=""
                                          type="number"
                                          onkeypress="if(this.value.length==6) return false;if(event.key==='.'){event.preventDefault();}"
                                          className="input-rate selected-one-click-bet ng-untouched ng-pristine ng-valid"
                                          readOnly=""
                                        />

                                        <input
                                          _ngcontent-vnv-c43=""
                                          type="number"
                                          onkeypress="if(this.value.length==6) return false;if(event.key==='.'){event.preventDefault();}"
                                          className="input-rate ng-untouched ng-pristine ng-valid"
                                          readOnly=""
                                        />

                                        <input
                                          _ngcontent-vnv-c43=""
                                          type="number"
                                          onkeypress="if(this.value.length==6) return false;if(event.key==='.'){event.preventDefault();}"
                                          className="input-rate ng-untouched ng-pristine ng-valid"
                                          readOnly=""
                                        />



                                      </div>
                                      <span _ngcontent-vnv-c43="" className="my-1">
                                        <a _ngcontent-vnv-c43="" className="pointer btn-edit">
                                          <svg
                                            _ngcontent-vnv-c43=""
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={10}
                                            height={10}
                                            viewBox="0 0 10 10"
                                            fill="none"
                                          >
                                            <path
                                              _ngcontent-vnv-c43=""
                                              d="M2.14685 7.84741L4.51548 7.83931L9.68536 2.68864C9.88825 2.48456 9.99989 2.21353 9.99989 1.92522C9.99989 1.63692 9.88825 1.36588 9.68536 1.1618L8.83409 0.305517C8.42832 -0.102649 7.72036 -0.100489 7.3178 0.303897L2.14685 5.45564V7.84741ZM8.07514 1.06894L8.92802 1.9236L8.07085 2.77773L7.21958 1.92198L8.07514 1.06894ZM3.22033 5.90592L6.45687 2.68109L7.30814 3.53737L4.07214 6.76113L3.22033 6.76382V5.90592Z"
                                              fill="#FFC21D"
                                            />
                                            <path
                                              _ngcontent-vnv-c43=""
                                              d="M1.07348 9.99999H8.58784C9.17986 9.99999 9.66132 9.5157 9.66132 8.92019V4.24031L8.58784 5.32012V8.92019H2.7685C2.75455 8.92019 2.74006 8.92558 2.7261 8.92558C2.70839 8.92558 2.69068 8.92072 2.67243 8.92019H1.07348V1.36156H4.74854L5.82202 0.281754H1.07348C0.481456 0.281754 0 0.766046 0 1.36156V8.92019C0 9.5157 0.481456 9.99999 1.07348 9.99999Z"
                                              fill="#FFC21D"
                                            />
                                          </svg>
                                          <span _ngcontent-vnv-c43="" className="ml-1">
                                            Edit
                                          </span>
                                        </a>



                                      </span>

                                    </div>

                                  </div>
                                </div>)}

                              </div>

                              <div
                                _ngcontent-vnv-c43=""
                                className="market-info p-0 d-sm-block match-info market-wrapper-info position-relative mx-2 mt-4"
                              >
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="row m-0 f-14 pl-0 pr-0 pt-3 justify-content-between"
                                >
                                  <div
                                    _ngcontent-vnv-c43=""
                                    className="match-board-tournament-name"
                                  >
                                    <span
                                      _ngcontent-vnv-c43=""
                                      className="inplay m-0 inplay_name"
                                    >
                                      <span
                                        _ngcontent-vnv-c43=""
                                        className="align-items-center d-inline-flex"
                                      >
                                        <svg
                                          _ngcontent-vnv-c43=""
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={38}
                                          height={10}
                                          viewBox="0 0 38 10"
                                          fill="none"
                                        >
                                          <path
                                            _ngcontent-vnv-c43=""
                                            d="M2.80557 0.177697C2.75132 0.122129 2.6867 0.0778373 2.6154 0.047352C2.54411 0.0168667 2.46752 0.000785651 2.39003 2.80761e-05C2.31254 -0.000729499 2.23566 0.013851 2.16378 0.0429366C2.0919 0.0720222 2.02644 0.115043 1.97113 0.16954C1.34546 0.794072 0.849158 1.53681 0.510848 2.3549C0.172538 3.17299 -0.00108222 4.05025 5.07545e-06 4.93605C-0.0010097 5.85584 0.186274 6.76602 0.550232 7.61011C0.91419 8.4542 1.44705 9.21417 2.11575 9.84287C2.2283 9.94732 2.37697 10.0036 2.53019 9.99982C2.68341 9.99601 2.82912 9.93239 2.93638 9.82247C3.19313 9.56469 3.16144 9.15436 2.91444 8.91698C2.37778 8.40348 1.95073 7.78579 1.65922 7.10143C1.36772 6.41708 1.21786 5.68036 1.21875 4.93605C1.21875 3.43015 1.82082 2.06456 2.79744 1.07096C3.03306 0.830309 3.05744 0.430584 2.80557 0.177697ZM4.23638 1.61589C4.12937 1.50534 3.98308 1.44189 3.82956 1.43945C3.67605 1.437 3.52782 1.49576 3.41738 1.60284C2.97777 2.03842 2.62884 2.55743 2.39087 3.12966C2.15291 3.7019 2.03066 4.31594 2.03125 4.93605C2.03125 6.31632 2.62438 7.5571 3.56931 8.41528C3.68093 8.5141 3.82614 8.566 3.97484 8.56023C4.12353 8.55445 4.26432 8.49145 4.368 8.38428C4.6345 8.11671 4.58494 7.69578 4.33469 7.45921C3.99166 7.13546 3.71841 6.7445 3.53185 6.31052C3.34528 5.87653 3.24935 5.40873 3.25 4.93605C3.25 3.99792 3.62131 3.14626 4.225 2.52139C4.45738 2.28155 4.49556 1.8753 4.23638 1.61589ZM8.76362 1.61507C8.87063 1.50453 9.01692 1.44108 9.17044 1.43863C9.32395 1.43619 9.47218 1.49494 9.58262 1.60202C10.0223 2.0377 10.3713 2.55684 10.6093 3.12922C10.8473 3.70161 10.9694 4.3158 10.9687 4.93605C10.9687 6.31632 10.3756 7.5571 9.43069 8.41528C9.31907 8.5141 9.17386 8.566 9.02516 8.56023C8.87647 8.55445 8.73568 8.49145 8.632 8.38428C8.3655 8.11671 8.41506 7.69578 8.66531 7.45921C9.00834 7.13546 9.28159 6.7445 9.46815 6.31052C9.65472 5.87653 9.75065 5.40873 9.75 4.93605C9.75 3.99792 9.37869 3.14626 8.775 2.52139C8.54262 2.28155 8.50444 1.87449 8.76362 1.61507ZM10.1944 0.177697C10.2487 0.122129 10.3133 0.0778373 10.3846 0.047352C10.4559 0.0168667 10.5325 0.000785651 10.61 2.80761e-05C10.6875 -0.000729499 10.7643 0.013851 10.8362 0.0429366C10.9081 0.0720222 10.9736 0.115043 11.0289 0.16954C11.6545 0.794072 12.1508 1.53681 12.4892 2.3549C12.8275 3.17299 13.0011 4.05025 13 4.93605C13.001 5.85584 12.8137 6.76602 12.4498 7.61011C12.0858 8.4542 11.5529 9.21417 10.8842 9.84287C10.7717 9.94732 10.623 10.0036 10.4698 9.99982C10.3166 9.99601 10.1709 9.93239 10.0636 9.82247C9.80687 9.56469 9.83856 9.15436 10.0864 8.91698C10.6229 8.40341 11.0498 7.78568 11.3411 7.10133C11.6325 6.41698 11.7822 5.6803 11.7812 4.93605C11.7812 3.43015 11.1792 2.06456 10.2026 1.07096C9.96694 0.830309 9.94256 0.430584 10.1944 0.177697ZM6.5 3.7124C6.17677 3.7124 5.86677 3.84132 5.63821 4.0708C5.40965 4.30028 5.28125 4.61152 5.28125 4.93605C5.28125 5.26058 5.40965 5.57182 5.63821 5.8013C5.86677 6.03078 6.17677 6.15969 6.5 6.15969C6.82323 6.15969 7.13323 6.03078 7.36179 5.8013C7.59035 5.57182 7.71875 5.26058 7.71875 4.93605C7.71875 4.61152 7.59035 4.30028 7.36179 4.0708C7.13323 3.84132 6.82323 3.7124 6.5 3.7124Z"
                                            fill="url(#paint0_linear_335_111)"
                                          />
                                          <path
                                            _ngcontent-vnv-c43=""
                                            d="M17.5905 9.033H16.848C16.5327 9.033 16.2833 8.94133 16.1 8.758C15.9167 8.57467 15.825 8.3235 15.825 8.0045V1.487L15.902 1.4155H16.5455C16.8828 1.4155 17.1413 1.5035 17.321 1.6795C17.5007 1.85183 17.5905 2.13417 17.5905 2.5265V9.033ZM20.5275 7.515C20.5275 8.07233 20.4358 8.46467 20.2525 8.692C20.0728 8.91933 19.7648 9.033 19.3285 9.033H16.848L15.902 7.757C16.3823 7.67267 16.8572 7.61217 17.3265 7.5755C17.7995 7.53517 18.2303 7.515 18.619 7.515H20.5275ZM21.5996 1.487C21.7389 1.45767 21.8929 1.43933 22.0616 1.432C22.2339 1.42467 22.3732 1.421 22.4796 1.421C22.5969 1.421 22.7362 1.42467 22.8976 1.432C23.0589 1.43933 23.2129 1.45767 23.3596 1.487V9C23.2129 9.02567 23.0589 9.04217 22.8976 9.0495C22.7362 9.0605 22.5969 9.066 22.4796 9.066C22.3732 9.066 22.2339 9.0605 22.0616 9.0495C21.8929 9.04217 21.7389 9.02567 21.5996 9V1.487ZM29.1503 1.487C29.2786 1.45767 29.4088 1.43933 29.5408 1.432C29.6765 1.42467 29.8011 1.421 29.9148 1.421C30.0211 1.421 30.1531 1.43017 30.3108 1.4485C30.4685 1.46683 30.606 1.49617 30.7233 1.5365L30.7948 1.6355L28.7323 9C28.5306 9.022 28.3033 9.0385 28.0503 9.0495C27.7973 9.0605 27.5571 9.066 27.3298 9.066C26.9998 9.066 26.7413 9.01283 26.5543 8.9065C26.3673 8.7965 26.2298 8.58567 26.1418 8.274L24.3103 1.6465C24.4716 1.57683 24.6403 1.51633 24.8163 1.465C24.996 1.41367 25.1811 1.388 25.3718 1.388C25.6321 1.388 25.8356 1.45767 25.9823 1.597C26.129 1.73633 26.2408 1.95817 26.3178 2.2625L27.1648 5.392C27.2235 5.60833 27.2766 5.83017 27.3243 6.0575C27.3756 6.28117 27.4233 6.50667 27.4673 6.734C27.5113 6.95767 27.5498 7.17767 27.5828 7.394C27.6011 7.48567 27.6396 7.5315 27.6983 7.5315L29.1503 1.487ZM31.7127 1.564L31.7897 1.487H33.4452V2.9335C33.4452 3.0875 33.447 3.225 33.4507 3.346C33.4544 3.467 33.4562 3.60267 33.4562 3.753V6.778C33.4562 6.921 33.4544 7.05117 33.4507 7.1685C33.447 7.28583 33.4452 7.41967 33.4452 7.57V9.033H32.7247C32.4094 9.033 32.1619 8.94133 31.9822 8.758C31.8025 8.57467 31.7127 8.3235 31.7127 8.0045V1.564ZM35.8762 4.5065C35.9165 4.61283 35.944 4.73567 35.9587 4.875C35.9734 5.01433 35.9807 5.13167 35.9807 5.227C35.9807 5.326 35.9734 5.4415 35.9587 5.5735C35.944 5.7055 35.9165 5.82833 35.8762 5.942H34.1987C34.107 5.942 33.9769 5.942 33.8082 5.942C33.6395 5.93833 33.4654 5.93467 33.2857 5.931C33.1097 5.92733 32.963 5.92367 32.8457 5.92V4.5285C32.963 4.52483 33.1097 4.52117 33.2857 4.5175C33.4654 4.51383 33.6395 4.512 33.8082 4.512C33.9769 4.50833 34.107 4.5065 34.1987 4.5065H35.8762ZM36.5307 1.487C36.56 1.619 36.5765 1.74367 36.5802 1.861C36.5875 1.97467 36.5912 2.081 36.5912 2.18C36.5912 2.279 36.5784 2.40183 36.5527 2.5485C36.5307 2.6915 36.4959 2.829 36.4482 2.961H34.1987C34.107 2.961 33.9769 2.961 33.8082 2.961C33.6395 2.95733 33.4654 2.95367 33.2857 2.95C33.1097 2.94633 32.963 2.94267 32.8457 2.939V1.487H36.5307ZM36.8057 7.559C36.8057 8.043 36.7305 8.40967 36.5802 8.659C36.4299 8.90833 36.12 9.033 35.6507 9.033H32.8457V7.614C33.084 7.603 33.3114 7.592 33.5277 7.581C33.7477 7.56633 33.9915 7.559 34.2592 7.559H36.8057Z"
                                            fill="url(#paint1_linear_335_111)"
                                          />
                                          <defs _ngcontent-vnv-c43="">
                                            <linearGradient
                                              _ngcontent-vnv-c43=""
                                              id="paint0_linear_335_111"
                                              x1="6.5"
                                              y1={0}
                                              x2="6.5"
                                              y2={10}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                _ngcontent-vnv-c43=""
                                                stopColor="var(--live-gr-start-color)"
                                              />
                                              <stop
                                                _ngcontent-vnv-c43=""
                                                offset={1}
                                                stopColor="var(--live-gr-end-color)"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              _ngcontent-vnv-c43=""
                                              id="paint1_linear_335_111"
                                              x1="26.5"
                                              y1={1}
                                              x2="26.5"
                                              y2={9}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                _ngcontent-vnv-c43=""
                                                stopColor="var(--live-gr-start-color)"
                                              />
                                              <stop
                                                _ngcontent-vnv-c43=""
                                                offset={1}
                                                stopColor="var(--live-gr-end-color)"
                                              />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                      </span>
                                    </span>

                                    <span
                                      _ngcontent-vnv-c43=""
                                      className="d-flex m-0 justify-content-end cursor"
                                      style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "18px",
                                        zIndex: "5px"
                                      }}
                                    >
                                      <span _ngcontent-vnv-c43="">

                                        <span
                                          _ngcontent-vnv-c43=""
                                          className="liveTv position-relative"
                                        >
                                          <span
                                            _ngcontent-vnv-c43=""
                                            className="d-inline-block sidebar-menu-icon icon-live-tv"
                                          />
                                          <div _ngcontent-vnv-c43="" className="fa fa-tv" />
                                        </span>

                                      </span>



                                      <i _ngcontent-vnv-c43="">
                                        <span
                                          _ngcontent-vnv-c43=""
                                          className="d-inline-block ml-1 sidebar-menu-icon icon-plus cursor"
                                        />
                                      </i>

                                    </span>
                                    <span _ngcontent-vnv-c43="" className="left-icon" />
                                    <span
                                      _ngcontent-vnv-c43=""
                                      className="t-name"
                                      tournamentid={2175}
                                    >
                                      <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                          Test Matches
                                        </font>
                                      </font>
                                    </span>


                                    <span _ngcontent-vnv-c43="" className="right-icon" />
                                    <span _ngcontent-vnv-c43="" className="date-tour">

                                      <span _ngcontent-vnv-c43="" style={{ fontSize: "13px" }}>

                                        Feb 6, 10:00
                                      </span>

                                    </span>
                                    <span _ngcontent-vnv-c43="" className="market-tour-c">
                                      <svg
                                        _ngcontent-vnv-c43=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={100}
                                        height={26}
                                        viewBox="0 0 190 26"
                                        fill="Currentcolor"
                                      >
                                        <path
                                          _ngcontent-vnv-c43=""
                                          d="M0.208334 0.899998C3.00833 1.4 9.20833 2.6 14.2083 3.4C28.1083 5.9 33.9083 7.6 51.1083 13.9C73.9083 22.5 79.5833 24.7999 93 25.5C107.692 25.4999 116.508 23.5 132.708 17.2C156.308 8 166.008 4.8 177.408 2.4L189.208 -1.90735e-06H92.2083C30.8083 -1.90735e-06 -2.99167 0.399998 0.208334 0.899998Z"
                                          fill="Currentcolor"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="col-12 m-0 titles d-flex justify-content-center flex-column"
                                >
                                  <span _ngcontent-vnv-c43="" className="remain-timer">

                                  </span>
                                  <div
                                    _ngcontent-vnv-c43=""
                                    className="match-poster notranslate"
                                    bfmatchid={33994810}
                                    matchid={179048}
                                  >
                                    <span _ngcontent-vnv-c43="" className="team-a col">
                                      Sri Lanka
                                    </span>
                                    <span _ngcontent-vnv-c43="" className="team-a-vs-b col-2">
                                      <svg
                                        _ngcontent-vnv-c43=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={30}
                                        height={30}
                                        viewBox="0 0 142.334 226.473"
                                      >
                                        <g
                                          _ngcontent-vnv-c43=""
                                          transform="translate(-770.844 -434.5)"
                                        >
                                          <path
                                            _ngcontent-vnv-c43=""
                                            d="M731.479,686.973l26.934-72.1H736.406l-29.561-81.129h27.262l17.435,53.691,16.725-53.691h19.708L815.236,460.5h8.211L740.183,686.973Z"
                                            transform="translate(64 -26)"
                                            fill="var(--mtch-vs-color) "
                                          />
                                          <path
                                            _ngcontent-vnv-c43=""
                                            d="M834.658,588.507l12.536-16.229s-9.149-9.4-27.09-11.489-28.4,5.27-28.4,5.27L781.4,594.24a25.212,25.212,0,0,0,10.667,12.073c7.774,4.261,13.672,4.44,18.987,5.382s13.455.673,13.3,6.645-8.439,5.539-16.886,3.6-17.806-9.135-17.806-9.135a85.64,85.64,0,0,1-5.367,8.761c-3.158,4.494-7.266,9.217-7.266,9.217s9.232,6.608,16.423,9.329,21.865,4.859,32.555,2.235,20.116-6.8,22.837-24-12.05-22.254-16.423-23.711-16.078-3.956-22.545-5.053-5.214-5.379-3.8-6.865,7.488-2.659,15.554-.326A42.842,42.842,0,0,1,834.658,588.507Z"
                                            transform="translate(64 -26)"
                                            fill="var(--mtch-vs-color) "
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    <span _ngcontent-vnv-c43="" className="team-b col">
                                      Australia
                                    </span>
                                  </div>

                                </div>
                              </div>
                              <div
                                _ngcontent-vnv-c43=""
                                className="position-relative web-tvscoreboard mx-2"
                              >
                                <iframe
                                  _ngcontent-vnv-c43=""
                                  frameBorder={0}
                                  className="w-100"
                                  style={{ display: "block" }}
                                  id="scoreSection0"
                                  src="https://central.myzosh.com/score_widget/55190409?aC=SmV0ZmFpcg=="
                                />

                              </div>

                              <app-match-board _ngcontent-vnv-c43="" _nghost-vnv-c38="">
                                <div
                                  _ngcontent-vnv-c38=""
                                  className="market-inPlay market-NoInPlay pl-2 pr-2"
                                >

                                  <div _ngcontent-vnv-c38="" className="match-odd-box">
                                    <div
                                      _ngcontent-vnv-c38=""
                                      className="market-info match-odd-info"
                                    >
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="row m-0 f-12 justify-content-between align-items-start h-100"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="d-flex align-items-end h-100"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="p-0 h-100"
                                            centralid={2485783}
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="font-weight-bold uppercase-letter market-odd-name"
                                            >
                                              <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                  Match Odds
                                                </font>
                                              </font>
                                            </span>
                                          </div>

                                        </div>
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="p-0 justify-content-end d-flex align-items-center h-100"
                                        >
                                          <span
                                            _ngcontent-vnv-c38=""
                                            className="market-rule mr-rules"
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="market-rules-span"
                                            >
                                              <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                  Rules
                                                </font>
                                              </font>
                                            </span>
                                          </span>
                                          <span
                                            _ngcontent-vnv-c38=""
                                            href="javascript:void(0)"
                                            routerlinkactive="active"
                                            placement="left"
                                            popoverclass="market-InfoClass"
                                            className="market-rule mr-stake"
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="market-rules-span"
                                            >
                                              <svg
                                                _ngcontent-vnv-c38=""
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={2}
                                                height={8}
                                                viewBox="0 0 2 8"
                                                fill="none"
                                              >
                                                <path
                                                  _ngcontent-vnv-c38=""
                                                  d="M1.944 2.71652L0.111964 2.96899L0.0463626 3.30328L0.406369 3.37629C0.641574 3.43787 0.687975 3.53112 0.636774 3.78887L0.0463626 6.83967C-0.10884 7.62877 0.130364 8 0.692775 8C1.12878 8 1.63519 7.77832 1.8648 7.47394L1.9352 7.10798C1.7752 7.26281 1.54159 7.32439 1.38639 7.32439C1.16638 7.32439 1.08638 7.15461 1.14318 6.85551L1.944 2.71652ZM2 0.879701C2 1.11301 1.91571 1.33677 1.76568 1.50174C1.61565 1.66672 1.41216 1.7594 1.19998 1.7594C0.987807 1.7594 0.784321 1.66672 0.634289 1.50174C0.484257 1.33677 0.399969 1.11301 0.399969 0.879701C0.399969 0.64639 0.484257 0.422634 0.634289 0.257658C0.784321 0.0926825 0.987807 0 1.19998 0C1.41216 0 1.61565 0.0926825 1.76568 0.257658C1.91571 0.422634 2 0.64639 2 0.879701Z"
                                                  fill="var(--primary-font-color)"
                                                />
                                              </svg>
                                            </span>
                                          </span>


                                          <span
                                            _ngcontent-vnv-c38=""
                                            className="market-rule mr-collapse"
                                          >
                                            <i
                                              _ngcontent-vnv-c38=""
                                              className="fa cursor d-flex align-items-center fa-minus"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div _ngcontent-vnv-c38="" className="selection-info">
                                      <div _ngcontent-vnv-c38="" className="row m-0">
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="col-sm-5 col-7 p-0"
                                        >
                                          <div _ngcontent-vnv-c38="" className="blank-left" />
                                        </div>
                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                        style={{
                                          backgroundColor: "var(--primary-light-color)"
                                        }}
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >
                                            <font style={{ verticalAlign: "inherit" }}>
                                              <font style={{ verticalAlign: "inherit" }}>
                                                3 Selections
                                              </font>
                                            </font>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate"
                                              >
                                                Back {"{"}L{"}"}
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate"
                                              >
                                                Lay {"{"}K{"}"}
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={16606}
                                                  >

                                                    Australia
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">1.18</p>
                                                    <div _ngcontent-vnv-c37="">904,550</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">1.19</p>
                                                    <div _ngcontent-vnv-c37="">856,103</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>1.2</p>
                                                    <div _ngcontent-vnv-c37="">183,494</div>


                                                  </div>

                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>1.21</p>
                                                    <div _ngcontent-vnv-c37="">220,917</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>1.22</p>
                                                    <div _ngcontent-vnv-c37="">214,517</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>1.23</p>
                                                    <div _ngcontent-vnv-c37="">78,668</div>


                                                  </div>
                                                </div>
                                              </div>






                                            </div>
                                          </div>
                                        </div>


                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={7337}
                                                  >

                                                    Sri Lanka
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>6.2</p>
                                                    <div _ngcontent-vnv-c37="">153</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>6.4</p>
                                                    <div _ngcontent-vnv-c37="">54,626</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>6.6</p>
                                                    <div _ngcontent-vnv-c37="">41,794</div>


                                                  </div>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>7.2</p>
                                                    <div _ngcontent-vnv-c37="">30,582</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">7.4</p>
                                                    <div _ngcontent-vnv-c37="">12,052</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">7.6</p>
                                                    <div _ngcontent-vnv-c37="" >47,575</div>


                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>


                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={60443}
                                                  >

                                                    The Draw
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">32</p>
                                                    <div _ngcontent-vnv-c37="">500</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">34</p>
                                                    <div _ngcontent-vnv-c37="">2,369</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">36</p>
                                                    <div _ngcontent-vnv-c37="">16,063</div>


                                                  </div>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">38</p>
                                                    <div _ngcontent-vnv-c37="">88,195</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">40</p>
                                                    <div _ngcontent-vnv-c37="">1,324</div>


                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  _nghost-vnv-c37=""
                                                >
                                                  <div
                                                    _ngcontent-vnv-c37=""
                                                    className="rateDiv notranslate"
                                                  >

                                                    <p _ngcontent-vnv-c37="">42</p>
                                                    <div _ngcontent-vnv-c37="">2,572</div>


                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>


                                      </div>

                                    </div>



                                  </div>
                                  {isModalOpen && <Scoredmethod closeModal={() => setIsModalOpen(false)} />}

                                  <div _ngcontent-vnv-c38="" className="match-odd-box">
                                    <div
                                      _ngcontent-vnv-c38=""
                                      className="market-info match-odd-info"
                                    >
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="row m-0 f-12 justify-content-between align-items-start h-100"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="d-flex align-items-end h-100"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="p-0 h-100"
                                            centralid={2487259}
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="font-weight-bold uppercase-letter market-odd-name"
                                            >
                                              <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                  BOOKMAKER
                                                </font>
                                              </font>
                                            </span>
                                          </div>

                                        </div>
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="p-0 justify-content-end d-flex align-items-center h-100"
                                        >
                                          <span
                                            _ngcontent-vnv-c38=""
                                            className="market-rule mr-rules"
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="market-rules-span"
                                            >
                                              <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                  Rules
                                                </font>
                                              </font>
                                            </span>
                                          </span>
                                          <span
                                            _ngcontent-vnv-c38=""
                                            href="javascript:void(0)"
                                            routerlinkactive="active"
                                            placement="left"
                                            popoverclass="market-InfoClass"
                                            className="market-rule mr-stake"
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="market-rules-span"
                                            >
                                              <svg
                                                _ngcontent-vnv-c38=""
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={2}
                                                height={8}
                                                viewBox="0 0 2 8"
                                                fill="none"
                                              >
                                                <path
                                                  _ngcontent-vnv-c38=""
                                                  d="M1.944 2.71652L0.111964 2.96899L0.0463626 3.30328L0.406369 3.37629C0.641574 3.43787 0.687975 3.53112 0.636774 3.78887L0.0463626 6.83967C-0.10884 7.62877 0.130364 8 0.692775 8C1.12878 8 1.63519 7.77832 1.8648 7.47394L1.9352 7.10798C1.7752 7.26281 1.54159 7.32439 1.38639 7.32439C1.16638 7.32439 1.08638 7.15461 1.14318 6.85551L1.944 2.71652ZM2 0.879701C2 1.11301 1.91571 1.33677 1.76568 1.50174C1.61565 1.66672 1.41216 1.7594 1.19998 1.7594C0.987807 1.7594 0.784321 1.66672 0.634289 1.50174C0.484257 1.33677 0.399969 1.11301 0.399969 0.879701C0.399969 0.64639 0.484257 0.422634 0.634289 0.257658C0.784321 0.0926825 0.987807 0 1.19998 0C1.41216 0 1.61565 0.0926825 1.76568 0.257658C1.91571 0.422634 2 0.64639 2 0.879701Z"
                                                  fill="var(--primary-font-color)"
                                                />
                                              </svg>
                                            </span>
                                          </span>

                                          <span
                                            _ngcontent-vnv-c38=""
                                            className="market-rule mr-close"
                                          >
                                            <span
                                              _ngcontent-vnv-c38=""
                                              className="market-rules-span"
                                            >
                                              <i
                                                _ngcontent-vnv-c38=""
                                                className="fas fa-times"
                                              />
                                            </span>
                                          </span>

                                          <span
                                            _ngcontent-vnv-c38=""
                                            className="market-rule mr-collapse"
                                          >
                                            <i
                                              _ngcontent-vnv-c38=""
                                              className="fa cursor d-flex align-items-center fa-minus"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div _ngcontent-vnv-c38="" className="selection-info">
                                      <div _ngcontent-vnv-c38="" className="row m-0">
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="col-sm-5 col-7 p-0"
                                        >
                                          <div _ngcontent-vnv-c38="" className="blank-left" />
                                        </div>
                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                        style={{
                                          backgroundColor: "var(--primary-light-color)"
                                        }}
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >
                                            <font style={{ verticalAlign: "inherit" }}>
                                              <font style={{ verticalAlign: "inherit" }}>
                                                3 Selections
                                              </font>
                                            </font>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate"
                                              >
                                                Back {"{"}L{"}"}
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate"
                                              >
                                                Lay {"{"}K{"}"}
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value notranslate d-sm-block d-none"
                                              />
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={3422}
                                                  >

                                                    AUSTRALIA
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="ball-start-overly"
                                              >
                                                <span _ngcontent-vnv-c38="" />

                                              </div>

                                            </div>
                                          </div>
                                        </div>


                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={1101}
                                                  >

                                                    SRI LANKA
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="ball-start-overly"
                                              >
                                                <span _ngcontent-vnv-c38="" />

                                              </div>





                                            </div>
                                          </div>
                                        </div>


                                      </div>
                                      <div
                                        _ngcontent-vnv-c38=""
                                        className="backLayDiv-wraper"
                                      >
                                        <div
                                          _ngcontent-vnv-c38=""
                                          className="row m-0 backLayDiv pl-2"
                                        >
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col p-0 align-self-center bet-name"
                                          >

                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="d-flex line-h-1"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="overflow-wrap notranslate"
                                              >
                                                <div _ngcontent-vnv-c38="">
                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    bfrunnerid={823}
                                                  >

                                                    THE DRAW
                                                  </span>


                                                </div>
                                                <div _ngcontent-vnv-c38="">

                                                  <span
                                                    _ngcontent-vnv-c38=""
                                                    className="notranslate plus"
                                                  >

                                                    0
                                                  </span>

                                                </div>
                                              </div>
                                            </div>


                                          </div>
                                          <div
                                            _ngcontent-vnv-c38=""
                                            className="col match-primary-rate-box p-0"
                                          >
                                            <div
                                              _ngcontent-vnv-c38=""
                                              className="row m-0 h-100 justify-content-end align-items-center"
                                            >
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-blue notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="col p-0 bet-value v-pink notranslate white d-none d-sm-block"
                                              >
                                                <div
                                                  _ngcontent-vnv-c38=""
                                                  className="padding-odds-volume"
                                                >
                                                  <p _ngcontent-vnv-c38="">-</p>
                                                  <span _ngcontent-vnv-c38="">0</span>
                                                </div>
                                              </div>

                                              <div
                                                _ngcontent-vnv-c38=""
                                                className="ball-start-overly"
                                              >
                                                <span _ngcontent-vnv-c38="" />

                                              </div>





                                            </div>
                                          </div>
                                        </div>


                                      </div>

                                    </div>



                                  </div>



                                </div>



                              </app-match-board>



                              <div _ngcontent-vnv-c43="" className="row m-0 mx-2">
                                <div _ngcontent-vnv-c43="" className="col-12 p-0">
                                  <section _ngcontent-vnv-c43="">
                                    <div
                                      _ngcontent-vnv-c43=""
                                      className="sub-tabs-container sub-tab-active-bg"
                                    >
                                      <div
                                        _ngcontent-vnv-c43=""
                                        className="sub-tab-content-inner-div padding-tab d-flex overflow-auto pr-3"
                                      >
                                        <div
                                          _ngcontent-vnv-c43=""
                                          className="pointer sub-tab-active"
                                        >
                                          <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                              All
                                            </font>
                                          </font>
                                        </div>
                                        <div _ngcontent-vnv-c43="" className="pointer ml-3">
                                          <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                              Player
                                            </font>
                                          </font>
                                        </div>

                                        <div _ngcontent-vnv-c43="" className="pointer ml-3">
                                          <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                              Fancy
                                            </font>
                                          </font>
                                        </div>

                                        <div _ngcontent-vnv-c43="" className="pointer ml-3">
                                          <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                              Wicket
                                            </font>
                                          </font>
                                        </div>


                                      </div>
                                    </div>


                                  </section>
                                </div>
                              </div>
                              <app-fancy-bet
                                _ngcontent-vnv-c43=""
                                _nghost-vnv-c39=""
                                className="ng-star-inserted"
                              >
                                <div
                                  _ngcontent-vnv-c39=""
                                  className="fancy-container mx-2 rounded-top-5 rounded-bottom-5 ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-vnv-c39=""
                                    className="header rounded-top-5"
                                    style={{ fontWeight: "700px" }}
                                  >
                                    <div _ngcontent-vnv-c39="" className="title rounded-top-5">
                                      <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}> Fancy Bet - </font>
                                      </font>
                                      <span _ngcontent-vnv-c39="">
                                        <font style={{ verticalAlign: "inherit" }}>
                                          <font style={{ verticalAlign: "inherit" }}>
                                            (Sri Lanka v Australia)
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                    <label
                                      _ngcontent-vnv-c39=""
                                      htmlFor="main-tab-3"
                                      className="lable-rule float-right"
                                    >
                                      <span _ngcontent-vnv-c39="" className="market-rule">
                                        <span _ngcontent-vnv-c39="" className="market-rules-span">
                                          <svg
                                            _ngcontent-vnv-c39=""
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={2}
                                            height={8}
                                            viewBox="0 0 2 8"
                                            fill="none"
                                          >
                                            <path
                                              _ngcontent-vnv-c39=""
                                              d="M1.944 2.71652L0.111964 2.96899L0.0463626 3.30328L0.406369 3.37629C0.641574 3.43787 0.687975 3.53112 0.636774 3.78887L0.0463626 6.83967C-0.10884 7.62877 0.130364 8 0.692775 8C1.12878 8 1.63519 7.77832 1.8648 7.47394L1.9352 7.10798C1.7752 7.26281 1.54159 7.32439 1.38639 7.32439C1.16638 7.32439 1.08638 7.15461 1.14318 6.85551L1.944 2.71652ZM2 0.879701C2 1.11301 1.91571 1.33677 1.76568 1.50174C1.61565 1.66672 1.41216 1.7594 1.19998 1.7594C0.987807 1.7594 0.784321 1.66672 0.634289 1.50174C0.484257 1.33677 0.399969 1.11301 0.399969 0.879701C0.399969 0.64639 0.484257 0.422634 0.634289 0.257658C0.784321 0.0926825 0.987807 0 1.19998 0C1.41216 0 1.61565 0.0926825 1.76568 0.257658C1.91571 0.422634 2 0.64639 2 0.879701Z"
                                              fill="var(--primary-font-color)"
                                            />
                                          </svg>
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                  <div _ngcontent-vnv-c39="" className="selection-info rounded-bottom-5">
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center py-2 col-12"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493275}
                                          bfmid={11490814}
                                          mid={927732}
                                        >

                                          BEAU WEBSTER RUNS
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-8 p-0 ng-star-inserted"
                                          />
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-plus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493276}
                                          bfmid={11490815}
                                          mid={927733}
                                        >

                                          BEAU WEBSTER BOUNDARIES
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 d-none d-md-table-cell cell-odds text-center align-middle fancy-odds-frist ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-vnv-c39=""
                                              className="align-center d-flex flex-column justify-content-center mm-bet"
                                            >
                                              <div _ngcontent-vnv-c39="" className="d-block min-max-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Stake Limit: 0 - 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                              <div _ngcontent-vnv-c39="" className="value-mm-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Max Profit: 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 text-center ng-star-inserted"
                                          >
                                            <div _ngcontent-vnv-c39="" className="row m-0 ml-1 p-1px">
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-lay p-0 v-pink"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">4</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [115]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-back p-0 v-blue"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">4</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [85]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-minus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493291}
                                          bfmid={11491683}
                                          mid={927747}
                                        >

                                          MITCHELL STARC BOUNDARIES
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 d-none d-md-table-cell cell-odds text-center align-middle fancy-odds-frist ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-vnv-c39=""
                                              className="align-center d-flex flex-column justify-content-center mm-bet"
                                            >
                                              <div _ngcontent-vnv-c39="" className="d-block min-max-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Stake Limit: 0 - 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                              <div _ngcontent-vnv-c39="" className="value-mm-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Max Profit: 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 text-center ng-star-inserted"
                                          >
                                            <div _ngcontent-vnv-c39="" className="row m-0 ml-1 p-1px">
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-lay p-0 v-pink"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">1</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [100]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-back p-0 v-blue"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">2</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [100]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-minus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493292}
                                          bfmid={11491696}
                                          mid={927748}
                                        >

                                          FALL OF 8TH WKT AUS
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 d-none d-md-table-cell cell-odds text-center align-middle fancy-odds-frist ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-vnv-c39=""
                                              className="align-center d-flex flex-column justify-content-center mm-bet"
                                            >
                                              <div _ngcontent-vnv-c39="" className="d-block min-max-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Stake Limit: 0 - 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                              <div _ngcontent-vnv-c39="" className="value-mm-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Max Profit: 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 text-center ng-star-inserted"
                                          >
                                            <div _ngcontent-vnv-c39="" className="row m-0 ml-1 p-1px">
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-lay p-0 v-pink"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">415</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [110]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-back p-0 v-blue"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">415</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [90]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-minus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493293}
                                          bfmid={11491697}
                                          mid={927749}
                                        >

                                          8TH WKT PSHIP BOUNDARIES AUS
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 d-none d-md-table-cell cell-odds text-center align-middle fancy-odds-frist ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-vnv-c39=""
                                              className="align-center d-flex flex-column justify-content-center mm-bet"
                                            >
                                              <div _ngcontent-vnv-c39="" className="d-block min-max-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Stake Limit: 0 - 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                              <div _ngcontent-vnv-c39="" className="value-mm-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Max Profit: 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 text-center ng-star-inserted"
                                          >
                                            <div _ngcontent-vnv-c39="" className="row m-0 ml-1 p-1px">
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-lay p-0 v-pink"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">2</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [115]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-back p-0 v-blue"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">2</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [85]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-minus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      _ngcontent-vnv-c39=""
                                      className="row m-0 rounded-bottom-5 fancy-bet-row ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-vnv-c39=""
                                        className="col-sm-5 col-7 p-0 pl-1 text-left align-self-center"
                                      >
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="mr-1 d-md-none ng-star-inserted"
                                        >
                                          <i
                                            _ngcontent-vnv-c39=""
                                            className="ladder-book icon-size cursor mr-1 ng-star-inserted"
                                          >
                                            <svg
                                              _ngcontent-vnv-c39=""
                                              version="1.1"
                                              id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 27 45"
                                              xmlSpace="preserve"
                                              style={{ enableBackground: "new 0 0 27 45" }}
                                            >
                                              <path
                                                _ngcontent-vnv-c39=""
                                                d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                className="ladder"
                                              />
                                            </svg>
                                          </i>
                                          {/**/}
                                        </span>
                                        {/**/}
                                        <span
                                          _ngcontent-vnv-c39=""
                                          className="market-name pointer notranslate"
                                          cid={2493294}
                                          bfmid={11491701}
                                          mid={927750}
                                        >

                                          MITCHELL STARC RUNS
                                        </span>
                                      </div>
                                      <div _ngcontent-vnv-c39="" className="col-sm-7 col-5 p-0">
                                        <div _ngcontent-vnv-c39="" className="row m-0">
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 d-none d-md-table-cell cell-odds text-center align-middle fancy-odds-frist ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-vnv-c39=""
                                              className="align-center d-flex flex-column justify-content-center mm-bet"
                                            >
                                              <div _ngcontent-vnv-c39="" className="d-block min-max-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Stake Limit: 0 - 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                              <div _ngcontent-vnv-c39="" className="value-mm-bet">
                                                <div _ngcontent-vnv-c39="" className="col-12">
                                                  <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                      Max Profit: 0
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 p-0 text-center ng-star-inserted"
                                          >
                                            <div _ngcontent-vnv-c39="" className="row m-0 ml-1 p-1px">
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-lay p-0 v-pink"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">19</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [110]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-vnv-c39=""
                                                className="col-6 pending-odds cell-odds cell-back p-0 v-blue"
                                              >
                                                <div _ngcontent-vnv-c39="" _nghost-vnv-c37="">
                                                  <div _ngcontent-vnv-c37="" className="rateDiv notranslate">
                                                    {/**/}
                                                    <p _ngcontent-vnv-c37="">19</p>
                                                    {/**/}
                                                    <div _ngcontent-vnv-c37="" className="ng-star-inserted">
                                                      [90]
                                                    </div>
                                                    {/**/}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          <div
                                            _ngcontent-vnv-c39=""
                                            className="col-sm-4 d-none d-md-block p-0 pr-1 text-right align-self-center"
                                          >
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="ladder-book icon-size cursor mr-1"
                                            >
                                              <svg
                                                _ngcontent-vnv-c39=""
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 27 45"
                                                xmlSpace="preserve"
                                                style={{ enableBackground: "new 0 0 27 45" }}
                                              >
                                                <path
                                                  _ngcontent-vnv-c39=""
                                                  d="M24.8,45c1.2,0,2.2-1,2.2-2.2V2.2C27,1,26,0,24.8,0s-2.2,1-2.2,2.2v5.5h-18V2.2C4.5,1,3.5,0,2.2,0S0,1,0,2.2
	                                v40.5C0,44,1,45,2.2,45s2.2-1,2.2-2.2v-5.5h18v5.5C22.5,44,23.5,45,24.8,45z M4.5,11.8h18v8.8h-18V11.8z M4.5,33.2v-8.8h18v8.8H4.5z"
                                                />
                                              </svg>
                                            </i>
                                            {/**/}
                                            <i
                                              _ngcontent-vnv-c39=""
                                              className="fa fa-minus cursor mr-1 collapse-icon ng-star-inserted"
                                            />
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <table
                                      _ngcontent-vnv-c39=""
                                      className="table rounded-bottom-5 table-bordered table-collapse table-odds"
                                    >
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                    </table>
                                    <div _ngcontent-vnv-c39="" className="row m-4" />
                                  </div>
                                </div>
                                {/**/}
                                {/**/}
                              </app-fancy-bet>






                            </div>
                          </div>


                          <div _ngcontent-vnv-c43="" className="bottom-button">
                            <div _ngcontent-vnv-c43="" className="bet-slip-button">
                              <button
                                _ngcontent-vnv-c43=""
                                type="button"
                                className="btn-bet-slip"
                              >
                                <img
                                  _ngcontent-vnv-c43=""
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEASURBVHgBtVSLDYIwEH0YBmAENpAR6gQyAiOwgTiBOoFsoBvQDdQJcAPYQK9yhrM5FBN4yUvp9f55IQDwwIwI+WyJN0yLJTFyH24Ci+lRudyhZ0yJyY/AQrHlfO61ADlByfdv9GGIDVM2p05Q4r91ZcSjuF+IK5nDL+A6WCuJDsSzYk/EuyWe0K3ZSqcxK8qgwwifiu8Rv1VsV1UUYxwiTmpFISMLLJSgDbFGN65Dgr4rHwUn2qFbk0PqO8kJYnyuphank2DmxRoMr1NdUS6cGpG8xrBME/QyNcKuyvRO3KJTjOVxS9FtrBS4cgwwIPFZfxUBF2i5kynxEse7wGx4As5tYqiQXNw/AAAAAElFTkSuQmCC"
                                  alt=""
                                />
                                Bet Slip
                              </button>
                              <button
                                _ngcontent-vnv-c43=""
                                type="button"
                                className="btn-bet-slip"
                              >
                                <img
                                  _ngcontent-vnv-c43=""
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFsSURBVHgBjVTRdYMwDLz09b9sEG9AR2AERqATNBsknYB2gnSDZIPQCaATQCeADVqploIwgfjeu8fDls/nkwEYkRD3xAuxJf4a1sQjMUMEWKgMBHpiZ2jneDO3Jliawt1KcU48S+37mqA6ShCH57XJR3my2Cvx7UYNzxXEFHP338QK3vnEoQ1fwYsvwfwSNa6rIB/50w5i7DQ/D/AdtrHw0XNZp8I7mEUWuYyfEAcnpvoHGUhEBOZdCx3iBHlNYptyEvsvppCPxe459C9iE4hs4aPIdFAFB/iOhWiM+xzL4M1S63DA7c/qQ1xn4tZhjKMTnmV9p4KDFDkZtEjlWQmX4IhP+sKt1rbvZazA/I5lmF4bFuEY+DPsTf0/DrKwDgRrxF3sXkU3mIIdDCJ4hO94Je7ywKHmxhk2wi0WUMjOJeKQYDz23YK1H6uDz7c1tYtwmP+5W8M+mOPmJBvch15qvodbjDn+wGdYYcwRf6U4j+a1+d3vAAAAAElFTkSuQmCC"
                                  alt=""
                                />
                                My Bets
                              </button>
                            </div>
                          </div>





                        </div>
                      </div>
                      <div _ngcontent-vnv-c43="" className="col-lg-4 col-md-12 pl-2 pr-2">
                        <div _ngcontent-vnv-c43="" className="bet-slip-div">
                          <app-side-bet-slip _ngcontent-vnv-c43="" _nghost-vnv-c42="">

                          </app-side-bet-slip>
                          <div
                            _ngcontent-vnv-c43=""
                            className="bottom-part side-bet-mob-hide"
                          >
                            <div
                              _ngcontent-vnv-c43=""
                              data-toggle="collapse"
                              data-target="#collapseBets"
                              aria-expanded="true"
                              aria-controls="collapseBets"
                              className="open-bets-header-bg top-radius"
                            >
                              <div _ngcontent-vnv-c43="" className="row m-0 cursor">
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="col-10 font-weight-bold"
                                >

                                  My Bets
                                </div>
                                <div _ngcontent-vnv-c43="" className="col-2 text-right">
                                  <i
                                    _ngcontent-vnv-c43=""
                                    className="fas fa-chevron-up pt-2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              _ngcontent-vnv-c43=""
                              aria-expanded="true"
                              aria-hidden="false"
                              id="collapseBets"
                              className="mybets-body collapse in show bottom-radius"
                            >
                              <div _ngcontent-vnv-c43="" className="mybets-wrapper">
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="row open-bets-header m-0"
                                >
                                  <div _ngcontent-vnv-c43="" className="bet-header">
                                    <div _ngcontent-vnv-c43="" className="unmatch-title">
                                      Matched Bets
                                    </div>
                                    <div
                                      _ngcontent-vnv-c43=""
                                      className="text-center justify-content-center d-flex setting-matched-bets"
                                    >
                                      <label _ngcontent-vnv-c43="" className="d-flex">
                                        <div _ngcontent-vnv-c43="" style={{ paddingTop: " 2px " }}>
                                          <input
                                            _ngcontent-vnv-c43=""
                                            type="checkbox"
                                            id="matchAverage-odd"
                                            name="matchAverage-odd"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-vnv-c43=""
                                          className="title-option-setting averge-odds"
                                          style={{ marginLeft: "5px" }}
                                        >

                                          Average odds
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-vnv-c43=""
                                  _nghost-vnv-c40=""
                                >
                                  <div _ngcontent-vnv-c40="" className="box-header" />


                                </div>
                              </div>
                              <div _ngcontent-vnv-c43="" className="mybets-wrapper">
                                <div
                                  _ngcontent-vnv-c43=""
                                  className="row open-bets-header m-0 mt-2"
                                >
                                  <div _ngcontent-vnv-c43="" className="bet-header">
                                    <div _ngcontent-vnv-c43="" className="unmatch-title">
                                      Unmatched Bets
                                    </div>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-vnv-c43=""
                                  _nghost-vnv-c40=""
                                >
                                  <div _ngcontent-vnv-c40="" className="box-header" />


                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-vnv-c43=""
                            className="d-flex d-lg-none p-5 col-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </app-market>


            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Scorecardclik
