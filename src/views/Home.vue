<template>
    <Cover @cover-button-clicked="scrollToProjects" />
  <div ref="projectsComponent">
    <Projects />
  </div>
</template>

<script>
import Cover from "../components/Cover";
import Projects from "../components/Projects";

export default {
    name: 'Home',
    components: {
        Cover,
        Projects
    },
    methods: {
    scrollToProjects() {
      const el = this.$refs.projectsComponent;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
}
</script>