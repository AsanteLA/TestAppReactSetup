import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface Bandprops {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: "The Beastie Boys",
    members: "Mike D, MCA, Ad-Rock",
    formed: 1979,
  },
  {
    name: "Wolfmother",
    members: "Andrew Stockdale, Hamish Rosser, Bobby Poulton",
    formed: 2004,
  },
  {
    name: "Cream",
    members: "Eric Clapton, Ginger Baker, Jack Bruce",
    formed: 1966,
  },
  {
    name: "Nirvana",
    members: "Kurt Cobain, Krist Novoselic, Dave Grohl",
    formed: 1987,
  },
];

function Welcome() {
  return <h1>The best music trios ever!</h1>;
}

class Band extends React.Component<Bandprops> {
  render() {
    const oneBand = this.props;
    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}
function BandList() {
  return (
    <div>
      {bandNames.map((oneBand) => (
        <Band {...oneBand} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
