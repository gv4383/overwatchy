// inital state
const initialState = {
  data: [],
};

const getters = {
  heroesList: state => state.data,
};

export default {
  namespaced: true,
  initialState,
  getters,
};
