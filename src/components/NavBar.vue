<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <a class="navbar-brand me-2" href="/">
      <img
        src="https://i.postimg.cc/MZVrgNFN/EE7pf3-RW4-AAOnh-U-removebg-preview.png"
        height="16"
        alt="Logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="links">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/figures" class="links">Figures</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin" class="links">Admin</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact">Contact Us</router-link>

        </li>
      </ul>
      <!-- Left links -->

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          <router-link to="/login" class="links">Login</router-link>
        </button>
        <button type="button" class="btn btn-primary me-3">
          <router-link to="/register" class="links" >Register</router-link>
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/Simp4Hitagi/Otaku"
          role="button"
          ><i class="fa-brands fa-square-github"></i></a>
      </div>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
};
</script>

<style>
nav {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav img {
    height: 50px;
    aspect-ratio: 1;
    object-fit: cover;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}


.links{
    text-decoration: none;
}

.links:hover{
    color: gray;
    transition: 0.4s;
}

.nav-item{
    margin-left: 8px;
}


</style>