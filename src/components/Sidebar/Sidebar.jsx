import { useState, useRef, useEffect } from 'react'
import React from 'react'
import './Sidebar.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'

function Sidebar() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

      <div className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden={true} style={{ background: "#1a1a1a" }} />
      {isSidebarOpen && (
        <div _ngcontent-ng-c344788945="" tabindex="-1" ngskiphydration autofocus="false" className='mat-drawer border-0 ng-tns-c2384444419-0 ng-trigger ng-trigger-transform py-3 ng-star-inserted mat-drawer-side mat-drawer-opened' style={{
          transform: "none", visibility: "visible",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,

          background: "#222",
          boxShadow: "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",

          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,

          color: "#fff"
        }} >
          <div cdkscrollable _ngcontent-ng-c344788945="" className='mat-drawer-inner-container ng-tns-c2384444419-0'>
            <div _ngcontent-ng-c344788945 className='rounded-end bg-theme-dark sidebar ng-tns-c2384444419-0'>
              <div _ngcontent-ng-c344788945 _nghost-ng-c3403002472 className=''>
                <div _ngcontent-ng-c3403002472="" id="sideNav" >
                  <div
                    _ngcontent-ng-c3403002472=""
                    className="side-nav desktop"
                  >
                    <div _ngcontent-ng-c3403002472="">
                      <div
                        _ngcontent-ng-c3403002472=""
                        className="top p-3 d-flex align-items-center justify-content-center"
                      >
                        <div
                          _ngcontent-ng-c3403002472=""
                          className="d-flex align-items-center gap-2"
                        >

                          <img
                            _ngcontent-ng-c3403002472=""
                            routerlink="/dashboard"
                            width={100}
                            alt="Logo"
                            className="logo ng-star-inserted"
                            tabIndex={0}
                            src="assets/images/107.svg"
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
                          <span
                            _ngcontent-ng-c3403002472=""
                            className="searchicon"
                          >
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

                            <div
                              _ngcontent-ng-c2530606509=""
                              ngskiphydration=""
                              className="ng-star-inserted"
                              style={{}}
                            >

                            </div>
                          </app-language-selector>
                        </div>
                      </div>

                      <div
                        _ngcontent-ng-c3403002472=""
                        className="menu desktop ng-star-inserted"
                        style={{}}
                      >
                        <ul _ngcontent-ng-c3403002472="">


                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted" onClick={openModal} style={{ cursor: "pointer" }}>

                            <div _ngcontent-ng-c3403002472="" >
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/80.gif"
                                  alt="Multi ID's Wallet"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title">
                                  Multi ID's Wallet
                                </span>
                              </div>
                            </div>

                          </li>


                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted" onClick={openModal} style={{ cursor: "pointer" }}>
                            <div _ngcontent-ng-c3403002472="" >
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/76.svg"
                                  alt="In Play"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title" >
                                  In Play
                                </span>
                              </div>
                            </div>
                          </li>


                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted" onClick={openModal} style={{ cursor: "pointer" }}>
                            <div _ngcontent-ng-c3403002472="" >
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/77.svg"
                                  alt="Sports Book"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title" >
                                  Sports Book
                                </span>
                              </div>
                            </div>
                          </li>








                          <li _ngcontent-ng-c3403002472="" className="ng-star-inserted" onClick={openModal} >

                            <div _ngcontent-ng-c3403002472="" >
                              <div _ngcontent-ng-c3403002472="">
                                <img
                                  _ngcontent-ng-c3403002472=""
                                  src="assets/images/79.svg"
                                  alt="Transactions"
                                />
                                <span _ngcontent-ng-c3403002472="" className="title" >
                                  Transactions
                                </span>
                              </div>
                            </div>
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
                            minWidth: "1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: "1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
                            minWidth: " 1px",
                            maxWidth: "1px",
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
        </div>)}
      {isModalOpen &&
        <Avatar closeModal={closeModal} />}
    </>

  )
}

export default Sidebar;
