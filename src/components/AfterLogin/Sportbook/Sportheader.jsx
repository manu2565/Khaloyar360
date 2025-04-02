import React, { useState } from 'react'

function Sportheader({ setActiveTab, activeTab }) {


  return (
    <>
      <div _ngcontent-ng-c1740678579="" _nghost-ng-c2376252411="">
        <div _ngcontent-ng-c2376252411="" className="market-main-header">
          <div _ngcontent-ng-c2376252411="" className="market-header-list_1">
            <div _ngcontent-ng-c2376252411="">

              {/* Live Tab */}
              <div
                _ngcontent-ng-c2376252411=""
                className="market-header-list"
                onClick={() => setActiveTab("Live")}
              >
                <div
                  _ngcontent-ng-c2376252411=""
                  className={activeTab === "Live" ? "selection" : "un-selection"}
                >
                  <div _ngcontent-ng-c2376252411="" className="nameAlign">
                    Live
                  </div>
                </div>
              </div>

              {/* Upcoming Tab */}
              <div
                _ngcontent-ng-c2376252411=""
                className="market-header-list"
                onClick={() => setActiveTab("Upcoming")}
              >
                <div
                  _ngcontent-ng-c2376252411=""
                  className={activeTab === "Upcoming" ? "selection" : "un-selection"}
                >
                  <div _ngcontent-ng-c2376252411="" className="nameAlign">
                    Upcoming
                  </div>
                </div>
              </div>

              {/* Specials Tab */}
              <div
                _ngcontent-ng-c2376252411=""
                className="market-header-list"
                onClick={() => setActiveTab("Specials")}
              >
                <div
                  _ngcontent-ng-c2376252411=""
                  className={activeTab === "Specials" ? "selection" : "un-selection"}
                >
                  <div _ngcontent-ng-c2376252411="" className="nameAlign">
                    Specials
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default Sportheader
