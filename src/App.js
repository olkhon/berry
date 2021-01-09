import React,{ useState, useEffect } from "react";
import './App.css';
import Card from "./Card";
import axios from "axios";


function App() {

  let [berry, setBerry] = useState("");


useEffect( ()=> {
  axios
  .get("https://pokeapi.co/api/v2/berry/1")
  .then( (response) => {
    setBerry({
      id: response.data.id, name: response.data.name
    })
  })
  .catch( (error) => {
    console.log(error);
  })
}, []);

  return (
    <div className="App">
      {berry ? <Card id={berry.id} name={berry.name}  /> : null}
    </div>
  );
}

export default App;
