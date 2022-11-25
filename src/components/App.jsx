import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div>
      <main>
        {/* <Navbar /> */}
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Sidebar />
        <Footer />
      </main>
    </div>
  );
};

export default App;
