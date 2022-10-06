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
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store";
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from "./admin-panel/components/Layout";
import Category_Admin from "./admin-panel/container/category/Category_Admin";
import Products_Admin from "./admin-panel/container/products/Products_Admin";
import Categories from "./container/Categories/Categories";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <PublicRouting path={"/"} component={Home} exact />
              <PrivateRouting path={"/Products"} component={Products} exact />
              <PublicRouting path={"/Blog"} component={Blog} exact />
              <PublicRouting path={"/About"} component={About} exact />
              <PublicRouting path={"/Contact"} component={Contact} exact />
              <PublicRouting path={"/Login"} component={Login} restricted={true} exact />
              <PrivateRouting path={"/categories"} component={Categories} exact />
              <Layout>
                <PrivateRouting path={"/category_admin"} component={Category_Admin} exact />
                <PrivateRouting path={"/products_admin"} component={Products_Admin} exact />
              </Layout>
            </Switch>
            <Footer />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
