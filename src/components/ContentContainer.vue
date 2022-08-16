<template>
  <div id="content-container">
    <!--Introduction-->
    <div id="introduction" class="jumbotron">
      <h4 class="">
        "I'm a full stack Software Engineer and built this site to supplement my CV and share personal projects. Below, you'll find links to some of my
        past work and more information about what I enjoy doing in my free time!"
      </h4>
      <div id="portrait">
        <img :src="require('@/assets/trafalgar.webp')" />
      </div>
    </div>
    <hr />

    <div id="content-collection">
      <div>
        <!--Current job-->
        <div class="content-item card" id="current-job">
          <div style="margin: 0px 5px 5px 5px;">
            <FloatingIconComponent
                :image="require('@/assets/mindlink.jpg')"
                :href="'https://www.mindlinksoft.com/'"
                height=200
                />
          </div>
          <h3>Current Job</h3>
          <p>I'm currently employed as a full stack engineer at MindLink, providing a scalable and secure messaging platform for mission critical operations.
            Being a startup, with a relatively small engineering team, I find myself working on new parts of the stack frequently,
            but particulalry enjoy working on DevOps projects and automating all kinds of developer workflows.</p>
        </div>
        <!--Previous work-->
        <div class="content-item card" id="previous-work">
          <h2>Previous Work</h2>
          <IconGridComponent
            :items="[{width: 4, image: require('@/assets/go.png'), link: 'https://github.com/Mrchazaaa/go-bot'},
                      {width: 4, image: require('@/assets/ConnectControl.png'), link: 'https://github.com/thorpelawrence/alexa-spotify-connect'},
                      {width: 4, image: require('@/assets/PROM.jpg'), link: 'https://github.com/spankie1337/PROM_keypad'},
                      {width: 4, image: require('@/assets/charlierobot.png'), link: 'https://github.com/Mrchazaaa/charlie-robot'},
                      {width: 4, image: require('@/assets/LightMonitoring.webp'), link: 'https://github.com/Mrchazaaa/pi-lights'},
                      {width: 4, image: require('@/assets/PresenceMonitoring.webp'), link: 'https://github.com/Mrchazaaa/arduino-monitoring'}
                    ]"
            :rowWidth=12
            :rowHeight=200
            />

          <h3>Micro-controller Powered Music!</h3>
          <p>
            In addition to an electrical system designed for the University of York's 'Programming of Micro-Controllers' module,
            my classmates and I added musical capabilities via a piezoelectric buzzer!
          </p>

          <div class='embed-container'>
            <iframe src='https://www.youtube.com/embed/nL3srjRjIdc?rel=0'
              frameborder='0'
              allowfullscreen>
            </iframe>
          </div>
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
            tire physics and individual wheel braking, was used in verifying code functionality. <a href="ABSConstruction.pdf">View a copy of my dissertation here!</a>
          </p>
        </div>
        <!--Hobbies-->
        <div class="content-item card" id="hobbies">
          <h2>Hobbies</h2>
          <p>
            In my spare time I like: reading, learning about web Development
            and playing music (I play both the guitar and drums). I also occasionally tinker with
            <a href="https://www.raspberrypi.org/">Raspberry Pis</a> and <a href="https://www.arduino.cc/">Arduinos</a>.
          </p>
          <CarouselContainer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CarouselContainer from "./CarouselContainer.vue";
  import ToggleListComponent from "./ToggleList.vue";
  import LightBoxComponent from "./LightBox.vue";
  import IconGridComponent from "./IconGrid.vue";
  import FloatingIconComponent from "./FloatingIcon.vue";

  export default {
    name: "ContentContainerComponent",
    components: {
      CarouselContainer,
      ToggleListComponent,
      LightBoxComponent,
      IconGridComponent,
      FloatingIconComponent,
    },
    methods: {
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
    margin-left: auto;
    margin-right: auto;
  }
  #introduction {
    padding: 5vh 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: $margin-lg;
    h4 {
      display: grid;
      align-items: center;
      grid-column: span 7;
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
    padding: $padding-md $padding-md/2 0 $padding-md/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $margin-md;

    & > div {
      grid-gap: $margin-md;
    }

    .content-item {
      @include content-margin-flow;

      grid-column: span 1;
      padding: $padding-md $padding-md 0 $padding-md;
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
    .list-group, .list-group-item {
      border: none;
    }
  }
  #cv {
    @include content-margin-flow;

    grid-column: span 2;
  }
</style>
