import React from 'react'

function Profitandlose() {
  return (
    <>
      <div
        _ngcontent-xhu-c22=""
        className="container-main d-flex left-menu-active justify-content-end"
      >
        <div
          _ngcontent-xhu-c22=""
          className="main-content-wrapper container-fluid p-0 m-0 fullWidthChange"
        >
          <div _ngcontent-xhu-c22="" className="row main-body">
            <div _ngcontent-xhu-c22="" className="col-12 p-0">
              <div _ngcontent-xhu-c22="" className="main-content m-0">
                <router-outlet _ngcontent-xhu-c22="" />
                <app-profit-loss _nghost-xhu-c32="">
                  <div
                    _ngcontent-xhu-c32=""
                    className="row bg-pl-request div-scroll m-0"
                  >
                    <div _ngcontent-xhu-c32="" className="col-12 p-2">
                      <div _ngcontent-xhu-c32="" className="row m-0 pb-2">
                        <div
                          _ngcontent-xhu-c32=""
                          className="col-6 p-0 dataTable_title"
                        >
                          Profit Loss
                        </div>
                        <div
                          _ngcontent-xhu-c32=""
                          className="col-6 p-0 dataTable_entries"
                        >
                          <span _ngcontent-xhu-c32="">Show</span>
                          <span _ngcontent-xhu-c32="">
                            <select
                              _ngcontent-xhu-c32=""
                              className="ng-untouched ng-pristine ng-valid"
                            >
                              <option _ngcontent-xhu-c32="" value="0: 5">
                                5
                              </option>
                              <option _ngcontent-xhu-c32="" value="1: 10">
                                10
                              </option>
                              <option _ngcontent-xhu-c32="" value="2: 20">
                                20
                              </option>
                              <option _ngcontent-xhu-c32="" value="3: 30">
                                30
                              </option>
                              <option _ngcontent-xhu-c32="" value="4: 50">
                                50
                              </option>
                              <option _ngcontent-xhu-c32="" value="5: 100">
                                100
                              </option>
                            </select>
                          </span>
                          <span _ngcontent-xhu-c32="">entries</span>
                        </div>
                      </div>
                      <div _ngcontent-xhu-c32="" className="row m-0 pb-2">
                        <div _ngcontent-xhu-c32="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-xhu-c32="">Select Sport / Games</label>
                          <select
                            _ngcontent-xhu-c32=""
                            name="sports-list"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          >
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="0: 0"
                            >
                              All
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="1: 1"
                            >
                              Cricket{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="2: 2"
                            >
                              Soccer{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="3: 3"
                            >
                              Tennis{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="4: 4"
                            >
                              Golf{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="5: 5"
                            >
                              Politics{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="6: 6"
                            >
                              Darts{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="7: 7"
                            >
                              Horse Racing{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="8: 8"
                            >
                              Boxing{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="9: 9"
                            >
                              Esports{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="10: 10"
                            >
                              Special Bets{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="11: 11"
                            >
                              Yachting{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="12: 12"
                            >
                              Rugby League{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="13: 13"
                            >
                              Rugby Union{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="14: 14"
                            >
                              Motor Sports
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="15: 15"
                            >
                              Basketball{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="16: 16"
                            >
                              bbhgh{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="17: 17"
                            >
                              Snooker{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="18: 18"
                            >
                              Baseball{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="19: 19"
                            >
                              Ice Hockey{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="20: 20"
                            >
                              Mixed Martial Arts{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="21: 21"
                            >
                              Volleyball{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="22: 561"
                            >
                              Australian Rules{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="23: 562"
                            >
                              Kabaddi{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="24: 563"
                            >
                              Greyhound Racing{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="25: 564"
                            >
                              Volleyball
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="26: 565"
                            >
                              Olympics{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="27: -9"
                            >
                              Empty
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="28: -8"
                            >
                              WorldCasino{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="29: -7"
                            >
                              BetGames{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="30: -6"
                            >
                              Lottery{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="31: -5"
                            >
                              Binary{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="32: -4"
                            >
                              TvBet{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="33: -3"
                            >
                              OneTouch
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="34: -2"
                            >
                              SuperSpadeGame{" "}
                            </option>
                            <option
                              _ngcontent-xhu-c32=""
                              className="form-control"
                              value="35: -1"
                            >
                              Veronica{" "}
                            </option>

                          </select>
                        </div>
                        <div _ngcontent-xhu-c32="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-xhu-c32="">From Date</label>
                          <input
                            _ngcontent-xhu-c32=""
                            type="date"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          />
                        </div>
                        <div _ngcontent-xhu-c32="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-xhu-c32="">To Date</label>
                          <input
                            _ngcontent-xhu-c32=""
                            type="date"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                            min="2025-02-02"
                          />
                        </div>
                      </div>
                      <div _ngcontent-xhu-c32="" className="dataTable_tableRow">
                        <div
                          _ngcontent-xhu-c32=""
                          id="table-height"
                          className="table-responsive"
                          style={{ height: "calc(100vh - 159px)" }}
                        >
                          <table
                            _ngcontent-xhu-c32=""
                            className="table table-striped"
                          >
                            <thead _ngcontent-xhu-c32="">
                              <tr _ngcontent-xhu-c32="">
                                <th _ngcontent-xhu-c32="">Sport/Game</th>
                                <th _ngcontent-xhu-c32="">Market</th>
                                <th _ngcontent-xhu-c32="">Result</th>
                                <th _ngcontent-xhu-c32="">P&amp;L</th>
                                <th _ngcontent-xhu-c32="">Started Date</th>
                              </tr>
                            </thead>

                            <tbody _ngcontent-xhu-c32="">
                              <tr
                                _ngcontent-xhu-c32=""
                                className="text-center no-data-text"
                              >
                                <td _ngcontent-xhu-c32="" colSpan={5}>
                                  <span _ngcontent-xhu-c32="">
                                    {" "}
                                    No Data Available{" "}
                                  </span>


                                </td>
                              </tr>
                            </tbody>

                          </table>
                        </div>
                        <pagination _ngcontent-xhu-c32="" _nghost-xhu-c31="">

                        </pagination>
                      </div>
                    </div>
                  </div>

                </app-profit-loss>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profitandlose
