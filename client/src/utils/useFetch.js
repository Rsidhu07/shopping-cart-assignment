import { useEffect, useState } from "react";

const useFetch = (url,type) => {

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const myFetch = async () => {
      try {
        const dataStoredInLocal = localStorage.getItem(type);
        if(dataStoredInLocal){
          setApiData(JSON.parse(dataStoredInLocal));
        } else{
          
          const res = await fetch(url);
          const resData = await res.json();
          localStorage.setItem(type, JSON.stringify(resData));
          setApiData(resData);
        }
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