import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[linear-gradient(to_bottom,_#000000,_#0a0a60)]">
       
          <Navbar />
          <Hero /> 
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
    
    </>
  );
}

export default App;
