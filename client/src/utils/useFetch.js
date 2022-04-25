import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const myFetch = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(`error while fetching data from => ${url}`, error);
        setServerError(error);
        setIsLoading(false);
      }
    };
    myFetch();
  }, [url]);
  return { isLoading, apiData, serverError };

};

export default useFetch;