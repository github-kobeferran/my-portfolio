<template>
  <section id="projects" class="projects">

    <div class="container">
      <h1 class="feature-title">My Projects</h1>
      
      <div class="cards">
        <div class="project-card" v-for="repo in repos" :key="repo.id">

          <div class="project-title">
            <a v-if="repo.homepage" :href="repo.homepage">{{repo.homepage.replace(/(^\w+:|^)\/\//, '') }}</a>
            <span v-else >{{repo.name}}</span>
          </div>
          <div class="project-body">
            <p>
              {{ repo.description }}
            </p>
          </div>
          <div class="card-footer">
            <a :href="repo.html_url" class="btn">
              Github <i class="fa-solid fa-angle-right"></i
              ><i class="fa-solid fa-angle-right"></i>
            </a>
            <div class="repo-topics">
              <span v-for="topics in repo.topics" :key="topics">
                {{ topics }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="project-footer">
        <div class="project-footer-content">            
            <div class="project-footer-body">
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// import Button from './Button'
import GithubService from "../GithubService";

export default {
  name: "Projects",
  data() {
    return {
      error: "",
      repos: [],
    };
  },
  components: {
    // Button
  },
  async created() {
    try {
      this.repos = await GithubService.getRepos();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>
