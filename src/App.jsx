import './App.css'
import Header from './components/header/Header'
import Home from '../src/components/home/Home'
import About from '../src/components/about/About'
import Skills from './components/skill/Skill'
/* import Services from './components/services/Services' */
import Qualification from './components/qualification/Qualification'
/* import Testimonials from './components/testimonials/Testimonials' */
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/contact/scrollup/Scrollup'
import Work from './components/work/Work'


function App() {
  
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        {/* <Testimonials /> */}
        <Work />
        <Contact />
        
      </main>
        <Footer />
        <Scrollup />
    </>
  )
}

export default App
