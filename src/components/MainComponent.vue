<template>
<div id="page-container" class="container">
    <!--Introduction-->
    <div class="row well hidden-sm hidden-xs" id="introduction">
        <div class="col-12 col-md-7">
            <p>"I'm currently in my third year of studying at the University of York, working towards a BSc/BEng in computer science. I designed 
            this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
            past projects and some more information about what I enjoy doing when I'm not studying for my next AI exam!"</p>
        </div>
        <div class="col-12 col-md-5">
            <img id="portrait" src="../assets/photo-of-me.jpg">
        </div>
    </div>

    <hr class="hidden-sm hidden-xs" />

    <div id="group-content" class ="container">
        <div class="row">
            <div class="col-md-6">

                <!--Sidebar for smaller screens-->
                <div id="topSideBar">
                    <p class="toggle-list list-group-item">Nav</p>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#sketch">Top</a></li>
                        <li class="list-group-item"><a href="#prev-work">Previous Work</a></li>
                        <li class="list-group-item"><a href="#uni-info">University</a></li>
                        <li class="list-group-item"><a href="#hobbies">Hobbies</a></li>
                        <li class="list-group-item"><a href="#cv">CV</a></li>
                        <li class="list-group-item"><a href="#contact-info">Contact</a></li>
                    </ul>
                </div>

                <!--Previous work-->
                <div class="group-item" id="prev-work">
                    <h2>Some of My Work</h2>
                    <p>Here are a few of the projects I'm proud to have worked on in 
                    the past:</p>
                    <table class="table table-striped" id="workTable">
                    <thead>
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                            <td class="center-icons"><div><img src="../assets/go.jpg"/></div></td>
                            <td>
                                <h4>Go AI</h4>
                                <p>During sixth form, I made this AI to play the board game "Go", for my extended project qualification.</p>
                                <a href="./Go.zip"><p>Download now!</p></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="center-icons"><div><img src="../assets/github.svg"/></div></td>
                            <td>
                                <h4>This Website</h4>
                                <p>The source for this website is available on my Github. I used Vue and Bootstrap in its design.</p>
                                <a href="https://github.com/Mrchazaaa/MyOwnWebsite"><p>Visit the Github page!</p></a>
                            </td>
                        </tr>
                        <!--tr> soon...
                            <td class="center-icons"><div><img src="../assets/universe-city.png"/></div></td>
                            <td>
                                <h4>Universe City</h4>
                                <p>A game I developed for the software engineering project in my second year of university. The module didn't require that this game
                                be coded to completion, however, I did so in my spare time.</p>
                                <a href=""><p>Download now!</p></a>
                            </td>
                        </tr-->
                        <tr>
                            <td class="center-icons"><div><img src="../assets/PROM.jpg"/></div></td>
                            <td>
                                <h4>PROM Keypad Lock</h4>
                                <p>A hardware project I worked on during my first year at University wth 2 other students.</p>
                                <a href="https://github.com/spankie1337/PROM_keypad"><p>Visit the Github page!</p></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="center-icons"><div><img src="../assets/vim.png"/></div></td>
                            <td>
                                <h4>My VimRC</h4>
                                <p>I am a big fan of Vim (the command line text editor) and host my vim configuration file on my Github.</p>
                                <a href="https://github.com/Mrchazaaa/myVimRC"><p>Visit the Github page!</p></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="center-icons"><div><img src="../assets/HMGCC.jpg"/></div></td>
                            <td>
                                <h4>HMGCC Code Breaker</h4>
                                <p>This is a short program I made to decode an encrypted message on a HMGCC pen I recieved at a tech fair.</p>
                                <a href="https://github.com/Mrchazaaa/HMGCC-_Code_Breaking"><p>Visit the Github page!</p></a>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div class="lessMore">
                    <p>Show more...</p>
                </div>

                <!--Hobbies-->
                <div class="group-item" id="hobbies">
                    <h2>Hobbies</h2>
                    <p>Outside of university, I like competing in hackathons, reading, working on
                    personal projects and playing music (I play the guitar and drums).</p>
                    <CarouselComponent/>
                    <h3>Hackathons</h3>
                    <p>I really enjoy hackathons, particularly team based ones, and have so far competed in the following:</p>
                    <table class="table table-striped" id="hackathonsTable">
                    <thead>
                      <thead>
                      </thead>
                      <tbody>
                        <tr><td scope="row">Google Code Jam</td></tr>
                        <tr><td scope="row">Google Hashcode</td></tr>
                        <tr><td scope="row">BAE Systems Capture the Flag</td></tr>
                        <tr><td scope="row">BBC Hackathon</td></tr>
                        <tr><td scope="row">ARM Hackathon</td></tr>
                      </tbody>
                    </table>

                    <h3>Volunteering</h3>
                    <p>In the summer after my first year at University, I spent 2 months in Greece volunteering with the 
                    <a href="https://www.archelon.gr/index_eng.php">Sea Turtle Protection Society of Greece</a>. I found this a
                    really fun, rewarding experience and am eager to engage in more volunteering opportunities in the future. I am hoping to
                    be able to partake in the <a href="https://www.volunteerics.org/">International Citizen Service</a> volunteering program in 2019.</p>
                </div>
                <div class="lessMore">
                    <p>Show more...</p>
                </div>
            </div>
            <div class="col-md-6">
                <!--University info-->
                <div class="group-item" id="uni-info">
                    <h2>University</h2>
                    <p>I'm on schedule to graduate with a BEng/BSc in Computer Science in 2019. Here I list the modules I've studied to date, 
                    information about some of the societies I've joined at York and more information about my third year project. I'm also a recipient of the University's
                    Futures Scholarship, and go on to explain a little more about what that means.</p>

                    <h3>Modules</h3>
                    <p>Many of the modules through my 1st and 2nd year were compulsory. However, towards my final year I 
                    chose to study many modules relating to the theory and implementation of real-time and embedded systems.</p>
                    <p class="toggle-list list-group-item">First Year Modules *add icon</p>
                    <ul class="list-group">
                        <li class="list-group-item">Human Aspects of Computer Science</li>
                        <li class="list-group-item">Skills, Knowledge & Independent Learning</li>
                        <li class="list-group-item">Introduction to Computer Architectures</li>
                        <li class="list-group-item">Mathematical Foundations of Computer Science</li>
                        <li class="list-group-item">Theory & Practice of Programming</li>
                        <li class="list-group-item">Numerical Analysis</li>
                        <li class="list-group-item">Foundation in Electronics, Signals & Circuits</li>
                        <li class="list-group-item">Programming of micro-controllers</li>
                    </ul>

                    <p class="toggle-list list-group-item">Second Year Modules</p>
                    <ul class="list-group">
                        <li class="list-group-item">Vision & Graphics</li>
                        <li class="list-group-item">Implementation of Programming Languages</li>
                        <li class="list-group-item">Principles of Programming Languages</li>
                        <li class="list-group-item">Software Engineering Project</li>
                        <li class="list-group-item">Computability & Complexity</li>
                        <li class="list-group-item">Artificial Intelligence</li>
                        <li class="list-group-item">Systems (Operating Systems)</li>
                    </ul>

                    <p class="toggle-list list-group-item">Third Year Modules</p>
                    <ul class="list-group">
                        <li class="list-group-item">Analysable Real-Time Systems</li>
                        <li class="list-group-item">Fundamentals of Machine Learning</li>
                        <li class="list-group-item">Project Management for Computer Scientists</li>
                        <li class="list-group-item">Embedded Systems Design & Implementation</li>
                        <li class="list-group-item">Third Year Project</li>
                        <li class="list-group-item">Computer Vision</li>
                        <li class="list-group-item">Design of Analysable Real-Time Systems</li>
                        <li class="list-group-item">Machine Learning & Probabilistic Graphical Models</li>
                    </ul>

                    <h3>Societies</h3>
                    <p>During my time at University I've taken part in a number of societies, which I've listed here to demonstrate the kind of activities I enjoy
                    outside of studying:<p>                        
                    <table class="table table-striped" id="societiesTable">
                    <thead>
                      <thead>
                      </thead>
                      <tbody>
                        <tr><td scope="row">Cyber Security Society</td></tr>
                        <tr><td scope="row">Dog Society</td></tr>
                        <tr><td scope="row">Game Development Society</td></tr>
                        <tr><td scope="row">Movie Society</td></tr>
                        <tr><td scope="row">Band Society</td></tr>
                      </tbody>
                    </table>
                    

                    <h3>Third Year Project</h3>
                    <p>One of the more interesting parts of my curriculum is my third year project. For which I am...</p>

                    <h3>York Futures Scholarship</h3>
                    <p></p>
                </div>
                <div class="lessMore">
                    <p>Show more...</p>
                </div>
                <!--CV-->
                <div class="group-item" id="cv">
                    <h2>Curriculum Vitae</h2>
                    <p style="margin-bottom: 0;">Find enclosed a copy of my C.V</p> 
                    <a href="">Charles_Howlett_cv.pdf</a>
                    <p>*note that some contact information on this copy has been hidden for privacy purposes, 
                    you'll find more ways to contact me at the bottom of this page!</p>
                </div>
            </div>
        </div>
    </div>

    <hr />

    <!--div class="row well hidden-sm hidden-xs" id="introduction"-->

    <!--Contact Information-->
    <div class="row" id="contact-info">
        <div class="hidden-sm hidden-xs col-md-2"></div>
        <div class="col-xs-6 col-md-2 contact"><a href="https://github.com/Mrchazaaa/"><img src="../assets/github.svg"></a></div>
        <div class="col-xs-6 col-md-2 contact"><a href="https://www.linkedin.com/in/charles-howlett-383b26155/"><img src="../assets/linkedin.svg"></a></div>
        <div class="col-xs-6 col-md-2 contact"><a href="https://www.facebook.com/charlie.howlett.1"><img src="../assets/facebook.svg"></a></div>
        <div class="col-xs-6 col-md-2 contact"><a href="mailto:charlie.howlett@live.co.uk"><img src="../assets/email.svg"></a></div>
        <div class="hidden-sm hidden-xs col-md-2"></div>
    </div>
</div>
</template>

<script>
    $( document ).ready(function() {
        
        //setup animations for each toggleable list
        $(".toggle-list").next().hide();
        $(".toggle-list").on('click', function(event) {
            $(this).next().slideToggle('slow');
            $(this).toggleClass("toggle-listClicked");
        });

        //setup show more buttons (on smaller screens)
        $(".lessMore").on('click', function(event) {
            $(this).prev().removeClass("readMore");
            $(this).addClass("hidden");
        });

        //make worktable rows clickable
        $("#workTable tr").mousedown(function(event) {
            if (event.which != 3) {
                window.location = $(this).find("a").attr("href");
            }
        });

        function resizeConfigure() {
            //on smaller screens...
            if ($(window).width() < 992) {
                $("#topSideBar").removeClass("hidden");
                $("#menu-open").addClass("hidden");
                $(".group-item").addClass("readMore");
                $(".lessMore").removeClass("hidden");
                //always close sidebar after resizing
                $("#app").removeClass("toggled");
                
            } 
            //on larger screens... 
            else {
                $("#topSideBar").addClass("hidden");
                $("#menu-open").removeClass("hidden");
                $(".group-item").removeClass("readMore");
                $(".lessMore").addClass("hidden");
                //always close sidebar after resizing
                $("#app").removeClass("toggled");
                $("#menu-close").fadeOut("slow");
                $("#menu-open").fadeIn("slow");
            }
        }
        
        //add/remove sidebar to the top of page for small screen sizes
        resizeConfigure();
        $( window ).resize(function() {
            resizeConfigure();
        });

    });

    import CarouselComponent from './Carousel.vue';

    export default {
      name: 'MainContent',
      components: {
        CarouselComponent
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topSideBar p {
    font-weight: bold;
    padding: 5px 15px 5px 15px !important;
    text-align: center;
    font-size: 26px;
    background-color: #596475;
    color: #fff;
    margin: 0;
    border: 1px solid #000;
}
#topSideBar ul li:first-of-type {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
#topSideBar ul li {
    background-color: #eaeaea;
    text-align: center;
    padding: 0;
    margin: 0;
    border: 1px solid #000;
    border-top: none;
}
#topSideBar a {
    display: block;
    color: #2c3e50;
    padding: 10px 15px 10px 15px;
    font-size: 18px;
    text-decoration: none;
}
#topSideBar ul li a:hover {
    background-color: #596475;
    cursor: pointer;
    color: #fff;
}
.readMore {
    overflow-y: hidden;
    height: 300px; 
    border-radius: 4px 4px 0px 0px !important;
}
#cv {
    height: unset;
}
#page-container{
    max-width: 1600px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
}
#introduction {
    padding: 5vh 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
h2 {
    /* consider switching to "strong" tags instead as they are better for screen
    readers... */
    font-weight: bold;
    font-size: 34px;; 
    margin-top: 0;
}
h3 {
    font-weight: bold;
}
p {
    text-align: justify;
}
#introduction > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding-left: 2vw;
}
#introduction p {
    vertical-align: middle;
    font-size: calc(14px + 0.8vw); 
    text-align: center;
}
#introduction img {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}
#portrait {
    border-radius: 50%;
    width: 90%;
}
#group-content {
    flex-direction: column;
    margin: 0;
    padding: 0;
}
#workTable img {
    width: 100px;
    height: 100px;
}
#workTable p {
    text-align: left;
}
#workTable tr:hover {
    background-color: #eaeaea;
    cursor: pointer;
}
thead {
    cursor: pointer;
}
.group-item {
    padding: 15px;
    margin: 15px 7.5px 0px 7.5px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
}
.lessMore {
    margin: 0px 7.5px 0px 7.5px;
    padding: 0px 15px 0px 15px;
    border: 1px solid #e3e3e3;
    border-radius: 0px 0px 4px;
    background-color: #eaeaea;
}
.lessMore p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
}
.lessMore:hover {
    background-color: #596475;
    color: #fff;
    cursor: pointer;
}
#group-content div[class*="col-"] {
    padding: 0px;
}
table {
    margin: 5px 0;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
}
#societiesTable td {
    font-weight: bold;
}
#hackathonsTable td {
    font-weight: bold;
}
th {
    padding-left: 8px;
}
.contact {
    height: 40px;
    margin-bottom: 20px;
}
.contact img {
    position: absolute;
    height: 50px;
    top: calc(50% - 30px);
    left: calc(50% - 50px);
    margin: 10px 0px;
}
.toggle-list {
    cursor: pointer;
    margin: 10px 0 0 0;
    background-color: #f9f9f9;
}
.list-group-item {
    background-color: #f9f9f9;
}
.toggle-list:hover {
    background-color: #eaeaea;
}
.toggle-listClicked {
    background-color: #eaeaea;
}
/*use flex to vertically center icons in previous work table*/
.center-icons {
    height: 1px;
}
.center-icons div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

</style>
