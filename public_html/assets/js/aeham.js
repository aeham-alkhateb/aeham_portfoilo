
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


function showDiv(n) {
    for (let index = 1; index < 4; index++) {
        document.getElementById('welcomeDiv'+index).style.display = "none";
        
    }
   document.getElementById('welcomeDiv'+n).style.display = "block";
}


