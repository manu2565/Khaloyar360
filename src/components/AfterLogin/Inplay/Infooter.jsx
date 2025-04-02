import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Infooter() {
  // State for balance and liability
  const [balance, setBalance] = useState(0);
  const [liability, setLiability] = useState(0);

  // Use navigate hook for navigation
  const navigate = useNavigate();

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page in the browser history
  };

  return (
    <>
      <div
        _ngcontent-ng-c344788945=""
        className="footerNav d-flex d-lg-none ng-star-inserted"
      >
        <div
          _ngcontent-ng-c344788945=""
          className="d-flex align-items-center justify-content-between gapss w-100"
        >
          <div _ngcontent-ng-c344788945="" className="d-flex align-items-center">
            <a href="/afterlogin" _ngcontent-ng-c344788945="" routerlink="/dashboard" >
              <img
                _ngcontent-ng-c344788945=""
                width={45}
                alt="Online Cricket Id, Online betting Id Provider"
                src="assets/images/105.svg"
              />
            </a>
            <div
              _ngcontent-ng-c344788945=""
              className="ms-2 bg-theme-dark rounded p-2 ng-star-inserted"
            >
              <p _ngcontent-ng-c344788945="" className="lh-1 text-white mb-1">
                Balance: {balance}
              </p>
              <div
                _ngcontent-ng-c344788945=""
                className="mb-0 lh-1 text-white d-flex align-items-center ng-star-inserted"
              >
                Liability:{" "}
                <p _ngcontent-ng-c344788945="" className="text-danger m-0 ms-1">
                  {liability}
                </p>
              </div>
            </div>
          </div>
          <div _ngcontent-ng-c344788945="" className="d-flex align-items-center">
            <button
              _ngcontent-ng-c344788945=""
              onClick={handleBack} // Attach the handleBack function to the arrow button
              className="btn bg-theme-dark rounded-circle p-2 d-flex align-items-center justify-content-center action-btn-sm me-2 ng-star-inserted"
            >
              <div
                _ngcontent-ng-c344788945=""
                role="img"
                className="mat-icon notranslate text-white material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                arrow_back
              </div>
            </button>

            <button
              _ngcontent-ng-c344788945=""
              className="btn bg-theme-dark rounded-circle p-2 d-flex align-items-center justify-content-center action-btn-lg"
            >
              <img
                _ngcontent-ng-c344788945=""
                width={15}
                alt="Online Cricket Id, Online betting Id Provider"
                src="assets/images/More.svg"
                className="ng-star-inserted"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infooter;
