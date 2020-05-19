<template>
  <div id="gallery">
    <a
      class="example-image-link"
      href="img/80kmh.919f9483.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 80kmh."
    >
      <img class="example-image" src="../assets/80kmh.png" alt />
    </a>
    <a
      class="example-image-link"
      href="img/110kmh.11d3e1ce.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 110kmh."
    >
      <img class="example-image" src="../assets/110kmh.png" alt />
    </a>
    <a
      class="example-image-link"
      href="img/150kmh.f85d336b.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 150kmh."
    >
      <img class="example-image" src="../assets/150kmh.png" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: "LightBox"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#gallery {
    margin-bottom: $margin-md;
}
img {
    width: 33%;
}
</style>
