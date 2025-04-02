import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Account({ closeModal }, ref) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);


  const closeSidebar = () => setIsSidebarOpen(false);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      {isSidebarOpen && (< div className="cdk-overlay-container" style={{ marginTop: "69px" }}>
        <div className="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing" />

        <div
          className="cdk-overlay-connected-position-bounding-box"
          dir="ltr"
          ref={sidebarRef}
          style={{
            top: "43.6625px",
            right: "7.79999px",
            height: "564.337px",
            width: "367.2px",
            alignItems: "flex-end", // Remove space after 'align-'
            justifyContent: "flex-start",
            position: "absolute" // Add position if needed
          }}
        >
          <div
            id="cdk-overlay-17"
            className="cdk-overlay-pane"
            style={{ position: "static" }}
          >
            <div
              tabIndex={-1}
              role="menu"
              className="mat-mdc-menu-panel mat-mdc-elevation-specific ng-trigger ng-trigger-transformMenu ng-tns-c681116372-115 mat-menu-before mat-menu-below mat-elevation-z8 ng-star-inserted"
              id="mat-menu-panel-27"
              style={{ transformOrigin: "right top" }}
              onClick={closeModal}>
              <div className="mat-mdc-menu-content ng-tns-c681116372-115">
                <div
                  _ngcontent-ng-c344788945=""
                  className="user-title-wrapper ng-tns-c681116372-115"
                >

                  DemoUser
                </div>
                <div
                  _ngcontent-ng-c344788945=""
                  className="menu-wrapper ng-tns-c681116372-115"
                >
                  <Link onClick={closeModal} to="/profile" >
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/profile"

                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        perm_identity
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Profile</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <Link onClick={closeModal} to="/payment">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/payment"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >

                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        account_balance_wallet
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Deposit</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <Link onClick={closeModal} to="/withdraw">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/withdraw"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        account_balance_wallet
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Withdraw</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <Link onClick={closeModal} to="/account-statement">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/account-statement"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        insert_chart_outlined
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Account Statement</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <Link onClick={closeModal} to="/withdraw">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/withdraw"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        payment
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Add payment Methods</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <button
                    _ngcontent-ng-c344788945=""
                    mat-menu-item=""
                    routerlinkactive="active"
                    routerlink="/profitandloss"
                    className="mat-mdc-menu-item mat-mdc-focus-indicator"
                    tabIndex={0}
                    role="menuitem"
                    aria-disabled="false"
                  >
                    <div
                      _ngcontent-ng-c344788945=""
                      role="img"
                      className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      swap_vertical_circle
                    </div>
                    <span className="mat-mdc-menu-item-text">
                      <span _ngcontent-ng-c344788945="">Profit And Loss</span>
                    </span>
                    <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                  </button>
                  <button
                    _ngcontent-ng-c344788945=""
                    mat-menu-item=""
                    routerlinkactive="active"
                    routerlink="/balance-history"
                    className="mat-mdc-menu-item mat-mdc-focus-indicator"
                    tabIndex={0}
                    role="menuitem"
                    aria-disabled="false"
                  >
                    <div
                      _ngcontent-ng-c344788945=""
                      role="img"
                      className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      access_time
                    </div>
                    <span className="mat-mdc-menu-item-text">
                      <span _ngcontent-ng-c344788945="">Wallet Transactions</span>
                    </span>
                    <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                  </button>
                  <Link onClick={closeModal} to="/information">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/information"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        info_outline
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Information</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <Link onClick={closeModal} to="/contactUs">
                    <button
                      _ngcontent-ng-c344788945=""
                      mat-menu-item=""
                      routerlinkactive="active"
                      routerlink="/contactUs"
                      className="mat-mdc-menu-item mat-mdc-focus-indicator"
                      tabIndex={0}
                      role="menuitem"
                      aria-disabled="false"
                    >
                      <div
                        _ngcontent-ng-c344788945=""
                        role="img"
                        className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        contact_support
                      </div>
                      <span className="mat-mdc-menu-item-text">
                        <span _ngcontent-ng-c344788945="">Contact Us</span>
                      </span>
                      <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                    </button>
                  </Link>
                  <a
                    _ngcontent-ng-c344788945=""
                    mat-menu-item=""
                    target="_blank"
                    className="mat-mdc-menu-item mat-mdc-focus-indicator ng-star-inserted"

                    role="menuitem"
                    tabIndex={0}
                    aria-disabled="false"
                  >
                    <div
                      _ngcontent-ng-c344788945=""
                      role="img"
                      className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      get_app
                    </div>
                    <span className="mat-mdc-menu-item-text">
                      <span _ngcontent-ng-c344788945="">Download App</span>
                    </span>
                    <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />

                  </a>

                </div>
                <Link onClick={closeModal} to='/'>
                  <button
                    _ngcontent-ng-c344788945=""
                    mat-menu-item=""
                    className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c681116372-115"
                    role="menuitem"
                    tabIndex={0}
                    aria-disabled="false"
                  >
                    <div
                      _ngcontent-ng-c344788945=""
                      role="img"
                      className="mat-icon notranslate me-2 material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      logout
                    </div>
                    <span className="mat-mdc-menu-item-text">
                      <span _ngcontent-ng-c344788945="">LogOut</span>
                    </span>
                    <div matripple="" className="mat-ripple mat-mdc-menu-ripple" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >)}

    </>
  )
}

export default Account
