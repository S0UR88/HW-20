$(function(){

    // jquery start //

    // faq //

   let faq = $('#faqSelection .faq')
   let faqBody = $('.faqBody')

   faq.click(function() {


    if($(this).hasClass('active')){
        $(this).removeClass('active')

    }

    else{
        faq.removeClass('active')
        $(this).addClass('active')
        
    }

   });


   // preloader //

   let preloader = $('.preloader')

   $(window).on('load',function() {
    preloader.fadeOut(200)

   })


   // navber //

   let navbar = $('.navbar')

   $(window).scroll(function(){
    let scrTop = $(window).scrollTop()
    

    if(scrTop > 3){
       navbar.addClass('fixed')

    }

    else{
        navbar.removeClass('fixed')

    }
    
   })

   
     // jquery end //
   

})

