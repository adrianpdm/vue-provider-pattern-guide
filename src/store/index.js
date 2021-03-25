import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../lib/mockAxios'

Vue.use(Vuex)

const UserModule = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    userData: null,
    error: null,
  }),
  mutations: {
    setUserData(state, dataToSet) {
      state.userData = dataToSet;
      state.error = null;
    },
    setLoading(state, isLoading) {
      state.isLoading = !!isLoading;
    },
    setError(state, error) {
      state.error = error;
      state.userData = null;
    }
  },
  actions: {
    async getUserData({ commit }) {
      commit('setLoading', true);
      try {
        const res = await axios.get();
        commit('setUserData', res.data);
      } catch (e) {
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    user: UserModule,
  },
});
