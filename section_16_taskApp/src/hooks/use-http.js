import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback( async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        //".url" is to make sure we pass an object with has a URL. 
        requestConfig.url, {
            method: requestConfig.method ? requestConfig.method: 'GET',
            headers: requestConfig.headers ? requestConfig.headers: {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body): null,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
      console.log(err);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  }
};

export default useHttp;