import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>

      <Header />
      <Banner />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Copyright />
      <ScrollToTop />
    </>
  );
}
