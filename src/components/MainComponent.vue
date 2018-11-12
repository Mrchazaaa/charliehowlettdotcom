<template>
<div id="page-container" class="container">
    <!--Introduction-->
    <div class="row well" id="introduction">
        <div class="col-md-7" id="description">
            <p>"I'm currently in my third year of studying at the University of York, working towards a BSc/BEng in computer science. I designed 
            this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
            past projects and some more information about what I enjoy doing when I'm not working."</p>
        </div>
        <div class="col-md-5" id="portrait-container">
            <img id="portrait" src="../assets/photo-of-me.jpg">
        </div>
    </div>

    <hr />

    <div id="group-content" class ="container">
        <div class="row">
            <div class="col-md-6">

                <!--Github stuff-->
                <div class="group-item ">
                    <h2>Some of My Work</h2>
                    <p>Here are a few of the projects I'm proud to have worked on in 
                    the past:</p>
                    <table class="table table-striped" id="workTable">
                    <thead>
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Go AI</td>
                            <td>During sixth form, I made this AI to play the board game "Go" for my extended project qualification.</td>
                        </tr>
                        <tr>
                            <td>This Website</td>
                            <td>The source for this website is available on my Github. I used Vue and Bootstrap for its design.</td>
                        </tr>
                        <tr>
                            <td>PROM Keypad</td>
                            <td>A hardware project I worked on during my first year at University wth 2 other students.</td>
                        </tr>
                        <tr>
                            <td>VimRC</td>
                            <td>I am a big fan of Vim (the command line text editor) and host my vim configuration file on my Github.</td>
                        </tr>
                        <tr>
                            <td>HMGCC Code Breaker</td>
                            <td>This is a short program I made to decode the an encrypted message on a HMGCC pen I recieved at a tech fair.</td>
                        </tr>
                      </tbody>
                    </table>
                </div>

                <!--Hobbies-->
                <div class="group-item ">
                    <h2>Hobbies</h2>
                    <p>When I'm not bust revising for my next AI exam, I like competing in hackathons, working on
                    personal projects, reading and playing music (I play the guitar and drums).</p>
                    <CarouselComponent/>
                    <p>In the summer after my first year at University, I spent 2 months in Greece volunteering with the 
                    <a href="https://www.archelon.gr/index_eng.php">Sea Turtle Protection Society of Greece</a>. I found this a
                    really fun, rewarding experience and am eager to engage in more volunteering opportunities in the future</p>
                    <h3>Hackathons</h3>
                    <p>I really enjoy hackathons, particulalry team based ones, and have so far competed in the following:</p>
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
                </div>
            </div>
            <div class="col-md-6">
                <!--University info-->
                <div class="group-item ">
                    <h2>University</h2>
                    <p>I'm on schedule to graduate with a BEng/BSc in Computer Science in 2019. Here I list the modules I've studied to date, 
                    information about some of the societies I've joined at York and more information about my third year project. I'm also a recipient of the University's
                    Futures Scholarship.</p>

                    <h3>Modules</h3>
                    <p class="modulesList list-group-item">First Year Modules</p>
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

                    <p class="modulesList list-group-item">Second Year Modules</p>
                    <ul class="list-group">
                        <li class="list-group-item">Vision & Graphics</li>
                        <li class="list-group-item">Implementation of Programming Languages</li>
                        <li class="list-group-item">Principles of Programming Languages</li>
                        <li class="list-group-item">Software Engineering Project</li>
                        <li class="list-group-item">Computability & Complexity</li>
                        <li class="list-group-item">Artificial Intelligence</li>
                        <li class="list-group-item">Systems (Operating Systems)</li>
                    </ul>

                    <p class="modulesList list-group-item">Third Year Modules</p>
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
                </div>
                <!--CV-->
                <div class="group-item ">
                    <h2>Curriculum Vitae</h2>
                    <p style="margin-bottom: 0;">Find enclosed a copy of my C.V</p> 
                    <a href="">Charles_Howlett_cv.pdf</a>
                    <p>*note that some contact information on
                    this copy has been hidden for privacy purposes</p>
                </div>
            </div>
        </div>
    </div>

    <hr />

    <!--Contact Information-->
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-2 contact"><a href="https://github.com/Mrchazaaa/"><img src="../assets/github.svg"></a></div>
        <div class="col-md-2 contact"><a href="https://www.linkedin.com/in/charles-howlett-383b26155/"><img src="../assets/linkedin.svg"></a></div>
        <div class="col-md-2 contact"><a href="https://www.facebook.com/charlie.howlett.1"><img src="../assets/facebook.svg"></a></div>
        <div class="col-md-2 contact"><a href="mailto:charlie.howlett@live.co.uk"><img src="../assets/email.svg"></a></div>
        <div class="col-md-2"></div>
    </div>
</div>
</template>

<script>
    $( document ).ready(function() {
        $(".modulesList").next().hide();
        $(".modulesList").on('click', function(event) {
            $(this).next().slideToggle('slow');
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
#page-container{
    max-width: 1600px;
    /* width: 100%; */
    /* background-color: #f8f9fa; */
    padding-top: 50px;
    /* padding-left: 7vw; */
    /* padding-right: 10vw; */
    padding-left: 0;
    padding-right: 0;
}
#introduction {
    padding: 5vh 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
#description {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-left: 2vw;
}
#description p {
    vertical-align: middle;
    font-size: calc(14px + 0.8vw); 
}
#portrait-container {
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
tbody {
}
thead {
    cursor: pointer;
}
.group-item {
    padding: 15px;
    margin: 7.5px;
    margin-top: 15px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
}
#modules1Table {
    width: 100%;
}
#modules1Table th{
    padding: 10px;
}
#modules1Table tbody {
    padding: 0px;
    margin: 0px;
}
#firstCollapse table {
    margin: 0;
}
#group-content div[class*="col-"] {
    padding: 0px;
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
table a {
    color: unset;
    text-decoration: unset;
}
table a:hover {
    text-decoration: underline;
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
    /* background-color: #A9A9A9; */
}
td {
    /* background-color: #A9A9A9; */
}
.contact {
    height: 120px;
}
.contact img {
    position: absolute;
    height: 50px;
    top: calc(50% - 30px);
    left: calc(50% - 50px);
    margin: 10px 0px;
}
.modulesList {
    cursor: pointer;
    margin: 10px 0 0 0;
    background-color: #f5f5f5;
}
.modulesList:hover {
    background-color: #cccccc;
}
.list-group-item {
    background-color: #f5f5f5;
}
</style>
