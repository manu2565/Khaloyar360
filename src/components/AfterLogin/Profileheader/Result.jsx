import React, { useContext } from 'react'

function Result() {

 
  return (


    <>
      <div
        _ngcontent-cke-c22=""
        className="container-main d-flex left-menu-active justify-content-end"
      >
        <div
          _ngcontent-cke-c22=""
          className="main-content-wrapper container-fluid p-0 m-0 fullWidthChange"
        >
          <div _ngcontent-cke-c22="" className="row main-body">
            <div _ngcontent-cke-c22="" className="col-12 p-0">
              <div _ngcontent-cke-c22="" className="main-content m-0">
                <router-outlet _ngcontent-cke-c22="" />
                <app-results _nghost-cke-c45="">
                  <div
                    _ngcontent-cke-c45=""
                    className="row bg-result-request div-scroll m-0"
                  >
                    <div _ngcontent-cke-c45="" className="col-12 p-2">
                      <div _ngcontent-cke-c45="" className="row m-0 pb-2">
                        <div
                          _ngcontent-cke-c45=""
                          className="col-6 p-0 dataTable_title"
                        >
                          Results
                        </div>
                        <div
                          _ngcontent-cke-c45=""
                          className="col-6 p-0 dataTable_entries"
                        >
                          <span _ngcontent-cke-c45="">Show</span>
                          <span _ngcontent-cke-c45="">
                            <select
                              _ngcontent-cke-c45=""
                              className="ng-untouched ng-pristine ng-valid"
                            >
                              <option _ngcontent-cke-c45="" value="0: 5">
                                5
                              </option>
                              <option _ngcontent-cke-c45="" value="1: 10">
                                10
                              </option>
                              <option _ngcontent-cke-c45="" value="2: 20">
                                20
                              </option>
                              <option _ngcontent-cke-c45="" value="3: 30">
                                30
                              </option>
                              <option _ngcontent-cke-c45="" value="4: 50">
                                50
                              </option>
                              <option _ngcontent-cke-c45="" value="5: 100">
                                100
                              </option>
                            </select>
                          </span>
                          <span _ngcontent-cke-c45="">entries</span>
                        </div>
                      </div>
                      <div _ngcontent-cke-c45="" className="row m-0 pb-2">
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">Select Sport</label>
                          <select
                            _ngcontent-cke-c45=""
                            name="sports-list"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          >
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="0: 0"
                            >
                              All{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="1: 1"
                            >
                              Cricket{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="2: 2"
                            >
                              Soccer{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="3: 3"
                            >
                              Tennis{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="4: 4"
                            >
                              Golf{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="5: 5"
                            >
                              Politics{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="6: 6"
                            >
                              Darts{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="7: 7"
                            >
                              Horse Racing{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="8: 8"
                            >
                              Boxing{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="9: 9"
                            >
                              Esports{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="10: 10"
                            >
                              Special Bets{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="11: 11"
                            >
                              Yachting{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="12: 12"
                            >
                              Rugby League{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="13: 13"
                            >
                              Rugby Union{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="14: 14"
                            >
                              Motor Sport{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="15: 15"
                            >
                              Basketball{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="16: 16"
                            >
                              bbhgh{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="17: 17"
                            >
                              Snooker{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="18: 18"
                            >
                              Baseball{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="19: 19"
                            >
                              Ice Hockey{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="20: 20"
                            >
                              Mixed Martial Arts{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="21: 21"
                            >
                              Volleyball{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="22: 561"
                            >
                              Australian Rules{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="23: 562"
                            >
                              Kabaddi{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="24: 563"
                            >
                              Greyhound Racing{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="25: 564"
                            >
                              Volleyball{" "}
                            </option>
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="26: 565"
                            >
                              Olympics{" "}
                            </option>

                          </select>
                        </div>
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">Select Tournament</label>
                          <select
                            _ngcontent-cke-c45=""
                            name="tournament-list"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          >
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="0: 0"
                            >
                              All
                            </option>

                          </select>
                        </div>
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">Select Match</label>
                          <select
                            _ngcontent-cke-c45=""
                            name="match-list"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          >
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="0: 0"
                            >
                              All
                            </option>

                          </select>
                        </div>
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">Select Market</label>
                          <select
                            _ngcontent-cke-c45=""
                            name="market-list"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          >
                            <option
                              _ngcontent-cke-c45=""
                              className="form-control"
                              style={{ color: "black !important" }}
                              value="0: 0"
                            >
                              All
                            </option>

                          </select>
                        </div>
                      </div>
                      <div _ngcontent-cke-c45="" className="row m-0 pb-2">
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">From Date</label>
                          <input
                            _ngcontent-cke-c45=""
                            type="date"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                          />
                        </div>
                        <div _ngcontent-cke-c45="" className="col-sm-3 p-0 pr-2">
                          <label _ngcontent-cke-c45="">To Date</label>
                          <input
                            _ngcontent-cke-c45=""
                            type="date"
                            className="form-control ng-untouched ng-pristine ng-valid"
                            style={{ color: "black !important" }}
                            min="2025-02-02T00:00"
                          />
                        </div>
                        <div
                          _ngcontent-cke-c45=""
                          className="col-sm-6 chekboxAlign mt-3"
                        >
                          <label
                            _ngcontent-cke-c45=""
                            className="mr-2 d-inline-flex align-items-center"
                          >
                            <input _ngcontent-cke-c45="" type="checkbox" />
                            <span _ngcontent-cke-c45="" className="ml-1 checkboxSpan">
                              Market
                            </span>
                          </label>
                          <label
                            _ngcontent-cke-c45=""
                            className="mr-2 d-inline-flex align-items-center"
                          >
                            <input _ngcontent-cke-c45="" type="checkbox" />
                            <span _ngcontent-cke-c45="" className="ml-1 checkboxSpan">
                              Book Maker
                            </span>
                          </label>
                          <label
                            _ngcontent-cke-c45=""
                            className="mr-2 d-inline-flex align-items-center"
                          >
                            <input _ngcontent-cke-c45="" type="checkbox" />
                            <span _ngcontent-cke-c45="" className="ml-1 checkboxSpan">
                              Manual Odds
                            </span>
                          </label>
                          <label
                            _ngcontent-cke-c45=""
                            className="mr-2 d-inline-flex align-items-center"
                          >
                            <input _ngcontent-cke-c45="" type="checkbox" />
                            <span _ngcontent-cke-c45="" className="ml-1 checkboxSpan">
                              Line Market
                            </span>
                          </label>
                          <label
                            _ngcontent-cke-c45=""
                            className="mr-2 d-inline-flex align-items-center"
                          >
                            <input _ngcontent-cke-c45="" type="checkbox" />
                            <span _ngcontent-cke-c45="" className="ml-1 checkboxSpan">
                              Adv Session
                            </span>
                          </label>

                        </div>
                      </div>
                      <div _ngcontent-cke-c45="" className="dataTable_tableRow">
                        <div
                          _ngcontent-cke-c45=""
                          id="table-height"
                          className="table-responsive"
                          style={{ height: "calc(100vh - 272px)" }}
                        >
                          <table
                            _ngcontent-cke-c45=""
                            className="table table-striped"
                          >
                            <thead _ngcontent-cke-c45="">
                              <tr _ngcontent-cke-c45="">
                                <th _ngcontent-cke-c45="">Date</th>
                                <th _ngcontent-cke-c45="">Market Type</th>
                                <th _ngcontent-cke-c45="">Market Name</th>
                                <th _ngcontent-cke-c45="">Result</th>
                              </tr>
                            </thead>
                            <tbody _ngcontent-cke-c45="">
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:46 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">PLACE</td>
                                <td _ngcontent-cke-c45="">
                                  Greyhound Racing / GB / Towcester 9th Feb / To Be
                                  Placed
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      6. Back To Black, 3. Armagh Daithi
                                    </font>
                                  </font>
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:46 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">WIN</td>
                                <td _ngcontent-cke-c45="">
                                  Greyhound Racing / GB / Towcester 9th Feb / OR 500m
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      3. Armagh Daithi
                                    </font>
                                  </font>
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  Greyhound Racing / GB / Sunderland 9th Feb / To Be
                                  Placed
                                </td>
                                <td _ngcontent-cke-c45="">
                                  3. Some Venture, 6. Know All
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  6. Budges Girls, 3. Scaldy Rose
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      5. Lilly Rose, 2. Kilbannon Oisin
                                    </font>
                                  </font>
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      5. Westforth Ceejay, 4. Surprise Blue
                                    </font>
                                  </font>
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      2. Witton Magnificent, 5. Annadown Turbo
                                    </font>
                                  </font>
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  5. Bower Aveen, 6. Bluejig Rocky
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  2. Westforth Cha, 4. Ravens Girl
                                </td>
                              </tr>
                              <tr _ngcontent-cke-c45="" className="result-vevent">
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      09 Feb 2025 07:44 PM
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      PLACE
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Greyhound Racing / GB / Sunderland 9th Feb / To
                                      Be Placed
                                    </font>
                                  </font>
                                </td>
                                <td _ngcontent-cke-c45="">
                                  5. Da Other One, 4. Droopys Fetch
                                </td>
                              </tr>

                            </tbody>


                          </table>
                        </div>
                        <pagination _ngcontent-cke-c45="" _nghost-cke-c31="">
                          <div _ngcontent-cke-c31="" className="pager">
                            <p _ngcontent-cke-c31="" className="d-lg-block d-none">
                              {" "}
                              Showing 1 to 10 of 9870 entries{" "}
                            </p>
                            <ul _ngcontent-cke-c31="" className="pagination">
                              <li _ngcontent-cke-c31="" className="disabled">
                                <a _ngcontent-cke-c31="" className="btnlook">
                                  First
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="" className="disabled">
                                <a _ngcontent-cke-c31="" className="btnlook">
                                  Previous
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a
                                  _ngcontent-cke-c31=""
                                  className="btnlook-pageno active"
                                >
                                  1
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  2
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      3
                                    </font>
                                  </font>
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  4
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      5
                                    </font>
                                  </font>
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  6
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      7
                                    </font>
                                  </font>
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  8
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  9
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook-pageno">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      10
                                    </font>
                                  </font>
                                </a>
                              </li>

                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook">
                                  Next
                                </a>
                              </li>
                              <li _ngcontent-cke-c31="">
                                <a _ngcontent-cke-c31="" className="btnlook">
                                  Last
                                </a>
                              </li>
                            </ul>
                          </div>

                        </pagination>
                      </div>
                    </div>
                  </div>
                </app-results>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Result
