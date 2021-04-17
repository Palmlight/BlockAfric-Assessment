import React from "react"
import "./App.scss"
import { Route, Switch } from "react-router-dom"
import Index from "./pages"
import Activity from "./pages/Activity"
import Earn from "./pages/Earn"
import Market from "./pages/Market"
import Wallet from "./pages/Wallet"
import Layout from "./components/Layout"

const App = () => {
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/" component={Index} exact={true} />
          <Route path="/activity" component={Activity} />
          <Route path="/earn" component={Earn} />
          <Route path="/market" component={Market} />
          <Route path="/wallet" component={Wallet} />
        </Layout>
      </Switch>
    </>
  )
}

export default App
