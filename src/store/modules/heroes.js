import HTTP from '../../api/http-common';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
  hasResolved: false,
};

const getters = {
  heroesList: state => state.data,
  tankList: state => state.data.filter(hero => hero.role === 'Tank'),
  offenseList: state => state.data.filter(hero => hero.role === 'Offense'),
  defenseList: state => state.data.filter(hero => hero.role === 'Defense'),
  supportList: state => state.data.filter(hero => hero.role === 'Support'),
  isReady: state => !state.isLoading && state.hasResolved,
};

const mutations = {
  setHeroesList(state, data) {
    state.data = data;
  },
  setError(state, error) {
    state.error = error;
  },
  setIsLoading(state, isLoadingState) {
    state.isLoading = isLoadingState;
  },
  setHasResolved(state, hasResolvedState) {
    state.hasResolved = hasResolvedState;
  },
};

const actions = {
  fetchHeroes({ commit }) {
    commit('setIsLoading', true);
    commit('setHasResolved', false);
    HTTP.get('/v1/heroes')
      .then((res) => {
        commit('setHeroesList', res.data);
        commit('setIsLoading', false);
        commit('setHasResolved', true);
      })
      .catch((e) => {
        commit('setError', e.message);
        commit('setIsLoading', false);
        commit('setHasResolved', true);
      });
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
