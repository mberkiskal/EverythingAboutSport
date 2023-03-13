$( "li" ).hover(
    function() {
        $(this).find("span").stop().animate({
        width:"100%",
        opacity:"1",
      }, 400, function () {
      })
    }, function() {
        $(this).find("span").stop().animate({
        width:"0%",
        opacity:"0",
      }, 400, function () {
      })
    }
  );