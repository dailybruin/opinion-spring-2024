import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import Playlist from './components/Playlist';
import Blurb from './components/Blurb';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-spring-2024")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App" style={{ backgroundColor: "#08091F" }}>
      <Header/>
      <ArticleCard>articles={data.articles}</ArticleCard>
      <Blurb></Blurb>
      <Playlist></Playlist>
      <Footer/>
    </div>
  );
}

export default App;
