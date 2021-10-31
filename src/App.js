import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import OrderPlaced from "./Pages/OrderPlaced/OrderPlaced";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyOrder from "./Pages/MyOrder/MyOrder";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import AddEvent from "./Pages/AddEvent/AddEvent";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/placeorder/:id">
            <OrderPlaced />
          </PrivateRoute>
          <PrivateRoute exact path="/myorder">
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute exact path="/manage-orders">
            <ManageOrder />
          </PrivateRoute>
          <PrivateRoute exact path="/addevent">
            <AddEvent />
          </PrivateRoute>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
