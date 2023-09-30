import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProjectGrid from './components/ProjectGrid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

const App = () => {
  const brandName = "Projects";
  const pageSize = 10;

  const [progress, setProgress] = useState(0);

  return (
    <>
       <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
            </div>
      <Router>
        <div>
        <NavBar/>
        </div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
        <div className='my-5'>
        <Routes>
          <Route exact path="/" element={<ProjectGrid setProgress={setProgress} brandName={brandName}/>}></Route>
        </Routes>
        </div>
        <Footer brandName={brandName}/>
      </Router>
    </>
  )
}

export default App;