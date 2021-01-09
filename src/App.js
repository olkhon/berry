import React,{ useState, useEffect } from "react";
import './App.css';
import Card from "./Card";
import axios from "axios";


function App() {

  let [berry, setBerry] = useState("");
  let [firminess, setFerminess] = useState("");
  let [flavor, setFlavor] = useState('');


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


useEffect ( () => {
axios
  .get("https://pokeapi.co/api/v2/berry-firmness/1")
  .then((response) => {
    setFerminess( {
      id: response.data.id, name: response.data.name
    })
  })
  .catch((error) => {
    console.log(error);
  })
}, []);


  useEffect( () => {
    axios
      .get("https://pokeapi.co/api/v2/berry-flavor/1")
      .then((response) => {
        setFlavor({
          id: response.data.id, name: response.data.name
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      {berry ? <Card id={berry.id} name={berry.name}  /> : null}
      {firminess ? <Card id={firminess.id} name={firminess.name}  /> : null}
      {flavor ? <Card id={flavor.id} name={flavor.name}  /> : null}
    </div>
  );
}

export default App;
