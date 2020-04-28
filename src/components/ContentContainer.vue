<template>
  <div id="page-container">
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
        <img id="portrait" src="../assets/photo-of-me.webp" />
      </div>
    </div>
    <hr class="hidden-sm hidden-xs" />
    <div id="group-content">
      <div class="row">
        <div class="col-12 col-lg-6">
          <!--Previous work-->
          <div class="group-item" id="prev-work">
            <h2>Previous Work</h2>
            <!-- <WorkTableComponent /> -->
            <p>Here you can find some of the past projects that I've worked on from self-driving robots to board game playing AIs, 
              feel free to click on an icon to learn more!</p>
            <IconGridComponent 
              :items="[{width: 4, image: require('@/assets/go.png'), link: 'https://github.com/Mrchazaaa/go-bot'},
                       {width: 4, image: require('@/assets/universe-city.png'), link: 'https://github.com/Mrchazaaa/universe-city'},
                       {width: 4, image: require('@/assets/github.svg'), link: 'https://github.com/Mrchazaaa/'},
                       {width: 4, image: require('@/assets/PROM.jpg'), link: 'https://github.com/spankie1337/PROM_keypad'},
                       {width: 4, image: require('@/assets/charlierobot.png'), link: 'https://github.com/Mrchazaaa/charlie-robot'},
                       {width: 4, image: require('@/assets/vim.png'), link: 'https://github.com/Mrchazaaa/vim-rc'}]"
              :rowWidth="12" />

            <h3>Micro-controller Powered Music!</h3>
            <p>
              In addition to the electrical system we designed for the University of York's Programming of Micro-Controllers module, 
              my classmates and I supplemented out work by adding singing capabilities via a piezoelectric buzzer!
            </p>

            <div class='embed-container'>
              <iframe src='https://www.youtube.com/embed/nL3srjRjIdc?rel=0' 
                frameborder='0' 
                allowfullscreen>
              </iframe>
            </div>

            <h2>Achievements</h2>
            <p>As well as being a recipient of the Institute of Engineering's Horizons Bursary, 
              I'm also proud of the voluminous collection of badges I've earnt through self-teaching coding resources!
              Click on any of the icons below to be taken to my profile on the respective sites!</p>

            <IconGridComponent
              :items="[{width: 6, image: require('@/assets/codewars.png'), link: 'https://www.codewars.com/users/Mrchazaaa'},
                       {width: 6, image: require('@/assets/codeacademy.jpg'), link: 'https://www.codecademy.com/users/Mrchazaaa/achievements'},
                       {width: 12, image: require('@/assets/IET-bursary.jpg')}]"
             :rowWidth="12" />
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
              The topic of my dissertation focused around a self-defined project entitled:
              <strong>
                "Construction of
                Automotive Control Software"
              </strong>, I produced an Anti-Lock Braking System (ABS) which
              attempted to mimic the timing characteristics of commercial ABS products, by implementing an older algorithm
              as defined in a paper published by <strong>Bosch</strong>. However, this paper did not completely describe the
              system's construction (particularly determining vehicle speed within the ABS Electronic Control Unit)
              and so work from several other research areas were combined to produce a working Anti-lock Braking
              System that reflects those used in the real world.
            </p>
            <LightBoxComponent />
            <p>
              The majority of this work was completed using
              <strong>C/C++</strong>. An open-source driving simulator 
              (<a href="http://www.speed-dreams.org/">Speed Dreams 2</a>), featuring realistic
              tire physics and individual wheel braking, was used in verifying code functionality.
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

    <hr/>

    <!--Contact Information-->
    <IconGridComponent
      :items="[{width: 3, image: require('@/assets/github.svg'), link: 'https://github.com/Mrchazaaa/'},
               {width: 3, image: require('@/assets/linkedin.svg'), link: 'https://www.linkedin.com/in/charles-howlett-383b26155/'},
               {width: 3, image: require('@/assets/facebook.svg'), link: 'https://www.facebook.com/charlie.howlett.1'},
               {width: 3, image: require('@/assets/email.svg'), link: 'mailto:charlie.howlett@live.co.uk'}]"
      :rowWidth="12"
      :height="75" />
  </div>
</template>

<script>
  import CarouselComponent from "./Carousel.vue";
  import ToggleListComponent from "./ToggleList.vue";
  import MoreLessComponent from "./MoreLess.vue";
  import WorkTableComponent from "./WorkTable.vue";
  import LightBoxComponent from "./LightBox.vue";
  import IconGridComponent from "./IconGrid.vue";

  export default {
    name: "ContentContainerComponent",
    components: {
      CarouselComponent,
      ToggleListComponent,
      MoreLessComponent,
      WorkTableComponent,
      LightBoxComponent,
      IconGridComponent,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* necessary setting jumbotron to correct width */
  @media (min-width: $breakpoint-xl) {
    #page-container {
      max-width: 1140px !important;
    }
  }
  /* #work-items {
    display: flex;
    flex-wrap: wrap;
  }
  #work-items div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
  }
  #work-items img {
    height: 100px;
    border-radius: 10px;
    transition: 0.5s;
  }
  #work-items img:hover {
    height: 120px;
    transition: 0.5s;
  } */
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
  #iet-banner {
    width: 100%;
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
  #cv {
    padding: 0px;
    border: none;
    margin: 15px 0px;
  }
  #cv a {
    padding: 0.75rem 1.5rem;
  }
  .embed-container { 
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%; 
  } 
  .embed-container iframe, .embed-container object, .embed-container embed { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
  }
  #iet-banner {
    width: 100%; 
    margin-bottom: 10px; 
  }
</style>
