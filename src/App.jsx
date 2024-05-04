import "./App.css";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import StudentTable from "./StudentTable";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <StudentTable />
        <Footer />
      </div>
    </>
  );
}

export default App;
