<template>
<div id="sidebar-wrapper">
</div>
</template>

<script>

export default {
  name: 'SideBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  overflow-x: hidden;
}

#app {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#app.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#app.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
}

#app.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

</style>
