$(document).ready(function() {

    var toggleBtn = document.getElementsByClassName('toggle-button')[0]
    var navBar = document.getElementsByClassName('nav-bar-links')[0]

    toggleBtn.addEventListener('click', () => {
        navBar.classList.toggle('active')
    })

    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
            //Direction: Down
            $(".nav-bar").fadeOut();
        } else {
            //Direction: Up
            $(".nav-bar").fadeIn();
        }

        previousScroll = currentScroll;

        if (currentScroll == 0) {
            $(".nav-bar").css("position", "relative");
        } else {
            $(".nav-bar").css("position", "fixed");
        }
    });

});