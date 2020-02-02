<template>
  <div id="page-container" class="container">
    <!--Introduction-->
    <div class="jumbotron row well hidden-sm hidden-xs" id="introduction">
      <div class="col-12 col-md-7">
        <p>
          "I'm a recent computer science graduate of the University of York. I designed
          this site to supplement my cv and give people a way to get to know me and the 
          kind of work I do. Below, you'll find links to a few of my
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
          <!--Navbar at the top of the page for smaller screens-->
          <ToggleListComponent
            id="top-sidebar"
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
            <h2>Previous Work</h2>
            <WorkTableComponent />
            <h3>Micro-controller Powered Music!</h3>
            <p>
              As part of our PROM Keypad Lock project (a piece of coursework for the 
              University of York's Programming of Micro-Controllers module), we  
              extended functionality via a piezoelectric buzzer, placed in a paper cup "megaphone" 
              that we programmed to sing a few tunes! 
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
              In my spare time I like: reading, learning about web Development 
              and playing music (I play both the guitar and drums). I'm also an avid 
              proponent of the <a href="https://www.raspberrypi.org/">Raspberry Pi</a> and have used 
              rasperry pi products in developing various 
              novel projects as well as testing networking principles.
            </p>
            <CarouselComponent />
            <h3>Hackathons</h3>
            <p>One of my most rewarding hobbies is participating in hackathons, particularly team based ones, and have 
               so far competed in the following:</p>
            <table class="table table-striped" id="hackathonsTable">
              <thead>
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
              I graduated from the <strong>University of York</strong> with a BEng/BSc in Computer Science in 2019, having 
              recieved the University's <strong>York Futures Scholarship</strong>. 
              Here I list the modules I've studied in attaining this acceditation, as well as some
              information about the societies I participated in whilst at York and some details about my dissertation.
            </p>
            <h3>Modules</h3>
            <p>
              Many of the modules during my 1st and 2nd year were compulsory. However, towards my final year I
              chose to mainly study modules related to the theory and implementation of real-time and embedded systems.
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
            <ToggleListComponent
              :content=" {title:'Societies', 
                        items:[{text: 'Cyber Security Society', link:''}, 
                               {text: 'Dog Society', link:''}, 
                               {text: 'Game Development Society', link:''},
                               {text: 'Movie Society', link:''},
                               {text: 'Band Society', link:''}]}"
            />
            <h3>Dissertation</h3>
            <p>
              In the academic community surrounding automotive-safety, it is vital to incorporate
              the behaviour of widespread software control systems (such as Adaptive Cruise Control,
              Traction Control Systems, etc) into models used in conducting accurate research. However,
              source code for popular commercial implementations of these systems is highly guarded by
              manufacturers and thus it is very difficult for researchers to develop models that accurately
              reflect the systems used in the real world.
            </p>
            <p>
              The topic of my dissertation focused around a self-defined project entitled:
              <strong>
                "Construction of
                Automotive Control Software"
              </strong>, I produced an anti-lock braking system (ABS) which
              attempted to mimic the timing characteristics of commercial ABS products, by implementing an older ABS algorithm
              defined in a paper published by Bosch. However, this paper did not completely describe the
              system's construction (particularly in determining vehicle speed in the ABS Electronic Control Unit)
              and so work from several other research areas were combined to produce a working Anti-lock Braking
              System that, atleast to some degree, reflects those used in the real world.
            </p>
            <p>
              One of the biggest challenges faced in producing this work was determining vehicle longitudinal velocity whilst only
              being able to discern circumferential speeds of individual wheels (these values would not directly
              reflect the actual velocity of the vehicle, under emergency braking conditions, due to large braking
              forces locking up the wheels). To solve this I implemented an
              <a
                href="https://en.wikipedia.org/wiki/Extended_Kalman_filter"
              >Extended Kalman filter</a> which estimates
              vehicle longitudinal velocity by utilising an accurate tire physics model and various other wheel speed data.
              Below, I've included several graphs showing actual vehicle velocity vs velocity calculated by my EKF to demonstrate 
              how it converges on the real value with more accuracy over time.
            </p>
            <LightBoxComponent />
            <p>
              The majority of this work was completed using
              <strong>C/C++</strong>. By implementing the system in
              <a
                href="http://www.speed-dreams.org/"
              >Speed Dreams 2</a>, a driving simulator featuring realistic
              tire physics and individual wheel braking, functionality of the code was verified.
            </p>
          </div>
          <MoreLessComponent />
          <!--Volunteering-->
          <div class="group-item" id="volunteering">
            <h2>Volunteering</h2>
            <p>
            Participating with effective volunteering organizations in the past has been greatly rewarding and 
            provided me with a number of valuable skills and attitudes. I hope to continue working in such positions in the future. 
            </p>
            <h3>Archelon</h3>
            <p>
              In the summer after my first year at University, I spent 2 months in Greece volunteering with the
              <a
                href="https://www.archelon.gr/index_eng.php"
              >Sea Turtle Protection Society of Greece (Archelon)</a>. Where I helped in tracking loggerhead sea turtles and their nests, 
              morning/night monitoring of protected nesting beaches, and fundraising for the charity by operating a 
              small kiosk, which dispensed information and souviners to tourists. Throughout this time, I had cooking and 
              cleaning responsibilities for a group of 50 volunteers.
            </p>
            <p> 
              I found this a really fun and rewarding experience, which fostered the growth of a number of valuable skills.
              For instance, the large team in which I worked was composed of mixed nationalities and language barriers were 
              often present in day to day life, which greatly progressed my communication and teamwork skills.
            </p>
            <h3>Raleigh International</h3>
            <p>
              After graduating from University, I spent 3 months in rural Tanzania working alongside both UK and Tanzanian volunteers 
              to provide daily entrepreneurial classes to villagers, with <a href="https://raleighinternational.org/">Raleigh International</a>. This work intended to 
              arm such poverty stricken areas with the Knowledge necessary to start sustainable businesses, and provided several grants 
              to locals to help fund their businesses.
            </p>
            <p>
              Throughout this time, all 20 volunteers in our team lived among local families, eating local foods and becoming ecnompassed within the community. 
              As well as organize lessons we also coordinated several events to raise awareness of our work, each of which attracted over 200 people. 
            </p>
            <!-- put in oven picture -->
          </div>
          <MoreLessComponent />
        </div>
        <!--CV-->
          <div  class="col-12" id="cv">
            <a
              href="./Charles_Howlett.pdf"
              class="btn btn-primary btn-block active"
              role="button"
              style="font-size: 14px"
              aria-pressed="true"
            >
              <h3>View My CV!</h3>
            </a>
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
    if ($(window).width() <= 976) {
      // show navbar on the top of the page
      $("#top-sidebar").removeClass("hidden");
      // hide button used to open sidebar
      $("#menu-open").addClass("hidden");
    }
    //on larger screens...
    else {
      // hide navbar on the top of the page
      $("#top-sidebar").addClass("hidden");
      // show button used to open sidebar
      $("#menu-open").removeClass("hidden");
    }
    //always close sidebar after resizing
    $("#app").removeClass("toggled");
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
import LightBoxComponent from "./LightBox.vue";

export default {
  name: "MainContent",
  components: {
    CarouselComponent,
    ToggleListComponent,
    MoreLessComponent,
    WorkTableComponent,
    LightBoxComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* necessary setting jumbotron to correct width */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px !important;
  }
}
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
  margin-bottom: 6px;
}
h3 {
  font-weight: bold;
  font-size: 2.5rem;
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
#cv {
  padding: 0px;
  border: none;
  margin: 15px 0px;
}
#cv a {
  padding: 0.75rem 1.5rem;
}
</style>
