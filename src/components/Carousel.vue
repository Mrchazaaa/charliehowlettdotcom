<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="item active">
      <img class="d-block w-100" src="../assets/photo-of-me.jpg" alt="First slide">
    </div>
    <div class="item">
      <img class="d-block w-100" src="../assets/photo-of-me.jpg" alt="Second slide">
    </div>
    <div class="item">
      <img class="d-block w-100" src="../assets/photo-of-me.jpg" alt="Third slide">
    </div>
  </div>
  <a class="left carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
$("#carouselExampleControls").carousel();

export default {
  name: 'Carousel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
