import About from "../components/AboutUs/About";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Choose from "../components/WhyChooseUs/Choose";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Choose />
      <Portfolio />
      <About />
      <Testimonials />
    </div>
  )
}

export default HomePage;