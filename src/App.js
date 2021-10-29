import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";

function App() {
  return (
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
