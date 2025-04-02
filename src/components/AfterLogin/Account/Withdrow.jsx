import React, { useState } from 'react'
import Addacount from './Addacount';
import ChangeWithdrawPinModal from './ChangeWithdrawPinModal';


function Withdrow() {
  const [account, setAccount] = useState(false); // Toggle state for opening modal
  const [activeTab, setActiveTab] = useState("add");
  const [Withdrow, setWithdrow] = useState(false); // Toggle state for opening modal

  const handleMethod = () => {
    setAccount(!account); // Toggle account state to show/hide Addacount modal
    console.log("Handle Method: Toggled account state");
  };
  const handleMethodWith = () => {
    setWithdrow(!Withdrow);
  };
  const onClose = () => {
    setAccount(false)
  }
  const oClose = () => {
    setWithdrow(false)
  }


  const tabStyle = {
    background: "linear-gradient(90deg, var(--theme-golden-gradient-light) 0%, var(--theme-golden-gradient-dark) 100%)",
    boxShadow: "0 7px 12px #0000003d, 0 0 10px #0000001f"
  };
  return (
    <>



      <div _ngcontent-ng-c344788945 className="content-with-news px-lg-3"><router-outlet
        _ngcontent-ng-c344788945 />
        <app-withdraw _nghost-ng-c2603855224 className="ng-star-inserted">
          <div _ngcontent-ng-c2603855224 className="container-fluid mb-4">
            <div _ngcontent-ng-c2603855224 className="row">
              <div _ngcontent-ng-c2603855224 className="col-12">
                <h2 _ngcontent-ng-c2603855224 className="text-center">Withdraw Request</h2>
              </div>
              <div _ngcontent-ng-c2603855224 className="col-12">
                <ul _ngcontent-ng-c2603855224 className="m-0 ps-1 ps-md-3"><li _ngcontent-ng-c2603855224
                  className="ng-star-inserted"> The bonus amount can be used to place bets across the platform and the
                  winnings can be withdrawn. </li>
                  <li _ngcontent-ng-c2603855224 className="ng-star-inserted"> In case of Any withdrawal issue i.e: Late
                    withdrawal, bank issue etc client can complain on withdraw issue whatsapp given below. </li>
                  <li _ngcontent-ng-c2603855224 className="ng-star-inserted"> If the withdrawals are pending from the bank,
                    it may take upto 72 banking hours for your transaction to clear. </li>
                </ul>
              </div>
            </div>
          </div>
          <div _ngcontent-ng-c2603855224 className="d-flex justify-content-center"><a _ngcontent-ng-c2603855224
            target="_blank"><button _ngcontent-ng-c2603855224 type="button"
              className="btn border-theme text-white fw-600 mb-3 pointer font-14" style={{ border: "2px solid var(--theme-golden-gradient-dark)" }}><span _ngcontent-ng-c2603855224
                className="d-block">CLICK HERE TO WITHDRAW IN USDT</span><span _ngcontent-ng-c2603855224>CLICK HERE FOR
                  ANY WITHDRAW ISSUE</span></button></a></div>
          <div _ngcontent-ng-c2603855224 className="d-flex justify-content-center">
            <button _ngcontent-ng-c2603855224
              type="button" className="btn green-bg fw-600 mb-3 pointer font-14" style={{
                background: " #00E66C"
              }}
              onClick={handleMethodWith}>CLICK HERE TO RESET WITHDRAW PIN</button>
          </div>

          {Withdrow && <ChangeWithdrawPinModal oClose={oClose} />}
          <mat-tab-group _ngcontent-ng-c2603855224 ngskiphydration mat-stretch-tabs="false" mat-align-tabs="center"
            className="mat-mdc-tab-group custom-tabs  mat-primary" style={{
              matTabAnimationDuration: '0ms'
              ,


            }}>

            <mat-tab-header className="mat-mdc-tab-header" style={{
              display: "flex",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}>
              <button
                aria-hidden="true"
                type="button"
                mat-ripple=""
                tabIndex={-1}
                className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
                disabled=""
              >
                <div className="mat-mdc-tab-header-pagination-chevron" />
              </button>
              <div className="mat-mdc-tab-label-container" style={{
                display: "flex",
                flexGrow: 1,
                overflow: "hidden",
                zIndex: 1,
              }}>
                <div
                  role="tablist"
                  className="mat-mdc-tab-list "
                  style={{
                    transform: "translateX(0px)", flexGrow: "1",
                    position: "relative",
                    transition: "transform 500ms cubic-bezier(0.35, 0, 0.25, 1)"
                  }}
                >
                  <div className="mat-mdc-tab-labels" style={{
                    maxWidth: "fit-content",
                    margin: "0 auto",
                    background: "var(--theme-icon-btn-border)",
                    borderRadius: "6px",
                    color: "#000000"
                  }} >
                    <div
                      role="tab"
                      mattablabelwrapper=""
                      cdkmonitorelementfocus=""
                      className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted"
                      id="mat-tab-label-0-0"
                      tabIndex={-1}
                      aria-posinset={1}
                      aria-setsize={2}
                      aria-controls="mat-tab-content-0-0"
                      aria-selected="false"
                      aria-disabled="false"
                      style={{
                        borderRadius: "6px",
                        height: "40px",
                        padding: "0 10px",

                      }}>
                      <span className="mdc-tab__ripple" />
                      <div mat-ripple="" className="mat-ripple mat-mdc-tab-ripple " />
                      <span className="mdc-tab__content" >
                        <span className="mdc-tab__text-label " style={{
                          marginTop: "10px",
                          fontSize: "11px",
                          color: "#000000",
                          fontWeight: "600",
                          cursor: "pointer"

                        }} onClick={() => setActiveTab("add")}>
                          Add Account{/**/}
                          {/**/}
                        </span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span
                          className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                          style={{}}
                        />
                      </span>
                    </div>
                    <div
                      role="tab"
                      mattablabelwrapper=""
                      cdkmonitorelementfocus=""
                      className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted mdc-tab--active mdc-tab-indicator--active"
                      id="mat-tab-label-0-1"
                      tabIndex={0}
                      aria-posinset={2}
                      aria-setsize={2}
                      aria-controls="mat-tab-content-0-1"
                      aria-selected="true"
                      aria-disabled="false"
                      style={{

                        background: "linear-gradient(90deg, var(--theme-golden-gradient-light) 0%, var(--theme-golden-gradient-dark) 100%)",
                        boxShadow: "0 7px 12px #0000003d, 0 0 10px #0000001f",
                        borderRadius: "6px",
                        height: "40px",
                        padding: "0 10px"

                      }}>
                      <span className="mdc-tab__ripple" />
                      <div mat-ripple="" className="mat-ripple mat-mdc-tab-ripple" />
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label" style={{
                          marginTop: "10px",
                          fontSize: "12px",
                          color: "#000000",
                          fontWeight: "600",
                          cursor: 'pointer',
                        }}>
                          Existing Account{/**/}
                          {/**/}
                        </span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span
                          className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                          style={{}}
                        />
                      </span>
                    </div>
                    {/**/}
                  </div>
                </div>
              </div>
              <button
                aria-hidden="true"
                type="button"
                mat-ripple=""
                tabIndex={-1}
                className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
              >
                <div className="mat-mdc-tab-header-pagination-chevron" />
              </button>
            </mat-tab-header>

            {/* style={{
              maxWidth: "fit-content",
              margin: "0 auto",
              background: "var(--theme-icon-btn-border)",
              borderRadius: "6px",
              color: "var(--theme-bg-color)"
            }} */}
            <div className="mat-mdc-tab-body-wrapper"><mat-tab-body role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c2396234108-19 ng-star-inserted" id="mat-tab-content-1-0"
              aria-labelledby="mat-tab-label-1-0" aria-hidden="true">
              <div cdkscrollable
                className="mat-mdc-tab-body-content ng-tns-c2396234108-19 ng-trigger ng-trigger-translateTab" style={{
                  transform: 'translate3d(-100%, 0px, 0px)', minHeight: '1px', visibility: 'hidden'
                }}></div>
            </mat-tab-body><mat-tab-body role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c2396234108-20 mat-mdc-tab-body-active ng-star-inserted"
              id="mat-tab-content-1-1" aria-labelledby="mat-tab-label-1-1" aria-hidden="false">
                <div cdkscrollable
                  className="mat-mdc-tab-body-content ng-tns-c2396234108-20 ng-trigger ng-trigger-translateTab" style={{
                    transform: 'none'
                  }}>
                  <div _ngcontent-ng-c2603855224 className="mt-4 ng-star-inserted" style={{}}>
                    <div _ngcontent-ng-c2603855224 className="text-center ng-star-inserted" style={{}}>


                      <p _ngcontent-ng-c2603855224>Please add Payment Method to withdraw amount</p>
                      <button

                        _ngcontent-ng-c2603855224 className="btn theme-btn" onClick={handleMethod}> Add payment Methods </button>
                    </div>
                    {account && <Addacount onClose={onClose} />}
                    <div _ngcontent-ng-c2603855224 className="container my-4">
                      <div _ngcontent-ng-c2603855224 className="row">
                        <div _ngcontent-ng-c2603855224 className="col-md-4 error-field"><label
                          _ngcontent-ng-c2603855224>Account Number</label><input _ngcontent-ng-c2603855224 type="text"
                            formcontrolname="account" placeholder="Account Number" readOnly
                            className="form-control custom ng-untouched ng-pristine ng-invalid" /></div>
                        <div _ngcontent-ng-c2603855224 className="col-md-4 error-field"><label
                          _ngcontent-ng-c2603855224>Account Name</label><input _ngcontent-ng-c2603855224 type="text"
                            formcontrolname="accName" placeholder="Account Name" readOnly
                            className="form-control custom ng-untouched ng-pristine ng-valid" /></div>
                        <div _ngcontent-ng-c2603855224 className="col-md-4 error-field"><label
                          _ngcontent-ng-c2603855224>Amount</label><input _ngcontent-ng-c2603855224 type="text"
                            formcontrolname="amount" placeholder="Amount"
                            className="form-control custom ng-untouched ng-pristine ng-invalid" /></div>
                      </div><div _ngcontent-ng-c2603855224 className="row mb-4">
                        <div _ngcontent-ng-c2603855224 className="col-md-12">
                          <ul _ngcontent-ng-c2603855224
                            className="list-inline mb-0 d-flex gap-2 flex-wrap align-items-center justify-content-center filters">
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted"> 300
                            </li>
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted">
                              1000 </li>
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted">
                              2000 </li>
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted">
                              5000 </li>
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted">
                              10000 </li>
                            <li _ngcontent-ng-c2603855224 className="list-inline-item m-0 filter-chip ng-star-inserted">
                              25000 </li>
                          </ul>
                        </div>
                        <div _ngcontent-ng-c2603855224 className="col-md-12 text-center mt-4"><button
                          _ngcontent-ng-c2603855224 className="btn theme-btn px-md-5 px-3"> Submit </button></div>
                      </div>
                    </div><h3 _ngcontent-ng-c2603855224 className="fw-bold ng-star-inserted">Recent Transaction</h3>
                    <app-data-table _ngcontent-ng-c2603855224 _nghost-ng-c2732545599 className="ng-star-inserted">
                      <div _ngcontent-ng-c2732545599>
                        <table _ngcontent-ng-c2732545599 className="custom-datatable ng-star-inserted">
                          <thead _ngcontent-ng-c2732545599>
                            <tr _ngcontent-ng-c2732545599>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">Amount</th>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">Status</th>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">Account</th>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">Date</th>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">UTR</th>
                              <th _ngcontent-ng-c2603855224 scope="col" className="ng-star-inserted">Remarks</th>
                            </tr>
                          </thead>
                          <tbody _ngcontent-ng-c2732545599>
                            <tr _ngcontent-ng-c2732545599 className="ng-star-inserted">
                              <td _ngcontent-ng-c2603855224 data-label="Amount" className="ng-star-inserted"> -500 </td>
                              <td _ngcontent-ng-c2603855224 data-label="Status" className="ng-star-inserted"> Rejected </td>
                              <td _ngcontent-ng-c2603855224 data-label="Account" className="ng-star-inserted">60422116442
                              </td>
                              <td _ngcontent-ng-c2603855224 scope="row" data-label="Date" className="ng-star-inserted">
                                27:04:2023 12:23 PM </td>
                              <td _ngcontent-ng-c2603855224 scope="row" data-label="UTR" className="ng-star-inserted"> 0
                              </td>
                              <td _ngcontent-ng-c2603855224 scope="row" data-label="Remarks" className="ng-star-inserted">
                                Processing </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </app-data-table>
                  </div>
                </div>
              </mat-tab-body></div>
          </mat-tab-group>
          <div _ngcontent-ng-c2603855224="" className="d-block d-md-none mt-4">
            <app-video-player _ngcontent-ng-c2603855224="" _nghost-ng-c2312233260="">
              <div _ngcontent-ng-c2312233260="" className="position-relative text-center">
                <video
                  _ngcontent-ng-c2312233260=""
                  preload="none"
                  poster="https://static-content1.b-cdn.net/kheloyar-club/assets/tutorials/posters/withdrawal.webp"
                  style={{ height: 400, width: "100%" }}
                >
                  <source
                    _ngcontent-ng-c2312233260=""
                    type="video/mp4"
                    src="https://static-content1.b-cdn.net/kheloyar-club/assets/tutorials/withdrawal.mp4"
                  />{" "}
                  Your browser does not support the video tag.{" "}
                </video>
                <button
                  _ngcontent-ng-c2312233260=""
                  className="play_button ng-star-inserted"
                >
                  <div
                    _ngcontent-ng-c2312233260=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    play_arrow
                  </div>
                </button>
                {/**/}
              </div>
            </app-video-player>
          </div>

        </app-withdraw>
      </div>


    </>
  )
}

export default Withdrow