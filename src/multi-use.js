$(document).ready(function () {
  $('.icon-boxes-content').each(function() {

    $('.open-popup', this).each(function() {
        $(this).attr("data-popup-src", "#box_"+x);
		$(this).find(".popup-wrapper").attr("id", "box_"+x);
        x++;
      if (!$(this).hasClass("_image-popout")) {
        $(this).removeClass("open-popup");
      }
    });

    $('.icon-cta a', this).each(function() {
      if ($(this).text() === "") {
        $(this).remove();
      }
    });

    if ($(".top-section",this).html().trim() === "") {
        $(".top-section",this).remove();
    }


  });


});
