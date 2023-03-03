<template >
<section class="text-center text-lg-start">
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Login</h2>
            <form>
              
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>


              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>


              <div class="form-check d-flex justify-content-center mb-4">
                <p class="small me-3 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Login
              </button>

              <div class="text-center">
                <p>Don't have an Account?</p>
                <a href="/register">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="../assets/uwp535802.jpeg" class="w-100 rounded-4 shadow-4"
          alt="" loading="lazy"/>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .cascading-right {
      margin-right: -50px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
    a{
        text-decoration: none;
    }

</style>