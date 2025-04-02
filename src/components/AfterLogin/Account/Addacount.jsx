import React, { useState } from "react";

const Addacount = ({ onClose }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling visibility
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const validateForm = () => {
    return pin.length >= 4 && confirmPin === pin;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, saving data...");
      setPin("");
      setConfirmPin("");
    }
  };

  return (
    <div className="cdk-overlay-container">
      <div
        className="cdk-overlay-backdrop custom-backdrop cdk-overlay-backdrop-showing"
        onClick={onClose}
      ></div>
      <div className="cdk-global-overlay-wrapper" dir="ltr" style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          id="cdk-overlay-8"
          className="cdk-overlay-pane theme-modal"
          style={{ width: "500px", maxWidth: "95vw", position: "static" }}
        >
          <div className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true" tabIndex="0"></div>
          <div
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-5"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div className="mat-mdc-dialog-component-host ng-star-inserted">
                  <div className="d-flex bg-black align-items-center justify-content-between p-3 modal-head">
                    <img
                      loading="lazy"
                      fetchpriority="high"
                      height="40"
                      alt="Logo"
                      src="assets/images/106.svg"
                      className="ng-star-inserted"
                    />
                    <button
                      className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
                      onClick={onClose}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                      <span className="material-icons">close</span>
                    </button>
                  </div>
                  <div className="mat-mdc-dialog-content mdc-dialog__content p-3">
                    <form noValidate onSubmit={handleSubmit} className="ng-untouched ng-pristine ng-invalid ng-star-inserted">
                      <div className="col-md-12 mb-3 relative">
                        <h1 className="d-flex justify-content-center fw-600" style={{ color: "#dfd7d7" }}>
                          Create Withdraw PIN
                        </h1>
                      </div>
                      <span className="text-light ms-1">
                        PIN<span className="text-danger font-16">*</span>
                      </span>
                      <div className="col-md-12 mb-3 relative w-pin">
                        <input
                          inputMode="numeric"
                          maxLength="8"
                          placeholder="Enter PIN"
                          className="form-control custom"
                          type={isPasswordVisible ? "text" : "password"}
                          value={pin}
                          onChange={handlePinChange}
                          style={{
                            position: "relative",
                            paddingRight: "35px", // Add space for the icon
                          }}
                        />
                        <span
                          className="mat-icon material-icons"
                          onClick={togglePasswordVisibility}
                          style={{
                            position: "absolute",
                            right: "23px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                        >
                          {isPasswordVisible ? "visibility" : "visibility_off"}
                        </span>
                      </div>
                      <span className="text-light ms-1">
                        Confirm PIN<span className="text-danger font-16">*</span>
                      </span>
                      <div className="col-md-12 mb-3 relative w-pin">
                        <input
                          inputMode="numeric"
                          maxLength="8"
                          placeholder="Enter Confirm PIN"
                          className="form-control custom"
                          type={isConfirmPasswordVisible ? "text" : "password"}
                          value={confirmPin}
                          onChange={handleConfirmPinChange}
                          style={{
                            position: "relative",
                            paddingRight: "35px", // Add space for the icon
                          }}
                        />
                        <span
                          className="mat-icon material-icons"
                          onClick={toggleConfirmPasswordVisibility}
                          style={{
                            position: "absolute",
                            right: "23px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                        >
                          {isConfirmPasswordVisible ? "visibility" : "visibility_off"}
                        </span>
                      </div>
                      <div className="col-lg-12 d-flex justify-content-center gap-2">
                        <button
                          type="submit"
                          className="btn theme-btn rounded-5 mb-3 d-inline px-5 w-100"
                          disabled={!validateForm()}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true" tabIndex="0"></div>
        </div>
      </div>
    </div>
  );
};

export default Addacount;
