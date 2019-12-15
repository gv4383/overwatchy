// inital state
const initialState = {
  data: [
    'Tank',
    'Offense',
    'Defense',
    'Support',
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
