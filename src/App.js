import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Navbar />
      <Home onSearch={handleSearch}/>
      <Main searchValue={searchValue}/>
      <Footer />
    </>
  )
}

export default App