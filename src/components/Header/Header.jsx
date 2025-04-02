import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Avatar from '../Avatar';
import Secondsidebar from '../Secondsidebar';
import Sidebar from '../Sidebar/Sidebar';
import ChangeLanguage from '../../ChangeLanguage';


function Header({ toggleMobileSidebar, toggleDesktopSidebar }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header _ngcontent-ng-c344788945="" className="mx-md-3 pb-md-3 pt-2 pt-md-3 px-2 px-md-3 rounded-3 ng-star-inserted" style={{ background: "#1a1a1a", paddingBottom: "1rem!important" }}>
        <div _ngcontent-ng-c344788945="" className="d-flex align-items-center justify-content-between gapss">

          <ul _ngcontent-ng-c344788945="" className="list-inline mb-0 top-nav d-none d-lg-flex align-items-center">
            <li _ngcontent-ng-c344788945="" class="list-inline-item"><div _ngcontent-ng-c344788945="" role="img" class="mat-icon notranslate material-icons-outlined d-block d-xl-none text-white material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" onClick={toggleDesktopSidebar}>menu</div></li>

            {/* {onClick = { togglefirstSidebar }} */}

            <div _ngcontent-ng-c344788945="" _nghost-ng-c556780884="" style={{ pointerEvents: "auto" }}>
              <div _ngcontent-ng-c556780884="" className="drag-scroll-content" drag-scroll="true" style={{
                whiteSpace: "nowrap", width: "100%", height: "100%"
              }}>
                <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: "inline-block"
                  }}>
                  <Link _ngcontent-ng-c344788945="" to="/" className="position-relative">
                    <div _ngcontent-ng-c344788945="">
                      <img _ngcontent-ng-c344788945="" src="assets/images/16.svg" alt="Kheloyar Exch" />
                    </div>
                    <div _ngcontent-ng-c344788945="">Kheloyar Exch</div>
                  </Link>
                </li>

                <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: "inline-block", optical: "0"
                  }}>
                  <Link _ngcontent-ng-c344788945="" to="#" className="position-relative" onClick={openModal}>
                    <div _ngcontent-ng-c344788945="" className="avaitor">
                      <img _ngcontent-ng-c344788945="" src="assets/images/13.svg" alt="Aviator" />
                    </div>
                    <div _ngcontent-ng-c344788945="">Aviator</div>
                  </Link>
                  {isModalOpen &&
                    <Avatar closeModal={closeModal} />}
                </li>


                <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: "inline-block"
                  }}>
                  <Link _ngcontent-ng-c344788945="" to="/all-casino" className="position-relative">
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
                  <Link _ngcontent-ng-c344788945="" to="/providers" className="position-relative">
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
                  <Link _ngcontent-ng-c344788945="" to="/slot-game" className="position-relative">
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
                  <Link _ngcontent-ng-c344788945="" to="/all-casino" className="position-relative">
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
                  <Link to="/slot-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                    <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/20.svg"
                      alt="Instant Win" /></div>
                    <div _ngcontent-ng-c344788945="">Instant Win</div>
                  </Link>
                </li>
                <li _ngcontent-ng-c344788945="" drag-scroll-item
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: 'inline-block'
                  }}>
                  <Link to="/slot-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                    <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/21.svg"
                      alt="Shooting Game" /></div>
                    <div _ngcontent-ng-c344788945="">Shooting Games</div>
                  </Link>
                </li>
                <li _ngcontent-ng-c344788945="" drag-scroll-item
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: 'inline-block'
                  }}>
                  <Link to="/slot-game" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative">
                    <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/17.svg"
                      alt="Live Casino" /></div>
                    <div _ngcontent-ng-c344788945="">Live Casino</div>
                  </Link>
                </li>
                <li _ngcontent-ng-c344788945="" drag-scroll-item
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: 'inline-block'
                  }}>
                  <Link to="#" _ngcontent-ng-c344788945="" routerlinkactive="active" className="position-relative" onClick={openModal}>
                    <div _ngcontent-ng-c344788945=""><img _ngcontent-ng-c344788945="" src="assets/images/22.svg"
                      alt="Virtual Sports" /></div>
                    <div _ngcontent-ng-c344788945="">Virtual Sports</div>
                  </Link>
                  {isModalOpen &&
                    <Avatar closeModal={closeModal} />}
                </li>





                <li _ngcontent-ng-c344788945="" drag-scroll-item=""
                  className="list-inline-item text-center cursor-pointer ng-star-inserted" style={{
                    display: "inline-block",
                    marginRight: "0px"
                  }}>
                  <Link _ngcontent-ng-c344788945="" to="#" className="position-relative" onClick={openModal}>
                    <div _ngcontent-ng-c344788945="">
                      <img _ngcontent-ng-c344788945="" src="assets/images/23.svg" alt="Indian Casino" style={{
                        width: "19px",
                        marginTop: "2px"
                      }} />
                    </div>
                    <div _ngcontent-ng-c344788945="">Indian Casino</div>
                  </Link>
                  {isModalOpen &&
                    <Avatar closeModal={closeModal} />}
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
          </ul>
          <ul _ngcontent-ng-c344788945="" id="right-side-items" className="list-inline mb-0 d-flex align-items-center">
            <li _ngcontent-ng-c344788945="" className="list-inline-item ng-star-inserted">

              <Link to="/afterlogin">
                <button _ngcontent-ng-c344788945="" className="theme-btn btn header-btn d-block d-lg-none">

                  Demo
                </button>
              </Link>
              <ChangeLanguage />
            </li>
            <li _ngcontent-ng-c344788945="" className="list-inline-item ng-star-inserted">
              <div _ngcontent-ng-c344788945="" className="d-flex auth-btns-wrapper">
                <div _ngcontent-ng-c344788945="" qid="login"
                  className="login-btn d-flex flex-column align-items-center justify-content-center w-50" to='#' onClick={openModal}>
                  <img _ngcontent-ng-c344788945="" width={15} alt="login icon" src="assets/images/login.svg" />
                  <small _ngcontent-ng-c344788945="" className="fw-bold d-block lh-1 mt-1 text-nowrap">
                    Login
                  </small>
                </div>
                {isModalOpen &&
                  <Avatar closeModal={closeModal} />}

                <Link _ngcontent-ng-c344788945="" target="_blank"
                  className="signup-btn d-flex flex-column align-items-center justify-content-center w-50"
                  href="#">
                  <img _ngcontent-ng-c344788945="" width={15} alt="signup icon" src="assets/images/signup.svg" />
                  <small _ngcontent-ng-c344788945="" className="fw-bold d-block lh-1 mt-1 text-nowrap">
                    Sign up
                  </small>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header