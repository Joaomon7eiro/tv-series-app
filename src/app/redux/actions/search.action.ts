const search = '[search]';

export const searchActions = {
  SEARCH_BY_NAME: `${search} SEARCH BY NAME`,
  SEARCH_BY_NAME_SUCCESS: `${search} SEARCH BY NAME SUCCESS`,
  SEARCH_BY_NAME_ERROR: `${search} SEARCH BY NAME ERROR`,
  UPDATE_SEARCH: `${search} UPDATE SEARCH`,
};

export const searchByName = (name: string) => ({
  type: searchActions.SEARCH_BY_NAME,
  payload: name
});


export const updateSearchCollection = (data: any) => ({
  type: searchActions.UPDATE_SEARCH,
  payload: data
});

