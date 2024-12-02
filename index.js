import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_7Oq8SXPviECk03Ftd5vtz3CuiT4n'
  }
};
