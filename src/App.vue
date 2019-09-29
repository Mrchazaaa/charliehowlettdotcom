<template>
  <div id="app">
    <!--sidebar navbar-->    
    <SideBarComponent/>

    <div id="page-content-wrapper">
        <!--p5 sketch background-->
        <div id='sketch'></div>
        
        <!--open sidebar button-->
        <button type="button" id="menu-open" class="btn btn-secondary"><img src="./assets/align-left.svg"></button>

        <!--title (title-container used to vertically center title with flex)-->
        <div id="title-container">
            <h1 class="hidden">Charlie Howlett</h1>
        </div>

        <!--content pointer-->
        <a href="#page-container"><img id="content-pointer" class="hidden"  src="./assets/chevron-bottom.svg"></a>

        <!--page content-->
        <MainComponent/>
    </div>
  </div>
</template>

<script>
    import MainComponent from './components/MainComponent.vue';
    import SideBarComponent from './components/SideBar.vue';
    import p5 from 'p5';
    import sketch from './javascript/background.js';
    
    $( document ).ready(function() {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior (dont scroll on )
            if (this.hash !== "" && this.hash!=="#carouselExampleControls") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                    }, 800, function(){

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
            } // End if
        });

        //fade in title and content pointer on page load
        $('h1').fadeIn(1750).removeClass('hidden');
        $('#content-pointer').fadeTo(1750, 0.3).removeClass('hidden');

        //set rules for hovering on/off content pointer
        $('#content-pointer').hover( function() { $(this).fadeTo(500, 1.0);  }, function() { $(this).fadeTo(500, 0.3); }  );
        
        //add click event handler to sidebar toggle button
        $("#menu-open").click(function(e) {
            e.preventDefault();
            $("#app").addClass("toggled");
            $(this).fadeOut("slow");
            $("#menu-close").fadeIn("slow");
        });
    });

    export default {
      name: 'app',
      components: {
        MainComponent,
        SideBarComponent
      },
      data() {
        return {
          myp5: null
        }
      },
      mounted() {
        this.myp5 = new p5(sketch, document.getElementById('sketch'));
      }
    }
</script>

<style>
body, html {
    margin:0; 
    padding:0;
    height: 100%;
}
.hidden{
  display: none;
}
#title-container {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    /* max-width: 1600px; */
    margin: 0 auto;
}
h1 {
    font-size: calc(250% + 40px);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    margin: 0;
    padding: 0;
    text-align: center;
    /* width: 100%; */
    /* height: 100vh; */
    max-width: 582px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #363635;
}
#sketch {
    margin: 0; 
    z-index: 0;
    height: 100vh;
}
#content-pointer {
    position: absolute;
    top: 95vh;
    margin-left: 50%;
    margin-right: 50%;
    width: 25px;
}

/*sidebar styling*/
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

#app {
    /* -webkit-transition: all 0.5s ease; */
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
#sidebar-wrapper {
    z-index: 3;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -255px; /*250px + 5px to account for border*/
    background-color: #eaeaea;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    box-sizing: border-box;         /* Opera/IE 8+ */
    border-right: 5px solid #2c3e50;
}

#app.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
}

</style>
