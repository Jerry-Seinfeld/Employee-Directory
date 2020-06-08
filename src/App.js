import axios from "axios";

import Table from "./components/Table";

import Navbar from "./components/Navbar";

import React, { useState, useEffect, useMemo } from "react";

import "./App.css";

function App() {

  const [data, setData] = useState([]);

  //provides images
  useEffect(() => {
    (async () => {
      const result = await axios('https://randomuser.me/api/?results=50');
     
      setData(result.data.results);
     
      console.log(result.data)
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        
        Header: "Information",
        
        columns: [
          {
            Header: "Image",
            accessor: "picture.large",
            Cell: ({ cell: { value } }) => {
              return (
                <>
                  {<img src={value} alt="profile pic"/>}
                </>
              );
            }          
          },
          
          {
            Header: "First Name",
            accessor: "name.first",
          },
          
          {
            Header: "Last Name",
            accessor: "name.last"
          },

          {
            Header: "Phone Number",
            accessor: "phone"
          },
        
        ]
      },
    ],
    []
  );

  
  
  return (

        <div className="App">
      <Navbar />
        <Table columns={columns} data={data} />
      </div>
      
  );
}

export default App;