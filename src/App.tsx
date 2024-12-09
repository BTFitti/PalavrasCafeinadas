import { Header } from "./components/header";
import "./App.css";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Cafeteria } from "./components/cafeOnda";
import { Contacts } from "./components/contacts";

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <About/>
      <Cafeteria/>
      <Contacts/>
     
    </div>
  );
}

export default App;
