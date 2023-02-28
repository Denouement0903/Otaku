<template>
<NavBar />
<router-view />
<Footer></Footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/footer.vue"


export default {
  components:
  { NavBar, Footer }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: grey;
}
</style>
