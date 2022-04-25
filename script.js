$(document).ready(function() {

    var toggleBtn = document.getElementsByClassName('toggle-button')[0]
    var navBar = document.getElementsByClassName('nav-bar-links')[0]

    toggleBtn.addEventListener('click', () => {
        navBar.classList.toggle('active')
    })

    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        // console.log(currentScroll)
        if (currentScroll > previousScroll) {
            //Direction: Down
            // $(".text-header").fadeOut();
            // $(".nav-item").fadeOut();
            // $(".text-header").css("opacity", ".9")
            $(".text-header").css({ "opacity": "0", "transition": "0.5s" });
            $('.nav-bar').css("background-color", "rgba(56 58 92 / .5)")
                // $('.profile-name').css("color", "black")
                // $('.nav-bar-links li a').css("color", "black")
        } else if (currentScroll < 200) {
            //Direction: Up
            // $(".profile-name").fadeIn();
            // $(".nav-item").fadeIn();
            $(".text-header").css({ "opacity": "1", "transition": "0.5s" })
            $('.nav-bar').css("background-color", "transparent")
            $('.profile-name').css("color", "white")
            $('.nav-bar-links li a').css("color", "white")
        }

        previousScroll = currentScroll;
    });
});