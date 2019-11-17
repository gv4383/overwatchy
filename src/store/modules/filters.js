// inital state
const initialState = {
  data: [
    'tank',
    'offense',
    'defense',
    'support',
  ],
};

const getters = {
  filtersList: state => state.data,
};

const mutations = {
  setFilters(state, data) {
    state.data = data;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
};
