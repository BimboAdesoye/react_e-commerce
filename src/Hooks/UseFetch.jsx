// import React from 'react'
import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  let fetcher = async () => {
    try {
      setLoading(true);
      let fetchedData = await fetch(url);
      let response = await fetchedData.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetcher();
  }, []);

  return {data, loading, error};
};

export default UseFetch;
