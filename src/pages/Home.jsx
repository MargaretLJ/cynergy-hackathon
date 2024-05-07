import { Fragment } from "react";
import Header from "../components/Header";
import { Hero } from "../components/HeroSection/Hero";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses/Courses";
import Choose from "../components/Choose-us/Choose";
import Features from "../components/Features/Features";
import Freecourse from "../components/Free-course/Freecourse";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <Courses />
      <Choose />
      <Features />
      <Freecourse/>
      <Testimonials/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
