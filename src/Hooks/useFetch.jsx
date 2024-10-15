import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(api);
      const response = await result.json();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [api]);

  return [isLoading,error,data];
};
export default useFetch;
