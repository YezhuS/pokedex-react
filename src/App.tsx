import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';
import Footer from "./components/footer";
import LoadingScreen from './components/loadingScreen';



function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <LoadingScreen />

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/items' element={<Items />} />
          <Route path='/' element={<Pokemons />} />

        </Routes>
          <Footer/>
      </div>
    </Router>


  );
}

export default App;
