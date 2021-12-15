import http from "../http-common.js";

class PartDataService {
  getGroup(id) {
    return http.get(`/participants/${id}`);
  }

  addPart(id, data) {
    return http.post(`/participants/${id}`, data);
  }

  update(id, data) {
    return http.put(`/participants/${id}`, data);
  }
}

export default new PartDataService();