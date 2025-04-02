import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Provider from './Provider';
import Filter from './AfterLogin/Filter';

function Seachring() {
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const providerRef = useRef(null);

  const filterRef = useRef(null);

  const toggleProvider = () => {
    setIsProviderOpen((prev) => !prev);
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
    setIsProviderOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        providerRef.current &&
        !providerRef.current.contains(event.target) &&
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setIsProviderOpen(false);
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (

    <ul
      _ngcontent-ng-c4164180093=""
      className="list-inline mb-0 py-2 d-flex ng-star-inserted justify-content-end"
    >
      <li _ngcontent-ng-c4164180093="" className="list-inline-item">
        <button
          _ngcontent-ng-c4164180093=""
          className="btn icon-btns ng-star-inserted"
          style={{
            height: "36px",
            width: "36px",
            border: "2px solid var(--theme-icon-btn-border)",
            color: "var(--theme-icon-btn-border)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}>
          <div
            _ngcontent-ng-c4164180093=""
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            fullscreen
          </div>
        </button>

      </li>

      <li
        _ngcontent-ng-c4164180093=""
        className="list-inline-item flex-grow-1"
      >
        <button
          _ngcontent-ng-c4164180093=""
          className="btn icon-btn justify-content-start w-100"
          style={{
            height: "36px",
            width: "36px",
            border: "2px solid var(--theme-icon-btn-border)",
            color: "var(--theme-icon-btn-border)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}>
          <div
            _ngcontent-ng-c4164180093=""
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            search
          </div>
          <span _ngcontent-ng-c4164180093="" className="ms-1 fs-12">
            Search Games
          </span>
        </button>
      </li>
      <li _ngcontent-ng-c4164180093="" className="list-inline-item">
        <div
          _ngcontent-ng-c4164180093=""
          className="mat-mdc-menu-trigger d-flex gap-2 align-items-center justify-content-between cursor-pointer px-2 br-10 icon-btn"
          aria-haspopup="menu"

          aria-expanded={isProviderOpen ? "true" : "false"}

          onClick={toggleProvider}
          ref={providerRef}>
          <div
            _ngcontent-ng-c4164180093=""
            className="d-flex align-items-center gap-1"
          >
            <span _ngcontent-ng-c4164180093="" className="fw-bold">
              All Providers
            </span>
          </div>
          <div
            _ngcontent-ng-c4164180093=""
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >


            expand_more
          </div>



        </div>


        {isProviderOpen && (
          <div className="provider-dropdown">
            <Provider />
          </div>
        )}
      </li>



      <li _ngcontent-ng-c4164180093="" className="list-inline-item">
        <button
          _ngcontent-ng-c4164180093=""
          className="btn icon-btn"
          style={{
            height: "36px",
            width: "36px",
            border: "2px solid var(--theme-icon-btn-border)",
            color: "var(--theme-icon-btn-border)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }} onClick={toggleFilter}
          ref={filterRef}>
          <div
            _ngcontent-ng-c4164180093=""
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden={isFilterOpen ? "true" : "false"}
            data-mat-icon-type="font"
          >
            tune
          </div>
        </button>
      </li>
      {isFilterOpen && (
        <div>
          <Filter />
        </div>
      )}

    </ul>
  )


}

export default Seachring

