<template>
  <div id="page-container" class="container">
    <!--Introduction-->
    <div class="row well hidden-sm hidden-xs" id="introduction">
      <div class="col-12 col-md-7">
        <p>
          "I'm a recent computer science graduate of the University of York. I designed
          this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
          past projects and some more information about what I enjoy doing in my free time!"
        </p>
      </div>
      <div class="col-12 col-md-5">
        <img id="portrait" src="../assets/photo-of-me.jpg" />
      </div>
    </div>

    <hr class="hidden-sm hidden-xs" />

    <div id="group-content" class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <!--Sidebar for smaller screens-->
          <div id="topSideBar">
            <p class="toggle-list list-group-item">Nav</p>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="#sketch">Top</a>
              </li>
              <li class="list-group-item">
                <a href="#prev-work">Previous Work</a>
              </li>
              <li class="list-group-item">
                <a href="#uni-info">University</a>
              </li>
              <li class="list-group-item">
                <a href="#hobbies">Hobbies</a>
              </li>
              <li class="list-group-item">
                <a href="#cv">CV</a>
              </li>
              <li class="list-group-item">
                <a href="#contact-info">Contact</a>
              </li>
            </ul>
          </div>

          <!--Previous work-->
          <div class="group-item" id="prev-work">
            <h2>Some of My Work</h2>
            <p>
              Here are a few of the projects I'm proud to have worked on in
              the past:
            </p>

            <div class="work-table">
              <a href="./Go.zip">
                <div>
                  <div>
                    <div>
                      <img src="../assets/go.jpg" />
                    </div>
                  </div>
                  <div>
                    <h4>Go AI</h4>
                    <p>During sixth form, I made this AI to play the board game "Go", for my extended project qualification.</p>
                    <a>
                      <p>Download now!</p>
                    </a>
                  </div>
                </div>
              </a>
              <a href="./UniverseCity.zip">
                <div>
                  <div>
                    <div>
                      <img src="../assets/universe-city.png" />
                    </div>
                  </div>
                  <div>
                    <h4>Universe City</h4>
                    <p>
                      A game I developed for the software engineering project in my second year of university. The module didn't require that this game
                      be coded to completion, however, I did so in my spare time.
                    </p>
                    <a>
                      <p>Download now!</p>
                    </a>
                  </div>
                </div>
              </a>
              <a href="https://github.com/Mrchazaaa/MyOwnWebsite">
                <div>
                  <div>
                    <div>
                      <img src="../assets/github.svg" />
                    </div>
                  </div>
                  <div>
                    <h4>This Website</h4>
                    <p>The source for this website is available on my Github. I used Vue and Bootstrap in its design.</p>
                    <a>
                      <p>Visit the Github page!</p>
                    </a>
                  </div>
                </div>
              </a>
              <a href="https://github.com/spankie1337/PROM_keypad">
                <div>
                  <div>
                    <div>
                      <img src="../assets/PROM.jpg" />
                    </div>
                  </div>
                  <div>
                    <h4>PROM Keypad Lock</h4>
                    <p>A hardware project I worked on during my first year at University wth 2 other students.</p>
                    <a>
                      <p>Visit the Github page!</p>
                    </a>
                  </div>
                </div>
              </a>
              <a href="https://github.com/Mrchazaaa/myVimRC">
                <div>
                  <div>
                    <div>
                      <img src="../assets/vim.png" />
                    </div>
                  </div>
                  <div>
                    <h4>My VimRC</h4>
                    <p>I am a big fan of Vim (the command line text editor) and host my vim configuration file on my Github.</p>
                    <a>
                      <p>Visit the Github page!</p>
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <p>Here is a video demonstrating one of the more exciting extra features we added to our PROM Keypad Lock, consisting of a 
                piezoelectric buzzer we programmed to sing famous tunes!</p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nL3srjRjIdc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="lessMore">
            <p>Show more...</p>
          </div>

          <!--Hobbies-->
          <div class="group-item" id="hobbies">
            <h2>Hobbies</h2>
            <p>
              Outside of university, I like competing in hackathons, reading, working on
              personal projects and playing music (I play the guitar and drums).
            </p>
            <CarouselComponent />
            <h3>Hackathons</h3>
            <p>I really enjoy hackathons, particularly team based ones, and have so far competed in the following:</p>
            <table class="table table-striped" id="hackathonsTable">
              <thead>
                <thead></thead>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Google Code Jam (2017)</td>
                </tr>
                <tr>
                  <td scope="row">Google Hashcode (2017)</td>
                </tr>
                <tr>
                  <td scope="row">Google Hashcode (2018)</td>
                </tr>
                <tr>
                  <td scope="row">BAE Systems Capture the Flag (2017)</td>
                </tr>
                <tr>
                  <td scope="row">BAE Systems Capture the Flag (2018)</td>
                </tr>
                <tr>
                  <td scope="row">BBC Hackathon (2017)</td>
                </tr>
                <tr>
                  <td scope="row">ARM Hackathon (2017)</td>
                </tr>
              </tbody>
            </table>

            <h3>Volunteering</h3>
            <p>
              In the summer after my first year at University, I spent 2 months in Greece volunteering with the
              <a
                href="https://www.archelon.gr/index_eng.php"
              >Sea Turtle Protection Society of Greece</a>. I found this a
              really fun, rewarding experience and am eager to engage in more volunteering opportunities in the future. I am hoping to
              be able to partake in the
              <a
                href="https://www.volunteerics.org/"
              >International Citizen Service</a> volunteering program in 2019.
            </p>
          </div>
          <div class="lessMore">
            <p>Show more...</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <!--University info-->
          <div class="group-item" id="uni-info">
            <h2>University</h2>
            <p>
              I'm on schedule to graduate with a BEng/BSc in Computer Science in 2019. Here I list the modules I've studied to date,
              information about some of the societies I've joined at York and more information about my third year project.
            </p>

            <h3>Modules</h3>
            <p>
              Many of the modules through my 1st and 2nd year were compulsory. However, towards my final year I
              chose to study many modules related to the theory and implementation of real-time and embedded systems.
            </p>
            <p class="toggle-list list-group-item">First Year Modules</p>
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
            <p>
              During my time at University I've taken part in a number of societies, which I've listed here to demonstrate the kind of activities I enjoy
              outside of studying:
            </p>
            <p></p>
            <table class="table table-striped" id="societiesTable">
              <thead>
                <thead></thead>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Cyber Security Society</td>
                </tr>
                <tr>
                  <td scope="row">Dog Society</td>
                </tr>
                <tr>
                  <td scope="row">Game Development Society</td>
                </tr>
                <tr>
                  <td scope="row">Movie Society</td>
                </tr>
                <tr>
                  <td scope="row">Band Society</td>
                </tr>
              </tbody>
            </table>
            <p>I'm also a recipient of the University's "Futures Scholarship".</p>

            <h3>Third Year Project</h3>
            <p>
              One of the more interesting parts of my curriculum is my third year project. For which I will be undertaking a self-defined project entitled:
              "Construction and Timing Analysis of Automotive Control Software Benchmarks". This project aims to construct automotive control software benchmarks
              and, upon successful construction, perform timing analysis on them. This project will be a great contribution to the academic
              community working on topics related to automotive control as such software is usually proprietary and confidential, and thus
              agreed upon benchmark results have yet to be published.
            </p>
          </div>
          <div class="lessMore">
            <p>Show more...</p>
          </div>
          <!--CV-->
          <div class="group-item" id="cv">
            <h2>Curriculum Vitae</h2>
            <p>Find enclosed a copy of my C.V</p>
            <a href="./Charles_Howlett.pdf">Charles_Howlett.pdf</a>
            <p style="margin-top: 10px;">
              *note that some contact information on this copy has been hidden for privacy purposes,
              you'll find more ways to contact me at the bottom of this page!
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <!--div class="row well hidden-sm hidden-xs" id="introduction"-->

    <!--Contact Information-->
    <div class="row" id="contact-info">
      <div class="hidden-sm hidden-xs col-md-2"></div>
      <div class="col-xs-6 col-md-2 contact">
        <a href="https://github.com/Mrchazaaa/">
          <img src="../assets/github.svg" />
        </a>
      </div>
      <div class="col-xs-6 col-md-2 contact">
        <a href="https://www.linkedin.com/in/charles-howlett-383b26155/">
          <img src="../assets/linkedin.svg" />
        </a>
      </div>
      <div class="col-xs-6 col-md-2 contact">
        <a href="https://www.facebook.com/charlie.howlett.1">
          <img src="../assets/facebook.svg" />
        </a>
      </div>
      <div class="col-xs-6 col-md-2 contact">
        <a href="mailto:charlie.howlett@live.co.uk">
          <img src="../assets/email.svg" />
        </a>
      </div>
      <div class="hidden-sm hidden-xs col-md-2"></div>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
  //setup animations for each toggleable list
  $(".toggle-list")
    .next()
    .hide();
  $(".toggle-list").on("click", function(event) {
    $(this)
      .next()
      .slideToggle("slow");
    $(this).toggleClass("toggle-listClicked");
  });

  //setup show more buttons (on smaller screens)
  $(".lessMore").on("click", function(event) {
    $(this)
      .prev()
      .toggleClass("readMore", 1200);
    $(this).text(function(i, text) {
      return text === "Show more..." ? "Show less..." : "Show more...";
    });
  });

  //make worktable rows clickable
  $("#workTable tr").mousedown(function(event) {
    if (event.which != 3) {
      window.location = $(this)
        .find("a")
        .attr("href");
    }
  });

  function resizeConfigure() {
    //on smaller screens...
    console.log($(window).width());
    if ($(window).width() <= 976) {
      $("#topSideBar").removeClass("hidden");
      $("#menu-open").addClass("hidden");
      if (!$(".group-item").hasClass("readMore")) {
        $(".group-item").addClass("readMore");
      }
      $(".lessMore").removeClass("hidden");
      $(".lessMore").text("Show more...");

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
  $(window).resize(function() {
    resizeConfigure();
  });
});

import CarouselComponent from "./Carousel.vue";

export default {
  name: "MainContent",
  components: {
    CarouselComponent
  }
};
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
  border-left-left-radius: 0px;
  border-left-left-radius: 0px;
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
.row {
  margin: 0px;
  padding: 0px;
}
.readMore {
  overflow-y: hidden;
  height: 300px;
  border-radius: 4px 4px 0px 0px !important;
}
.lessMore {
  margin: 0px 7.5px 0px 7.5px;
  padding: 10px 15px 10px 15px;
  border: 1px solid #e3e3e3;
  border-radius: 0px 0px 4px;
  background-color: #eaeaea;
  font-weight: bold;
}
.lessMore:hover {
  background-color: #596475;
  color: #fff;
  cursor: pointer;
}
#cv {
  height: auto;
}
#cv a {
  font-weight: bold;
  background-color: #363635;
  color: #fff;
  padding: 7.5px;
  border: 1px solid #000;
  border-radius: 4px;
  text-decoration: none;
}
#cv a:hover {
  background-color: #eaeaea;
  color: #363635;
}
#page-container {
  max-width: 1600px;
  padding-top: 20px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 0px; */
  /* padding-right: 0px; */
  /* margin-left: 0px; */
  /* margin-right: 0px; */
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
  font-size: 34px;
  margin-top: 0;
}
h3 {
  font-weight: bold;
}
.group-item > p {
  text-align: justify;
}
.group-item {
  font-size: 14px;
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
  width: 100%;
}
.work-table {
  width: 100%;
  text-decoration: unset;
}
.work-table > a,
.work-table > a:active,
.work-table > a:focus {
  text-decoration: none !important;
  color: unset;
}
.work-table > a > div:hover {
  text-decoration: none !important;
  color: unset;
  background-color: #eaeaea !important;
}
.work-table img {
  width: 100px;
  height: 100px;
}
.work-table > a:nth-child(1) > div {
  border-top: 1px solid #e3e3e3;
}
.work-table > a > div {
  display: flex;
  border: 1px solid #e3e3e3;
  border-top: none;
}
.work-table > a:nth-child(odd) > div {
  background-color: #f9f9f9;
}
.work-table > a > div > div:nth-child(1) {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.work-table > a > div > div:nth-child(2) {
  padding: 8px;
  flex: 1;
}
/*use flex to vertically center icons in previous work table*/
.my-center-icons {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.my-center-icons img {
}
#workTable img {
  width: 100px;
  height: 100px;
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
/*use flex to vertically center icons in previous work table*/
.contact {
  height: 40px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact img {
  height: 50px;
  display: inline-block;
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
.center-icons {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 116px;
  padding: 0px;
  padding-left: 8px;
}
.center-icons div {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
#contact-info {
  margin-top: 45px;
  margin-bottom: 35px;
}
</style>
