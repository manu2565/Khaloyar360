import React, { useState } from 'react';


const ChangeWithdrawPinModal = (
  { oClose }
) => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D+/g, '');
    setOtp(newOtp);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value.replace(/\D+/g, ''));
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value.replace(/\D+/g, ''));
  };

  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop custom-backdrop cdk-overlay-backdrop-showing"></div>
      <div className="cdk-global-overlay-wrapper" dir="ltr" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div
          id="cdk-overlay-14"
          className="cdk-overlay-pane theme-modal"
          style={{ width: '500px', maxWidth: '95vw', position: 'static' }}
        >
          <div tabIndex="0" className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
          <div
            tabIndex="-1"
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-11"
            role="dialog"
            aria-modal="true"
            style={{ '--mat-dialog-transition-duration': '150ms' }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
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
                    onClick={oClose}
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
                  <form noValidate className="ng-untouched ng-pristine ng-invalid ng-star-inserted">
                    <div className="col-md-12 mb-3 relative">
                      <h1 className="d-flex justify-content-center fw-600" style={{ color: '#dfd7d7' }}>
                        Update Withdraw PIN
                      </h1>
                    </div>
                    <div className="col-md-12 mb-3 relative">
                      <input
                        type="text"
                        className="form-control custom ng-untouched ng-pristine ng-invalid"
                        readOnly
                      />
                      <div className="mb-3">
                        <div className="text-end mt-3">
                          <button className="btn theme-btn px-4" disabled>
                            Get OTP
                          </button>
                        </div>
                        <p className="fw-bold fs-12">Please enter the 4 digit OTP below</p>
                        <div className="align-items-center d-flex justify-content-between wrapper" style={{ gap: "62px" }}>
                          {otp.map((value, index) => (
                            <input
                              key={index}
                              id={`otp_${index}`}
                              type="tel"
                              className="custom form-control fs-16 otp-input otp-inputp-2 ng-pristine ng-valid ng-star-inserted"
                              value={value}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              maxLength="1"
                              pattern="\d*"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-light ms-1">
                      PIN <span className="text-danger font-16">*</span>
                    </span>
                    <div className="col-md-12 mb-3 relative w-pin">
                      <input
                        type={showPin ? 'text' : 'password'}
                        className="form-control custom ng-untouched ng-pristine ng-invalid"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={handlePinChange}
                        inputMode="numeric"
                        maxLength="8"
                      />
                      <div
                        role="img"
                        className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        onClick={() => setShowPin(!showPin)}
                        style={{

                          right: "23px",


                        }}>
                        {showPin ? 'visibility' : 'visibility_off'}
                      </div>
                      <small className="error text-danger ng-star-inserted">minimum 4 numbers</small>
                    </div>
                    <span className="text-light ms-1">
                      Confirm PIN <span className="text-danger font-16">*</span>
                    </span>
                    <div className="col-md-12 mb-3 relative">
                      <input
                        type={showConfirmPin ? 'text' : 'password'}
                        className="form-control custom ng-untouched ng-pristine ng-invalid"
                        placeholder="Enter Confirm PIN"
                        value={confirmPin}
                        onChange={handleConfirmPinChange}
                        inputMode="numeric"
                        maxLength="8"
                      />
                      <div
                        role="img"
                        className="mat-icon notranslate eye material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        onClick={() => setShowConfirmPin(!showConfirmPin)}
                        style={{
                          position: "absolute",
                          right: "23px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}>
                        {showConfirmPin ? 'visibility' : 'visibility_off'}
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center gap-2">
                      <button className="btn theme-btn rounded-5 mb-3 d-inline px-5 w-100" disabled>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex="0" className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
};

export default ChangeWithdrawPinModal;
