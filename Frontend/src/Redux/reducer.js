const initState = {
  AllProducts: [],
  totalPages: 1,
  isLoading: false,
  isError: false,
  currProduct: {},
  debouncingArr: [],
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
