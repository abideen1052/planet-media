import { APIDataType } from '../types/apiDataType';

export const apiManager = async ({
  params,
  method = 'POST',
  endPoint = '',
  paramsType = 'default',
}: APIDataType) => {
  const apiURL = endPoint;
  const normalizedMethod = method.toUpperCase();

  const headers: Record<string, string> = {
    Accept: 'application/json',
  };

  if (paramsType !== 'formData') {
    headers['Content-Type'] = 'application/json';
  }

  const fetchParams: RequestInit = {
    method: normalizedMethod,
    headers,
  };

  if (
    ['POST', 'PUT', 'PATCH'].includes(normalizedMethod) &&
    params !== undefined
  ) {
    fetchParams.body =
      paramsType === 'formData' ? params : JSON.stringify(params);
  }

  try {
    const response = await fetch(apiURL, fetchParams);

    const data = await response.json();

    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        message: data?.message || 'Server Error',
        data,
      });
    }

    return data;
  } catch (error) {
    return Promise.reject({
      message: 'Network Error',
      error,
    });
  }
};
