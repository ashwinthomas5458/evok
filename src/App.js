import React from 'react';
import Nav from './components/Nav';
import Cover from './components/Cover';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Nav/>
    <div className="main">
      <Cover/>
      <Body/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
