<template>
  <button type="button" class="lessMore btn btn-light btn-lg btn-block">Block level button</button>
</template>

<script>
$(document).ready(function() {
  //setup "show more/less" buttons (on smaller screens)
  $(".lessMore").on("click", function(event) {
    if ($(this).prev().hasClass("readMore")) {
        $(this).prev().css('height', 'auto');
        $(this)
          .prev()
          .removeClass("readMore");
        var autoHeight = $(this).prev().outerHeight();
        $(this)
          .prev()
          .addClass("readMore");
        $(this).prev().height(300).animate({height: autoHeight}, {
          duration: "slow"
        }).promise().then(() => {
          $(this).prev().css('height', '');
        });
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
      .toggleClass("readMore");
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
  font-weight: bold;
  width: calc(100% - 15px);
  margin: 0 7.5px 0 7.5px;
}
.readMore {
  overflow-y: hidden;
  height: 300px;
  border-radius: 4px 4px 0px 0px !important;
}
</style>
