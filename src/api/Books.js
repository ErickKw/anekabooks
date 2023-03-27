import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1";

export default {
  getBooksByKeyword(keyword) {
    const url = `${BASE_URL}/volumes?q=${keyword}`;
    return axios.get(url);
  },
};
