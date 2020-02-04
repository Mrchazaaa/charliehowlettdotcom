<template>
  <button type="button" class="less-more btn btn-light btn-lg btn-block">Block level button</button>
</template>

<script>
$(document).ready(function() {
  //setup "show more/less" buttons (on smaller screens)
  $(".less-more").on("click", function(event) {
    if ($(this).prev().hasClass("collapsed")) {
        $(this).prev().css('height', 'auto');
        $(this)
          .prev()
          .removeClass("collapsed");
        var autoHeight = $(this).prev().outerHeight();
        $(this)
          .prev()
          .addClass("collapsed");
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
      .toggleClass("collapsed");
    $(this).text(function(i, text) {
      return text === "Show more..." ? "Show less..." : "Show more...";
    });

  });

  resizeConfigure();
});

function resizeConfigure() {
  //on smaller screens...
  if ($(window).width() <= 976) {
    if (!$(".group-item").hasClass("collapsed")) {
      console.log("adding class");
      $(".group-item").addClass("collapsed");
      console.log($(".group-item").hasClass("collapsed"));
    }
    $(".less-more").removeClass("hidden");
    $(".less-more").text("Show more...");
  }
  //on larger screens...
  else {
    $(".group-item").removeClass("collapsed");
    $(".less-more").addClass("hidden");
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
<style lang="scss">
.less-more {
  font-weight: bold;
  width: calc(100% - 15px);
  margin: 0 7.5px 0 7.5px;
}
.collapsed {
  overflow-y: hidden;
  height: 300px;
  border-radius: 4px 4px 0px 0px !important;
}
</style>
