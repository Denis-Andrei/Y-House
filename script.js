var featureOffset;
var categoriesOffset;
var aboutOffset;
var testimonialsOffset;

    

$(window).on("load", ()=>{
       let windowWidth = $(window).width();
       if(window.location.href === 'https://denis-andrei.github.io/Y-House/' || window.location.href === 'http://127.0.0.1:8080/index.html'){
        if(windowWidth > 0 && windowWidth < 600){
            featureOffset = $(".features").position().top/7;
            categoriesOffset = $(".categories").position().top/1.5;
            aboutOffset = $(".about").position().top/1.2;
            testimonialsOffset = $(".testimonial").position().top/1.2;
        }
       if(windowWidth > 600 && windowWidth < 1000){
            featureOffset = $(".features").position().top/8;
            categoriesOffset = $(".categories").position().top/2;
            aboutOffset = $(".about").position().top/1.17;
            testimonialsOffset = $(".testimonial").position().top/1.17;
        }
       if(windowWidth > 1000 && windowWidth < 1200){
            featureOffset = $(".features").position().top/5;
            categoriesOffset = $(".categories").position().top/2;
            aboutOffset = $(".about").position().top/1.35;
            testimonialsOffset = $(".testimonial").position().top/1.35;
        } 
        if(windowWidth > 1200){
            featureOffset = $(".features").position().top/5;
            categoriesOffset = $(".categories").position().top/2;
            aboutOffset = $(".about").position().top/1.35;
            testimonialsOffset = $(".testimonial").position().top/1.35;
        }

        
        $(document).on("scroll", ()=>{
            $(this).scrollTop() > featureOffset ? $(".features").removeClass('hidden') : $(".features").addClass('hidden'); 
            $(this).scrollTop() > categoriesOffset ? $(".categories").removeClass('hidden') : $(".categories").addClass('hidden');
            $(this).scrollTop() > testimonialsOffset ? $(".testimonial").removeClass('hidden') : $(".testimonial").addClass('hidden');
            
            if($(this).scrollTop() > aboutOffset){
                $(".about__info").removeClass('hidden-about__info')
                $(".about__img").removeClass('hidden-about__img')
            }else{
                $(".about__info").addClass('hidden-about__info');
                $(".about__img").addClass('hidden-about__img');
            }  
                    
        })
       }
       
    

})


$(".nav__hamburger").on("click", ()=>{
    $(".hamburger-menu").slideDown(500);
})

$(".hamburger-menu").on("click", ()=>{
    $(".hamburger-menu").slideUp(500);
})
    

$(".terraced").on("click", (e)=>{
    
    $(".house-container").addClass("hidden");
    
})
    
    
//         $(function(){
//             console.log('a');
//         })

        
    
   
    
    

// })





// $("ul li a").on("click", function(){
    
    
//     event.preventDefault();
//     const href = $("ul li a").attr("href");
//     window.history.pushState(null, null, href);

//     $.ajax({
//         url: href,
//         success: function(data){
//             $("body").fadeOut( function(){
//                 var newPage = $(data).filter("body").html();
//                 $("body").html($(data).filter("body").html());

//                 $("body").fadeIn(500);
//             })
//         }
//     })
// })
    
    
    
    
    