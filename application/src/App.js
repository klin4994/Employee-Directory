import React, { useState, useEffect, useMemo} from "react";
import axios from "axios";

import Table from "./components/Table";

function App() {
    // data state to store the randomly generated API data
    const [data, setData] = useState([]);
  
    // useEffect method to set the state for data once the component is mounted
    useEffect(() => {
      (async () => {
        // query to retrieve sets of data for 20 different users
        const result = await axios("https://randomuser.me/api/?results=20");
        setData(result.data.results)
        console.log(result.data.results)
      })();
    }, []);
    // columns for the table
    const columns = useMemo(
        () => [
          {
            // Table header
            Header: "Employee Directory",
            // Table columns
            columns: [
              {
                Header: "First name",
                accessor: "name.first",  
              },
              {
                Header: "Last name",
                accessor: "name.last",  
              },
              {
                Header: "Gender",
                accessor: "gender"
              },
              {
                Header: "Phone number",
                accessor: "phone"
              },
              {
                Header: "Age",
                accessor: "dob.age"
              }
            ]
          },
        ],
        []
      );

    return (
        <div className="App">
        <Table columns={columns} data={data} />
        </div>
    );
}
  
  export default App;