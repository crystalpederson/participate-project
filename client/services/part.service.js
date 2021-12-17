import http from "../http-common.js";

class PartDataService {
  getGroup(id) {
    return http.get(`/participants/${id}`);
  }

  addPart(id, data) {
    return http.post(`/participants/${id}`, data);
  }

  updatePart(id, data) {
    return http.put(`/participants/${id}`, data);
  }

  deletePart(id, data) {
    return http.delete(`/participants/${id}`, data);
  }

  getUserClasses(id){
    return http.get(`/class/${id}`);
  }
}

export default new PartDataService();