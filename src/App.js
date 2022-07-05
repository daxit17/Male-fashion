import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import Shop from "./container/Shop/Shop";
import Blog from "./container/Blog/Blog";
import Pages from "./container/Pages/Pages";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Weblayout from "./component/Weblayout/Weblayout";
import Products from "./container/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/Shop"} component={Shop} exact />
        <Route path={"/Blog"} component={Blog} exact />
        <Route path={"/Pages"} component={Pages} exact />
        <Route path={"/About"} component={About} exact />
        <Route path={"/Contact"} component={Contact} exact />
        <Route path={"/weblayout"} exact component={Weblayout}/>
        <Route path={"/products"} exact component={Products}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
