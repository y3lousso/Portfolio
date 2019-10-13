import axios from 'axios';

export default {

  sendMail(name, mail, message) {
    return axios.post(`${process.env.VUE_APP_BACKEND_URL}/mail`, {
      name,
      mail,
      message,
    });
  },

};
