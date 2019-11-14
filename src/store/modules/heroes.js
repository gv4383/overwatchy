import HTTP from '../../api/http-common';

// inital state
const initialState = {
  data: [],
  error: '',
};

const getters = {
  heroesList: state => state.data,
  tankList: state => state.data.filter(hero => hero.role === 'Tank'),
  offenseList: state => state.data.filter(hero => hero.role === 'Offense'),
  defenseList: state => state.data.filter(hero => hero.role === 'Defense'),
  supportList: state => state.data.filter(hero => hero.role === 'Support'),
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
