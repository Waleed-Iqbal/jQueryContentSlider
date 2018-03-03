



var tranisitionSpeed = 500; // milliseconds

var autoSwitch = true; // slides automatically or not

var autoSwitchSpeed = 4000; // milliseconds

$("#slider .slide:nth-child(1)").hide();

$("#slider .slide:nth-child(1)").addClass("active");

$("#slider .slide:nth-child(1)").show();

var oldActiveClass = "oldActive";

(function loadAllImages() {
    var slider = $("#slider");
    var htmlMarkup = "";

    for (var i = 2; i <= 4; i++){
        htmlMarkup +=
            "<div class='slide'>                    "
        + "    <div class='slide-copy'>               "
        + "        <h2>Slider</h2>                    "
        + "        <p>Lorem ipsum dolor sit amet</p>  "
        + "    </div>                                 "
        + "    <img src='../resources/img" + i + ".jpg' />"
        + "</div>                                     ";
    }
    slider.append(htmlMarkup);

}())




$("#next").on("click", function () {
    $(".active").removeClass("active").addClass(oldActiveClass); // oldActive is the last image shown
    if ($(".oldActive").is(":last-child")) {
        $(".slide").first().addClass("active");
    } else {
        $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass(oldActiveClass);
    $(".slide").fadeOut(tranisitionSpeed);
    $(".active").fadeIn(tranisitionSpeed);
});

$("#prev").on("click", function () {
    $(".active").removeClass("active").addClass(oldActiveClass); // oldActive is the last image shown
    if ($(".oldActive").is(":first-child")) {
        $(".slide").last().addClass("active");
    } else {
        $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass(oldActiveClass);
    $(".slide").fadeOut(tranisitionSpeed);
    $(".active").fadeIn(tranisitionSpeed);
});


