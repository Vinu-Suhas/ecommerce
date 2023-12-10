import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const bucket = createContext();

function CreateStore(props) {
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/data")
    //   .then(function (response) {
    //     console.log(response.data);
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  });
  const [data, setData] = useState([]);
  return (
    <>
      <bucket.Provider value={{ data, setData }}>
        {props.children}
      </bucket.Provider>
    </>
  );
}

export { CreateStore };
