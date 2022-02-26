<template>
  <h3 class="calendar-title">Github Chart</h3>
  <div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
  </div>
</template>

<script>
import GitHubCalendar from "github-calendar";

export default {
  mounted() {
    GitHubCalendar(".calendar", "github-kobeferran", { responsive: true, tooltips: true });
         
  },
};
</script>

<style scoped>
/* level 1 (no commits) */
    rect.day[fill="#ebedf0"] {
      fill: rgba(255, 0, 0, 0.1) !important;
    }

    /* level 2 */
    rect.day[fill="#c6e48b"] {
      fill: rgba(255, 0, 0, 0.3) !important;
    }
    /* level 3 */
    rect.day[fill="#7bc96f"] {
      fill: rgba(255, 0, 0, 0.5) !important;
    }
    /* level 4 */
    rect.day[fill="#239a3b"] {
      fill: rgba(255, 0, 0, 0.8) !important;
    }
    /* level 5 */
    rect.day[fill="#196127"] {
      fill: rgba(255, 0, 0, 1) !important;
    }
</style>
