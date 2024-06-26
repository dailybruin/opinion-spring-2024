import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopArticleGrid from "./components/DesktopArticleGrid";
import MobileArticleGrid from "./components/MobileArticleGrid";
import ArticleCard from './components/ArticleCard';
import Playlist from './components/Playlist';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import Landing from "./components/Landing";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-spring-2024")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  if (data) {
    console.log("Data:", data);
  }

    if (isMobile) 
      {
        return data && (
          <div className="App" style={{ backgroundColor: "#08091F" }}>
            <Header/>
            <Landing landing={data.landing}/>
            <Blurb blurb_text={data.blurb[0].blurb_text}/>
            <Playlist playlist={data.playlist}/>
            <MobileArticleGrid articles={data.articles} />
            <Footer/>
          </div>
        );

      }

      else {
         //desktop
        return data && (
          <div className="App" style={{ backgroundColor: "#08091F" }}>
            <Header/>
            <Landing landing={data.landing}/>
            <Blurb blurb_text={data.blurb[0].blurb_text}/>
            <Playlist playlist={data.playlist}/>
            <DesktopArticleGrid articles={data.articles} />
            <Footer/>
          </div>
        );
      }
}

export default App;
