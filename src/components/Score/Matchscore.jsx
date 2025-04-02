import React from 'react'
import { useState } from 'react';



const sports = [
  { name: "Cricket", image: "assets/images/Cricket.png" },
  { name: "Soccer", image: "assets/images/Soccer.png" },
  { name: "Tennis", image: "assets/images/Tennis.png" },
  { name: "Greyhound", image: "assets/images/Greyhound Racing.png" },
  { name: "Volleyball", image: "assets/images/Volleyball.png" },
  { name: "Rugby League", image: "assets/images/Rugby League.png" },
  { name: "Boxing", image: "assets/images/Boxing.png" },
  { name: "Rugby Union", image: "assets/images/Rugby Union.png" },
  { name: "Australian Rules", image: "assets/images/Australian Rules.png" },
];
function Matchscore() {
  const [activeTab, setActiveTab] = useState(sports[0]?.name || "");


  const [activeButton, setActiveButton] = useState("Inplay");

  const handleUpcomingClick = (
  ) => {
    setActiveComponent('scorecard');
  };
  return (
    <div>

      <div
        _ngcontent-ng-c1510972542=""
        className="mb-2 ng-star-inserted"
      >
        <div
          _ngcontent-ng-c1510972542=""
          className="align-items-center d-flex false justify-content-between min-h-36 ps-2 rounded"
        >

          {/* Buttons */}
          <div className="d-flex align-items-center ng-star-inserted">
            <h4
              _ngcontent-ng-c1510972542=""
              className={`badge cursor-pointer fw-bolder main-heading mb-0 px-3 ${activeButton === "Inplay" ? "text-dark theme-gradient-button" : "text-bg-light"
                }`}
              onClick={() => setActiveButton("Inplay")}
            >
              Inplay
            </h4>
            <h4
              className={`badges cursor-pointer fw-bolder main-heading mb-0 px-3 ${activeButton === "Upcoming" ? "text-dark theme-gradient-button" : ""
                }`}
              onClick={() => setActiveButton("Upcoming")}
            >
              Upcoming

            </h4>
            {/* 
            <h4
              _ngcontent-ng-c1510972542=""
              className=" cursor-pointer fw-bolder main-heading mb-0 px-3 text-bg-light"
            >
              {" "}
              Upcoming{" "}
            </h4> */}

          </div>


        </div>
      </div>


      <div
        _ngcontent-ng-c1510972542=""
        className="mb-4 ng-star-inserted"
      >
        <div
          _ngcontent-ng-c1510972542=""
          _nghost-ng-c3983133231=""
        >


          <div className="d-flex gap-2 flex-nowrap mb-2 overflow-auto odd-tab-wrapper ng-star-inserted" _ngcontent-ng-c3983133231="">
            {sports.map((sport) => (
              <div
                key={sport.name}
                className={`px-2 py-1 rounded-3 cursor-pointer odd-tab-label text-nowrap fw-bold  ${activeTab === sport.name ? "actives" : ""}`}
                onClick={() => {
                  setActiveTab(sport.name);
                  console.log("Active tab:", sport.name); // Debugging
                }}

              >
                <img height={15} className="d-block mx-auto" src={sport.image} alt={sport.name} />
                {sport.name}
              </div>
            ))}
          </div>


          {/* Scoreboard (Only visible when Tennis is selected) */}
          <div
            _ngcontent-ng-c3983133231=""
            className="odds ng-star-inserted"
          >
            {activeTab === "Tennis" && (

              <a
                _ngcontent-ng-c3983133231=""
                className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
                data-status="OPEN"
              >
                <div
                  _ngcontent-ng-c3983133231=""
                  className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
                  style={{}}>
                  <h3
                    _ngcontent-ng-c3983133231=""
                    className="mb-0 lh-1 fw-bold text-white main-heading"
                  >
                    <span _ngcontent-ng-c3983133231="" className="date">
                      13/02 at 13:30 PM
                    </span>
                    <span _ngcontent-ng-c3983133231="" className="active name">
                      Persipa Pati v Persipura Jayapura
                    </span>
                  </h3>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                  >
                    <div
                      _ngcontent-ng-c3983133231=""
                      role="img"
                      color="primary"
                      className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                      style={{ marginTop: "6px" }}>
                      desktop_windows
                    </div>

                    <span
                      _ngcontent-ng-c3983133231=""
                      className="badge text-bg-light py-1 px-2 ng-star-inserted"
                    >
                      BM

                    </span>
                    <span
                      _ngcontent-ng-c3983133231=""
                      className="badge text-bg-light py-1 px-2 ng-star-inserted"
                    >
                      F

                    </span>
                    <span
                      _ngcontent-ng-c3983133231=""
                      className="badge text-bg-light py-1 px-2 ng-star-inserted"
                    >

                    </span>

                  </span>
                </div>


                <div className="d-flex align-items-center gap-2">
                  <div className="block back flex-fill"><span>1.12</span></div>
                  <div className="block lay flex-fill"><span>50</span></div>
                  <div className="block back flex-fill ng-star-inserted">0</div>
                  <div className="block lay flex-fill ng-star-inserted">0</div>
                  <div className="block back flex-fill ng-star-inserted"><span>1.12</span></div>
                  <div className="block lay flex-fill ng-star-inserted"><span>0</span></div>
                </div>
              </a>

            )}
          </div>



          <div _ngcontent-ng-c3983133231="" className="odds ng-star-inserted">
            <a
              _ngcontent-ng-c3983133231=""
              className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
              data-status="OPEN"
            >
              <div
                _ngcontent-ng-c3983133231=""
                className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
              >
                <h3
                  _ngcontent-ng-c3983133231=""
                  className="mb-0 lh-1 fw-bold text-white main-heading"
                >
                  <span _ngcontent-ng-c3983133231="" className="date">
                    13/02 at 13:30 PM
                  </span>
                  <span _ngcontent-ng-c3983133231="" className="active name">
                    Persiku Kudus v Gresik United
                  </span>
                </h3>
                <span
                  _ngcontent-ng-c3983133231=""
                  className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                >
                  <div
                    _ngcontent-ng-c3983133231=""
                    role="img"
                    color="primary"
                    className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                    style={{ marginTop: "6px" }}>
                    desktop_windows
                  </div>

                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    BM

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    F

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >

                  </span>

                </span>

              </div>
              <div
                _ngcontent-ng-c3983133231=""
                className="d-flex align-items-center gap-2"
              >
                <div _ngcontent-ng-c3983133231="" className="block back flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.05</span>
                </div>
                <div _ngcontent-ng-c3983133231="" className="block lay flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.06</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  {" "}
                  17.5{" "}
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  {" "}
                  23{" "}
                </div>



                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">310</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">1000</span>
                </div>



              </div>
            </a>
            <a
              _ngcontent-ng-c3983133231=""
              className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
              data-status="OPEN"
            >
              <div
                _ngcontent-ng-c3983133231=""
                className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
              >
                <h3
                  _ngcontent-ng-c3983133231=""
                  className="mb-0 lh-1 fw-bold text-white main-heading"
                >
                  <span _ngcontent-ng-c3983133231="" className="date">
                    13/02 at 14:00 PM
                  </span>
                  <span _ngcontent-ng-c3983133231="" className="active name">
                    Persekat Kabupaten Tegal v Persewar Waropen
                  </span>
                </h3>
                <span
                  _ngcontent-ng-c3983133231=""
                  className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                >
                  <div
                    _ngcontent-ng-c3983133231=""
                    role="img"
                    color="primary"
                    className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                    style={{ marginTop: "6px" }}>
                    desktop_windows
                  </div>

                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    BM

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    F

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >

                  </span>

                </span>
              </div>
              <div
                _ngcontent-ng-c3983133231=""
                className="d-flex align-items-center gap-2"
              >
                <div _ngcontent-ng-c3983133231="" className="block back flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.94</span>
                </div>
                <div _ngcontent-ng-c3983133231="" className="block lay flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.99</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  {" "}
                  2.38{" "}
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  {" "}
                  2.48{" "}
                </div>



                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">12</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">13</span>
                </div>



              </div>
            </a>
            <a
              _ngcontent-ng-c3983133231=""
              className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
              data-status="OPEN"
            >
              <div
                _ngcontent-ng-c3983133231=""
                className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
              >
                <h3
                  _ngcontent-ng-c3983133231=""
                  className="mb-0 lh-1 fw-bold text-white main-heading"
                >
                  <span _ngcontent-ng-c3983133231="" className="date">
                    13/02 at 14:45 PM
                  </span>
                  <span _ngcontent-ng-c3983133231="" className="active name">
                    Uzbekistan U20 v Yemen U20
                  </span>
                </h3>
                <span
                  _ngcontent-ng-c3983133231=""
                  className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                >
                  <div
                    _ngcontent-ng-c3983133231=""
                    role="img"
                    color="primary"
                    className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                    style={{ marginTop: "6px" }}>
                    desktop_windows
                  </div>
                  {/**/}
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    BM{/**/}
                    {/**/}
                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    F{/**/}
                    {/**/}
                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    {/**/}
                  </span>
                  {/**/}
                </span>
              </div>
              <div
                _ngcontent-ng-c3983133231=""
                className="d-flex align-items-center gap-2"
              >
                <div _ngcontent-ng-c3983133231="" className="block back flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.1</span>
                </div>
                <div _ngcontent-ng-c3983133231="" className="block lay flex-fill">
                  <span _ngcontent-ng-c3983133231="">1.12</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  {" "}
                  11.5{" "}
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  {" "}
                  13.5{" "}
                </div>



                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">48</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">70</span>
                </div>



              </div>
            </a>
            <a
              _ngcontent-ng-c3983133231=""
              className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
              data-status="OPEN"
            >
              <div
                _ngcontent-ng-c3983133231=""
                className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
              >
                <h3
                  _ngcontent-ng-c3983133231=""
                  className="mb-0 lh-1 fw-bold text-white main-heading"
                >
                  <span _ngcontent-ng-c3983133231="" className="date">
                    13/02 at 16:30 PM
                  </span>
                  <span _ngcontent-ng-c3983133231="" className="name">
                    Pendikspor v Boluspor
                  </span>
                </h3>
                <span
                  _ngcontent-ng-c3983133231=""
                  className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                >
                  <div
                    _ngcontent-ng-c3983133231=""
                    role="img"
                    color="primary"
                    className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                    style={{ marginTop: "6px" }}>
                    desktop_windows
                  </div>

                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    BM

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    F

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >

                  </span>

                </span>
              </div>
              <div
                _ngcontent-ng-c3983133231=""
                className="d-flex align-items-center gap-2"
              >
                <div _ngcontent-ng-c3983133231="" className="block back flex-fill">
                  <span _ngcontent-ng-c3983133231="">2.06</span>
                </div>
                <div _ngcontent-ng-c3983133231="" className="block lay flex-fill">
                  <span _ngcontent-ng-c3983133231="">2.14</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  {" "}
                  3.35{" "}
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  {" "}
                  3.5{" "}
                </div>



                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">4.2</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">4.4</span>
                </div>



              </div>
            </a>
            <a
              _ngcontent-ng-c3983133231=""
              className="align-items-center bg-theme-dark cursor-pointer d-block d-lg-flex inplay justify-content-between pe-2 position-relative px-3 py-2 rounded ng-star-inserted"
              data-status="OPEN"
            >
              <div
                _ngcontent-ng-c3983133231=""
                className="mb-2 mb-lg-0 d-flex justify-content-between w-100"
              >
                <h3
                  _ngcontent-ng-c3983133231=""
                  className="mb-0 lh-1 fw-bold text-white main-heading"
                >
                  <span _ngcontent-ng-c3983133231="" className="date">
                    13/02 at 19:30 PM
                  </span>
                  <span _ngcontent-ng-c3983133231="" className="name">
                    Future FC v El Geish
                  </span>
                </h3>
                <span
                  _ngcontent-ng-c3983133231=""
                  className="label d-flex gap-1 me-1 me-md-3 align-items-start"
                >
                  <div
                    _ngcontent-ng-c3983133231=""
                    role="img"
                    color="primary"
                    className="mat-icon notranslate w-auto mx-auto h-auto fs-6 mat-primary material-icons mat-ligature-font ng-star-inserted"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                    style={{ marginTop: "6px" }}>
                    desktop_windows
                  </div>

                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    BM

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >
                    F

                  </span>
                  <span
                    _ngcontent-ng-c3983133231=""
                    className="badge text-bg-light py-1 px-2 ng-star-inserted"
                  >

                  </span>

                </span>
              </div>
              <div
                _ngcontent-ng-c3983133231=""
                className="d-flex align-items-center gap-2"
              >
                <div _ngcontent-ng-c3983133231="" className="block back flex-fill">
                  <span _ngcontent-ng-c3983133231="">3.4</span>
                </div>
                <div _ngcontent-ng-c3983133231="" className="block lay flex-fill">
                  <span _ngcontent-ng-c3983133231="">3.6</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  {" "}
                  2.62{" "}
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  {" "}
                  2.66{" "}
                </div>



                <div
                  _ngcontent-ng-c3983133231=""
                  className="block back flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">2.88</span>
                </div>
                <div
                  _ngcontent-ng-c3983133231=""
                  className="block lay flex-fill ng-star-inserted"
                >
                  <span _ngcontent-ng-c3983133231="">3</span>
                </div>



              </div>
            </a>




          </div>



        </div>
      </div>


    </div>
  )
}

export default Matchscore
