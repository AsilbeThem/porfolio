import "./App.scss";
import { About, Footer, Header } from "./container";
import { Navbar } from "./components";
import Work from "./container/Works/Work";
import Skills from "./container/Skill/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
