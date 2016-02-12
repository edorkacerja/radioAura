function main(){


        var myDiv= $('.slogan').position();
        //Add variable targeting the div you want to wait to reach before changing
        // use the position method on  #myDiv
        $(window).scroll(function(){
            if ( $(this).scrollTop() > myDiv.top-150 ){
                // Then instead of using 50, put the variable with .top grabbing the top
                // position of the element and so when the window is greater than the
                // top position of the div you pick it will change.
                $('.menu2').fadeIn(800).addClass('scrolled');
                $('.navbar-brand').fadeIn(500).addClass('logoSmaller');
            } else { // if not do something else
                $('.menu2').removeClass('scrolled');
                $('.navbar-brand').removeClass('logoSmaller');

            }

        });

        $('.col-md-4').hover(function() {
                $(this).removeClass('col-md-2');
            },function(){
                $(this).addClass('col-md-2');
        });
    
    
    //Duplicate Code which needs to be optimized
        $('#word1').hover(function(){
            $('#slide2').fadeOut('200');
            $('#slide3').fadeOut('200');
            $('#slide4').fadeOut('200');            $('#slide1').fadeIn('600');
        })
        $('#word2').hover(function(){
            $('#slide1').fadeOut('200');
            $('#slide3').fadeOut('200');
            $('#slide4').fadeOut('200');            $('#slide2').fadeIn('600');
        })
        $('#word3').hover(function(){
            $('#slide2').fadeOut('200');
            $('#slide1').fadeOut('200');
            $('#slide4').fadeOut('200');            $('#slide3').fadeIn('600');
        })
        $('#word4').hover(function(){
            $('#slide2').fadeOut('200');
            $('#slide3').fadeOut('200');
            $('#slide1').fadeOut('200');            $('#slide4').fadeIn('600');
        })



}


$(document).ready(main());