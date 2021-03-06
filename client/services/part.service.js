import http from "../http-common.js";

class PartDataService {

  verifyUser(data) {
    return http.post('/login', data);
  }

  getGroup(id) {
    return http.get(`/participants/${id}`);
  }

  addGroup(id, data) {
    return http.post(`/class/${id}`, data);
  }

  // deleteGroup(id, data){
  //   return http.delete(`/class/${id}`, data);
  // }

  getGroupName(id){
    return http.get(`/groupname/${id}`)
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