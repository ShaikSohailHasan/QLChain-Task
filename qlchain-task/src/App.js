import "./styles.css";
import NavBarMain from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import PriceTracker from "./Components/PriceTracker";


export default function App() {
  return (
    <div className="App">
      <NavBarMain></NavBarMain>
      <MainPage></MainPage>
       <PriceTracker></PriceTracker>

    </div>
  );
}
