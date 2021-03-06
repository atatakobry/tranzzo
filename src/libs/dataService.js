import axios from 'axios';

export default {
  getData() {
    return axios
      .get('https://baconipsum.com/api/', {
        params: {
          'type': 'all-meat',
          'sentences': 10
        },
        crossDomain: true
      })
      .then(response => response.data)
      .then(data => data[0].match(/\S[^.!?]*[.!?]/g))
      .then(sentences => sentences.map(sentence => sentence.match(/[^.,!?\-\s]*[a-z]/g).join('').toLowerCase()));
  },

  saveData(data) {
    return axios
      .post('/api/data', data)
      .then(response => response.data);
  },

  loadData() {
    return axios
      .get('/api/data')
      .then(response => response.data);
  }
};