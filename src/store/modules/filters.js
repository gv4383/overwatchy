// inital state
const initialState = {
  data: [
    'Tank',
    'Offense',
    'Defense',
    'Support',
  ],
  error: '',
};

const getters = {
  filtersList: state => state.data,
};

const mutations = {
  setFilters(state, data) {
    state.data = data;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
};
