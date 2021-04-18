import React, { useState, useEffect} from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
    // data state to store the randomly generated API data
    const [data, setData] = useState([]);
  
    // useEffect method to set the state for data once the component is mounted
    useEffect(() => {
      (async () => {
        const result = await axios("https://randomuser.me/api/?results=20");
        setData(result.data)
        console.log(result.data)
      })();
    }, []);
    
}
  
  export default App;