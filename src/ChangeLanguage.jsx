import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './i18n'
function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div>
      <div _ngcontent-ng-c344788945="" className="d-none d-lg-block">
        <div _ngcontent-ng-c344788945="" _nghost-ng-c2530606509="">
          <div
            _ngcontent-ng-c2530606509=""
            className="mat-mdc-menu-trigger d-flex gap-2 align-items-center justify-content-between cursor-pointer border px-2 br-10 border-charcoal theme-charcoal language-dd"
            aria-haspopup="menu"
            aria-expanded="false"
            onClick={changeLanguage}
          >
            <div _ngcontent-ng-c2530606509="" className="d-flex align-items-center gap-1">
              <div
                _ngcontent-ng-c2530606509=""
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >

                language
              </div>
              <span _ngcontent-ng-c2530606509="" className="fw-bold">
                {language.toUpperCase()}
              </span>
            </div>
            <div
              _ngcontent-ng-c2530606509=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >

              expand_more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeLanguage;
