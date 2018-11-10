<template>
<div id="page-container" class="container bg-light">
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

    <div id="group-content" class ="container bg-light">
        <div class="row">
            <div class="col-md-6">
                <!--Github stuff-->
                <div class="group-item ">
                    <h2>Some of My Work</h2>
                    <p>Here are a few of the projects I'm proud to have worked on in 
                    the past.</p>
                </div>
                <!--Hobbies-->
                <div class="group-item ">
                    <h2>Hobbies</h2>
                    <p>In my spare time I like competing in hackathons, working on
                    personal projects and playing music. When I'm not too busy studying for 
                    my next AI exam, I enjoy working on personal projects, reading, attending hackathons and playing the guitar/drums! </p>
                </div>
            </div>
            <div class="col-md-6">
                <!--University info-->
                <div class="group-item ">
                    <h2>University</h2>
                    <p>I study at... blur blur blur. Ive been in these societies and study these specific modules and my third year project</p>
                </div>
                <!--CV-->
                <div class="group-item ">
                    <h2>Curriculum Vitae</h2>
                    <p>Find enlosed a copy of my C.V *note that contact information on
                    this copy has been hidden for privary purposes</p>
                </div>
            </div>
        </div>
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
#page-container{
    max-width: 1600px;
    /* width: 100%; */
    background-color: #f8f9fa;
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
.group-item {
    background-color: red;
    padding: 15px;
    margin: 7.5px;
    margin-top: 15px;
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
