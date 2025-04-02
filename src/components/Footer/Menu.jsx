import React from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom';
function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <div className="cdk-overlay-container">
        <div className="cdk-overlay-backdrop custom-backdrop cdk-overlay-backdrop-showing" style={{ background: "rgba(0,0,0,.75)" }} />
        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <div
            id="cdk-overlay-3"
            className="cdk-overlay-pane bottom-sheet-wrapper"
            style={{
              maxWidth: "100%", position: "static", marginBottom: 0, WebkitBackdropFilter: "blur(4px)", // CamelCase for webkit prefix
              backdropFilter: "blur(4px)",
              background: "linear-gradient(100deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
              height: "calc(100dvh - 61px)",
              overflowY: "auto"
            }}
          >
            <div
              tabIndex={0}
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />
            <mat-bottom-sheet-container
              tabIndex={-1}
              className="mat-bottom-sheet-container cdk-dialog-container ng-tns-c2158433287-16 ng-trigger ng-trigger-state ng-star-inserted"
              id="cdk-dialog-2"
              role="dialog"
              aria-modal="true"
              style={{ transform: "translateY(0%)" }}
            >
              <app-bottom-navigation
                _nghost-ng-c2334527375=""
                className="ng-star-inserted"
              >
                <div _ngcontent-ng-c2334527375="" className="bg-image">
                  <div
                    _ngcontent-ng-c2334527375=""
                    className="overlay-menu pt-3 px-2"
                  >
                    <img
                      _ngcontent-ng-c2334527375=""
                      routerlink="/exchange"
                      src="assets/images/club-more-ipl.webp"
                      className="w-100"
                      tabIndex={0}
                    />
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-grid menu-grid position-relative pt-2 ng-star-inserted"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        overflow: "auto",
                        border: "1px solid #343131",
                        borderRadius: "6px",
                        marginTop: "10px",
                        padding: "35px 5px 5px"
                      }}>

                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/60.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Home
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/61.gif"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Multi ID's
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/62.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          My IDs
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/63.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Aviator
                        </span>
                      </a>

                    </div>
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-grid menu-grid position-relative ng-star-inserted"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        overflow: "auto",
                        border: "1px solid #343131",
                        borderRadius: "6px",
                        marginTop: "10px",
                        padding: "35px 5px 5px"
                      }}>
                      <span
                        _ngcontent-ng-c2334527375=""
                        className="position-absolute top-0 start-0 p-2 fw-bold theme-golden fs-6 ng-star-inserted"
                      >
                        Sports
                      </span>

                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/64.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          In Play
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/66.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Exchange
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/114.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Sports Book
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/68.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Popular Sports
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/76.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Cricket
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/78.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Football
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/79.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Tennis
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/80.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          All Sports
                        </span>
                      </a>

                    </div>
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-grid menu-grid position-relative ng-star-inserted"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        overflow: "auto",
                        border: "1px solid #343131",
                        borderRadius: "6px",
                        marginTop: "10px",
                        padding: "35px 5px 5px"
                      }}>
                      <span
                        _ngcontent-ng-c2334527375=""
                        className="position-absolute top-0 start-0 p-2 fw-bold theme-golden fs-6 ng-star-inserted"
                      >
                        Casinos
                      </span>

                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/67(1).webp"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Multiplayer Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/69.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Popular Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/70.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          International Casino
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/71.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Crash Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/72.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Live Casino
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/73.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Table Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/74.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Indian Casino
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/75.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Slot Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/81.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Virtual Sports
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/82.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          E-Sports
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/83.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Scratch Games
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/84.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Shooting Games
                        </span>
                      </a>

                    </div>
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-grid menu-grid position-relative ng-star-inserted"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        overflow: "auto",
                        border: "1px solid #343131",
                        borderRadius: "6px",
                        marginTop: "10px",
                        padding: "35px 5px 5px"
                      }}>
                      <span
                        _ngcontent-ng-c2334527375=""
                        className="position-absolute top-0 start-0 p-2 fw-bold theme-golden fs-6 ng-star-inserted"
                      >
                        Providers
                      </span>

                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/85.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Evolution
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/86.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          QTech
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/542.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          mac88
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/88.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          All Providers
                        </span>
                      </a>

                    </div>
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-grid menu-grid position-relative ng-star-inserted"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        overflow: "auto",
                        border: "1px solid #343131",
                        borderRadius: "6px",
                        marginTop: "10px",
                        padding: "35px 5px 5px"
                      }}>
                      <span
                        _ngcontent-ng-c2334527375=""
                        className="position-absolute top-0 start-0 p-2 fw-bold theme-golden fs-6 ng-star-inserted"
                      >
                        Accessibility
                      </span>

                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/89.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Search
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/90.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Promotions
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/91.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Tutorials
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/92.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Settings
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/93.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Quick Withdraw
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/94.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Download App
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/95.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          Quick Deposit
                        </span>
                      </a>
                      <a
                        _ngcontent-ng-c2334527375=""
                        className="fs-10 text-center text-white text-decoration-none ng-star-inserted"
                      >
                        <img
                          _ngcontent-ng-c2334527375=""
                          alt="Online Cricket Id, Online betting Id Provider"
                          width={30}
                          height={30}
                          className="mx-auto"
                          src="assets/images/96.png"
                        />
                        <span
                          _ngcontent-ng-c2334527375=""
                          className="text-capitalize d-block lh-sm mt-1"
                        >

                          24x7 Customer Support
                        </span>
                      </a>

                    </div>

                  </div>
                  <div _ngcontent-ng-c2334527375="" className="sticky-nav p-2">
                    <div
                      _ngcontent-ng-c2334527375=""
                      className="d-flex align-items-center justify-content-between gapss"
                    >
                      <div
                        _ngcontent-ng-c2334527375=""
                        className="d-flex align-items-center"
                      >
                        <a
                          _ngcontent-ng-c2334527375=""
                          routerlink="/dashboard"

                        >
                          <img
                            _ngcontent-ng-c2334527375=""
                            width={45}
                            alt="Online Cricket Id, Online betting Id Provider"
                            src="assets/images/105.svg"
                          />
                        </a>

                      </div>
                      <div
                        _ngcontent-ng-c2334527375=""
                        className="d-flex align-items-center"
                      >

                        <button
                          _ngcontent-ng-c2334527375=""
                          className="btn bg-theme-gray rounded-circle p-2 d-flex align-items-center justify-content-center action-btn-lg"
                          onClick={() => navigate("/afterlogin")} style={{ cursor: "pointer" }}>
                          <img
                            _ngcontent-ng-c2334527375=""
                            width={15}
                            alt="Online Cricket Id, Online betting Id Provider"
                            src="assets/images/Cancel.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-bottom-navigation>

            </mat-bottom-sheet-container>
            <div
              tabIndex={0}
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

    </>


  )
}

export default Menu
