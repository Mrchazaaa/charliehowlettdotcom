<template>
<div id="content-container" class="container bg-light">
    <!--Introduction-->
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-6 content">
            <h2>A bit about me</h2>
            <p>I'm currently in my third year of studying at the University of York, working towards a BSc/BEng in computer science. I designed 
            this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
            Github projects and When I'm not too busy studying for 
            my next AI exam, I enjoy working on personal projects, reading, attending hackathons and playing the guitar/drums! </p>
        </div>
        <div class="col-sm-4">
            <img id="portrait" src="../assets/photo-of-me.jpg">
        </div>
        <div class="col-sm-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 well content">
        <h2>Some of My Work</h2>
        <p>Here are a few of the projects I'm proud to have worked on in 
        the past.</p>
        </div>
        <div class="col-sm-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 content">
            <h2>Hobbies</h2>
            <p>In my spare time I like competing in hackathons, working on
            personal projects and playing music.</p>
        </div>
        <div class="col-sm-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 well content">
            <h2>Curriculum Vitae</h2>
            <p>Find enlosed a copy of my C.V *note that contact information on
            this copy has been hidden for privary purposes</p>
        </div>
        <div class="col-sm-1"></div>
    </div>

    <!--Github stuff-->
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 content">
            <h2>A bit about me</h2>
            <p>I'm currently in my third year of studying at the University of York, working towards a BSc/BEng in computer science. I designed 
            this page to supplement my cv and give people a way to get to know me and the kind of work I do. Below, you'll find links to a few of my
            Github projects and When I'm not too busy studying for 
            my next AI exam, I enjoy working on personal projects, reading, attending hackathons and playing the guitar/drums! </p>
        </div>
        <div class="col-sm-1"></div>
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
#portrait {
    padding-top: 20px;
    border-radius: 50%;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 325px;
    max-width: 325px;
}
h2 {
    /* text-decoration: underline; */
    /* consider switching to "strong" tags instead as they are better for screen
    readers... */
    font-weight: bold;
    font-size: 3em;
}
p {
    font-size: 1.5em;
}
.content {
    margin: 0;
    margin-top: 5vh;
    padding-left: 2vw;
}
</style>
