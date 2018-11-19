<template>
<div id="carousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="item active">
      <img class="d-block w-100" src="../assets/volunteering.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <p>Preparing to give a presentation on protecting sea turtles for Archelon</p>
        </div>
    </div>
    <div class="item">
      <img class="d-block w-100" src="../assets/cybersoc.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <p>Attending the Cyber Security Society's first event</p>
        </div>
    </div>
    <div class="item">
      <img class="d-block w-100" src="../assets/band.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <p>Me and my friends</p>
        </div>
    </div>
  </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
$("#carousel").carousel();

export default {
  name: 'Carousel'
}
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
