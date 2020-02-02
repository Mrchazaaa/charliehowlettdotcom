<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/volunteering-leg.jpg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block" >
          <p>Preparing to give a presentation on protecting sea turtles for Archelon</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/cybersoc-leg.jpg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
          <p>Attending the Cyber Security Society's first event</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/raleigh.jpg" alt="Second slide" />
        <div class="carousel-caption d-none d-md-block">
          <p>Giving one-on-one entrepeneurship education to villagers in rural Tanzania</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/band-leg.jpg" alt="Third slide" />
        <div class="carousel-caption d-none d-md-block">
          <p>Band practice</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
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
.carousel {
  margin-bottom: 10px;
}
.carousel-item {
  position: relative;
}
.carousel-caption {
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  z-index: 2; /* used to stop carousel caption being shown infront of sidebar */
}
.carousel-caption p {
  margin: 10px 5px;
  font-weight: bold;
}
</style>
