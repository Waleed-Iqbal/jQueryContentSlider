



var tranisitionSpeed = 500; // milliseconds

var autoSwitch = true; // slides automatically or not

var autoSwitchSpeed = 2000; // milliseconds



var oldActiveClass = "oldActive";

(function loadAllImages() {
    var slider = $("#slider");
    var htmlMarkup = "";

    for (var i = 1; i <=4; i++) {
        htmlMarkup +=
            "<div class='slide " + (i === 1 ? "active" : "") + "'>  "
            + "    <div class='slide-copy'>               "
            + "        <h2>Slider " + i + "</h2>          "
            + "        <p>Lorem ipsum dolor sit amet</p>  "
            + "    </div>                                 "
            + "    <img src='../resources/img" + i + ".jpg' />"
            + "</div>                                     ";
    }

    slider.append(htmlMarkup);
}());

$("#slider .slide").hide(); // hides all content on slider
$("#slider .slide").first().addClass("active");
$("#slider .slide").first().show();


function showNextContent() {
    $(".active").removeClass("active").addClass(oldActiveClass); // oldActive is the last image shown
    if ($(".oldActive").is(":last-child")) {
        $(".slide").first().addClass("active");
    } else {
        $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass(oldActiveClass);
    $(".slide").fadeOut(tranisitionSpeed);
    $(".active").fadeIn(tranisitionSpeed);
}


function showPreviousContent() {
    $(".active").removeClass("active").addClass(oldActiveClass); // oldActive is the last image shown
    if ($(".oldActive").is(":first-child")) {
        $(".slide").last().addClass("active");
    } else {
        $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass(oldActiveClass);
    $(".slide").fadeOut(tranisitionSpeed);
    $(".active").fadeIn(tranisitionSpeed);
}


$("#next").on("click", showNextContent);
$("#prev").on("click", showPreviousContent);


if (autoSwitch) {
    setInterval(showNextContent, autoSwitchSpeed);
}