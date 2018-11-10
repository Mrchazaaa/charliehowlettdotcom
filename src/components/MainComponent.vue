<template>
<div id="content-container" class="container bg-light">
    <!--Introduction-->
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-6 content">
            <h2>A bit about me</h2>
            <p>I'm currently in my third year of studying at the University of York, working towards a BSc/BEng in computer science. I designed 
            this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
            Github projects and When I'm not too busy studying for 
            my next AI exam, I enjoy working on personal projects, reading, attending hackathons and playing the guitar/drums! </p>
        </div>
        <div class="col-md-4" id="portrait-container">
            <img id="portrait" src="../assets/photo-of-me.jpg">
        </div>
        <div class="col-md-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 well content">
        <h2>Some of My Work</h2>
        <p>Here are a few of the projects I'm proud to have worked on in 
        the past.</p>
        </div>
        <div class="col-md-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 content">
            <h2>Hobbies</h2>
            <p>In my spare time I like competing in hackathons, working on
            personal projects and playing music.</p>
        </div>
        <div class="col-md-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 well content">
            <h2>Curriculum Vitae</h2>
            <p>Find enlosed a copy of my C.V *note that contact information on
            this copy has been hidden for privary purposes</p>
        </div>
        <div class="col-md-1"></div>
    </div>

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
    export default {
      name: 'MainContent'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content-container {
    /* height: calc(100% - 100vh); */
}
.container{
    width: 100%;
    position: absolute;
    top: 100vh;
    left: 0px;
    background-color: #f8f9fa;
    padding-top: 50px;
    padding-left: 7vw;
    padding-right: 10vw;
}
.row {
    padding: 5vh 0;

    /* position: relative; */
}
#portrait-container {
    /* height: calc(100% - 10vh); */
    height: 100%;
    /* width: 100%; */
    display: inline-block;
    /* padding: 35px; */
    /* background: red; */

    /* position: absolute; */
}
#portrait {
    /* display: bock; */
    border-radius: 50%;
    width: 275px;
    height: 275px;
}
h2 {
    /* consider switching to "strong" tags instead as they are better for screen
    readers... */
    font-weight: bold;
    font-size: calc(32px + 1vw); 
    margin-top: 0;
}
p {
    font-size: calc(14px + 0.8vw); 
}
.content {
    margin: 0;
    padding-left: 2vw;
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
</style>
