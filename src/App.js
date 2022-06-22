import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import Shop from "./container/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/Shop"} component={Shop}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
