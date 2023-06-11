import Header from "../../components/Header";
import FeaturedSection from "../../components/FeaturedSection";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
function Home() {
  return (
    <div>
      <Header />
      <FeaturedSection />
      <div id="content">
        <About />
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
