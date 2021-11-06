import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Pages/Home/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Home/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";
// import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking/Booking";
import ManageOrders from "./ManageOrders/ManageOrders";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
// import AddOffers from "./Pages/AddOffers/AddOffers";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route>
              <AddOffers></AddOffers>
            </Route> */}
            <Route path="/booking/:serviceid">
              <Booking></Booking>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/adminPanel">
              <AdminPanel></AdminPanel>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
