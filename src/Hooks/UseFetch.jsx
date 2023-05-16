// import React from 'react'
import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetcher = async () => {
    try {
      setLoading(true);
      let fetchedData = await fetch(url);
      let response = await fetchedData.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetcher();
  }, []);

  return {data, loading};
};

export default UseFetch;
