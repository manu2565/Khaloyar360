import React from 'react'
function Forgetpassword() {
  return (
    <>


      <div className='mat-typography ng-tns-0-12 notAuthenticated'>
        <app-root _nghost-ng-c3889032351="" ng-version="17.0.4">
          {/**/}
          {/**/}
          <router-outlet
            _ngcontent-ng-c3889032351=""
            className="ng-star-inserted"
          />
          <div className="px-lg-3 content-area">
            <app-forgot-password
              _nghost-ng-c3507607727=""
              className="ng-star-inserted"
            >
              <div _ngcontent-ng-c3507607727="" className="signup-wrapper p-0 p-lg-3">
                <div _ngcontent-ng-c3507607727="" className="container">
                  <div
                    _ngcontent-ng-c3507607727=""
                    className="row h-100 align-items-center"
                  >
                    <div _ngcontent-ng-c3507607727="" className="col-12">
                      <div
                        _ngcontent-ng-c3507607727=""
                        className="form-container p-3 my-3 my-lg-0"
                      >
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="text-center mb-3"
                        >
                          <a
                            _ngcontent-ng-c3507607727=""
                            routerlink="/dashboard"
                            className="d-inline-block"
                            href="/dashboard"
                          >
                            <img
                              _ngcontent-ng-c3507607727=""
                              width={120}
                              alt="logo"
                              className="img-fluid"
                              src="assets/images/107.svg"
                            />
                          </a>
                        </div>
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="mb-3 ng-star-inserted"
                        >
                          <ngx-intl-tel-input
                            _ngcontent-ng-c3507607727=""
                            id="login"
                            formcontrolname="teleNo"
                            className="relative ng-untouched ng-invalid ng-dirty"
                            _nghost-ng-c2982863745=""
                          >
                            <div
                              _ngcontent-ng-c2982863745=""
                              className="iti iti--allow-dropdown separate-dial-code iti-sdc-3"
                            >
                              <div
                                _ngcontent-ng-c2982863745=""
                                dropdown=""
                                className="iti__flag-container"
                              >
                                <div
                                  _ngcontent-ng-c2982863745=""
                                  dropdowntoggle=""
                                  className="iti__selected-flag dropdown-toggle"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <div
                                    _ngcontent-ng-c2982863745=""
                                    className="iti__flag iti__in"
                                  />
                                  <div
                                    _ngcontent-ng-c2982863745=""
                                    className="selected-dial-code ng-star-inserted"
                                  >
                                    +91
                                  </div>
                                  {/**/}
                                  <div
                                    _ngcontent-ng-c2982863745=""
                                    className="iti__arrow"
                                  />
                                </div>
                                {/**/}
                              </div>
                              {/**/}
                              <input
                                _ngcontent-ng-c2982863745=""
                                type="tel"
                                autoComplete="off"
                                id="phone"
                                placeholder="74104 10123"
                                validation="true"
                                className="form-control custom ng-untouched ng-pristine ng-valid"
                              />
                            </div>
                          </ngx-intl-tel-input>
                          {/**/}
                        </div>
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="mb-3 relative ng-star-inserted"
                        >
                          <input
                            _ngcontent-ng-c3507607727=""
                            placeholder="Password"
                            formcontrolname="newPassword"
                            className="form-control custom ng-pristine ng-invalid ng-touched"
                            type="password"
                          />
                          <mat-icon
                            _ngcontent-ng-c3507607727=""
                            role="img"
                            className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            visibility_off
                          </mat-icon>
                          <small
                            _ngcontent-ng-c3507607727=""
                            className="error text-danger ng-star-inserted"
                          >
                            {" "}
                            Password Is required
                          </small>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="mb-3 relative ng-star-inserted"
                        >
                          <input
                            _ngcontent-ng-c3507607727=""
                            placeholder="Confirm Password"
                            formcontrolname="confirmPassword"
                            className="form-control custom ng-untouched ng-pristine ng-invalid"
                            type="password"
                          />
                          <mat-icon
                            _ngcontent-ng-c3507607727=""
                            role="img"
                            className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            visibility_off
                          </mat-icon>
                          {/**/}
                        </div>
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="mb-3 ng-star-inserted"
                        >
                          <p _ngcontent-ng-c3507607727="" className="fw-bold fs-12">
                            {" "}
                            Please enter the 4 digit OTP below{" "}
                          </p>
                          <ng-otp-input
                            _ngcontent-ng-c3507607727=""
                            _nghost-ng-c3470639301=""
                          >
                            <div
                              _ngcontent-ng-c3470639301=""
                              className="align-items-center d-flex justify-content-between ng-otp-input-wrapper wrapper ng-star-inserted"
                              id="c_1rtr0xednknm6ol7u1d"
                            >
                              <input
                                _ngcontent-ng-c3470639301=""
                                autoComplete="one-time-code"
                                className="custom form-control fs-16 otp-input p-2 ng-pristine ng-valid ng-star-inserted ng-touched"
                                type="tel"
                                placeholder=""
                                id="otp_0_1rtr0xednknm6ol7u1d"
                                pattern="\d*"
                              />
                              <input
                                _ngcontent-ng-c3470639301=""
                                autoComplete="one-time-code"
                                className="custom form-control fs-16 otp-input p-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                type="tel"
                                placeholder=""
                                id="otp_1_1rtr0xednknm6ol7u1d"
                                pattern="\d*"
                              />
                              <input
                                _ngcontent-ng-c3470639301=""
                                autoComplete="one-time-code"
                                className="custom form-control fs-16 otp-input p-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                type="tel"
                                placeholder=""
                                id="otp_2_1rtr0xednknm6ol7u1d"
                                pattern="\d*"
                              />
                              <input
                                _ngcontent-ng-c3470639301=""
                                autoComplete="one-time-code"
                                className="custom form-control fs-16 otp-input p-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                type="tel"
                                placeholder=""
                                id="otp_3_1rtr0xednknm6ol7u1d"
                                pattern="\d*"
                              />
                              {/**/}
                            </div>
                            {/**/}
                          </ng-otp-input>
                          <div _ngcontent-ng-c3507607727="" className="text-end mt-3">
                            <button
                              _ngcontent-ng-c3507607727=""
                              className="btn theme-btn px-4"
                              disabled=""
                            >
                              {" "}
                              Get OTP{" "}
                            </button>
                          </div>
                        </div>
                        <div
                          _ngcontent-ng-c3507607727=""
                          className="mt-5 mb-3 ng-star-inserted"
                        >
                          <button
                            _ngcontent-ng-c3507607727=""
                            className="btn theme-btn w-100"
                          >
                            {" "}
                            Reset Password{" "}
                          </button>
                        </div>
                        <p
                          _ngcontent-ng-c3507607727=""
                          className="theme-golden fw-bold mb-0 ng-star-inserted"
                        >
                          Note:
                        </p>
                        <p
                          _ngcontent-ng-c3507607727=""
                          className="mb-0 ng-star-inserted"
                        >
                          {" "}
                          Your Registered number with kheloyar.club is your Username.
                          Any Issue/Complaint contact Customer Support:{" "}
                          <a
                            _ngcontent-ng-c3507607727=""
                            className="theme-golden fw-bold"
                            
                          >
                            Click Here
                          </a>
                        </p>
                        {/**/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </app-forgot-password>
          </div>
        </app-root>


      </div>

    </>
  )
}

export default Forgetpassword
