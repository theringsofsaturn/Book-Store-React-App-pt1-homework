import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNavbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import LatestRelease from "./components/LatestRelease"

function App() {
  return (
    <div className="App">
      <MyNav />
      <Jumbotron />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
