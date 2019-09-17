import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burgerbuilder-react-57ab0.firebaseio.com/'
});

export default instance;