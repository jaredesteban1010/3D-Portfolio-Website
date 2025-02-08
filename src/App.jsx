import { BrowserRouter } from "react-router-dom";
import {About, Experience, Hero,Navbar, Tech, Works, StarsCanvas, Footer} from './components';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = ()=> {

  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
                <StarsCanvas />
            </div>
            <Footer />
        </div>
        <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
