const api = '[api]';

export const apiActions = {
  API_REQUEST: `${api} API REQUEST`,
};

interface ApiRequestParams<T> {
  method: string;
  url: string;
  body?: T;
  onSuccess: any;
  onError: any;
}

export const apiRequest = ({ method, url, body, onSuccess, onError }: ApiRequestParams<any>) => ({
  type: apiActions.API_REQUEST,
  payload: body,
  meta: {
    method,
    url,
    onSuccess,
    onError
  }
});