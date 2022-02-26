<template>
  <div class="about">
    <!-- Profile -->
    <div class="profile">
      <div class="profile-title">
        <h1>Who is <span class="text-primary">Kobe Ferran?</span></h1>
      </div>
      <div class="profile-body">
        <img src="~@/assets/img/my-pictures/profile.png" alt="" srcset="" />
        <p>
          I'm a 22 year old 4<sup>th</sup> year BSIT student at Mindoro State
          University - Calapan Campus.
          <br />
          <br />
          I always loved programming since I learned it in college and developed
          a passion in web development. Right now, I'm pursing a career as a
          full-stack developer and using frameworks for backend and frontend
          technologies such as Laravel and Vue.js
          <br />
          <br />
          When I'm not on the desk coding, I'm a musician at church, learning
          some random History stuff or enjoying video games.
        </p>
      </div>
    </div>
    <!-- CV -->
    <div class="cv">
      <a href="/asdf.pdf" class="btn">
        Download CV
        <i class="fa-solid fa-download"></i
      ></a>
    </div>
    <GitHubCalendar />
  </div>
</template>

<script>
import GitHubCalendar from "../components/GithubCalendar";

export default {
  name: "About",
  components: {
    GitHubCalendar,
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 5em;
}
</style>
