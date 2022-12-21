import './App.css';
import Home from './Home'
import Header from './Header'
import React from 'react';
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
    

    <BrowserRouter>
    <Header/>
      <Routes>
     



          <Route exact path='/' element={<Home/>} />
          <Route path='/search' element={<SearchPage/>} />
            {/* 
              <Switch>

                {/* 
                <Route path="/">
                  <Home/>
                </Route>
              

                {/* /search */}
            {/* 
                <Route path="/search">
                  <SearchPage></SearchPage>
                </Route>
              </Switch>
            */}

          

      </Routes>
      </BrowserRouter>
    <Footer/>


     {/* Home */}

        {/* Header */}

        {/* Banner */}
            {/* Search */}

        {/* Cards */}

        {/* Footer */}

      {/* SearchPage */}
        {/* Header */}

        {/* ... */}  

    </div>
  );
}

export default App;
