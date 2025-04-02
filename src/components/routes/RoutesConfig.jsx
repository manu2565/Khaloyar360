import { Routes, Route } from "react-router-dom";
import Destopsuper from "../Destopsuper";
import Approot from "../Approot";
import Chartport from "../Chartport";
import Allcasino from "../Allcasino";
import Sloatcasino from "../Sloatcasino";
import Multiwilet from "../Multiwilet";
import Forgetpassword from "../Forgetpassword";
import Profile from "../AfterLogin/Account/Profile";
import Withdrow from "../AfterLogin/Account/Withdrow";
import AccountStatement from "../AfterLogin/Account/AccountStatement";
import Informations from "../AfterLogin/Account/Informations";

import Contactus from "../AfterLogin/Account/Contactus";
import Deposite from "../AfterLogin/Account/Deposite";
import Indiancasino from "../AfterLogin/Indiancasino";
import Inplay from "../AfterLogin/Inplay";
import Upcoming from "../AfterLogin/Inplay/Upcoming";
import Providers from "../Providers";
import Sportbook from "../AfterLogin/Sportbook";
import Scorecardclik from "../AfterLogin/Scoreboard/Scorecardclik";
import Incard from "../AfterLogin/Inplay/Incard";
import Menu from "../Footer/Menu";
import Clickchat from "../Footer/Clickchat";
import Multiid from "../AfterLogin/Account/Multiid";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Destopsuper />} />
      <Route path="/dashboard" element={<Destopsuper />} />
      <Route path="/all-casino" element={<Allcasino />} />
      <Route path="/approot" element={<Approot />} />
      <Route path="/slot-game" element={<Sloatcasino />} />
      <Route path="/slots-game" element={<Sloatcasino />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<Forgetpassword />} />
      <Route path="/multi-ids-wallet" element={<Multiwilet />} />
      <Route path="/chartport" element={<Chartport />} />
      <Route path="/withdraw" element={<Withdrow />} />
      <Route path="/account-statement" element={<AccountStatement />} />
      <Route path="/information" element={<Informations />} />
      <Route path="/payment" element={<Deposite />} />
      <Route path="/contactUs" element={<Contactus />} />
      <Route path="/indian-casino" element={<Indiancasino />} />
      <Route path="/afterlogin" element={<Destopsuper />} />
      <Route path="/all-casinos" element={<Allcasino />} />
      <Route path="/" element={<Allcasino />} />
      <Route path="/all-casinos" element={<Allcasino />} />
      <Route path="/providers" element={<Providers />} />
      {/* <Route path="/upcoming" element={<Upcoming />} /> */}
      <Route path="/Inplay" element={<Inplay />} />
      <Route path="/sport-book" element={<Sportbook />} />
      <Route path="/scorecard" element={<Scorecardclik />} />
      <Route path="/Incard" element={<Incard />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/chart" element={<Clickchat />} />
      <Route path="/mutli-media" element={<Multiid />} />


    </Routes>
  );
};

export default RoutesConfig;
