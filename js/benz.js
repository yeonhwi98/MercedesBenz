$(document).ready(function(){

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        var sec_1_top = $(".section_1").offset().top;
        var sec_2_top = $(".section_2").offset().top;
  

        var useScroll = sct / sec_2_top;
     

        
        
        if (sct >= sec_1_top && sct < sec_2_top) {
            console.log(useScroll);
            // $(".section_2").css({
            //     opacity:useScroll, 
            // });
            $(".title_wrap_2").css({
                opacity:useScroll,
                // position:"fixed",
                // top:"0px",
                // left:"0",

            });
        } else {
            $(".title_wrap_2").css({
                position:"unset",
            });
        }

        






    });







});


$(document).ready(function(){

    $(window).scroll(function(){


        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 0){
            $('.title').addClass('title_active')
        }  if(sct >= 1600){
            $('.title_1').addClass('title_1_active')
        }if(sct >= 2500){
            $('.title_1').addClass('title_2_active')
        }if(sct >= 2500){
            $('.title_4').addClass('title_4_active')
        }if(sct >= 2600){
            $('.title_4_1').addClass('title_4_1_active')
        }
        if(sct >= 3500){
            $('.title_5').addClass('title_5_active')
        }
        if(sct >= 4500){
            $('.title_6').addClass('title_6_active')
        }

        if(sct >= 5800){
            $('.title_8').addClass('title_8_active')
        }

        if(sct >= 6548){
            $('.find').addClass('find_active')
        }
        if(sct >= 6548){
            $('.find_1').addClass('find_active')
        }





    });


});


$(document).ready(function($){

    $('.black_button').on({
        'click' : function(){
            $('#change_image').attr('src','img/sec_8_1.jpg');
        }
    })


    $('.black1_button').on({
        'click' : function(){
            $('#change_image').attr('src','img/sec_8_2.jpg');
        }
    })

    $('.black2_button').on({
        'click' : function(){
            $('#change_image').attr('src','img/sec_8_3.jpg');
        }
    })

    $('.black3_button').on({
        'click' : function(){
            $('#change_image').attr('src','img/sec_8_4.jpg');
        }
    })

    $('.black4_button').on({
        'click' : function(){
            $('#change_image').attr('src','img/sec_8_5.jpg');
        }
    })


    


});





$(function () {
   
    $(window).scroll(function () {
       
        var sct = $(window).scrollTop();
        console.log(sct)

        if (sct >= 600) {
            $("header").addClass("on_header");
        }else {
        $("header").removeClass("on_header");
        }

      


    });


    // $(".top_tap").click(function(e){
    //     e.preventDefault
    //         $("html,body").animate({
    //             scrollTop:0,
    //         });

    // });

    // console.log($(".section_2").offset().top);
    // var sec_2_top = $(".section_2").offset().top;

    // $(".service").click(function(){

    //     $("html,body").animate({
    //         scrollTop:sec_2_top,
    //     })

    // })



})
