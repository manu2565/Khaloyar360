import React from 'react'

function Favarite() {
  return (
    <>
      <div
        _ngcontent-chr-c22=""
        className="main-content-wrapper container-fluid p-0 m-0 fullWidthChange "
      >
        <div _ngcontent-chr-c22="" className="row main-body">
          <div _ngcontent-chr-c22="" className="col-12 p-0">
            <div _ngcontent-chr-c22="" className="main-content m-0">
              <router-outlet _ngcontent-chr-c22="" />
              <app-market _nghost-chr-c43="">
                <div
                  _ngcontent-chr-c43=""
                  className="row m-0 div-scroll"
                  style={{ overflow: "scroll" }}
                >
                  <div _ngcontent-chr-c43="" className="col-12 col-lg-12 p-0">
                    <div _ngcontent-chr-c43="" className="row m-0 no-gutters">
                      <div _ngcontent-chr-c43="" className="col-lg-8 col-md-12">
                        <div
                          _ngcontent-chr-c43=""
                          className="highlight-page market NoMarketFound-box"
                        >

                          <div
                            _ngcontent-chr-c43=""
                            className="row ng-star-inserted"
                          >
                            <div _ngcontent-chr-c43="" className="col-12">
                              <div _ngcontent-chr-c43="" className="NoMarketFound" style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "250px",
                                background: "var(--white-2e2f2f)",
                                color: "var(--primary-font-color)",
                                margin: "5px",
                                borderRadius: "25px",
                                justifyContent: "center"
                              }}>
                                <h1 _ngcontent-chr-c43="">No Favourite Yet!</h1>
                                <h6
                                  _ngcontent-chr-c43=""
                                  className="pl-4 pr-4 text-center"
                                >
                                  Click on the star (
                                  <i
                                    _ngcontent-chr-c43=""
                                    className="far fa-star"
                                  />
                                  ) icon on any page to add market a favourite.
                                </h6>
                              </div>
                            </div>
                          </div>

                          <div _ngcontent-chr-c43="" className="col-12 pr-lg-0" style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "50px",

                            background: "var(--white-2e2f2f)",
                            color: "var(--primary-font-color)",
                            margin: "5px",
                            borderRadius: "15px",
                            justifyContent: "center"
                          }}>
                            <div
                              _ngcontent-chr-c43=""
                              className="card-no-data mb-2 mt-2 rounded"
                            >
                              <div
                                _ngcontent-chr-c43=""
                                className="match-details text-center fa-2x p-3"
                              >
                                <span
                                  _ngcontent-chr-c43=""
                                  className="loading-text ng-star-inserted"
                                  style={{ fontSize: "14px", padding: "10px" }}>

                                  The market is not available
                                  <b _ngcontent-chr-c43="">OR</b> Market might be
                                  deleted or canceled.
                                </span>


                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div
                        _ngcontent-chr-c43=""
                        className="col-lg-4 col-md-12 pl-2 pr-2"
                      >
                        <div _ngcontent-chr-c43="" className="bet-slip-div">
                          <app-side-bet-slip
                            _ngcontent-chr-c43=""
                            _nghost-chr-c42=""
                          >

                          </app-side-bet-slip>
                          <div
                            _ngcontent-chr-c43=""
                            className="bottom-part side-bet-mob-hide"
                          >
                            <div
                              _ngcontent-chr-c43=""
                              data-toggle="collapse"
                              data-target="#collapseBets"
                              aria-expanded="true"
                              aria-controls="collapseBets"
                              className="open-bets-header-bg top-radius"
                            >
                              <div _ngcontent-chr-c43="" className="row m-0 cursor">
                                <div
                                  _ngcontent-chr-c43=""
                                  className="col-10 font-weight-bold"
                                >

                                  My Bets
                                </div>
                                <div
                                  _ngcontent-chr-c43=""
                                  className="col-2 text-right"
                                >
                                  <i
                                    _ngcontent-chr-c43=""
                                    className="fas fa-chevron-up pt-2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              _ngcontent-chr-c43=""
                              aria-expanded="true"
                              aria-hidden="false"
                              id="collapseBets"
                              className="mybets-body collapse in show bottom-radius"
                            >
                              <div _ngcontent-chr-c43="" className="mybets-wrapper">
                                <div
                                  _ngcontent-chr-c43=""
                                  className="row open-bets-header m-0"
                                >
                                  <div _ngcontent-chr-c43="" className="bet-header">
                                    <div
                                      _ngcontent-chr-c43=""
                                      className="unmatch-title"
                                    >
                                      Matched Bets
                                    </div>
                                    <div
                                      _ngcontent-chr-c43=""
                                      className="text-center justify-content-center d-flex setting-matched-bets"
                                    >
                                      <label
                                        _ngcontent-chr-c43=""
                                        className="d-flex"
                                      >
                                        <div
                                          _ngcontent-chr-c43=""
                                          style={{ paddingTop: 2 }}
                                        >
                                          <input
                                            _ngcontent-chr-c43=""
                                            type="checkbox"
                                            id="matchAverage-odd"
                                            name="matchAverage-odd"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-chr-c43=""
                                          className="title-option-setting averge-odds"
                                          style={{ marginLeft: 5 }}
                                        >

                                          Average odds
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <app-matched-unmatched-bet
                                  _ngcontent-chr-c43=""
                                  _nghost-chr-c40=""
                                >
                                  <div
                                    _ngcontent-chr-c40=""
                                    className="box-header"
                                  />


                                </app-matched-unmatched-bet>
                              </div>
                              <div _ngcontent-chr-c43="" className="mybets-wrapper">
                                <div
                                  _ngcontent-chr-c43=""
                                  className="row open-bets-header m-0 mt-2"
                                >
                                  <div _ngcontent-chr-c43="" className="bet-header">
                                    <div
                                      _ngcontent-chr-c43=""
                                      className="unmatch-title"
                                    >
                                      Unmatched Bets
                                    </div>
                                  </div>
                                </div>
                                <app-matched-unmatched-bet
                                  _ngcontent-chr-c43=""
                                  _nghost-chr-c40=""
                                >
                                  <div
                                    _ngcontent-chr-c40=""
                                    className="box-header"
                                  />


                                </app-matched-unmatched-bet>
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-chr-c43=""
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
    </>
  )
}

export default Favarite
