import api from "@/services/api";

export default {
  createPost(body) {
    return api().post("post", body);
  },
};
