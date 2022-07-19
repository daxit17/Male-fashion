import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Products from "./container/Products/Products";
import Login from "./container/Login/Login";
import Data from "./container/Data/Data";
import PrivateRouting from "./container/Routing/PrivateRouting";
import PublicRouting from "./container/Routing/PublicRouting";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PublicRouting path={"/"} component={Home} exact />
        <PrivateRouting path={"/Products"} component={Products} exact />
        <PublicRouting path={"/Blog"} component={Blog} exact />
        <PublicRouting path={"/About"} component={About} exact />
        <PublicRouting path={"/Contact"} component={Contact} exact />
        <PublicRouting path={"/Login"} component={Login} restricted={true} exact />
        <PrivateRouting path={"/Data"} component={Data} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
