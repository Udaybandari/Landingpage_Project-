
import Faqs from "./components/Sections/Faqs"
import Features from "./components/Sections/Features"
import Header from "./components/Sections/Header"
import Hero from "./components/Sections/Hero"
import Pricing from "./components/Sections/Pricing"


function App() {
 
  return (
<main className="overflow-hidden">
  <Header />
  <Hero className='bg-s1'/>
  <Features/>
  <Pricing/>
   <Faqs/>
</main>
  )
}

export default App
