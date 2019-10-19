import HTTP from '../../api/http-common';

// inital state
const initialState = {
  data: [],
  error: '',
};

const getters = {
  heroesList: state => state.data,
};

const actions = {
  fetchHeroes({ commit }) {
    HTTP.get('/v1/heroes')
      .then((res) => {
        commit('setHeroesList', res.data);
      })
      .catch((e) => {
        commit('setError', e.message);
      });
  },
};

const mutations = {
  setHeroesList(state, data) {
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
  actions,
  mutations,
};
