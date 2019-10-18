// inital state
const initialState = {
  data: ['TEST'],
};

const getters = {
  heroesList: state => state.data,
};

export default {
  namespaced: true,
  state: initialState,
  getters,
};
