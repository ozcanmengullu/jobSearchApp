import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobList: [],
    total: 0,
    currentPage: 1,
    limit: 5,
    hasNextPage: false,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL
  },
  mutations: {
    SET_JOB_LIST(state, data) {
      state.jobList = data;
    },
    SET_TOTAL(state, total) {
      state.total = total;
    },
    SET_HAS_NEXT_PAGE(state, hasNextPage) {
      state.hasNextPage = hasNextPage;
    },
    SET_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
  },
  actions: {
    fetchJobs({ commit, state }) {
      axios
        .get(`http://localhost:3000/joblist?_page=${state.currentPage}&_limit=${state.limit}`)
        .then((response) => {
          commit('SET_JOB_LIST', response.data);
          commit('SET_TOTAL', response.headers['x-total-count']);
          commit('SET_HAS_NEXT_PAGE', state.total > state.currentPage * state.limit);
        })
        .catch((error) => {
          alert('Error fetching jobs:', error);
        });
    },
  },
});
