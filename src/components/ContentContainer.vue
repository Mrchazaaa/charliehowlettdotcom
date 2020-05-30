<template>
  <div id="content-container">
    <!--Introduction-->
    <div id="introduction" class="jumbotron">
      <h2 class="lead">
        "I'm a recent computer science graduate of the University of York. I designed
        this site to supplement my cv and give people a way to get to know me and the 
        kind of work I do. Below, you'll find links to a few of my
        past projects and some more information about what I enjoy doing in my free time!"
      </h2>
      <div id="portrait">
        <img src="../assets/photo-of-me.webp" />
      </div>
    </div>
    <hr />

    <div id="content-collection">
      <div>
        <!--Previous work-->
        <div class="content-item card" id="previous-work">
          <h2>Previous Work</h2>
          <p>Here you can find some of the past projects that I've worked on from self-driving robots to board game playing AIs, 
            feel free to click on an icon to learn more!</p>
          <IconGridComponent 
            :items="[{width: 4, image: require('@/assets/go.png'), link: 'https://github.com/Mrchazaaa/go-bot'},
                      {width: 4, image: require('@/assets/universe-city.png'), link: 'https://github.com/Mrchazaaa/universe-city'},
                      {width: 4, image: require('@/assets/spotify-glitch.jpg'), link: 'https://open.spotify.com/playlist/4d8VWZlfzYbWl4j6KiPuNC?si=C1TcDxlbTP2aeNFl94_c5w'},
                      {width: 4, image: require('@/assets/PROM.jpg'), link: 'https://github.com/spankie1337/PROM_keypad'},
                      {width: 4, image: require('@/assets/charlierobot.png'), link: 'https://github.com/Mrchazaaa/charlie-robot'},
                      {width: 4, image: require('@/assets/vim.png'), link: 'https://github.com/Mrchazaaa/vim-rc'}]"
            :rowWidth="12"/>

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

          <div id="achievments-grid"> 
            <IconGridComponent
              :items="[{width: 5, image: require('@/assets/codewars.png'), link: 'https://www.codewars.com/users/Mrchazaaa'},
                        {width: 7, image: require('@/assets/codeacademy.jpg'), link: 'https://www.codecademy.com/users/Mrchazaaa/achievements'},
                        {width: 12, image: require('@/assets/IET-bursary.png')}]"
              :rowWidth="12" />
          </div>
        </div>
        <!--Hobbies-->
        <div class="content-item card" id="hobbies">
          <h2>Hobbies</h2>
          <p>
            In my spare time I like: reading, learning about web Development 
            and playing music (I play both the guitar and drums). I'm also an avid 
            proponent of the <a href="https://www.raspberrypi.org/">Raspberry Pi</a> and have used 
            rasperry pi products in developing various 
            novel projects as well as testing networking principles.
          </p>
          <CarouselContainer />
          <h3>Hackathons</h3>
          <p>One of my most rewarding hobbies is participating in hackathons, particularly team based ones, and have 
              so far competed in the following:</p>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>Google Code Jam (2017)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>Google Hashcode (2017)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>Google Hashcode (2018)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>BAE Systems Capture the Flag (2017)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>BAE Systems Capture the Flag (2018)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>BBC Hackathon (2017)</td>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <td>ARM Hackathon (2017)</td>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <!--University info-->
        <div class="content-item card" id="uni-info">
          <h2>University</h2>
          <p>
            I graduated from the <strong>University of York</strong> with a BEng/BSc in Computer Science in 2019, having 
            recieved the University's <strong>York Futures Scholarship</strong>. 
          </p>
          <ToggleListComponent
            :content=" {title:'First Year Modules', 
                      items:[{text: 'Human Aspects of Computer Science'}, 
                              {text: 'Skills, Knowledge & Independent Learning'}, 
                              {text: 'Introduction to Computer Architectures'},
                              {text: 'Mathematical Foundations of Computer Science'},
                              {text: 'Theory & Practice of Programming'},
                              {text: 'Numerical Analysis'},
                              {text: 'Foundation in Electronics, Signals & Circuits'},
                              {text: 'Programming of micro-controllers'}]}"
          />
          <ToggleListComponent
            :content=" {title:'Second Year Modules', 
                      items:[{text: 'Vision & Graphics'}, 
                              {text: 'Implementation of Programming Languages'}, 
                              {text: 'Principles of Programming Languages'},
                              {text: 'Software Engineering Project'},
                              {text: 'Computability & Complexity'},
                              {text: 'Artificial Intelligence'},
                              {text: 'Systems (Operating Systems)'}]}"
          />
          <ToggleListComponent
            :content=" {title:'Third Year Modules', 
                      items:[{text: 'Analysable Real-Time Systems'}, 
                              {text: 'Fundamentals of Machine Learning'}, 
                              {text: 'Project Management for Computer Scientists'},
                              {text: 'Embedded Systems Design & Implementation'},
                              {text: 'Third Year Project (Dissertation)'},
                              {text: 'Computer Vision'},
                              {text: 'Design of Analysable Real-Time Systems'},
                              {text: 'Machine Learning & Probabilistic Graphical Models'}]}"
          />
          <ToggleListComponent
            :content=" {title:'Societies', 
                      items:[{text: 'Cyber Security Society'}, 
                              {text: 'Dog Society'}, 
                              {text: 'Game Development Society'},
                              {text: 'Movie Society'},
                              {text: 'Band Society'}]}"
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
            <a href="http://www.speed-dreams.org/">Speed Dreams 2</a>, featuring realistic
            tire physics and individual wheel braking, was used in verifying code functionality.
          </p>
        </div>

        <!--Volunteering-->
        <div class="content-item card" id="volunteering">
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
      </div>
    </div>
    
    <!--CV-->
    <button 
      id="cv"
      type="button" 
      class="btn btn-primary btn-lg btn-block" 
      @click="openCV">
      <h3>View My CV!</h3>
    </button>

  </div>
</template>

<script>
  import CarouselContainer from "./CarouselContainer.vue";
  import ToggleListComponent from "./ToggleList.vue";
  import LightBoxComponent from "./LightBox.vue";
  import IconGridComponent from "./IconGrid.vue";

  export default {
    name: "ContentContainerComponent",
    components: {
      CarouselContainer,
      ToggleListComponent,
      LightBoxComponent,
      IconGridComponent,
    },
    methods: {
      openCV() {
        window.open('./Charles_Howlett.pdf');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";

  @mixin content-margin-flow {
    margin-bottom: $padding-md;
  }

  @media (max-width: $breakpoint-xl) {
    #content-container {
      padding-top: 0px !important;
    }
    hr {
      display: none !important;
    }
    #previous-work .floating-container {
      height: 150px !important;
    }
    #achievments-grid .floating-container {
      height: 150px !important;
    }
  }
  @media (max-width: $breakpoint-lg) {
    #previous-work .floating-container {
      height: 120px !important;
    }
    #achievments-grid .floating-container {
      height: 120px !important;
    }
  }
  @media (max-width: $breakpoint-md) {
    #previous-work .floating-container {
      height: 75px !important;
    }
    #achievments-grid .floating-container {
      height: 75px !important;
    }
  }
  @media (max-width: $breakpoint-sm) {
    #content-collection {
      grid-template-columns: 1fr !important;
    }
    #cv {
      grid-column: span 1 !important;
    }
    #introduction {
      display: none !important;
    }
    /deep/ #previous-work .floating-container {
      height: 125px !important;
    }
    /deep/ #achievments-grid .floating-container {
      height: 125px !important;
    }
  }
  #content-container {
    max-width: $breakpoint-xl !important;
    // max-width: 1600px;
    padding-top: $padding-lg;
    margin-left: auto;
    margin-right: auto;
  }
  #introduction {
    // background-color: var(--jumbotron-background);
    padding: 5vh 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    h2 {
      display: grid;
      align-items: center; 
      // justify-content: center; 
      grid-column: span 7;
      // font-size: calc(14px + 0.8vw);
      text-align: center;
      padding: 0 2vw;
    }
    img {
      padding-left: 5%;
      padding-right: 5%;
      border-radius: 50%;
      width: 90%;
    }
    #portrait {
      display: grid;
      align-items: center; 
      justify-content: center; 
      grid-column: span 5;
    }
  }
  #content-collection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $margin-md;
    padding: $padding-md $padding-md/2 0 $padding-md/2;
    
    & > div {
      grid-gap: $margin-md;
    }

    .content-item {
      @include content-margin-flow;

      grid-column: span 1;
      // font-size: 14px;
      padding: $padding-md $padding-md 0 $padding-md;
      // text-align: justify;
    }
    .embed-container { 
      @include content-margin-flow;

      position: relative; 
      padding-bottom: 56.25%; 
      height: 0; 
      overflow: hidden; 
      max-width: 100%; 
      iframe, object, embed {
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
      }
    }
  }
  #cv {
    @include content-margin-flow;

    grid-column: span 2;
    // padding: 0.75rem 1.5rem;
    // font-size: 2.5rem;
    // display: block;
    // width: 100%;
    // text-align: center;
  }
</style>
