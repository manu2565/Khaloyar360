import React from 'react'
import Chartport from './Chartport'
import Grapaatchlogo from './Grapaatchlogo'
import Provider from './Provider'
import { useState, useEffect, useRef } from 'react'
import Seachring from './Seachring'
import Playingbutton from './Playingbutton'

function Sloatcasino() {

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);


  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for click outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div />
      <div>
        <div>
          <div data-b24-crm-button-shadow="" className="b24-widget-button-shadow" />
          <div style={{ display: "none" }}>
            <a
              data-b24-crm-button-widget-blank=""
              data-b24-crm-button-widget=""
              className="b24-widget-button-social-item"
              title=""
            >
              <i />
              <span
                data-b24-crm-button-tooltip=""
                className="b24-widget-button-social-tooltip"
              />
            </a>
          </div>
          <div
            dir="ltr"
            data-b24-crm-button-cont=""
            className="b24-widget-button-wrapper b24-widget-button-position-bottom-right b24-widget-button-visible"
          >
            <div
              data-b24-crm-hello-cont=""
              className="b24-widget-button-popup"
              style={{ borderColor: "#fff300" }}
            >
              <span
                data-b24-hello-btn-hide=""
                className="b24-widget-button-popup-btn-hide"
              />
              <div className="b24-widget-button-popup-inner">
                <div className="b24-widget-button-popup-image">
                  <span
                    data-b24-hello-icon=""
                    className="b24-widget-button-popup-image-item"
                  />
                </div>
                <div className="b24-widget-button-popup-content">
                  <div
                    data-b24-hello-name=""
                    className="b24-widget-button-popup-name"
                  />
                  <div
                    data-b24-hello-text=""
                    className="b24-widget-button-popup-description"
                  />
                </div>
              </div>
              <div
                className="b24-widget-button-popup-triangle"
                style={{ borderColor: "#fff300" }}
              />
            </div>
            <div data-b24-crm-button-block="" className="b24-widget-button-social">
              <a
                data-b24-crm-button-widget-blank=""
                data-b24-crm-button-widget="openline_livechat"
                className="b24-widget-button-social-item b24-widget-button-openline_livechat"
                title=""
                data-b24-widget-sort={100}
                style={{
                  backgroundColor: "rgb(255, 243, 0)",
                  backgroundImage: 'url("data:image/svg+xml'
                }}
              >
                <i />
                <span
                  data-b24-crm-button-tooltip=""
                  className="b24-widget-button-social-tooltip"
                >
                  Kheloyar.Club
                </span>
              </a>
            </div>
            <div
              data-b24-crm-button-block-button=""
              className="b24-widget-button-inner-container"
            >
              <div
                data-b24-crm-button-block-border=""
                className="b24-widget-button-inner-mask"
                style={{ background: "#fff300" }}
              ></div>
              <div className="b24-widget-button-block">
                <div
                  data-b24-crm-button-pulse=""
                  className="b24-widget-button-pulse b24-widget-button-pulse-animate"
                  style={{ borderColor: "#fff300" }}
                />
                <div
                  data-b24-crm-button-block-inner=""
                  className="b24-widget-button-inner-block"
                  style={{ background: "#fff300" }}
                >
                  <div className="b24-widget-button-icon-container">
                    <div
                      data-b24-crm-button-icon="crmform"
                      className="b24-widget-button-inner-item"
                      style={{ display: "none" }}
                    >
                      <svg
                        className="b24-crm-button-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 24 28"
                      >
                        <path
                          className="b24-crm-button-webform-icon"
                          fill=" #000000"
                          fillRule="evenodd"
                          d="M815.406703,961 L794.305503,961 C793.586144,961 793,961.586144 793,962.305503 L793,983.406703 C793,984.126062 793.586144,984.712206 794.305503,984.712206 L815.406703,984.712206 C816.126062,984.712206 816.712206,984.126062 816.712206,983.406703 L816.712206,962.296623 C816.703325,961.586144 816.117181,961 815.406703,961 L815.406703,961 Z M806.312583,979.046143 C806.312583,979.454668 805.975106,979.783264 805.575462,979.783264 L796.898748,979.783264 C796.490224,979.783264 796.161627,979.445787 796.161627,979.046143 L796.161627,977.412044 C796.161627,977.003519 796.499105,976.674923 796.898748,976.674923 L805.575462,976.674923 C805.983987,976.674923 806.312583,977.0124 806.312583,977.412044 L806.312583,979.046143 L806.312583,979.046143 Z M813.55946,973.255747 C813.55946,973.664272 813.221982,973.992868 812.822339,973.992868 L796.889868,973.992868 C796.481343,973.992868 796.152746,973.655391 796.152746,973.255747 L796.152746,971.621647 C796.152746,971.213122 796.490224,970.884526 796.889868,970.884526 L812.813458,970.884526 C813.221982,970.884526 813.550579,971.222003 813.550579,971.621647 L813.550579,973.255747 L813.55946,973.255747 Z M813.55946,967.45647 C813.55946,967.864994 813.221982,968.193591 812.822339,968.193591 L796.889868,968.193591 C796.481343,968.193591 796.152746,967.856114 796.152746,967.45647 L796.152746,965.82237 C796.152746,965.413845 796.490224,965.085249 796.889868,965.085249 L812.813458,965.085249 C813.221982,965.085249 813.550579,965.422726 813.550579,965.82237 L813.550579,967.45647 L813.55946,967.45647 Z"
                          transform="translate(-793 -961)"
                        />
                      </svg>
                    </div>
                    <div
                      data-b24-crm-button-icon="callback"
                      className="b24-widget-button-inner-item"
                      style={{ display: "none" }}
                    >
                      <svg
                        className="b24-crm-button-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 28 30"
                      >
                        <path
                          className="b24-crm-button-call-icon"
                          fill="#000000"
                          fillRule="evenodd"
                          d="M940.872414,978.904882 C939.924716,977.937215 938.741602,977.937215 937.79994,978.904882 C937.08162,979.641558 936.54439,979.878792 935.838143,980.627954 C935.644982,980.833973 935.482002,980.877674 935.246586,980.740328 C934.781791,980.478121 934.286815,980.265859 933.840129,979.97868 C931.757607,978.623946 930.013117,976.882145 928.467826,974.921839 C927.701216,973.947929 927.019115,972.905345 926.542247,971.731659 C926.445666,971.494424 926.463775,971.338349 926.6509,971.144815 C927.36922,970.426869 927.610672,970.164662 928.316918,969.427987 C929.300835,968.404132 929.300835,967.205474 928.310882,966.175376 C927.749506,965.588533 927.206723,964.77769 926.749111,964.14109 C926.29156,963.50449 925.932581,962.747962 925.347061,962.154875 C924.399362,961.199694 923.216248,961.199694 922.274586,962.161118 C921.55023,962.897794 920.856056,963.653199 920.119628,964.377388 C919.437527,965.045391 919.093458,965.863226 919.021022,966.818407 C918.906333,968.372917 919.274547,969.840026 919.793668,971.269676 C920.856056,974.228864 922.473784,976.857173 924.43558,979.266977 C927.085514,982.52583 930.248533,985.104195 933.948783,986.964613 C935.6148,987.801177 937.341181,988.444207 939.218469,988.550339 C940.510236,988.625255 941.632988,988.288132 942.532396,987.245549 C943.148098,986.533845 943.842272,985.884572 944.494192,985.204083 C945.459999,984.192715 945.466036,982.969084 944.506265,981.970202 C943.359368,980.777786 942.025347,980.091055 940.872414,978.904882 Z M940.382358,973.54478 L940.649524,973.497583 C941.23257,973.394635 941.603198,972.790811 941.439977,972.202844 C940.97488,970.527406 940.107887,969.010104 938.90256,967.758442 C937.61538,966.427182 936.045641,965.504215 934.314009,965.050223 C933.739293,964.899516 933.16512,965.298008 933.082785,965.905204 L933.044877,966.18514 C932.974072,966.707431 933.297859,967.194823 933.791507,967.32705 C935.117621,967.682278 936.321439,968.391422 937.308977,969.412841 C938.23579,970.371393 938.90093,971.53815 939.261598,972.824711 C939.401641,973.324464 939.886476,973.632369 940.382358,973.54478 Z M942.940854,963.694228 C940.618932,961.29279 937.740886,959.69052 934.559939,959.020645 C934.000194,958.902777 933.461152,959.302642 933.381836,959.8878 L933.343988,960.167112 C933.271069,960.705385 933.615682,961.208072 934.130397,961.317762 C936.868581,961.901546 939.347628,963.286122 941.347272,965.348626 C943.231864,967.297758 944.53673,969.7065 945.149595,972.360343 C945.27189,972.889813 945.766987,973.232554 946.285807,973.140969 L946.55074,973.094209 C947.119782,972.993697 947.484193,972.415781 947.350127,971.835056 C946.638568,968.753629 945.126778,965.960567 942.940854,963.694228 Z"
                          transform="translate(-919 -959)"
                        />
                      </svg>
                    </div>
                    <div
                      data-b24-crm-button-icon="openline"
                      className="b24-widget-button-inner-item b24-widget-button-icon-animation"
                      style={{}}
                    >
                      <svg
                        className="b24-crm-button-icon b24-crm-button-icon-active"
                        width={28}
                        height={29}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="b24-crm-button-chat-icon"
                          d="M25.99 7.744a2 2 0 012 2v11.49a2 2 0 01-2 2h-1.044v5.162l-4.752-5.163h-7.503a2 2 0 01-2-2v-1.872h10.073a3 3 0 003-3V7.744zM19.381 0a2 2 0 012 2v12.78a2 2 0 01-2 2h-8.69l-5.94 6.453V16.78H2a2 2 0 01-2-2V2a2 2 0 012-2h17.382z"
                          fill=" #000000"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="b24-widget-button-inner-item b24-widget-button-close">
                    <svg
                      className="b24-widget-button-icon b24-widget-button-close-item"
                      xmlns="http://www.w3.org/2000/svg"
                      width={29}
                      height={29}
                      viewBox="0 0 29 29"
                    >
                      <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M18.866 14.45l9.58-9.582L24.03.448l-9.587 9.58L4.873.447.455 4.866l9.575 9.587-9.583 9.57 4.418 4.42 9.58-9.577 9.58 9.58 4.42-4.42"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <app-root _nghost-ng-c3889032351="" ng-version="17.0.4">


        <router-outlet _ngcontent-ng-c3889032351="" className="ng-star-inserted" />
        <app-main _nghost-ng-c344788945="" className="ng-star-inserted">
          <div
            _ngcontent-ng-c344788945=""
            ngskiphydration=""
            autosize=""
            className="mat-drawer-container theme-wrapper mat-drawer-transition"
          >

            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />

            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />
            <mat-drawer-content
              ngskiphydration=""
              className="mat-drawer-content ng-star-inserted"
              style={{ marginLeft: "180px " }}
            >
              <div _ngcontent-ng-c344788945="" className="h-100">

                <div _ngcontent-ng-c344788945="" className="content-area px-lg-3">

                  <router-outlet _ngcontent-ng-c344788945="" />
                  <app-all-casino
                    _nghost-ng-c4164180093=""
                    className="ng-star-inserted"
                  >
                    <Seachring />
                    <drag-scroll
                      _ngcontent-ng-c4164180093=""
                      _nghost-ng-c556780884=""
                      className="ng-star-inserted"
                      style={{ pointerEvents: "auto" }}
                    >
                      <div
                        _ngcontent-ng-c556780884=""
                        className="drag-scroll-content"
                        drag-scroll="true"
                        style={{
                          display: "block",
                          whiteSpace: "nowrap",
                          width: "100%",
                          height: "calc(100% + 2px)"
                        }}
                      >
                        <Playingbutton />
                      </div>
                    </drag-scroll>
                    <div
                      _ngcontent-ng-c4164180093=""
                      className="d-flex align-items-center justify-content-between gapss mb-2 ng-star-inserted"
                    >
                      <ul _ngcontent-ng-c4164180093="" className="list-inline mb-0">
                        <li
                          _ngcontent-ng-c4164180093=""
                          className="list-inline-item"
                        >
                          Home
                        </li>
                        <li
                          _ngcontent-ng-c4164180093=""
                          className="list-inline-item"
                        >
                          &gt;
                        </li>
                        <li
                          _ngcontent-ng-c4164180093=""
                          className="list-inline-item"
                        >
                          All Casino
                        </li>
                        <li
                          _ngcontent-ng-c4164180093=""
                          className="list-inline-item ng-star-inserted"
                        >
                          &gt;
                        </li>
                        <li
                          _ngcontent-ng-c4164180093=""
                          className="list-inline-item ng-star-inserted"
                        >
                          Slot Games
                        </li>


                      </ul>
                      <p
                        _ngcontent-ng-c4164180093=""
                        className="mb-0 ng-star-inserted"
                      >
                        Total: 2686 Games
                      </p>


                    </div>
                    <app-cdk-scroller
                      _ngcontent-ng-c4164180093=""
                      _nghost-ng-c4055556309=""
                      className="ng-star-inserted"
                    >
                      <cdk-virtual-scroll-viewport
                        _ngcontent-ng-c4055556309=""
                        itemsize={10}
                        minbufferpx="500px"
                        maxbufferpx={600}
                        className="cdk-virtual-scroll-viewport cdk-virtual-scrollable main scroll-container cdk-virtual-scroll-orientation-vertical"
                      >
                        <div
                          className="cdk-virtual-scroll-content-wrapper"
                          style={{ transform: "translateY(0px)" }}
                        >
                          <div
                            _ngcontent-ng-c4055556309=""
                            className="cards-wrapper me-2 ng-star-inserted"
                          >
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-aztecsunstone/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-aztecsunstone.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-bitcoinbob/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-bitcoinbob.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-bookofdragons/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/TPG-bookofdragons.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-bookoftheprincess/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/SHS-bookoftheprincess.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-caesar/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-caesar.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-candycash/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-candycash.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-candycashdeluxe/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-candycashdeluxe.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="DS-coincat/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/DS-coincat.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    DS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-crackineggs/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-crackineggs.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-cupidsarrow/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-cupidsarrow.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-diamondbar/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-diamondbar.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-dianajones/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-dianajones.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-dragonsparadise/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-dragonsparadise.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-dragonssrevenge/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-dragonssrevenge.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-fortune88/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img    ng-lazyloaded"
                                src="assets/images/MOB-fortune88.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-frozenfairys/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img      ng-lazyloaded"
                                src="assets/images/MOB-frozenfairys.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-fruttifriends/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img      ng-lazyloaded"
                                src="assets/images/MOB-fruttifriends.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-gemmer/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img      ng-lazyloaded"
                                src="assets/images/MOB-gemmer.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-honeymoney/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img      ng-lazyloaded"
                                src="assets/images/MOB-honeymoney.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-jollygingerbread/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img      ng-lazyloaded"
                                src="assets/images/MOB-jollygingerbread.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-jrjungle/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-jrjungle.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-ladybucks/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-ladybucks.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-larajonesiscleopatra/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/SHS-larajonesiscleopatra.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-legendarymulan/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-legendarymulan.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-legendsofthesea/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-legendsofthesea.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-lionexplorer/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-lionexplorer.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-lobsterama/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-lobsterama.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-neoncowboy/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-neoncowboy.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-pandawilds/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-pandawilds.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-pharaohsofthenile/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-pharaohsofthenile.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-pinatapop/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-pinatapop.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-piratesplunder/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-piratesplunder.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-piratesofthemediterranean/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/SHS-piratesofthemediterranean.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-princecharming/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-princecharming.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-puppyparty/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-puppyparty.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-sanxingfortunes/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-sanxingfortunes.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-spookycircus/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-spookycircus.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-summersmileys/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-summersmileys.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-theheroes/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-theheroes.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-unicorns/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-unicorns.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-vladdracula/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-vladdracula.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-warriorqueens/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-warriorqueens.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-wickedreels/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-wickedreels.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-wildshamrock/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-wildshamrock.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-wildwonka/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-wildwonka.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-wizardry/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-wizardry.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-wolfbear/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-wolfbear.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="MOB-worldcup/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/MOB-worldcup.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    MOB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 1
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="DS-egyptdynasty/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img  ng-lazyloaded"
                                src="assets/images/DS-egyptdynasty.webp"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    DS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 4
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-funmonkey/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 4
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-goldypiggy/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 4
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-tpg777/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 4
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-blazingstar/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-burningflame/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="1x2-classicfruits/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    1x2
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-coinsonfire/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="QS-diamondduke/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    QS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-doubletriplechance/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-frozenjoker/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-fruitslot/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-fruits777s/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="NLC-gaelicgold/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    NLC
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="OT-godhand/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    OT
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-goldcup/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BTG-goldmegaways/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BTG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-hotfruitdelights/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-jinglejokers/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-moneyfarm/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-multiwild/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-redhotrepeater/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="QS-reno7s/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    QS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-royalcrown2/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-santasfarm/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="1x2-smokinghotfruits/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    1x2
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="QS-spinionsbeachparty/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    QS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="QS-spinionsxmasparty/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    QS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="NLC-starstruck/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    NLC
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-stormingflame/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="PPC-strikinghot5/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    PPC
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-superjewelrepeater/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="YGG-timetraveltigers/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    YGG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="BPG-tombofdeadpower4slots/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    BPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="YGG-wildrobofactory/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    YGG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 5
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="YGG-arthursfortune/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    YGG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="CQC-goodfortune/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    CQC
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="CQC-goodfortunem/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    CQC
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-lostcityofgold/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="YGG-luchamaniacs/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    YGG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="YGG-luckyneko/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    YGG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-mermaidtreasure/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="KGL-midastreasureminimax/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    KGL
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="KGL-monkeygodbuyfeature/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    KGL
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="HAB-naughtywukong/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    HAB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="HAB-wealthinn/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    HAB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 8
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="SHS-blackforest/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    SHS
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-bookofanime/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-bookoftattoo2/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-clashofgods/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="HAB-crystopia/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    HAB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-diamondblitz40/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="HAB-discobeats/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    HAB
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-djrock/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="GA-emperorswealth/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    GA
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-fatmamaswheel/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="FUG-fortunecircus/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    FUG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-highwaykings/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              _ngcontent-ng-c4055556309=""
                              className="game-card ng-star-inserted"
                              //href="TPG-highwaykingsdeluxe/casino"
                            >
                              <img
                                _ngcontent-ng-c4055556309=""
                                alt="Online betting Id Provider, Online Cricket Id"
                                className="cards-img ng-lazyloading"
                                src="assets/images/preloader-dark.svg"
                              />
                              <div
                                _ngcontent-ng-c4055556309=""
                                className="game-name"
                              >
                                <div
                                  _ngcontent-ng-c4055556309=""
                                  className="d-flex align-items-center justify-content-between gapss"
                                >
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="fw-bold"
                                  >
                                    TPG
                                  </span>
                                  <span
                                    _ngcontent-ng-c4055556309=""
                                    className="min-bet"
                                  >

                                    ₹ 9
                                  </span>
                                </div>
                              </div>
                            </a>

                          </div>


                        </div>
                        {/* <div
                          className="cdk-virtual-scroll-spacer"
                          style={{ height: "26860px" }}
                        /> */}
                      </cdk-virtual-scroll-viewport>
                    </app-cdk-scroller>


                  </app-all-casino>


                </div>
              </div>
              <div
                _ngcontent-ng-c344788945=""
                className="footerNav d-block d-lg-none main ng-star-inserted"
              >
                <ul _ngcontent-ng-c344788945="">
                  <li
                    _ngcontent-ng-c344788945=""
                    routerlink="dashboard"
                    routerlinkactive="active"
                    tabIndex={0}
                  >
                    <svg
                      _ngcontent-ng-c344788945=""
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M3.56562 11.2545C3.29924 11.4791 3.11067 11.6467 2.91611 11.8025C2.3564 12.2486 1.76675 12.1498 1.19806 11.527C0.704191 10.985 0.677253 10.3771 1.18609 9.89802C2.41626 8.73919 3.66739 7.59833 4.91253 6.45746C6.83711 4.69077 8.76768 2.92707 10.6953 1.15738C10.9916 0.884888 11.2879 0.62737 11.7219 0.612398C12.135 0.594432 12.4582 0.762118 12.7605 1.02563C14.9724 2.963 17.1874 4.89738 19.4023 6.83475C20.3421 7.65821 21.279 8.48766 22.2248 9.30513C22.6229 9.64949 22.8743 10.0687 22.6738 10.5807C22.4433 11.1676 22.0243 11.6108 21.3837 11.7815C21.0844 11.8623 20.8929 11.6138 20.6594 11.494C20.5397 11.6497 20.5905 11.8114 20.5905 11.9582C20.5876 14.7729 20.5905 17.5876 20.5876 20.4024C20.5876 21.4354 20.2014 21.8247 19.1808 21.8277C17.9746 21.8277 16.7653 21.8307 15.5591 21.8277C14.8138 21.8277 14.4726 21.5073 14.3888 20.7677C14.3169 20.1149 14.3559 19.4621 14.3529 18.8093C14.3469 17.387 14.3409 15.9677 14.3559 14.5453C14.3589 14.171 14.2301 14.0512 13.859 14.0572C12.5959 14.0752 11.3298 14.0782 10.0667 14.0572C9.68059 14.0512 9.5878 14.186 9.59079 14.5513C9.60576 16.5276 9.59977 18.5039 9.59678 20.4772C9.59678 21.4354 9.20767 21.8277 8.26184 21.8307C7.11248 21.8307 5.96013 21.8337 4.81077 21.8307C3.99963 21.8277 3.5776 21.4085 3.5746 20.594C3.57161 17.6655 3.5746 14.737 3.5746 11.8084C3.5746 11.6587 3.5746 11.506 3.5746 11.2605L3.56562 11.2545Z"
                        fill="white"
                      />
                    </svg>
                    <span _ngcontent-ng-c344788945="">Home</span>
                  </li>
                  <li
                    _ngcontent-ng-c344788945=""
                    routerlink="/exchange"
                    routerlinkactive="active"
                    tabIndex={0}
                  >
                    <svg
                      _ngcontent-ng-c344788945=""
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M26.7232 13.463C26.6775 13.4046 26.6547 13.3317 26.6595 13.2579C26.6644 13.1842 26.6961 13.1147 26.7488 13.0625L28.7738 11.0585C28.8908 10.9465 28.9842 10.8126 29.0485 10.6645C29.1128 10.5164 29.1465 10.3571 29.148 10.196C29.1494 10.0348 29.1183 9.87497 29.0568 9.72581C28.9951 9.57664 28.9039 9.44113 28.7889 9.32716C28.6738 9.21319 28.5369 9.12306 28.3861 9.06203C28.2354 9.001 28.0738 8.97029 27.911 8.97169C27.7483 8.97309 27.5873 9.00658 27.4376 9.07019C27.288 9.1338 27.1526 9.22627 27.0395 9.34218L25.0086 11.3522C24.9559 11.4042 24.8859 11.4354 24.8118 11.4401C24.7376 11.4448 24.6641 11.4226 24.6053 11.3777C22.9793 10.1354 21.0488 9.34323 19.0116 9.08244C18.9377 9.07299 18.8698 9.03723 18.8205 8.98184C18.7713 8.92643 18.7442 8.85518 18.7442 8.78142V5.64863C18.7441 5.60867 18.7519 5.5691 18.7672 5.53213C18.7825 5.49518 18.8051 5.46158 18.8336 5.43328C18.8621 5.40497 18.8959 5.3825 18.9332 5.36719C18.9705 5.35186 19.0105 5.34396 19.0508 5.34396H21.1969C21.5222 5.34396 21.8341 5.21608 22.0643 4.98845C22.2942 4.76082 22.4234 4.45209 22.4234 4.13018C22.4234 3.80827 22.2942 3.49953 22.0643 3.27189C21.8341 3.04426 21.5222 2.91638 21.1969 2.91638H13.8387C13.5134 2.91638 13.2015 3.04426 12.9715 3.27189C12.7415 3.49953 12.6123 3.80827 12.6123 4.13018C12.6123 4.45209 12.7415 4.76082 12.9715 4.98845C13.2015 5.21608 13.5134 5.34396 13.8387 5.34396H15.9848C16.0662 5.34396 16.1441 5.37594 16.2016 5.43284C16.2591 5.48976 16.2914 5.56693 16.2914 5.64741V8.78142C16.2917 8.85527 16.2647 8.92665 16.2154 8.9821C16.1662 9.03755 16.0981 9.07325 16.0241 9.08244C13.4722 9.4049 11.0996 10.5531 9.27537 12.3484C7.45114 14.1437 6.27764 16.4855 5.93744 19.0093C5.59724 21.5331 6.10942 24.0974 7.39427 26.3033C8.67914 28.5091 10.6646 30.2327 13.0418 31.2061C15.419 32.1793 18.0546 32.3478 20.5385 31.685C23.0224 31.0221 25.2154 29.5655 26.7761 27.5414C28.3367 25.5173 29.1778 23.0395 29.1682 20.4933C29.1585 17.9472 28.2991 15.4755 26.7232 13.463ZM17.5178 29.6197C15.6987 29.6197 13.9203 29.0858 12.4077 28.0856C10.8951 27.0853 9.71624 25.6634 9.02006 24.0001C8.32389 22.3367 8.14174 20.5062 8.49664 18.7404C8.85154 16.9745 9.72757 15.3524 11.0139 14.0793C12.3003 12.8061 13.9392 11.9391 15.7234 11.5879C17.5076 11.2366 19.357 11.4169 21.0377 12.1059C22.7185 12.7949 24.1549 13.9617 25.1657 15.4588C26.1763 16.9558 26.7158 18.7159 26.7158 20.5164C26.7131 22.9299 25.7432 25.2439 24.0188 26.9506C22.2946 28.6572 19.9565 29.6171 17.5178 29.6197Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M17.5016 13.1249C17.3405 13.1249 17.1859 13.1889 17.072 13.3029C16.958 13.4168 16.894 13.5714 16.894 13.7325V19.8089H10.8176C10.6565 19.8089 10.5019 19.8729 10.3879 19.9869C10.274 20.1008 10.21 20.2554 10.21 20.4165C10.21 21.8587 10.6376 23.2685 11.4388 24.4675C12.24 25.6667 13.3789 26.6012 14.7112 27.1531C16.0436 27.705 17.5097 27.8494 18.9242 27.5681C20.3386 27.2868 21.6379 26.5922 22.6575 25.5726C23.6773 24.5528 24.3719 23.2534 24.6532 21.8391C24.9345 20.4246 24.7901 18.9585 24.2382 17.6261C23.6863 16.2938 22.7518 15.155 21.5526 14.3537C20.3535 13.5525 18.9438 13.1249 17.5016 13.1249Z"
                        fill="white"
                      />
                    </svg>
                    <span _ngcontent-ng-c344788945="">Exchange</span>
                  </li>
                  <li _ngcontent-ng-c344788945="" className="main-menu-btn" />
                  <li
                    _ngcontent-ng-c344788945=""
                    routerlink="/newCasino"
                    routerlinkactive="active"
                    tabIndex={0}
                    className="ng-star-inserted active"
                  >
                    <svg
                      _ngcontent-ng-c344788945=""
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M20.9231 8.41278C20.661 5.67962 18.2312 3.67568 15.498 3.93917C15.4069 3.94771 15.3143 3.95911 15.2232 3.97335C14.3942 4.09014 13.6095 4.41915 12.9443 4.92761C13.2036 5.86762 13.4158 6.81618 13.5895 7.77329C14.2105 6.46297 15.7758 5.90323 17.0861 6.52421C18.3964 7.14519 18.9562 8.71045 18.3352 10.0208C17.888 10.9665 16.9209 11.5547 15.8755 11.5205C15.1747 11.5063 14.5096 11.2058 14.0353 10.6888C14.0923 11.1502 14.1478 11.6145 14.2005 12.0803C14.2333 12.1073 14.2689 12.1301 14.3059 12.1486C14.5139 12.2597 14.7304 12.3509 14.9554 12.4235C15.0166 12.4406 15.085 12.4534 15.0608 12.5289C15.0252 12.6941 14.9939 12.8422 14.9639 12.9904C14.9454 13.0801 14.8899 13.0772 14.8215 13.0573C14.6364 13.0003 14.4612 12.9348 14.2874 12.8608C14.3131 13.1114 14.3415 13.3621 14.3672 13.6028C14.8614 13.7666 15.3784 13.8535 15.8997 13.862C16.6702 13.8805 17.435 13.711 18.1258 13.3678C19.2139 12.8465 20.0771 11.9464 20.5513 10.8369C20.7108 10.4324 20.8319 10.0137 20.9131 9.58638L20.9459 8.51818C20.9231 8.48684 20.9231 8.44697 20.9231 8.41278ZM15.357 5.26943C14.9155 5.33352 14.4925 5.49019 14.1179 5.73089C14.061 5.7665 14.014 5.77362 13.9727 5.70811C13.8886 5.57992 13.806 5.45459 13.7191 5.33637C13.675 5.26943 13.7006 5.23382 13.7619 5.20107C14.2376 4.9333 14.7546 4.7453 15.2901 4.64418C15.3585 4.63136 15.3998 4.64418 15.4069 4.72536C15.424 4.87064 15.4439 5.01449 15.4624 5.16119C15.481 5.24949 15.4183 5.26231 15.357 5.26943ZM18.3608 5.54147C18.2711 5.64401 18.1885 5.75226 18.1101 5.86477C18.056 5.93741 18.0104 5.9545 17.925 5.89468C17.6273 5.67107 17.2898 5.50444 16.9309 5.40474C16.8554 5.38195 16.8027 5.35061 16.8212 5.26373C16.8525 5.11561 16.8867 4.96749 16.918 4.81794C16.918 4.77379 16.9408 4.73391 17.0021 4.74388C17.1302 4.78661 17.2613 4.82506 17.388 4.87349C17.7156 4.99312 18.0304 5.14694 18.3266 5.3321C18.4235 5.39477 18.4534 5.44462 18.3679 5.54147H18.3608ZM18.1215 12.6072C17.7227 12.818 17.2912 12.9576 16.8454 13.0189C16.7557 13.0317 16.7329 12.9946 16.7229 12.922C16.7101 12.8038 16.6944 12.6827 16.6802 12.5375C16.6631 12.4819 16.7058 12.4477 16.7785 12.4321C17.1246 12.348 17.4564 12.2184 17.7697 12.0475C17.8367 12.0147 17.8794 12.0048 17.9236 12.0788C18.0019 12.2084 18.0874 12.3324 18.1742 12.4506C18.2113 12.5261 18.2041 12.5674 18.1272 12.6058L18.1215 12.6072ZM19.1313 6.78627C19.2367 6.71933 19.3436 6.65097 19.4433 6.57691C19.543 6.50284 19.5672 6.53845 19.617 6.61821C19.8947 7.07255 20.0799 7.57674 20.1611 8.10229C20.1782 8.20627 20.1611 8.25042 20.0528 8.26181L19.5871 8.31308C19.5615 8.31308 19.5458 8.26466 19.5373 8.20911C19.4575 7.76617 19.3051 7.33889 19.0858 6.94579C19.0487 6.86033 19.0672 6.82473 19.1356 6.78627H19.1313ZM19.9474 10.4794C19.8378 10.7115 19.7067 10.9323 19.5572 11.1417C19.4903 11.2343 19.4361 11.2357 19.3564 11.1673C19.2481 11.0747 19.0886 11.0078 19.0416 10.8924C18.9946 10.7771 19.147 10.6489 19.2068 10.5207C19.3322 10.2786 19.4361 10.0265 19.5173 9.76726C19.5458 9.67326 19.5885 9.6405 19.6882 9.66898C19.8178 9.70744 19.9531 9.72595 20.087 9.75444C20.1354 9.75444 20.181 9.77153 20.1767 9.82993C20.1269 10.0535 20.0514 10.27 19.9546 10.478L19.9474 10.4794Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M17.8794 8.95118C17.848 10.0137 16.9621 10.8497 15.8996 10.8184C15.8954 10.8184 15.8925 10.8184 15.8882 10.8184C14.8243 10.807 13.9697 9.93393 13.9826 8.86858C13.994 7.80465 14.867 6.95009 15.9324 6.96291C15.9637 6.96291 15.9965 6.96434 16.0278 6.96576C17.0832 6.99852 17.9135 7.88156 17.8794 8.93694C17.8794 8.94121 17.8794 8.94549 17.8794 8.95118Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M0.436523 3.1174C0.436523 2.13181 1.06605 1.34704 1.97615 1.21031C3.92455 0.915489 5.87294 0.653425 7.8313 0.37142C8.5235 0.273146 9.21711 0.186266 9.90931 0.0794462C10.9818 -0.0857685 11.9204 0.553726 12.0799 1.6262C12.4303 3.97908 12.7536 6.33339 13.0854 8.6877C13.3532 10.5862 13.6081 12.4862 13.8844 14.3819C14.0397 15.4473 13.4557 16.3802 12.4003 16.5539C10.6741 16.8373 8.93938 17.061 7.20463 17.3074C6.29167 17.437 5.3773 17.558 4.46434 17.6976C3.36766 17.8628 2.43619 17.2262 2.27098 16.1238C1.92203 13.8008 1.60157 11.4721 1.27257 9.14631C1.00623 7.25204 0.744165 5.35207 0.479251 3.45495C0.46216 3.3168 0.443645 3.17722 0.436523 3.1174ZM9.69852 7.99693C9.72273 7.42153 9.39087 6.88885 8.86105 6.65955C8.32125 6.37897 7.66467 6.46585 7.21745 6.87889C7.05081 7.02558 6.92547 7.12243 6.67195 7.00707C5.87294 6.64673 5.0725 6.8917 4.66801 7.58105C4.26352 8.26897 4.43301 9.06513 5.13944 9.62202C5.66785 10.0351 6.20337 10.4395 6.74601 10.8369C7.28011 11.2286 7.71594 11.173 8.12613 10.6518C8.56765 10.0949 8.98638 9.51377 9.42506 8.94549C9.62445 8.66919 9.71988 8.33448 9.69852 7.99693ZM12.2707 13.563C12.2821 13.2753 12.1853 13.1456 12.0201 13.0716C11.8734 12.989 11.6882 13.0403 11.6056 13.187C11.5999 13.1969 11.5942 13.2083 11.5899 13.2183C11.4048 13.7752 11.1968 13.9603 10.8094 13.3479C10.6983 13.2083 10.4961 13.1855 10.3565 13.2952C10.3437 13.3052 10.3309 13.3166 10.3209 13.3294C10.1614 13.4305 10.1144 13.6413 10.2155 13.8008C10.2184 13.8051 10.2212 13.8094 10.2241 13.8136C10.5118 14.2438 10.7924 14.6796 11.1085 15.0869C11.2937 15.3362 11.6056 15.3219 11.7324 15.0485C11.9645 14.54 12.1169 13.9988 12.2722 13.5601V13.563H12.2707ZM2.08725 4.21266C2.08725 4.50891 2.16843 4.65846 2.36783 4.714C2.54871 4.76528 2.74098 4.6784 2.82074 4.50748C2.92471 4.34369 2.89338 4.04887 3.07853 4.01042C3.31211 3.96057 3.3463 4.2796 3.49727 4.40921C3.64824 4.53882 3.79636 4.62427 3.98294 4.49609C4.15813 4.41491 4.23504 4.20839 4.15385 4.0332C4.14816 4.02039 4.14104 4.00757 4.13391 3.99475C3.87612 3.53329 3.57418 3.09746 3.23093 2.69582C3.12126 2.53488 2.90193 2.49357 2.74098 2.60324C2.67974 2.64455 2.63274 2.70579 2.6071 2.77558C2.38634 3.25556 2.23822 3.78253 2.08725 4.21266Z"
                        fill="white"
                      />
                    </svg>
                    <span _ngcontent-ng-c344788945="">All Casino</span>
                  </li>


                  <li _ngcontent-ng-c344788945="">
                    <svg
                      _ngcontent-ng-c344788945=""
                      viewBox="0 0 45 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M8.92656 1.06582C11.149 1.06583 13.3224 1.06349 15.4958 1.06642C18.3723 1.07029 20.3965 3.09264 20.3994 5.96918C20.4028 9.49892 20.4028 13.0287 20.3994 16.5584C20.3966 19.4353 18.3723 21.4599 15.4963 21.4626C11.9666 21.4659 8.43684 21.4658 4.9071 21.4626C2.03408 21.46 0.00605013 19.4321 0.00341021 16.5592C0.000166804 13.0294 0.000163514 9.49968 0.00341133 5.96994C0.00605576 3.09622 2.03318 1.07121 4.90662 1.06623C6.23025 1.06393 7.55389 1.06583 8.92656 1.06582Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M20.2159 41.5641C19.4888 43.7614 17.7982 44.9952 15.5382 44.9978C11.9773 45.0018 8.41638 45.0032 4.85545 44.9975C2.04803 44.993 0.0083938 42.9523 0.00404922 40.1442C-0.00145969 36.5833 -0.00121159 33.0223 0.00396655 29.4614C0.00805351 26.6511 2.04552 24.6074 4.84942 24.6027C8.41035 24.5968 11.9713 24.5978 15.5322 24.6024C18.3689 24.6061 20.3959 26.6417 20.3993 29.4887C20.4034 33.0333 20.4067 36.5779 20.3924 40.1225C20.3905 40.5902 20.2824 41.0574 20.2159 41.5641Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M36.0906 24.6013C37.4447 24.6292 38.7629 24.5506 40.0519 24.7091C42.1872 24.9716 43.8906 26.9046 43.9161 29.0643C43.9613 32.8876 43.9665 36.7123 43.915 40.5354C43.883 42.9135 41.8507 44.9457 39.4723 44.9778C35.6492 45.0293 31.8243 45.0294 28.0012 44.9778C25.6088 44.9456 23.5799 42.882 23.5542 40.4861C23.5135 36.6953 23.5121 32.9035 23.5545 29.1128C23.5822 26.6388 25.6858 24.6288 28.1978 24.6069C30.8122 24.5843 33.427 24.6015 36.0906 24.6013Z"
                        fill="white"
                      />
                      <path
                        _ngcontent-ng-c344788945=""
                        d="M23.2011 8.77529C23.4924 8.42041 23.7399 8.07194 24.037 7.77276C26.098 5.69767 28.1673 3.63091 30.2377 1.56522C32.3286 -0.520929 35.1429 -0.522233 37.2367 1.56427C39.3083 3.62871 41.3766 5.69652 43.441 7.7682C45.5232 9.85769 45.5193 12.6765 43.4325 14.7697C41.3676 16.8409 39.3 18.9094 37.2279 20.9734C35.1548 23.0384 32.3265 23.0444 30.2625 20.9881C28.156 18.8893 26.051 16.7888 23.9555 14.6788C22.3052 13.0171 22.0254 10.8322 23.2011 8.77529Z"
                        fill="white"
                      />
                    </svg>
                    <span _ngcontent-ng-c344788945="">Menu</span>
                  </li>
                </ul>
              </div>

            </mat-drawer-content>

          </div>
          <div
            _ngcontent-ng-c344788945=""
            className="instant_id_row ng-star-inserted"
          >
            <a
              _ngcontent-ng-c344788945=""
              target="_blank"

            >
              <div _ngcontent-ng-c344788945="">
                <img
                  _ngcontent-ng-c344788945=""
                  className="animated-whatsapp-img"
                  src="assets/images/animated-whatsapp.svg"
                />
              </div>
            </a>
          </div>



        </app-main>


      </app-root>
      <Grapaatchlogo />
      <Chartport />
      <div className="cdk-overlay-container" />
    </>

  )
}

export default Sloatcasino
