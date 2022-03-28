import React, {useState, useEffect} from 'react'

import Header from './components/header/Header';
import Content from './components/Content/Content';
import Footer from './components/footer/Footer';
 
//import { baseUrl, fetchData } from './api/fetchData';

const App = () => {
  // console.log(fetchData)

  return (
    <div className="App">
       <Header />
       <Content />
       <Footer />
    </div>
  );
}

export default App;
