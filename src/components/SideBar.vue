<template>
<div id="sidebar-wrapper">
    <!--Close sidebar button-->
    <div id="button-wrapper">
        <button type="button" id="menu-close" class="btn btn-danger"><img src="../assets/x.svg"></button>
    </div>
    <a href="#sketch" role="button" class="btn btn-light btn-block"><h3>Top</h3></a>
    <a href="#prev-work" role="button" class="btn btn-light btn-block"><h3>Previous Work</h3></a>
    <a href="#uni-info" role="button" class="btn btn-light btn-block"><h3>University</h3></a>
    <a href="#hobbies" role="button" class="btn btn-light btn-block"><h3>Hobbies</h3></a>
    <a href="#volunteering" role="button" class="btn btn-light btn-block"><h3>Volunteering</h3></a>
    <a href="#cv" role="button" class="btn btn-light btn-block"><h3>CV</h3></a>
    <a href="#contact-info" role="button" class="btn btn-light btn-block"><h3>Contact</h3></a>
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

        //add click event handler to sidebar toggle button
        $("#menu-open").click(function(e) {
            e.preventDefault();
            $("#app").addClass("toggled");
            $(this).fadeOut("slow");
            $("#menu-close").fadeIn("slow");
        });
    });    
    export default {
      name: 'SideBar'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#sidebar-wrapper {
    z-index: 3;
    position: fixed;
    left: 250px;
    width: 0; /* start with sidebar closed */
    height: 100%;
    margin-left: -255px; /* 250px + 5px to account for border */
    background-color: $active-background;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    overflow: hidden;
    text-overflow: clip !important;
    white-space: nowrap;
    box-sizing: border-box;         /* Opera/IE 8+ */
    border-right: 5px solid #363635;
}
#app.toggled #sidebar-wrapper {
    width: 250px;
}
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
#sidebar-wrapper a {
    margin: 0px !important;
    padding: 0px;
    width: 245px;
    text-decoration: none;
    overflow-x: hidden;
    border: none !important;
}
#sidebar-wrapper h3 {
    padding: 25px 20px 25px 20px;
    font-weight: bold;
}
#sidebar-wrapper a:focus {
    outline: none;
    box-shadow: none;
}
#menu-open {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 2;
    padding: 5px;
    width: 35px;
    height: 35px;
    background-color: buttonFace;
    border: none;
}
</style>
