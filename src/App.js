import React, { useEffect, useState } from "react";
import './Components/style.css';
import { AnimeList } from "./Components/AnimeList";

function App() {

  const [search,setSearch]=useState('Naruto')
  const [animeData,setAnimeData]=useState();
  const [animeInfo,setAnimeInfo]=useState()

  const getData=async()=>{
      const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      const resData= await res.json();
      setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])

  return (
    <>
        <div className="header">
          <h1>Lista de Anime</h1>
          <div className="search-box">
              <input type="search" placeholder="Pesquisar..." 
              onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>

        <div className="container">
          <div className="anime-row">
            <h2 className="text-heading">Anime</h2>
            <div className="row">
                <AnimeList 
                animelist={animeData}
                setAnimeInfo={setAnimeInfo}
                />
            </div>
            
          </div>
        </div>
    </>
  );
}

export default App;