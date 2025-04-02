import React from 'react'
import { useState } from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import RoutesConfig from "./routes/RoutesConfig";


function Multiwilet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div _ngcontent-ng-c344788945="" className="content-area px-lg-3">


      <div _nghost-ng-c2471652557="" className="ng-star-inserted">
        <div _ngcontent-ng-c2471652557="" className="text-center">
          <div
            _ngcontent-ng-c2471652557=""
            className="d-inline-flex justify-content-between align-items-center tab-wrapper"
          >
            <Link
              _ngcontent-ng-c2471652557=""
              routerlink="my-ids"
              routerlinkactive="active"
              className="tab px-sm-5 px-3 description-text"
              href=""
              onClick={openModal} >

              My IDs
            </Link>
            {isModalOpen &&
              <Avatar closeModal={closeModal} />}
            <Link
              _ngcontent-ng-c2471652557=""
              routerlink="create"
              routerlinkactive="active"
              className="tab px-sm-5 px-3 description-text active"
              href="#"
              onClick={openModal}>

              Create ID
            </Link>
            {isModalOpen &&
              <Avatar closeModal={closeModal} />}
          </div>
        </div>
        <router-outlet _ngcontent-ng-c2471652557="" />
        <div _nghost-ng-c660268657="" className="ng-star-inserted">
          <div
            _ngcontent-ng-c660268657=""
            className="mt-3 exchange-wrapper ng-star-inserted"
          >
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"
                      href=""
                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      www.diamondexchange09.com
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
                {isModalOpen &&
                  <Avatar closeModal={closeModal} />}
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      saibaba9.com
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      m.kheloyaar24.net
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      www.99exch.com
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      laser247.online
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      11xplay.pro
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      worlds777.com
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>
            <div
              _ngcontent-ng-c660268657=""
              className="exchange-box p-3 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c660268657=""
                className="d-flex align-items-center justify-content-between gapss"
              >
                <div _ngcontent-ng-c660268657="">
                  <img
                    _ngcontent-ng-c660268657=""
                    height={60}
                    width={105}
                    alt="exchanges logo"
                    className="br-10 exch-img"
                    src="assets/images/preloader-dark.svg"
                  />
                  <div _ngcontent-ng-c660268657="" className="d-block mt-2">
                    <Link
                      _ngcontent-ng-c660268657=""
                      tooltip="Go to Web"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link fs-12 fw-bold"

                    >
                      <img
                        _ngcontent-ng-c660268657=""
                        alt="go_to"
                        width={12}
                        className="me-1"
                        src="assets/images/goto-site.svg"
                      />
                      diamondbook99.com
                    </Link>
                  </div>
                </div>
                <button _ngcontent-ng-c660268657="" className="btn theme-btn" onClick={openModal}>

                  Create ID
                </button>
              </div>
            </div>

          </div>






        </div>

      </div>


    </div>
  )
}

export default Multiwilet
