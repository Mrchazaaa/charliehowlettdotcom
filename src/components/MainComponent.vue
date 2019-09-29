<template>
  <div id="page-container" class="container">
    <!--Introduction-->
    <div class="jumbotron row well hidden-sm hidden-xs" id="introduction">
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
          <ToggleListComponent
            id="topSideBar"
            :content="{title:'Nav', 
                items:[{text:'Top', link:'#sketch'},
                       {text:'Previous Work', link:'#prev-work'},
                       {text:'University', link:'#uni-info'},
                       {text:'Hobbies', link:'#hobbies'},
                       {text:'CV', link:'#cv'},
                       {text:'Contact', link:'#contact-info'}]}"
          />
          <!--Previous work-->
          <div class="group-item" id="prev-work">
            <h2>Some of My Work</h2>
            <p>
              Here are a few of the projects I'm proud to have worked on in
              the past:
            </p>
              <WorkTableComponent/>
            <p>
              Here is a video demonstrating one of the more exciting extra features we added to our PROM Keypad Lock, consisting of a
              piezoelectric buzzer we programmed to sing famous tunes!
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nL3srjRjIdc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <MoreLessComponent />
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
          </div>
          <MoreLessComponent />
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
            <ToggleListComponent
              :content=" {title:'First Year Modules', 
                        items:[{text: 'Human Aspects of Computer Science', link:''}, 
                               {text: 'Skills, Knowledge & Independent Learning', link:''}, 
                               {text: 'Introduction to Computer Architectures', link:''},
                               {text: 'Mathematical Foundations of Computer Science', link:''},
                               {text: 'Theory & Practice of Programming', link:''},
                               {text: 'Numerical Analysis', link:''},
                               {text: 'Foundation in Electronics, Signals & Circuits', link:''},
                               {text: 'Programming of micro-controllers', link:''}]}"
            />
            <ToggleListComponent
              :content=" {title:'Second Year Modules', 
                        items:[{text: 'Vision & Graphics', link:''}, 
                               {text: 'Implementation of Programming Languages', link:''}, 
                               {text: 'Principles of Programming Languages', link:''},
                               {text: 'Software Engineering Project', link:''},
                               {text: 'Computability & Complexity', link:''},
                               {text: 'Artificial Intelligence', link:''},
                               {text: 'Systems (Operating Systems)', link:''}]}"
            />
            <ToggleListComponent
              :content=" {title:'Third Year Modules', 
                        items:[{text: 'Analysable Real-Time Systems', link:''}, 
                               {text: 'Fundamentals of Machine Learning', link:''}, 
                               {text: 'Project Management for Computer Scientists', link:''},
                               {text: 'Embedded Systems Design & Implementation', link:''},
                               {text: 'Third Year Project (Dissertation)', link:''},
                               {text: 'Computer Vision', link:''},
                               {text: 'Design of Analysable Real-Time Systems', link:''},
                               {text: 'Machine Learning & Probabilistic Graphical Models', link:''}]}"
            />
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
          <MoreLessComponent />
          <!--Volunteering-->
          <div class="group-item" id="volunteering">
            <h2>Volunteering</h2>
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
          <MoreLessComponent />
          <!--CV-->
          <div class="group-item" id="cv">
            <h2>Curriculum Vitae</h2>
            <p>Find enclosed a copy of my C.V</p>
            <a
              href="./Charles_Howlett.pdf"
              class="btn btn-primary btn-lg active"
              role="button"
              style="font-size: 14px"
              aria-pressed="true"
            >Charles_Howlett.pdf</a>
            <p style="margin-top: 10px;">
              *note that some contact information on this copy has been hidden for privacy purposes,
              you'll find more ways to contact me at the bottom of this page!
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!--Contact Information-->
    <div class="row" id="contact-info">
      <div class="hidden-xs col-md-2"></div>
      <div class="col-6 col-md-2 contact">
        <a href="https://github.com/Mrchazaaa/">
          <img src="../assets/github.svg" />
        </a>
      </div>
      <div class="col-6 col-md-2 contact">
        <a href="https://www.linkedin.com/in/charles-howlett-383b26155/">
          <img src="../assets/linkedin.svg" />
        </a>
      </div>
      <div class="col-6 col-md-2 contact">
        <a href="https://www.facebook.com/charlie.howlett.1">
          <img src="../assets/facebook.svg" />
        </a>
      </div>
      <div class="col-6 col-md-2 contact">
        <a href="mailto:charlie.howlett@live.co.uk">
          <img src="../assets/email.svg" />
        </a>
      </div>
      <div class="hidden-xs col-md-2"></div>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
  function resizeConfigure() {
    //on smaller screens...
    console.log($(window).width());
    if ($(window).width() <= 976) {
      $("#topSideBar").removeClass("hidden");
      $("#menu-open").addClass("hidden");
      //always close sidebar after resizing
      $("#app").removeClass("toggled");
    }
    //on larger screens...
    else {
      $("#topSideBar").addClass("hidden");
      $("#menu-open").removeClass("hidden");
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
import ToggleListComponent from "./ToggleList.vue";
import MoreLessComponent from "./MoreLess.vue";
import WorkTableComponent from "./WorkTable.vue";

export default {
  name: "MainContent",
  components: {
    CarouselComponent,
    ToggleListComponent,
    MoreLessComponent,
    WorkTableComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* necessary setting jumbotron to correct width */
@media (min-width: 1200px) { .container {
  max-width: 1140px !important;
}}
#page-container {
  max-width: 1600px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.row {
  margin: 0px;
  padding: 0px;
}
h2 {
  font-weight: bold;
  font-size: 34px;
  margin-top: 0;
}
h3 {
  font-weight: bold;
}
/deep/ h4 {
    font-size: 18px;
}
.group-item > p {
  text-align: justify;
}
.group-item {
  font-size: 14px;
  padding: 15px 15px 0 15px;
  margin: 15px 7.5px 0px 7.5px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
}
#introduction {
  padding: 5vh 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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
#group-content div[class*="col-"] {
  padding: 0px;
}
thead {
  cursor: pointer;
}
table {
  margin: 0 0 10px 0;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  font-weight: bold;
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
#contact-info {
  margin-top: 45px;
  margin-bottom: 35px;
}
</style>
