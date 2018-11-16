<template>
<div id="sidebar-wrapper">
    <!--Close sidebar button-->
    <div id="button-wrapper">
        <button type="button" id="menu-close" class="btn btn-danger"><img src="../assets/x.svg"></button>
    </div>
    <a href="#sketch"><h3>Top</h3></a>
    <a href="#prev-work"><h3>Previous Work</h3></a>
    <a href="#uni-info"><h3>University</h3></a>
    <a href="#hobbies"><h3>Hobbies</h3></a>
    <a href="#cv"><h3>CV</h3></a>
    <a href="#contact-info"><h3>Contact</h3></a>
</div>
</template>

<script>
    $(document).ready(function() {

        $("#menu-close").hide();
        $("#menu-close").click(function(e) {
            e.preventDefault();
            $("#app").removeClass("toggled");
            $(this).fadeOut("slow");
            $("#menu-open").fadeIn("slow");
        });
    });    

    export default {
      name: 'SideBar'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#button-wrapper {
    position: absolute; 
    width: 0px; 
    height: 0px; 
}
#menu-close {
    position: relative;
    top: 20px;
    left: 195px;
    z-index: 4;
    padding: 5px;
    width: 35px;
    height: 35px;
}
a {
    text-decoration: none;
    color: #fff;
    overflow-x: hidden;
}
h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    padding: 25px 20px 25px 20px;
    font-weight: bold;
    color: #2c3e50;
}
h3:hover {
    background-color: #596475;
    color: #fff;
    cursor: pointer;
}
</style>
