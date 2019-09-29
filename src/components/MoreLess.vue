<template>
  <div class="lessMore">
    Show more...
    <!-- <p>Show more...</p> -->
  </div>
</template>

<script>
$(document).ready(function() {
  //setup "show more/less" buttons (on smaller screens)
  $(".lessMore").on("click", function(event) {
    if ($(this).prev().hasClass("readMore")) {

        $(this).prev().css('height', 'auto');
        
        //var autoHeight = $(this).prev().css('height', 'auto').height();//$(this).prev().outerHeight();

        $(this)
          .prev()
          .removeClass("readMore");

        var autoHeight = $(this).prev().outerHeight();
        console.log(autoHeight);

        $(this)
          .prev()
          .addClass("readMore");

        //var autoHeight = $(this).prev().css('height', 'auto').height();
        
        $(this).prev().height(300).animate({height: autoHeight}, {
          duration: "slow"
        }).promise().then(() => {
          $(this).prev().css('height', '');
        });

        // $(this)
        //   .prev()
        //   .css('height', '');

    } else {
      $(this)
        .prev()
        .animate(
          { height: 300 },
          {
            duration: "slow"
          }
        ).promise().then(() => {
          $(this).prev().css('height', '');
        });;
    }

    $(this)
      .prev()
      .toggleClass("readMore");//, 1200);
    $(this).text(function(i, text) {
      return text === "Show more..." ? "Show less..." : "Show more...";
    });

  });

  resizeConfigure();
});

function resizeConfigure() {
  //on smaller screens...
  console.log($(window).width());
  if ($(window).width() <= 976) {
    if (!$(".group-item").hasClass("readMore")) {
      console.log("adding class");
      $(".group-item").addClass("readMore");
      console.log($(".group-item").hasClass("readMore"));
    }
    $(".lessMore").removeClass("hidden");
    $(".lessMore").text("Show more...");
  }
  //on larger screens...
  else {

    $(".group-item").removeClass("readMore");
    $(".lessMore").addClass("hidden");
  }
}

//add/remove sidebar to the top of page for small screen sizes

$(window).resize(function() {
  resizeConfigure();
});

export default {
  name: "MoreLess"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.readMore {
  overflow-y: hidden;
  height: 300px;
  border-radius: 4px 4px 0px 0px !important;
}
</style>
