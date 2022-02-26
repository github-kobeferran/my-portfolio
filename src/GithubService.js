import axios from "axios";

const repos_url = "https://api.github.com/users/github-kobeferran/repos";
// const profile_url = "https://api.github.com/users/github-kobeferran";

class GithubService {
  static async getRepos() {
    try {
      const res = await axios.get(repos_url);
      const data = res.data;

      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default GithubService;
