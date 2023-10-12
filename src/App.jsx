import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import Alpha from "./pages/NavbarComponent/Alpha"

import { Provider } from "react-redux"

import store from './Redux/store';
import Elections from "./pages/NavbarComponent/Elections"
import Worldcup from "./pages/NavbarComponent/Worldcup"
import World from "./pages/NavbarComponent/World"
import Tech from "./pages/NavbarComponent/Tech"
import Sports from "./pages/NavbarComponent/Sports"
import Explainer from "./pages/NavbarComponent/Explainer"
import Astro from "./pages/NavbarComponent/Astro"
import Health from "./pages/NavbarComponent/Health"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/alpha' component={Alpha} />
            <Route exact path='/worldcup' component={Worldcup} />
            <Route exact path='/elections' component={Elections} />
            <Route exact path='/world' component={World} />
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/tech' component={Tech} />
            <Route exact path='/explainer' component={Explainer} />
            <Route exact path='/astro' component={Astro} />
            <Route exact path='/health' component={Health} />
            
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Regsiter} />
            <Route exact path='/details/:id' component={DetailsPages} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/create' component={Create} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  )
}
export default App
