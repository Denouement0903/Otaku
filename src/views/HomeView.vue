<template>
  <div class="landing" >
    <section class=" bg-image vh-100"  style="background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3 flex-column pt-5">
    <h2 class="animate__animated animate__pulse text-light">WELCOME TO OTAKU</h2>
    <p>Choose from all your favorite franchises, like Dragon Ball, Sword Art Online, One Piece, Demon Slayer, Attack On Titan, Hatsune Miku, and so many more!</p>
    <img src="" alt="" class="w-25">
      <img alt="" src="https://i.postimg.cc/2yqfmyRY/Nice-Png-japan-png-445294.png" class="water w-100 h-50" loading="lazy">
    <HelloWorld />
  </div>
  </section>
  </div>
  <div class="about">
    <img src="https://i.postimg.cc/GmNSCn36/29446308f641bb005dbe4519ef02efbd-removebg-preview.png" alt="about" class="image" loading="lazy">
    <h3 class="container bg-body-emphasis text-white">Anime figures from Otaku, if you are looking for the best place to buy anime figures, our Japanese anime figures are more than just collectables; they’re a fundamental part of otaku culture!

Characters from your favorite animes, mangas, and video games are transformed and brought to life as three-dimensional anime statues and are perfect for decorating your space.
Choose from all your favorite franchises, like Dragon Ball, Sword Art Online, One Piece, Demon Slayer, Attack On Titan, Hatsune Miku, and so many more!
Otaku is a leading anime figures website; you can be sure that all the anime figurines we stock are authentic. When you buy anime figures, you can trust Otaku! 

</h3>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
name: 'HomeView',
components: {
  HelloWorld
}
}
</script>

<style scoped>
.landing{
  height: 100vh;
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.about{
  height: 100vh;
  background-image: url(https://i.postimg.cc/prqkWTLq/Nice-Png-japan-png-445294-flipped.png);
  background-color: rgba(24, 103, 117, 0.5);
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  outline: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
}
h3{
  padding-top: 25%;
}

h2, p{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: white;
}
h1:hover{
  color: darkcyan;
  transition: 0.4s;
}

.image{
  margin-top: 24%;
  height: 400px;
}
.gradient-custom-3{
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(6, 119, 148, 0.5), rgba(34, 125, 125, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(13, 90, 90, 0.5), rgba(31, 109, 148, 0.5))
}
.water{
  margin-top: 16%;
  line-height: 24px;
}
.kakashi{
  width: 10vw;
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .water{
    width: 100%;
  }

 }

</style>
