<template>
  <div id="app">
    
    <SideBarComponent/>

    <div id="page-content-wrapper">
        <!--p5 sketch background-->
        <div id='sketch'></div>
        
        <!--Toggle sidebar button-->
        <button type="button" id="menu-toggle" class="btn btn-secondary"><img src="./assets/align-left.svg"></button>

        <!--Title-->
        <h1 class="hidden">Charlie Howlett</h1>

        <!--content pointer-->
        <a href="#page-container"><img id="content-pointer" class="hidden"  src="./assets/chevron-bottom.svg"></a>

        <!--Page content-->
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

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
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
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#app").toggleClass("toggled");
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
    background-color: #f8f9fa
}
.hidden{
  display: none;
}
h1 {
    font-size: 550%;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 35px;
    background-color: transparent;
    position: absolute;
    top: 30vh;
    text-align: center;
    width: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#menu-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 2;
    padding: 5px;
    width: 35px;
    height: 35px;
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
</style>
