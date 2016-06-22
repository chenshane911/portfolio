let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});



var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//click the image and a scaled version of the full size image will appear
$(".photo-gallery a").on('click', function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.addClass('show');
});

$("#overlay").on('click', function() {
    $( "#overlay" ).removeClass('show');
});

