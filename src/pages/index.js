import React from "react"
import Layout from "../components/layout/Layout"

import Hero from "../components/hero/Hero"
import Summary from "../components/summary/Summary"
import Projects from "../components/projects/Projects"
import Appl from "../components/app/Appl"

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"
//import App from "../components/app/app"

export default () => (
  <div className="App">
    <Layout>
      <Appl />
      <Hero />
      <hr />
      <Summary />
      <hr />
      <Projects />
      <hr />
    </Layout>
  </div>
)
