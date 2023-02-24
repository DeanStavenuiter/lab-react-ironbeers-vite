import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log("There was an error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = async (event) => {
    setSearchInput(event.target.value);
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`
    );
    setBeers(response.data)
  };

  return (
    <div>
      <h1>All Beers</h1>
      <img src="src/assets/beers.png" alt="beers"></img>
      <Header />
        <input style={{width: '50%', marginTop: '25px'}}
          placeholder="search some beers"
          value={searchInput}
          type="text"
          onChange={handleChange}
        />
      {beers.map((beer) => {
        return (
          <div className="beer" key={beer._id} style={{ display: "flex", justifyContent:'space-around', border: '1px solid black', borderRadius: '3px', padding: '25px', margin: '25px'}}>
            <img style={{ height: "250px"}} src={beer.image_url} alt="" />
            <div
              style={{ display: "flex", flexDirection: "column", maxWidth: '50vw'}}
            >
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
