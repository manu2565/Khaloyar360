import { useState } from 'react';
import React from 'react'
import Allcoutntrycode from './Allcoutntrycode';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Avitor.css'
function Avatar({ closeModal }) {
  const [isopencountry, setOpencountry] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDemoLogin = () => {

    navigate('/afterlogin');
  };



  const opencode = () => setOpencountry(true);
  const closecode = () => setOpencountry(false);
  return (
    <>
      <>

        <div className="cdk-overlay-container">
          <div className="cdk-overlay-backdrop custom-backdrop cdk-overlay-backdrop-showing" />
          <div className="cdk-global-overlay-wrapper" dir="ltr" style={{ justifyContent: 'center', alignItems: 'center' }}>

            <div id="cdk-overlay-22" className="cdk-overlay-pane theme-modal" style={{
              width: '500px', maxWidth: '95vw'
            }}>
              {/* <div id="cdk-overlay-22" className="cdk-overlay-pane theme-modal" style={{
              width: '500px', maxWidth: '95vw',
              position: 'static', border: "1px solid var(--theme-border)", padding: "1rem !important", alignItems: "center !important", justifyContent: "space-between !important"
            }}> */}
              <div tabIndex={0} className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true" />
              <div tabIndex={-1} className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
                id="mat-mdc-dialog-20" role="dialog" aria-modal="true" style={{ "--matDialogTransitionDuration": "150ms" }}>
                <div className="mdc-dialog__container liveclass">
                  <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                    <div _nghost-ng-c2866767123="" className="mat-mdc-dialog-component-host ng-star-inserted">
                      <div _ngcontent-ng-c2866767123=""
                        className="d-flex align-items-center justify-content-between gapss p-3 modal-head"><img
                          _ngcontent-ng-c2866767123="" loading="lazy" fetchpriority="high" style={{ height: "40px" }} alt="Logo"
                          src="assets/images/106.svg" /><button _ngcontent-ng-c2866767123="" mat-icon-button
                            mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base cdk-focused cdk-program-focused"
                            mat-ripple-loader-centered onClick={closeModal} style={{ backgroundColor: "transparent", border: "0px solid transparent", color: "white" }}><span
                            className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple" />
                          <div _ngcontent-ng-c2866767123="" role="img"
                            className="mat-icon notranslate material-icons-outlined material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true" data-mat-icon-type="font"> close </div><span
                            className="mat-mdc-focus-indicator" /><span className="mat-mdc-button-touch-target" /><span
                            className="mat-ripple mat-mdc-button-ripple" />
                        </button></div>
                      <div _ngcontent-ng-c2866767123=""
                        className="mat-mdc-dialog-content mdc-dialog__content p-3">
                        <form _ngcontent-ng-c2866767123="" noValidate
                          className="ng-untouched ng-invalid ng-star-inserted ng-dirty">
                          <div _ngcontent-ng-c2866767123="" className="row">
                            <div _ngcontent-ng-c2866767123="" className="col-md-12 mb-3">
                              <div _ngcontent-ng-c2866767123="" className="position-relative"><div
                                _ngcontent-ng-c2866767123="" id="login" formcontrolname="teleNo" _nghost-ng-c2982863745=""
                                className="ng-untouched ng-invalid ng-dirty">
                                <div _ngcontent-ng-c2982863745=""
                                  className="iti iti--allow-dropdown separate-dial-code iti-sdc-3" onClick={opencode}>
                                  <div _ngcontent-ng-c2982863745="" dropdown className="iti__flag-container" style={{ marginLeft: "13px" }}>
                                    <div _ngcontent-ng-c2982863745="" dropdowntoggle
                                      className="iti__selected-flag dropdown-toggle" aria-haspopup="true"
                                      aria-expanded="false">
                                      <div _ngcontent-ng-c2982863745="" className="iti__flag iti__in" />
                                      <div _ngcontent-ng-c2982863745="" className="selected-dial-code ng-star-inserted">+91
                                      </div>

                                      <div _ngcontent-ng-c2982863745="" className="iti__arrow" />
                                    </div>


                                  </div><input _ngcontent-ng-c2982863745="" type="tel" autoComplete="off" id="phone"
                                    placeholder="74104 10123" validation="true"
                                    className="form-control custom ng-untouched ng-pristine ng-valid" style={{ marginLeft: "15px" }} />
                                </div>
                                {isopencountry &&
                                  <Allcoutntrycode closecode={closecode} />}
                              </div></div>
                            </div>
                          </div>
                          <div _ngcontent-ng-c2866767123="" className="col-md-12 mb-3 relative" >
                            <input
                              _ngcontent-ng-c2866767123=""
                              placeholder="Password"
                              formcontrolname="password"
                              className="form-control custom ng-pristine ng-invalid ng-touched"
                              type="password"
                              style={{ width: "103%" }} />
                            <div
                              _ngcontent-ng-c2866767123=""
                              role="img"
                              className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                              aria-hidden="true"
                              data-mat-icon-type="font"
                            >
                              visibility_off
                            </div>

                          </div>

                          <div _ngcontent-ng-c2866767123="" className="col-md-12 ">

                            <div _ngcontent-ng-c2866767123="" className="d-flex align-items-center ">

                              <mat-checkbox
                                _ngcontent-ng-c2866767123=""
                                color="primary"
                                formcontrolname="terms"
                                className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked ng-untouched ng-pristine ng-valid"
                                id="mat-mdc-checkbox-1"
                              >
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />


                                    <input
                                      type="checkbox"
                                      className="mdc-checkbox__native-control mdc-checkbox--selected"
                                      id="mat-mdc-checkbox-1-input"
                                      tabIndex={0}
                                    />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-checkbox__checkmark"
                                      >
                                        <path
                                          fill="none"
                                          d="M1.73,12.91 8.1,19.28 22.79,4.59"
                                          className="mdc-checkbox__checkmark-path"
                                        />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div
                                      mat-ripple=""
                                      className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator"
                                    />
                                  </div>
                                  <label className="mdc-label" htmlFor="mat-mdc-checkbox-1-input" />
                                </div>
                              </mat-checkbox>
                              <p _ngcontent-ng-c2866767123="" className="ms-1 user-select-none mb-0 checkbox-container" style={{ fontSize: "12px", color: "#FFFFFFF99", fontWeight: "400" }}>

                                I agree that I have read
                                <Link _ngcontent-ng-c2866767123="" className="cursor-pointer theme-golden" style={{ margin: "0px 2px 0px 2px" }}>
                                  Terms &amp; Conditions
                                </Link >
                                policy
                              </p>
                            </div>

                          </div>
                          <div _ngcontent-ng-c2866767123="" className="col-md-12 mb-3 text-center" >
                            <Link _ngcontent-ng-c2866767123=""
                              routerlink="/forgot-password" className="text-white"
                              to="/forgot-password" style={{ fontSize: "12px", color: "#FFFFFFF", fontWeight: "600" }}> Forget Password? <span
                                _ngcontent-ng-c2866767123="" className="ms-1">पासवर्ड भूल गया?</span></Link ></div>
                          <div _ngcontent-ng-c2866767123="" className="col-lg-12 logins">
                            <button _ngcontent-ng-c2866767123=""
                              qid="popup-login" className="btn theme-btn w-100 mb-3" disabled style={{ fontSize: "12px", fontWeight: "600" }}> Login </button>
                            <button
                              _ngcontent-ng-c2866767123="" qid="login-demo" className="btn theme-btn w-100" onClick={handleDemoLogin} style={{ fontSize: "12px", fontWeight: "600" }}> Login with Demo ID
                            </button>
                            <p _ngcontent-ng-c2866767123="" className="mt-3 text-center user-select-none mb-0"> Don't have
                              account? <Link _ngcontent-ng-c2866767123="" target="_blank"
                                className="theme-golden cursor-pointer ng-star-inserted"
                                to="">
                                Signup here </Link ></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Avatar