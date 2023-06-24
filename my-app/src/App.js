// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript,theme } from '@chakra-ui/react';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Upload from './components/Upload';
import Videos from './components/Videos';
import Signup from './components/Signup';
import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <>
    <ChakraProvider theme={theme}>

    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
  </Router>
  </ChakraProvider>
  </>
  );
}

export default App;
