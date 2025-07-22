
import Download from "./components/Sections/Download"
import Faqs from "./components/Sections/Faqs"
import Features from "./components/Sections/Features"
import Footer from "./components/Sections/Footer"
import Header from "./components/Sections/Header"
import Hero from "./components/Sections/Hero"
import Pricing from "./components/Sections/Pricing"
import Testimonials from "./components/Sections/Testimonials"


function App() {
 
  return (
<main className="overflow-hidden">
  <Header />
  <Hero />
  <Features/>
  <Pricing/>
   <Faqs/>
   <Testimonials/>
   <Download/>
   <Footer/>
</main>
  )
}

export default App
