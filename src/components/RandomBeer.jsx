import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);
 

  const fetchBeer = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setRandomBeer(response.data);
    console.log("response randomBeer...",response.data)
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  useEffect(() => {
  }, [randomBeer]);

  return ( randomBeer &&
    <div>
      <h1>random beer</h1>
      <Header />
      <img style={{ height: "250px" }} src={randomBeer.image_url} alt={randomBeer._id} />
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>{randomBeer.name}</h2>
          <span>{randomBeer.first_brewed}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h4>{randomBeer.tagline}</h4>
          <span>{randomBeer.attenuation_level}</span>
        </div>
        <p>{randomBeer.description}</p>
        <span>{randomBeer.contributed_by}</span>
    </div>
  );
};

export default RandomBeer;
