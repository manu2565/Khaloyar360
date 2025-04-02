import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (

    <div _ngcontent-ng-c344788945="" className="px-lg-3 content-with-news">

      <router-outlet _ngcontent-ng-c344788945="" />
      <app-profile _nghost-ng-c712402336="" className="ng-star-inserted">
        <div
          _ngcontent-ng-c712402336=""
          className="rounded section p-3 position-relative mt-3"
        >
          <div
            _ngcontent-ng-c712402336=""
            className="section-head d-flex align-items-center"
          >
            <div
              _ngcontent-ng-c712402336=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              account_circle
            </div>
            <span _ngcontent-ng-c712402336="" className="ms-1 fs-14 fw-bold">
              User Details
            </span>
          </div>
          <div _ngcontent-ng-c712402336="" className="section-body my-3">
            <label
              _ngcontent-ng-c712402336=""
              className="d-flex align-items-center fw-bold"
            >
              <div
                _ngcontent-ng-c712402336=""
                role="img"
                className="mat-icon notranslate fs-6 h-auto mb-1 theme-golden material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                badge
              </div>{" "}
              User Name
            </label>
            <p _ngcontent-ng-c712402336="" className="ms-4">
              DemoUser
            </p>

          </div>
        </div>
        <div
          _ngcontent-ng-c712402336=""
          className="rounded section p-3 position-relative mt-4"
        >
          <div
            _ngcontent-ng-c712402336=""
            className="section-head d-flex align-items-center"
          >
            <div
              _ngcontent-ng-c712402336=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              password
            </div>
            <span _ngcontent-ng-c712402336="" className="ms-1 fs-14 fw-bold">
              Change Password
            </span>
          </div>
          <div _ngcontent-ng-c712402336="" className="section-body my-3">
            <div _ngcontent-ng-c712402336="" className="row">
              <div _ngcontent-ng-c712402336="" className="col-md-4 error-field">
                <label _ngcontent-ng-c712402336="">Old Password</label>
                <div _ngcontent-ng-c712402336="" className="relative">
                  <input
                    _ngcontent-ng-c712402336=""
                    formcontrolname="oldPassword"
                    placeholder="Old Password"
                    className="form-control custom ng-untouched ng-pristine ng-invalid"
                    type="password"
                  />
                  <div
                    _ngcontent-ng-c712402336=""
                    role="img"
                    className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    visibility_off
                  </div>
                </div>

              </div>
              <div _ngcontent-ng-c712402336="" className="col-md-4 error-field">
                <label _ngcontent-ng-c712402336="">New Password</label>
                <div _ngcontent-ng-c712402336="" className="relative">
                  <input
                    _ngcontent-ng-c712402336=""
                    formcontrolname="newPassword"
                    placeholder="New Password"
                    className="form-control custom ng-untouched ng-pristine ng-invalid"
                    type="password"
                  />
                  <div
                    _ngcontent-ng-c712402336=""
                    role="img"
                    className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    visibility_off
                  </div>
                </div>



              </div>
              <div _ngcontent-ng-c712402336="" className="col-md-4 error-field">
                <label _ngcontent-ng-c712402336="">Confirm Password</label>
                <div _ngcontent-ng-c712402336="" className="relative">
                  <input
                    _ngcontent-ng-c712402336=""
                    formcontrolname="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control custom ng-untouched ng-pristine ng-invalid"
                    type="password"
                  />
                  <div
                    _ngcontent-ng-c712402336=""
                    role="img"
                    className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    visibility_off
                  </div>
                </div>




              </div>
              <div _ngcontent-ng-c712402336="" className="col-md-12 text-center">
                <button
                  _ngcontent-ng-c712402336=""
                  className="btn theme-btn px-md-4 px-3"
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>

          </div>
        </div>
        <div
          _ngcontent-ng-c712402336=""
          className="rounded section p-3 position-relative mt-4"
        >
          <div
            _ngcontent-ng-c712402336=""
            className="section-head d-flex align-items-center"
          >
            <div
              _ngcontent-ng-c712402336=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              settings_cinematic_blur
            </div>
            <span _ngcontent-ng-c712402336="" className="ms-1 fs-14 fw-bold">
              Manage Bank Account
            </span>
          </div>
          <div _ngcontent-ng-c712402336="" className="section-body my-3">
            <app-bank-account-manage _ngcontent-ng-c712402336="">
              <app-data-table
                _nghost-ng-c2732545599=""
                className="ng-star-inserted"
              >
                <div _ngcontent-ng-c2732545599="">
                  <table
                    _ngcontent-ng-c2732545599=""
                    className="custom-datatable ng-star-inserted"
                  >
                    <thead _ngcontent-ng-c2732545599="">
                      <tr _ngcontent-ng-c2732545599="">
                        <th scope="col" className="ng-star-inserted">
                          cardHolderName
                        </th>
                        <th scope="col" className="ng-star-inserted">
                          accountNo
                        </th>
                        <th scope="col" className="ng-star-inserted">
                          iban
                        </th>
                        <th scope="col" className="ng-star-inserted">
                          action
                        </th>

                      </tr>
                    </thead>
                    <tbody _ngcontent-ng-c2732545599="">
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Vijay Kumar{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          1340001700030924{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          PUNBO134000{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-71"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-71-button"
                                aria-labelledby="mat-mdc-slide-toggle-71-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-71-button"
                                id="mat-mdc-slide-toggle-71-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Guddu Sarma{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          18522191009598{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          PuNBO185210{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-72"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-72-button"
                                aria-labelledby="mat-mdc-slide-toggle-72-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-72-button"
                                id="mat-mdc-slide-toggle-72-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Guddu Sarma{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          18522191009598{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          PuNBO185210{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-73"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-73-button"
                                aria-labelledby="mat-mdc-slide-toggle-73-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-73-button"
                                id="mat-mdc-slide-toggle-73-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Guddu Sarma{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          185221919598{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          PuNBo185210{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-74"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-74-button"
                                aria-labelledby="mat-mdc-slide-toggle-74-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-74-button"
                                id="mat-mdc-slide-toggle-74-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Tasleem khan{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          41059503411{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          SBIN0000746{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-75"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-75-button"
                                aria-labelledby="mat-mdc-slide-toggle-75-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-75-button"
                                id="mat-mdc-slide-toggle-75-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Vijay pal Singh{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          32540142525{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          Cbin0282324{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-76"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-76-button"
                                aria-labelledby="mat-mdc-slide-toggle-76-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-76-button"
                                id="mat-mdc-slide-toggle-76-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Chandra Sekher Behera{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          9121845175{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          PYTM0123456{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-77"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-77-button"
                                aria-labelledby="mat-mdc-slide-toggle-77-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-77-button"
                                id="mat-mdc-slide-toggle-77-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Kunkuli Kamei{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          059352000000725{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          YESB0000593{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-78"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-78-button"
                                aria-labelledby="mat-mdc-slide-toggle-78-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-78-button"
                                id="mat-mdc-slide-toggle-78-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Bijendra Kushwaha{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          006991800054477{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          YESB0000069{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-79"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-79-button"
                                aria-labelledby="mat-mdc-slide-toggle-79-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-79-button"
                                id="mat-mdc-slide-toggle-79-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>
                      <tr
                        _ngcontent-ng-c2732545599=""
                        className="ng-star-inserted"
                      >
                        <td
                          data-label="CardHolderName"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          className="ng-star-inserted"
                        >
                          {" "}
                          Raju s/o BHOOP SINGH{" "}
                        </td>
                        <td data-label="accountNo" className="ng-star-inserted">
                          {" "}
                          6958468422{" "}
                        </td>
                        <td data-label="iban" className="ng-star-inserted">
                          {" "}
                          IDIB000J059{" "}
                        </td>
                        <td
                          data-label="action"
                          className="text-danger ng-star-inserted"
                        >
                          <div
                            color="#28a745"
                            className="mat-mdc-slide-toggle mat-#28a745"
                            id="mat-mdc-slide-toggle-80"
                          >
                            <div className="mdc-form-field">
                              <button
                                role="switch"
                                type="button"
                                className="mdc-switch mdc-switch--unselected"
                                tabIndex={0}
                                id="mat-mdc-slide-toggle-80-button"
                                aria-labelledby="mat-mdc-slide-toggle-80-label"
                                aria-checked="false"
                              >
                                <div className="mdc-switch__track" />
                                <div className="mdc-switch__handle-track">
                                  <div className="mdc-switch__handle">
                                    <div className="mdc-switch__shadow">
                                      <div className="mdc-elevation-overlay" />
                                    </div>
                                    <div className="mdc-switch__ripple">
                                      <div
                                        mat-ripple=""
                                        className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator"
                                      ></div>
                                    </div>
                                    <div className="mdc-switch__icons ng-star-inserted">
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--on"
                                      >
                                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
                                      </svg>
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="mdc-switch__icon mdc-switch__icon--off"
                                      >
                                        <path d="M20 13H4v-2h16v2z" />
                                      </svg>
                                    </div>

                                  </div>
                                </div>
                              </button>
                              <label
                                className="mdc-label"
                                htmlFor="mat-mdc-slide-toggle-80-button"
                                id="mat-mdc-slide-toggle-80-label"
                              >
                                <strong className="text-danger">
                                  Deactivated
                                </strong>
                              </label>
                            </div>
                          </div>
                        </td>

                      </tr>

                    </tbody>
                  </table>

                </div>

                <div
                  _ngcontent-ng-c2732545599=""
                  className="d-flex align-items-center justify-content-center justify-content-lg-end ng-star-inserted"
                >

                  <div
                    _ngcontent-ng-c2732545599=""
                    previouslabel="Prev"
                    nextlabel="Next"
                    className="ng-star-inserted"
                  >
                    <div>
                      <nav role="navigation" aria-label="Pagination">
                        <ul className="ngx-pagination ng-star-inserted">
                          <li className="pagination-previous disabled ng-star-inserted">

                            <span aria-disabled="true" className="ng-star-inserted">
                              {" "}
                              Prev <span className="show-for-sr">page</span>
                            </span>

                          </li>

                          <li className="small-screen"> 1 / 151 </li>
                          <li className="current ng-star-inserted">

                            <span aria-live="polite" className="ng-star-inserted">
                              <span className="show-for-sr">You're on page </span>
                              <span>1</span>
                            </span>


                          </li>
                          <li className="ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>2</span>
                            </a>


                          </li>
                          <li className="ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>3</span>
                            </a>


                          </li>
                          <li className="ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>4</span>
                            </a>


                          </li>
                          <li className="ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>5</span>
                            </a>


                          </li>
                          <li className="ellipsis ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>...</span>
                            </a>


                          </li>
                          <li className="ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              <span className="show-for-sr">page </span>
                              <span>151</span>
                            </a>


                          </li>

                          <li className="pagination-next ng-star-inserted">
                            <a tabIndex={0} className="ng-star-inserted">
                              {" "}
                              Next <span className="show-for-sr">page</span>
                            </a>


                          </li>

                        </ul>

                      </nav>
                    </div>
                  </div>

                </div>





              </app-data-table>



            </app-bank-account-manage>
          </div>
        </div>
      </app-profile>


    </div>


  )
}

export default Profile
