import React, { useState } from 'react'
import Sportheader from './Sportbook/Sportheader';
import Sporticons from './Sportbook/Sporticons';
import Livesection from './Sportbook/Livesection';
import Specialmarketlist from './Sportbook/Specialmarketlist';
import SportSidebar from './Sportbook/SportSidebar';
import Sportupcomming from './Sportbook/Sportupcomming';
function Sportbook() {
  const [activeTab, setActiveTab] = useState("Live");
  return (
    <>
      <div _ngcontent-ng-c344788945="" className="px-lg-3 content-with-news">

        <router-outlet _ngcontent-ng-c344788945="" />
        <app-game-iframe _nghost-ng-c2201525798="" className="ng-star-inserted">
          <div
            _ngcontent-ng-c2201525798=""
            className="iframe-wrapper ng-star-inserted"
          >
            <div className="temp_preloader_bg" id="temp_preloader_bg_id">
              <div className="part">
                {/* <div id="logo"></div> */}
                <div className="loader">
                  <img src="./goldMarble_maxLoader.png" alt="" className="icon" />
                  {/* <img src="./GoldMarble/assets/images/load.png" alt="" class="icon" > */}
                  {/* <img src="../GoldMarble/assets/images/logo-lettering.png" alt="" class="name"> */}
                </div>
              </div>
            </div>
            <app-root _nghost-ng-c611545987="" ng-version="17.3.12">
              <app-game _ngcontent-ng-c611545987="" _nghost-ng-c446932153="">
                <div _ngcontent-ng-c446932153="" className="game-body">


                  <div _ngcontent-ng-c446932153="" className="menu_toggle_div">
                    <div _ngcontent-ng-c446932153="" className="left_menu_toggle" />
                    <span _ngcontent-ng-c446932153="" className="all_games_text">

                      MENU &gt;
                      <span _ngcontent-ng-c446932153="" className="selected_sport" />
                    </span>
                  </div>

                  <div _ngcontent-ng-c446932153="" className="game_body_common">
                    <div _ngcontent-ng-c446932153="" className="menu_toggle">
                      <div _ngcontent-ng-c446932153="" className="menu_toggle_sub">
                        <app-sports-list-panel
                          _ngcontent-ng-c446932153=""
                          _nghost-ng-c1055330017=""
                        >
                          <div _ngcontent-ng-c1055330017="" className="sports_left_panel">
                            <div
                              _ngcontent-ng-c1055330017=""
                              className="search_container"
                            >
                              <div
                                _ngcontent-ng-c1055330017=""
                                className="inputField_cont"
                              >
                                <i _ngcontent-ng-c1055330017="" className="search_icon" />
                                <input
                                  _ngcontent-ng-c1055330017=""
                                  type="text"
                                  placeholder="Search a game or a competition"
                                  name="Search"
                                  autoComplete="off"
                                  className="inputContainer ng-untouched ng-pristine ng-valid"
                                  style={{ border: "none" }}
                                />

                              </div>
                            </div>





                            <SportSidebar />

                          </div>
                        </app-sports-list-panel>
                      </div>
                    </div>
                    <div
                      _ngcontent-ng-c446932153=""
                      className="other_search hide"
                      hidden=""
                    >
                      <app-promotion-menu-panel
                        _ngcontent-ng-c446932153=""
                        _nghost-ng-c4280885827=""
                      >
                        <div _ngcontent-ng-c4280885827="" className="promotion_panel">
                          <div _ngcontent-ng-c4280885827="" className="backIcon" />
                          <div _ngcontent-ng-c4280885827="" className="main_content">
                            <div _ngcontent-ng-c4280885827="">Promotions</div>
                            <div _ngcontent-ng-c4280885827="" className="more_games">
                              <div _ngcontent-ng-c4280885827="" className="header">
                                MORE GAMES
                              </div>
                              <div _ngcontent-ng-c4280885827="" className="games_content">
                                <div _ngcontent-ng-c4280885827="" className="games_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="icon_1 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Live Casino
                                  </div>
                                </div>
                                <div _ngcontent-ng-c4280885827="" className="games_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="icon_2 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Slots
                                  </div>
                                </div>
                                <div _ngcontent-ng-c4280885827="" className="games_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="icon_3 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Roulette
                                  </div>
                                </div>
                                <div _ngcontent-ng-c4280885827="" className="games_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="icon_4 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Indian Games
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div _ngcontent-ng-c4280885827="" className="help">
                              <div _ngcontent-ng-c4280885827="" className="header">
                                HELP
                              </div>
                              <div _ngcontent-ng-c4280885827="" className="help_content">
                                <div _ngcontent-ng-c4280885827="" className="help_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="helpIcon_1 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Sportsbook Rules
                                  </div>
                                </div>
                                <div _ngcontent-ng-c4280885827="" className="help_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="helpIcon_2 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    FAQs
                                  </div>
                                </div>
                                <div _ngcontent-ng-c4280885827="" className="help_list">
                                  <div
                                    _ngcontent-ng-c4280885827=""
                                    className="helpIcon_3 image_icon"
                                  />
                                  <div _ngcontent-ng-c4280885827="" className="space">
                                    Tutorials
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </app-promotion-menu-panel>
                    </div>
                    <div _ngcontent-ng-c446932153="">
                      <app-market-panel
                        _ngcontent-ng-c446932153=""
                        _nghost-ng-c1740678579=""
                      >
                        <div _ngcontent-ng-c1740678579="" className="market-main-content">
                          <app-banner-carousel _ngcontent-ng-c1740678579="">
                            <div>{/**/}</div>
                            <div>{/**/}</div>
                          </app-banner-carousel>
                          <Sportheader setActiveTab={setActiveTab} activeTab={activeTab} />
                          <app-market-upcoming-panel
                            _ngcontent-ng-c1740678579=""
                            _nghost-ng-c1704772557=""
                            hidden=""
                          >

                            <div _ngcontent-ng-c1704772557="">
                              {/* {activeTab === "Specials" && <Specialmarketlist />} */}
                              <div
                                _ngcontent-ng-c1704772557=""
                                className="upcoming-main-header"
                              >
                                <div
                                  _ngcontent-ng-c1704772557=""
                                  className="upcoming_headerList_container"
                                >
                                  <div
                                    _ngcontent-ng-c1704772557=""
                                    className="upcoming-header-list selection"
                                  >
                                    <div
                                      _ngcontent-ng-c1704772557=""
                                      className="nameAlign"
                                    >

                                      Today
                                    </div>
                                  </div>
                                  <div
                                    _ngcontent-ng-c1704772557=""
                                    className="upcoming-header-list un-selection"
                                  >
                                    <div
                                      _ngcontent-ng-c1704772557=""
                                      className="nameAlign"
                                    >

                                      Tomorrow
                                    </div>
                                  </div>
                                  <div
                                    _ngcontent-ng-c1704772557=""
                                    className="upcoming-header-list un-selection"
                                  >
                                    <div
                                      _ngcontent-ng-c1704772557=""
                                      className="nameAlign"
                                    >

                                      Future
                                    </div>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </app-market-upcoming-panel>

                          <Sporticons />

                          {activeTab === "Live" && <Livesection />}
                          {activeTab === "Upcoming" && <Sportupcomming />}
                          {activeTab === "Specials" && <Specialmarketlist />}



                        </div>
                      </app-market-panel>
                      <app-market-details-panel
                        _ngcontent-ng-c446932153=""
                        _nghost-ng-c2293917314=""
                        hidden=""
                      >
                        <div
                          _ngcontent-ng-c2293917314=""
                          className="marketdetails-main-content"
                        >
                          <div
                            _ngcontent-ng-c2293917314=""
                            className="marketdetails-main-container"
                          >
                            <app-market-details-header
                              _ngcontent-ng-c2293917314=""
                              _nghost-ng-c10337860=""
                            >

                              <div
                                _ngcontent-ng-c10337860=""
                                className="eventNameHeader01"
                              >

                              </div>
                            </app-market-details-header>
                            <app-market-details-banner-panel
                              _ngcontent-ng-c2293917314=""
                              _nghost-ng-c2651688636=""
                            >
                              <div
                                _ngcontent-ng-c2651688636=""
                                className="banner_overall_container"
                              >
                                <div
                                  _ngcontent-ng-c2651688636=""
                                  className="banner_container"
                                >

                                  <div
                                    _ngcontent-ng-c2651688636=""
                                    className="live_score"
                                  >
                                    <div _ngcontent-ng-c2651688636="">



                                    </div>
                                  </div>

                                  <div
                                    _ngcontent-ng-c2651688636=""
                                    className="lmt_scoreCard"
                                  >
                                    <div
                                      _ngcontent-ng-c2651688636=""
                                      id="lmt_widget5"
                                      className="scoreboard"
                                      hidden=""
                                    >
                                      <div
                                        _ngcontent-ng-c2651688636=""
                                        className="sr-widget sr-widget-5"
                                      />
                                    </div>
                                  </div>


                                </div>

                              </div>
                            </app-market-details-banner-panel>
                            <div
                              _ngcontent-ng-c2293917314=""
                              className="marketdetails-odds"
                            >
                              <div
                                _ngcontent-ng-c2293917314=""
                                className="market-details-list"
                              >


                              </div>
                            </div>
                          </div>
                        </div>
                      </app-market-details-panel>
                    </div>
                    <app-bet-panel _ngcontent-ng-c446932153="" _nghost-ng-c57915473="">
                      <div
                        _ngcontent-ng-c57915473=""
                        id="betToggle"
                        className="bet_toggle"
                        style={{ display: "block" }}
                      >

                        <div _ngcontent-ng-c57915473="" hidden="">
                          <div _ngcontent-ng-c57915473="">
                            <div
                              _ngcontent-ng-c57915473=""
                              className="lmt_header_text"
                              hidden=""
                            >
                              Live Match Tracker
                              <div
                                _ngcontent-ng-c57915473=""
                                className="lmt_arrow rotate-back"
                              >
                                <i
                                  _ngcontent-ng-c57915473=""
                                  className="fa fa-chevron-down"
                                />
                              </div>
                            </div>
                            <div _ngcontent-ng-c57915473="" hidden="">
                              <div
                                _ngcontent-ng-c57915473=""
                                className="lmt_container lmt_show"
                                hidden=""
                              >
                                <div
                                  _ngcontent-ng-c57915473=""
                                  className="widgets widgets_1"
                                >
                                  <div
                                    _ngcontent-ng-c57915473=""
                                    id="lmt_widget1"
                                    className="lmt_widget1_cls"
                                  >
                                    <div
                                      _ngcontent-ng-c57915473=""
                                      className="sr-widget sr-widget-4"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <app-betslip-header-tabs
                          _ngcontent-ng-c57915473=""
                          _nghost-ng-c1964660414=""
                        >
                          <div _ngcontent-ng-c1964660414="" className="header_tabs_main">
                            <div
                              _ngcontent-ng-c1964660414=""
                              className="header_tabs_betslip selection"
                            >
                              <div
                                _ngcontent-ng-c1964660414=""
                                className="header_tabs_betslip_img"
                              />
                              <div
                                _ngcontent-ng-c1964660414=""
                                className="betSlip_section"
                              >
                                Betslip {/**/}
                              </div>
                            </div>
                            <div
                              _ngcontent-ng-c1964660414=""
                              className="bet_partition_line"
                            />
                            <div
                              _ngcontent-ng-c1964660414=""
                              className="header_tabs_bethistory unselection"
                            >
                              <div
                                _ngcontent-ng-c1964660414=""
                                className="header_tabs_bethistory_img"
                              />
                              <div _ngcontent-ng-c1964660414="">Bet History</div>
                            </div>
                            <div
                              _ngcontent-ng-c1964660414=""
                              className="bet_partition_line"
                            />

                          </div>
                        </app-betslip-header-tabs>
                        <div _ngcontent-ng-c57915473="" className="bet-toggle_content">

                          <div _ngcontent-ng-c57915473="" className="bet_update">

                          </div>
                          <div
                            _ngcontent-ng-c57915473=""
                            id="commonbetslips"
                            className="commonbetcontainer"
                            style={{ display: "none" }}
                          >
                            <app-single-bet-container
                              _ngcontent-ng-c57915473=""
                              _nghost-ng-c3749085623=""
                            >
                              <div
                                _ngcontent-ng-c3749085623=""
                                className="tab-content betslip_tabcontent"
                              >
                                <div
                                  _ngcontent-ng-c3749085623=""
                                  className="tab-pane fade in active"
                                >
                                  <div
                                    _ngcontent-ng-c3749085623=""
                                    className="no_bet_message"
                                  >

                                    Bet slip is empty.
                                  </div>



                                </div>
                              </div>
                            </app-single-bet-container>
                            <div _ngcontent-ng-c57915473="" className="multiBetslips">
                              <app-multi-bet-container
                                _ngcontent-ng-c57915473=""
                                _nghost-ng-c258763210=""
                              >
                                <div
                                  _ngcontent-ng-c258763210=""
                                  className="tab-content multibetslip_tabcontent"
                                >
                                  <div
                                    _ngcontent-ng-c258763210=""
                                    className="tab-pane fade in active"
                                  >


                                  </div>
                                </div>
                              </app-multi-bet-container>
                            </div>

                          </div>
                          <div
                            _ngcontent-ng-c57915473=""
                            className="commonbetcontainer"
                            style={{ display: "none" }}
                          >
                            <app-cash-out
                              _ngcontent-ng-c57915473=""
                              _nghost-ng-c2501850290=""
                              hidden=""
                            >

                              <div
                                _ngcontent-ng-c2501850290=""
                                className="no_bet_message"
                              >

                                Cash Out is empty
                              </div>


                            </app-cash-out>
                          </div>
                          <div
                            _ngcontent-ng-c57915473=""
                            className="commonbetcontainer"
                            style={{ display: "none" }}
                          >
                            <app-bet-history
                              _ngcontent-ng-c57915473=""
                              _nghost-ng-c1973779808=""
                              hidden=""
                            >
                              <div
                                _ngcontent-ng-c1973779808=""
                                className="no_bet_message"
                              >

                                Bet history is empty.
                              </div>


                            </app-bet-history>


                          </div>
                        </div>
                      </div>
                    </app-bet-panel>
                    <app-sports-menu-panel
                      _ngcontent-ng-c446932153=""
                      _nghost-ng-c2535481891=""
                    >
                      <div _ngcontent-ng-c2535481891="" className="menu_header">
                        <div
                          _ngcontent-ng-c2535481891=""
                          className="menu_sport unselection"
                        >
                          <div _ngcontent-ng-c2535481891="" className="top_adjust">
                            <div
                              _ngcontent-ng-c2535481891=""
                              className="icon sports_icon"
                            />
                            <div _ngcontent-ng-c2535481891="">All Sports</div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c2535481891="" className="menu_live selection">
                          <div _ngcontent-ng-c2535481891="" className="top_adjust">
                            <div
                              _ngcontent-ng-c2535481891=""
                              className="icon live_icon"
                            />
                            <div _ngcontent-ng-c2535481891="">Sports</div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ng-c2535481891=""
                          className="bet_menu unselection"
                        >
                          <div _ngcontent-ng-c2535481891="" className="bet_slip">


                            <div
                              _ngcontent-ng-c2535481891=""
                              className="icon bet_slip_icon"
                            />
                          </div>
                          <div _ngcontent-ng-c2535481891="" className="top_adjust_menu">
                            <div _ngcontent-ng-c2535481891="">Betslip</div>
                          </div>
                        </div>

                        <div
                          _ngcontent-ng-c2535481891=""
                          className="menu_search unselection"
                        >
                          <div _ngcontent-ng-c2535481891="" className="top_adjust">
                            <div
                              _ngcontent-ng-c2535481891=""
                              className="icon search_icon"
                            />
                            <div _ngcontent-ng-c2535481891="">Search</div>
                          </div>
                        </div>
                      </div>
                    </app-sports-menu-panel>
                  </div>
                </div>
              </app-game>
              <app-buy-in-popup
                _ngcontent-ng-c611545987=""
                _nghost-ng-c442056357=""
                hidden=""
              >
                <div _ngcontent-ng-c442056357="" className="popup-back-drop">
                  <div
                    _ngcontent-ng-c442056357=""
                    className="popupbase animated zoomIn animated_overwrite"
                  >
                    <div _ngcontent-ng-c442056357="" className="popup-header-div">
                      <span _ngcontent-ng-c442056357="" className="textunderline">
                        Withdraw
                      </span>
                      <span
                        _ngcontent-ng-c442056357=""
                        className="textunderline"
                        hidden=""
                      >
                        Balance
                      </span>
                      <button _ngcontent-ng-c442056357="" className="closebutton" />
                    </div>

                    <div _ngcontent-ng-c442056357="" className="popup-footer-div">
                      <div _ngcontent-ng-c442056357="" className="buttons">
                        <button _ngcontent-ng-c442056357="" className="popUpOk">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-buy-in-popup>
              <app-loadingcomponent
                _ngcontent-ng-c611545987=""
                _nghost-ng-c3435165816=""
                hidden=""
              >

              </app-loadingcomponent>
              <app-common-popup
                _ngcontent-ng-c611545987=""
                _nghost-ng-c2361697789=""
                hidden=""
              >

              </app-common-popup>
              <app-disconnect-popup
                _ngcontent-ng-c611545987=""
                _nghost-ng-c2916481407=""
                hidden=""
              >
                <div
                  _ngcontent-ng-c2916481407=""
                  className="main_disconnect_outer_div animated fadeIn faster"
                >
                  <div _ngcontent-ng-c2916481407="" className="disconnect_popup_base">
                    <div
                      _ngcontent-ng-c2916481407=""
                      className="disconnect_popup_content animated fadeInDown fast"
                    >
                      <div _ngcontent-ng-c2916481407="" className="alert_img" />
                      <div
                        _ngcontent-ng-c2916481407=""
                        className="disconnect_popup_content_txt"
                      >
                        Reconnecting you shortly!...
                      </div>
                    </div>
                  </div>
                </div>
              </app-disconnect-popup>
              <app-preloader
                _ngcontent-ng-c611545987=""
                _nghost-ng-c4106472736=""
                hidden=""
              >
                <div _ngcontent-ng-c4106472736="" className="preloader_bg">
                  <div _ngcontent-ng-c4106472736="" className="part">
                    <div _ngcontent-ng-c4106472736="" className="loader" />
                  </div>
                </div>
              </app-preloader>
            </app-root>


          </div>
        </app-game-iframe>


      </div>






    </>
  )
}

export default Sportbook
