<template >
    <div>
        <section class="vh-100 bg-image"
  style="background-image: url('https://i.postimg.cc/wT0wrHf2/1218245.png');
  background-size: cover;
  background-repeat: no-repeat;">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card bg-transparent border-white" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center text-white mb-5">Message Us</h2>

              <form action="https://formspree.io/f/moqzwded" method="POST">

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" required="required"/>
                  <label class="form-label text-white" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" required="required" />
                  <label class="form-label text-white" for="form3Example3cg">Your Email</label>
                </div>
                <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" required="required"></textarea>
                            <label for="message" class="text-white pb-4">Your message</label>
                        </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-light btn-block btn-lg gradient-custom-4 text-white">Send</button>
                </div>


              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >

.gradient-custom-3 {
/* fallback for old browsers */
background: rgba(24, 51, 73, 0.5);

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(24, 51, 73, 0.5), rgba(18, 46, 46, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(24, 51, 73, 0.5), rgba(18, 46, 46, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: rgba(24, 51, 73, 0.5);

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(24, 51, 73, 0.5), rgba(18, 46, 46, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(24, 51, 73, 0.5), rgba(18, 46, 46, 0.5))
}
    
</style>