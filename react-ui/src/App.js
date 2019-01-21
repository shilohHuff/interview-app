import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FilterContainer from './components/FilterContainer/FilterContainer'
import VisibleProductsList from './containers/VisibleProductsList'
import './App.css';

//Root React component. It instatiates all the high level compoenents of the application.
const App = () => (
  <div className="app-root">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Interview Application</title>
    </Helmet>
    <Header/>
    <FilterContainer />
    <VisibleProductsList />
    <Footer/>
  </div>
)

export default App