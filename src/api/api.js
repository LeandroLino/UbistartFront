import axios from "axios";

export default {
  async register(data) {
    return await axios
      .post(`${process.env.REACT_APP_API_URL}/register`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  async login(data) {
    return await axios
      .post(`${process.env.REACT_APP_API_URL}/login`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  async listTodos(limit, from) {
    let config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        limit: limit,
        start: from,
      },
    };
    return await axios
      .get(`${process.env.REACT_APP_API_URL}/todo/list`, config)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        return error;
      });
  },
  async createTodo(data) {
    let config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    return await axios
      .post(`${process.env.REACT_APP_API_URL}/todo/create`, data, config)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        return error;
      });
  },
  async updateTodo(data, id) {
    let config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    return await axios
      .put(`${process.env.REACT_APP_API_URL}/todo/edit/${id}`, data, config)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        return error;
      });
  },
  async finishTodo(id) {
    let config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    return await axios
      .put(`${process.env.REACT_APP_API_URL}/todo/finish/${id}`, {}, config)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        return error;
      });
  },
};
