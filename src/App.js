import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import SmallSection from "./Component/SmallSection/SmallSection";
import "./App.css";
import CreamSection from "./Component/CreamSection/CreamSection";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SmallSection />
      <CreamSection />
    </div>
  );
}

export default App;
