const api = '[api]';

export const apiActions = {
  API_REQUEST: `${api} API REQUEST`,
};

interface ApiRequestParams {
  method: string;
  url: string;
  body?: any;
  onSuccess: string;
  onError: string;
}

export const apiRequest = ({
  method, url, body, onSuccess, onError,
}: ApiRequestParams) => ({
  type: apiActions.API_REQUEST,
  payload: body,
  meta: {
    method,
    url,
    onSuccess,
    onError,
  },
});
