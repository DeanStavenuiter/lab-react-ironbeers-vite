import "./App.css";
import  HomePage  from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:Id" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="*" element={<HomePage />} /> 
      </Routes>
    </div>
  );
}

export default App;
