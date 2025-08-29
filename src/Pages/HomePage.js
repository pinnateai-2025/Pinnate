import About from "../components/AboutUs/About";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Choose from "../components/WhyChooseUs/Choose";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Choose />
      <Portfolio />
      <About />
    </div>
  )
}

export default HomePage;