import React, { useState } from 'react'

function Raceing() {
  const [isracing, setIsracing] = useState(false)
  const openracr = () => {
    setIsracing(!isracing);
    isracing(false)
  }
  return (

    <>
      <app-racing
        _ngcontent-ng-c1510972542=""
        racingtype="Horse"
        _nghost-ng-c1342128777=""
        className="ng-star-inserted"
      >
        <div
          _ngcontent-ng-c1342128777=""
          className="border-theme-gray dashboard-box-wrapper mb-3 p-1 rounded"
        >
          <div _ngcontent-ng-c1342128777="" className="horse-racing-wrapper relative">
            <li
              _ngcontent-ng-c1342128777=""
              className="list-inline-item px-3 absolute horse ng-star-inserted"
            >
              <img
                _ngcontent-ng-c1342128777=""
                alt="horse-racing"
                height={40}
                src="assets/images/horse-racing.gif"
              />
            </li>
            {/**/}
            <ul
              _ngcontent-ng-c1342128777=""
              className="d-flex list-inline my-0 overflow-auto"
            >
              <li
                _ngcontent-ng-c1342128777=""
                className="list-inline-item px-3 ng-star-inserted"
                id="au"
              >
                <span _ngcontent-ng-c1342128777="" className="fi fi-au me-2" />
                <span _ngcontent-ng-c1342128777="" className="text-uppercase">

                  au{" "}
                </span>
              </li>
              <li
                _ngcontent-ng-c1342128777=""
                className="list-inline-item px-3 ng-star-inserted"
                id="fr"
              >
                <span _ngcontent-ng-c1342128777="" className="fi fi-fr me-2" />
                <span _ngcontent-ng-c1342128777="" className="text-uppercase">

                  fr{" "}
                </span>
              </li>
              <li
                _ngcontent-ng-c1342128777=""
                className="list-inline-item px-3 ng-star-inserted"
                id="gb"
              >
                <span _ngcontent-ng-c1342128777="" className="fi fi-gb me-2" />
                <span _ngcontent-ng-c1342128777="" className="text-uppercase">

                  gb{" "}
                </span>
              </li>
              <li
                _ngcontent-ng-c1342128777=""
                className="list-inline-item px-3 ng-star-inserted"
                id="ie"
              >
                <span _ngcontent-ng-c1342128777="" className="fi fi-ie me-2" />
                <span _ngcontent-ng-c1342128777="" className="text-uppercase">

                  ie{" "}
                </span>
              </li>
              <li
                _ngcontent-ng-c1342128777=""
                className="list-inline-item px-3 ng-star-inserted"
                id="za"
              >
                <span _ngcontent-ng-c1342128777="" className="fi fi-za me-2" />
                <span _ngcontent-ng-c1342128777="" className="text-uppercase">

                  za{" "}
                </span>
              </li>
              {/**/}
            </ul>
          </div>
          {/**/}
        </div>
      </app-racing>

    </>
    // <div
    //   _ngcontent-ng-c1510972542=""
    //   racingtype="Horse"
    //   _nghost-ng-c1342128777=""
    //   className="ng-star-inserted"
    // >
    //   <div
    //     _ngcontent-ng-c1342128777=""
    //     className="border-theme-gray dashboard-box-wrapper mb-3 p-1 rounded"
    //   >
    //     <div _ngcontent-ng-c1342128777="" className="horse-racing-wrapper relative">
    //       <li
    //         _ngcontent-ng-c1342128777=""
    //         className="list-inline-item px-3 absolute horse ng-star-inserted"
    //       >
    //         <img
    //           _ngcontent-ng-c1342128777=""
    //           alt="horse-racing"
    //           height={40}
    //           src="assets/images/horse-racing.gif"
    //         />
    //       </li>

    //       <ul
    //         _ngcontent-ng-c1342128777=""
    //         className="d-flex list-inline my-0 overflow-auto"
    //       >
    //         <li
    //           _ngcontent-ng-c1342128777=""
    //           className="list-inline-item px-3 ng-star-inserted active"
    //           id="ie"
    //           onClick={openracr}>
    //           <span _ngcontent-ng-c1342128777="" className="fi fi-ie me-2" />
    //           <span _ngcontent-ng-c1342128777="" className="text-uppercase">

    //             ie
    //           </span>
    //         </li>
    //         <li
    //           _ngcontent-ng-c1342128777=""
    //           className="list-inline-item px-3 ng-star-inserted"
    //           id="nz"
    //         >
    //           <span _ngcontent-ng-c1342128777="" className="fi fi-nz me-2" />
    //           <span _ngcontent-ng-c1342128777="" className="text-uppercase">

    //             nz
    //           </span>
    //         </li>
    //         <li
    //           _ngcontent-ng-c1342128777=""
    //           className="list-inline-item px-3 ng-star-inserted"
    //           id="us"
    //         >
    //           <span _ngcontent-ng-c1342128777="" className="fi fi-us me-2" />
    //           <span _ngcontent-ng-c1342128777="" className="text-uppercase">

    //             us
    //           </span>
    //         </li>

    //       </ul>
    //     </div>
    //     {isracing && (<div
    //       _ngcontent-ng-c1342128777=""
    //       className="px-2 px-md-3 racing ng-star-inserted"
    //     >
    //       <div
    //         _ngcontent-ng-c1342128777=""
    //         className="d-flex flex-column p-1 py-2 border-dark ng-star-inserted"
    //       >
    //         <div _ngcontent-ng-c1342128777="" className="d-flex gap-2">
    //           <span
    //             _ngcontent-ng-c1342128777=""
    //             className="w-25 fs-12 text-truncate"
    //           >
    //             Dundalk
    //           </span>
    //           <div
    //             _ngcontent-ng-c1342128777=""
    //             className="w-100 d-flex flex-wrap gap-1 justify-content-center cursor-pointer"
    //           >
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               23:30
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               22:20
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               21:45
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               22:55
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               01:00
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               00:00
    //             </span>
    //             <span
    //               _ngcontent-ng-c1342128777=""
    //               routerlink="/exchange"
    //               className="bg-secondary rounded-pill px-2 ng-star-inserted"
    //               tabIndex={0}
    //             >

    //               00:30
    //             </span>

    //           </div>
    //         </div>
    //       </div>

    //     </div>)}


    //   </div>
    // </div>

  )
}

export default Raceing
