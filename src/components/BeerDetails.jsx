import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const BeerDetails = () => {
  const [beer, setBeer] = useState();
  const { Id } = useParams();

  const fetchBeer = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${Id}`
    );
    setBeer(response.data);
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    beer && (
      <div style={{width: '50vw'}}>
        <Header />
        <h1>Beer details</h1>
        <img style={{ height: "250px" }} src={beer.image_url} alt={beer._id} />
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>{beer.name}</h2>
          <span>{beer.first_brewed}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h4>{beer.tagline}</h4>
          <span>{beer.attenuation_level}</span>
        </div>
        <p>{beer.description}</p>
        <span>{beer.contributed_by}</span>
      </div>
    )
  );
};

export default BeerDetails;
