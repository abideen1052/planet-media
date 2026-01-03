import { useCallback, useState } from 'react';
import { apiManager } from '../../api';
import { APIDataType } from '../../types/apiDataType';

export const useFetch = () => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const makeRequest = useCallback(async (config: APIDataType) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiManager(config);
      setData(res);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, makeRequest };
};
