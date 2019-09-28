<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/volunteering-leg.jpg" alt="First slide">
      <p>Preparing to give a presentation on protecting sea turtles for Archelon</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/cybersoc-leg.jpg" alt="First slide">
      <p>Attending the Cyber Security Society's first event</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/raleigh.jpg" alt="Second slide">
      <p>Giving one-on-one entrepeneur education to villagers in rural Tanzania</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/band-leg.jpg" alt="Third slide">
      <p>Me and my friends</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>

$(".carousel").carousel();

export default {
  name: "Carousel"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel {
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
}
p {
  font-weight: bold;
}
.carousel-caption {
  padding: 0px 10px;
  width: 100%;
  left: 0;
}
</style>
