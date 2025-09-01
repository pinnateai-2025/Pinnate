import About from "../components/AboutUs/About";
import FAQ from "../components/FAQ's/FAQ's";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Choose from "../components/WhyChooseUs/Choose";
import WorkTogether from "../components/WorkTogether/WorkTogether";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Choose />
      <Portfolio />
      <About />
      <Testimonials />
      <FAQ />
      <WorkTogether />
      <Footer />
    </div>
  )
}

export default HomePage;