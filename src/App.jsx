import Cards from "./component/Cards";
import About from "./component/About";
import Eyes from "./component/Eyes";
import Featured from "./component/Featured";
import Landing from "./component/Landing";
import Marquee from "./component/Marquee";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


const App = () => {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
