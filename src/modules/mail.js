import MailAPI from '../api/mail.js';

export const mail = {

  state: {
    mailStatus: 0,
  },

  actions: {
    sendMail({
      commit,
    }, params) {
      commit('setMailStatus', 1);
      console.log(params);
      MailAPI.sendMail(params.name, params.mail, params.message)
        .then(() => {
          commit('setMailStatus', 2);
        })
        .catch(() => {
          commit('setMailStatus', 3);
        });
    },
  },

  mutations: {

    setMailStatus(state, status) {
      state.mailStatus = status;
    },
  },

  getters: {

    getMailStatus(state) {
      return state.mailStatus;
    },
  },
};
