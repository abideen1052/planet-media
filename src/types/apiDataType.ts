export type APIDataType = {
  params?: any;
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  endPoint: string;
  paramsType?: 'default' | 'formData';
};
