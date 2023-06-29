import Banner from './components/banner/Banner';
import Featureas from './components/features/Features'
import Project from './components/projects/Project';
import Resume from './components/resume/Resume';
import Testimoinals from './components/testimoinals/Testimoinals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import FooterBottom from './components/footer/FooterBottom'
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
          <Navbar />
          <div className="max-w-screen-xl mx-auto">
         <Banner />
         <Featureas />
         <Project />
         <Resume />
         <Testimoinals />
         <Contact />
         <Footer />
         <FooterBottom />
       </div>
    </div>
  );
}


export default App;
