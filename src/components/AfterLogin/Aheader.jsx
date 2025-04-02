import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Secondsidebar from '../Secondsidebar';
import Sidebar from '../Sidebar/Sidebar';
import Account from './Account/Account';




function Aheader({ setIsModalOpen, profileIconRef, closeModal, toggleMobileSidebar, toggleDesktopSidebars }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };



  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };




  const close = () => setSidebarOpen(false);


  return (
    <>
      <div _ngcontent-ng-c344788945="" className="mt-md-3">
        <marquee
          _ngcontent-ng-c344788945=""
          behavior="scroll"
          direction="left"
          scrollamount={8}
          className="bg-white text-dark mx-md-3 d-none d-md-inline-block ng-star-inserted"
        >
          <div _ngcontent-ng-c344788945="" className="fs-12 fw-strong">
            For Deposit USDT and Hawala Service is also available. Click your branch
            or deposit link on website to avail the service.
          </div>
        </marquee>
        <header
          _ngcontent-ng-c344788945=""
          className="mx-md-3 pt-2 pt-md-3 px-2 px-md-3 rounded-3 ng-star-inserted pb-md-2"
        >
          <div
            _ngcontent-ng-c344788945=""
            className="d-flex align-items-center justify-content-between gapss"
          >
            <ul _ngcontent-ng-c344788945="" className="list-inline mb-0 top-nav d-none d-lg-flex align-items-center">
              <li _ngcontent-ng-c344788945="" className="list-inline-item d-block d-xl-none" >
                <div _ngcontent-ng-c344788945="" role="img"
                  className="mat-icon notranslate material-icons-outlined d-block d-xl-none text-white material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true" data-mat-icon-type="font"
                  style={{ cursor: 'pointer' }} onClick={toggleDesktopSidebars}>

                  menu
                </div>

              </li>
              {/* Sidebar Component */}
              {isSidebarOpen && <Sidebar close={close} />}
              <div _ngcontent-ng-c344788945="" _nghost-ng-c556780884="" style={{ pointerEvents: "auto" }}>
                <div _ngcontent-ng-c556780884="" className="drag-scroll-content" drag-scroll="true" style={{
                  whiteSpace: "nowrap", width: "100%", height: "100%"
                }}>
                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/afterlogin" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/16.svg" alt="Kheloyar Exch" />
                      </div>
                      <div _ngcontent-ng-c344788945="">Kheloyar Exch</div>
                    </Link>
                  </li>

                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block", optical: "0",
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="#" className="position-relative">
                      <div _ngcontent-ng-c344788945="" className="avaitor">
                        <img _ngcontent-ng-c344788945="" src="assets/images/13.svg" alt="Aviator" />
                      </div>
                      <div _ngcontent-ng-c344788945="">Aviator</div>
                    </Link>

                  </li>


                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/all-casinos" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/12.svg" alt="All Casino" />
                      </div>
                      <div _ngcontent-ng-c344788945="">All Casino</div>
                    </Link>
                  </li>

                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/slots-game" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/14.svg" alt="Teen Patti" />
                      </div>
                      <div _ngcontent-ng-c344788945="">Teen Patti</div>
                    </Link>
                  </li>

                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/slots-game" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/18.svg" alt="Slot Game" style={{
                          width: "19px",
                          marginTop: "2px"
                        }} />
                      </div>
                      <div _ngcontent-ng-c344788945="">Slot Game</div>
                    </Link>
                  </li>

                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/all-casinos" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/19.svg" alt="Table Game" />
                      </div>
                      <div _ngcontent-ng-c344788945="">Table Game</div>
                    </Link>
                  </li>

                  <li _ngcontent-ng-c344788945="" drag-scroll-item
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: 'inline-block'
                    }}>
                    <Link to="/slots-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                      <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/20.svg"
                        alt="Instant Win" /></div>
                      <div _ngcontent-ng-c344788945="">Instant Win</div>
                    </Link>
                  </li>
                  <li _ngcontent-ng-c344788945="" drag-scroll-item
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: 'inline-block'
                    }}>
                    <Link to="/slots-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                      <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/21.svg"
                        alt="Shooting Game" /></div>
                      <div _ngcontent-ng-c344788945="">Shooting Games</div>
                    </Link>
                  </li>
                  <li _ngcontent-ng-c344788945="" drag-scroll-item
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: 'inline-block'
                    }}>
                    <Link to="/slots-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                      <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/17.svg"
                        alt="Live Casino" /></div>
                      <div _ngcontent-ng-c344788945="">Live Casino</div>
                    </Link>
                  </li>
                  <li _ngcontent-ng-c344788945="" drag-scroll-item
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: 'inline-block'
                    }}>
                    <Link to="#" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                      <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/22.svg"
                        alt="Virtual Sports" /></div>
                      <div _ngcontent-ng-c344788945="">Virtual Sports</div>
                    </Link>
                  </li>
                  <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                    className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                      display: "inline-block",
                      marginRight: "0px"
                    }}>
                    <Link _ngcontent-ng-c344788945="" to="/indian-casino" className="position-relative">
                      <div _ngcontent-ng-c344788945="">
                        <img _ngcontent-ng-c344788945="" src="assets/images/23.svg" alt="Indian Casino" style={{
                          width: "19px",
                          marginTop: "2px"
                        }} />
                      </div>
                      <div _ngcontent-ng-c344788945="">Indian Casino</div>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
            <ul _ngcontent-ng-c344788945="" className="list-inline mb-0 d-lg-none d-flex align-items-center">
              <li _ngcontent-ng-c344788945="" className="list-inline-item">
                <div _ngcontent-ng-c344788945="" role="img"
                  className="mat-icon notranslate material-icons-outlined d-block d-xl-none text-white material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true" data-mat-icon-type="font" onClick={toggleMobileSidebar}>
                  menu
                </div>
              </li>

              <li _ngcontent-ng-c344788945="" className="list-inline-item align-middle">
                <Link _ngcontent-ng-c344788945="" routerlink="/dashboard" className="d-block"
                  href="dashboard?selected=main">
                  <img _ngcontent-ng-c344788945="" loading="lazy" fetchpriority="high" alt="logo"
                    className="main-logo ng-star-inserted" src="assets/images/106.svg" />

                </Link>
              </li>

              <div class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true" tabindex="0"></div>

            </ul>


            <ul
              _ngcontent-ng-c344788945=""
              id="right-side-items"
              className="list-inline mb-0 d-flex align-items-center"
            >

              <li
                _ngcontent-ng-c344788945=""
                className="list-inline-item align-middle balance-details d-flex d-lg-block ng-star-inserted"
              >
                <button
                  _ngcontent-ng-c344788945=""
                  mat-raised-button=""
                  className="pb-1 mb-0 mb-lg-1 me-2 me-lg-0 h-auto d-block px-2 px-xl-4 px-lg-2 w-100 mdc-button mdc-button--raised mat-mdc-raised-button mat-unthemed mat-mdc-button-base"
                  style={{ minWidth: "auto" }}
                  mat-ripple-loader-class-name="mat-mdc-button-ripple"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">
                    <span _ngcontent-ng-c344788945="" className="fw-bold lh-1">

                      LIABILITY:
                      <div
                        _ngcontent-ng-c344788945=""
                        className="theme-golden ng-star-inserted"
                      >

                        0
                      </div>

                    </span>
                  </span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                  <span className="mat-ripple mat-mdc-button-ripple" />
                </button>
                <button
                  _ngcontent-ng-c344788945=""
                  mat-raised-button=""
                  className="pb-1 h-auto d-block px-2 px-xl-4 px-lg-2 w-100 mdc-button mdc-button--raised mat-mdc-raised-button mat-unthemed mat-mdc-button-base"
                  style={{ minWidth: "auto" }}
                  mat-ripple-loader-class-name="mat-mdc-button-ripple"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">
                    <span _ngcontent-ng-c344788945="" className="fw-bold lh-1">

                      BALANCE:
                      <div
                        _ngcontent-ng-c344788945=""
                        className="theme-golden ng-star-inserted"
                      >

                        0
                      </div>

                    </span>
                  </span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                  <span className="mat-ripple mat-mdc-button-ripple" />
                </button>

              </li>
              <Link to="/payment">
                <li
                  _ngcontent-ng-c344788945=""
                  className="list-inline-item align-middle d-none d-lg-block ng-star-inserted"
                  style={{ marginRight: ".5rem" }}>

                  <button
                    _ngcontent-ng-c344788945=""
                    routerlink="/payment"
                    className="btn theme-btn header-btn px-md-2 px-1"
                    tabIndex={0}
                  >
                    Deposit
                  </button>

                </li>
              </Link>
              <li
                _ngcontent-ng-c344788945=""
                className="list-inline-item align-middle d-none d-lg-block ng-star-inserted"
              >
                <button _ngcontent-ng-c344788945="" className="btn theme-btn">
                  <div
                    _ngcontent-ng-c344788945=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >

                    refresh
                  </div>
                </button>
              </li>
              <li
                _ngcontent-ng-c344788945=""
                className="list-inline-item align-middle ng-star-inserted"
                onClick={toggleModal}>
                <div
                  _ngcontent-ng-c344788945=""
                  role="button"
                  className="mat-mdc-menu-trigger"
                  aria-haspopup="menu"
                  ref={profileIconRef}
                  aria-expanded={true}
                >
                  <img
                    _ngcontent-ng-c344788945=""
                    alt="profile_pic"
                    className="profile-menu rounded"
                    src="assets/images/profile-icon.svg"
                    closeModal={closeModal} />
                </div>



                <mat-menu
                  _ngcontent-ng-c344788945=""
                  ngskiphydration=""
                  className="ng-tns-c681116372-59 ng-star-inserted"
                >

                </mat-menu>
              </li>


            </ul>
          </div>
        </header>



      </div>


    </>
  )
}

export default Aheader
