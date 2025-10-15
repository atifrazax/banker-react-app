import './App.css'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Next from './components/Next.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Gallery from './components/Gallery.jsx'
import Works from './components/Works.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
export default function App() {

  return (
    <>      
    <Loader />
    <Navbar />
    <Next />
    <About />
    <Team />
    <Gallery />
    <Works />
    <Services />
    <Testimonials />
    <Pricing />
    <Blogs />
    <Contact />
    <Footer />
  </>
  )
}
