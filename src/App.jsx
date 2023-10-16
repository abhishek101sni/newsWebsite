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

import { Provider } from "react-redux"
import store from './Redux/store';
import Elections from "./pages/NavbarComponent/Elections"
import Sports from "./pages/NavbarComponent/Sports"
import Education from "./pages/NavbarComponent/Education"
import Viralnews from "./pages/NavbarComponent/Viralnews"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/elections' component={Elections} />
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/viralnews' component={Viralnews} />


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
