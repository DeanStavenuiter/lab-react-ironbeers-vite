import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    //axios
    const response = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      newBeer
    );

    //fetch
    // const response = await fetch(
    //   "https://ih-beers-api2.herokuapp.com/beers/new",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newBeer),
    //   }
    // );
    // const parsed = await response.json();
    // console.log(parsed);

    console.log(response);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div>
      <img src="src/assets/random-beer.png" alt="random beer" />
      <Header />
      <h1>Create a new beer</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: '100%'
        }}
      >
        <label style={{textAlign: 'left', width: '100%'}}>
          Name :
          <input
          style={{marginLeft: ''}}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          Tagline :
          <input
            type="text"
            value={tagline}
            onChange={(event) => setTagline(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          {" "}
          Description :
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          {" "}
          first brewed :
          <input
            type="text"
            value={firstBrewed}
            onChange={(event) => setFirstBrewed(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          {" "}
          brewers Tips :
          <input
            type="text"
            value={brewersTips}
            onChange={(event) => setBrewersTips(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          Attenuation level :
          <input
            type="number"
            value={attenuationLevel}
            onChange={(event) => setAttenuationLevel(event.target.value)}
          />
        </label>
        <label style={{textAlign: 'left', width: '100%'}}>
          {" "}
          Contributed by :
          <input
            type="text"
            value={contributedBy}
            onChange={(event) => setContributedBy(event.target.value)}
          />
        </label>
        <button type="submit">create a new beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
