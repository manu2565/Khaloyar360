import React from 'react'

function Scoredmethod({ closeModal }) {
  return (
    <div _ngcontent-qeq-c38="" className="w-100 bet-slip-show betslip-box">
      <app-bet-slip _ngcontent-qeq-c38="" _nghost-qeq-c36="">
        <div _ngcontent-qeq-c36="">
          <div _ngcontent-qeq-c36="">
            <div _ngcontent-qeq-c36="" className="box-header" onClick={closeModal}>
              <h4 _ngcontent-qeq-c36="">Bet Slip</h4>
              <img
                _ngcontent-qeq-c36=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBpVKBDYQgDGx+AkZgBEdgM0eQDWAj2AA30A36rQ+mIhjMX3IJgd6lPQpwhyFaYiJiZiA6ooYHKOIiRD0uufYmDgNi2dHFZHkhlp0c0PWjUgpH7nJe4OWl1hpTSuicO+/mecZt23CaptqAw77P7r1HBpuwmBFCaHWRoDdjMXkQH/xABzTGeY4xwr7vvVJYa1fZthwH2t95BHEJkQOTbRcTY0xt4CB/xeWB065nboiZuoxh4f0iWZnD36tcTEY6sS2xhIbfdkYhWrPQ1MVf12r9UarbyZsAAAAASUVORK5CYII="
                alt=""
                className="pointer"
              />
            </div>
            <div _ngcontent-qeq-c36="" className="box-match-odds position-relative">

              <h5 _ngcontent-qeq-c36="">match odds</h5>
              <div _ngcontent-qeq-c36="" className="amount-block back">
                <div _ngcontent-qeq-c36="" className="label-box">
                  <h6 _ngcontent-qeq-c36="" className="notranslate">
                    sri lanka
                    <a _ngcontent-qeq-c36="" className="pointer ml-1">
                      <img
                        _ngcontent-qeq-c36=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBfU/bDcIwDHRQ/5sN2k5ARugGwCYwAd2AEVAnaDagI2QDwgZ0ArhIF2EitZZOts8+P4wo+zg3wR3l37wJ4ZSTqiim5gsQmDvgphsqTL3Ct4o7AHvGlpvvzF9pg+HkCIwsGPqFnKN4zLd7YGBs5fdT3jAAs/7hDTSMJxRHcmeg5/RnKu6UoDRbxEsp6GTdmjw0CyJQy7ZF/YM+Id0/M/fkuryhUmqLZ3vGLflAri4FgcRD1s9JkC/YWTaquKAOKgAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </a>
                  </h6>
                  <h4
                    _ngcontent-qeq-c36=""
                    className="liability-profit notranslate txt-blue"
                  >
                    Profit: 0
                  </h4>
                </div>
                <div _ngcontent-qeq-c36="" className="amount-control">

                  <div _ngcontent-qeq-c36="" className="plus-minus">
                    <button _ngcontent-qeq-c36="" className="btn-minus">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>-</font>
                      </font>
                    </button>
                    <input
                      _ngcontent-qeq-c36=""
                      type="text"
                      min={1.0}
                      step=".01"
                      name="rate"
                      placeholder="Rate"
                      inputMode="numeric"
                      className="form-control input-number-bet ng-untouched ng-pristine ng-valid"
                    />
                    <button _ngcontent-qeq-c36="" className="btn-minus">
                      +
                    </button>
                  </div>

                  <div _ngcontent-qeq-c36="" className="plus-minus inp-focus">
                    <button _ngcontent-qeq-c36="" className="btn-minus">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>-</font>
                      </font>
                    </button>
                    <input
                      _ngcontent-qeq-c36=""
                      type="text"
                      maxLength={7}
                      name="stake"
                      placeholder="Stake"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="form-control input-number-bet ng-untouched ng-pristine ng-valid"
                    />
                    <button _ngcontent-qeq-c36="" className="btn-minus">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>+</font>
                      </font>
                    </button>
                  </div>
                </div>
              </div>
              <div _ngcontent-qeq-c36="" className="chip-boxes row px-2">
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    200
                  </button>
                </div>
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    300
                  </button>
                </div>
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    500
                  </button>
                </div>
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    1000
                  </button>
                </div>
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    2000
                  </button>
                </div>
                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip">
                    5000
                  </button>
                </div>

                <div _ngcontent-qeq-c36="" className="col-auto">
                  <button _ngcontent-qeq-c36="" className="btn-chip btn-chip-edit">
                    <svg
                      _ngcontent-qeq-c36=""
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        _ngcontent-qeq-c36=""
                        d="M2.14697 7.84741L4.51561 7.83931L9.68548 2.68864C9.88837 2.48456 10 2.21353 10 1.92522C10 1.63692 9.88837 1.36588 9.68548 1.1618L8.83421 0.305517C8.42844 -0.102649 7.72048 -0.100489 7.31792 0.303897L2.14697 5.45564V7.84741ZM8.07526 1.06894L8.92814 1.9236L8.07097 2.77773L7.2197 1.92198L8.07526 1.06894ZM3.22045 5.90592L6.45699 2.68109L7.30826 3.53737L4.07226 6.76113L3.22045 6.76382V5.90592Z"
                        fill="var(--primary-color)"
                      />
                      <path
                        _ngcontent-qeq-c36=""
                        d="M1.07348 9.99997H8.58784C9.17986 9.99997 9.66132 9.51568 9.66132 8.92017V4.2403L8.58784 5.3201V8.92017H2.7685C2.75455 8.92017 2.74006 8.92557 2.7261 8.92557C2.70839 8.92557 2.69068 8.92071 2.67243 8.92017H1.07348V1.36154H4.74854L5.82202 0.281738H1.07348C0.481456 0.281738 0 0.76603 0 1.36154V8.92017C0 9.51568 0.481456 9.99997 1.07348 9.99997Z"
                        fill="var(--primary-color)"
                      />
                    </svg>
                    Edit
                  </button>
                </div>

              </div>
              <span _ngcontent-qeq-c36="" className="sl-amt-title px-2">
                Select a different amount
              </span>
              <div _ngcontent-qeq-c36="" className="select-amount px-2">
                <div _ngcontent-qeq-c36="" className="digit-block">
                  <div _ngcontent-qeq-c36="" className="row-chip row">
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>1</font>
                        </font>
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        2
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        3
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>4</font>
                        </font>
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        5
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>6</font>
                        </font>
                      </button>
                    </div>
                  </div>
                  <div _ngcontent-qeq-c36="" className="row-chip row">
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        7
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        8
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        9
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>0</font>
                        </font>
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        00
                      </button>
                    </div>
                    <div _ngcontent-qeq-c36="" className="col-auto">
                      <button _ngcontent-qeq-c36="" className="btn-digit-number">
                        .
                      </button>
                    </div>
                  </div>
                </div>
                <div _ngcontent-qeq-c36="" className="back-button">
                  <button _ngcontent-qeq-c36="" className="btn-digit-number">
                    <img
                      _ngcontent-qeq-c36=""
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgBlZLBDcIwDEU/cIFbjxzDJh0hI7ABK2QENkBMwAiICcoGwARlA/hRG8lNnMr90pMcWfmxHQNTedKTn5F2Iy435Eb2sOuzFocTcVioZOBIUPLfSlwYBOg6kCt5jrFqckR9SB2G2UQuSj7ECt6waTWXvCvuvXg5VdLlFSQDB/3/X5lh0ULagzicHWmzyhoRb1HqIffgDPs8qvKwr3Fsyf8BBB9Ik1w8vt8AAAAASUVORK5CYII="
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <div _ngcontent-qeq-c36="" className="place-bet-block">
              <div _ngcontent-qeq-c36="" className="stake-amount">
                <h2 _ngcontent-qeq-c36="">
                  <span _ngcontent-qeq-c36="">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Min/Max:</font>
                    </font>
                  </span>
                  <span _ngcontent-qeq-c36="" className="value">
                    50/200000
                  </span>
                </h2>
                <h2 _ngcontent-qeq-c36="">
                  <span _ngcontent-qeq-c36="">Max Profit:</span>
                  <span _ngcontent-qeq-c36="" className="value">
                    2500000
                  </span>
                </h2>
              </div>
              <div _ngcontent-qeq-c36="" className="place-button">
                <button _ngcontent-qeq-c36="" className="btn-clear" onClick={closeModal}>
                  Cancel
                </button>
                <button _ngcontent-qeq-c36="" className="btn-place-bet">
                  Place Bet
                </button>
              </div>
            </div>
          </div>
        </div>


        <div
          _ngcontent-qeq-c36=""
          className="bet-slip-backdrop offcanvas-backdrop"
        />
      </app-bet-slip>
    </div>


  )
}

export default Scoredmethod
