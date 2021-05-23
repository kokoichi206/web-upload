<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ profile }}</p>
    <!-- <p>{{ repos }}</p> -->
    <ul>
      <li v-for="(url, name) in repos" :key="name">
        <!-- {{ name }}: {{ url }} -->
        <a :href="url">{{ name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  mounted(){
    this.$store.dispatch("fetchGithubProfile",{user_id: "kokoichi206"})
  },
  computed: {
    ...mapState(["profile", "repos"])
  }
}
</script>
