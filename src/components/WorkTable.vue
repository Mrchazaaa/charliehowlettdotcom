<template>
  <div class="work-table">
    <a href="./Go.zip">
      <div>
        <div>
          <div>
            <img src="../assets/go.png" />
          </div>
        </div>
        <div>
          <h4>Go AI</h4>
          <p>During sixth form, I made this AI to play the board game "Go", for my extended project qualification.</p>
          <a href="./Go.zip">
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
          <a href="./UniverseCity.zip">
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
          <a href="https://github.com/Mrchazaaa/MyOwnWebsite">
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
          <a href="https://github.com/spankie1337/PROM_keypad">
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
          <a href="https://github.com/Mrchazaaa/myVimRC">
            <p>Visit the Github page!</p>
          </a>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkTable"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 767px) {
  .work-table img {
    display: none;
  }
}
h4 {
  font-weight: bold;
}
.work-table {
  width: 100%;
  text-decoration: unset;
  margin-top: 10px;
  margin-bottom: 10px;
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
  padding: 10px 8px 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.work-table > a > div > div:nth-child(2) {
  padding: 10px 8px 0 8px;
  flex: 1;
}
</style>
