
$(function(e){  

    $('.yd-nav').click(function (event) {
        
        if($('.yd-text').css('right')=='-200px'){
            $(this).addClass('on');
            $('body').addClass('on');
            $('.headerBox').stop().animate({'right': '10px'}, 200);
            $('.yd-text').stop().animate({'right': '0'}, 200);
            $('.yd-nav-box').stop().animate({'right': '200px'}, 200);    
        }else{
            $(this).removeClass('on');
            $('body').removeClass('on');
            $('.headerBox').stop().animate({'right': '-200px'}, 200);
            $('.yd-text').stop().animate({'right': '-200px'}, 200);
            $('.yd-nav-box').stop().animate({'right': '0'}, 200); 
        }
        
    });
    $('.navtaiji').click(function (event) {
        if($('.navzhankai').css('display')=='none'){
            $('.navtaiji').hide();
            $('.navzhankai').stop().fadeIn(400);
            
            
            $('.navtaiji2 .navimg1').stop().animate({'left': '-360px'}, 400); 
            $('.navtaiji2 .navimg2').stop().animate({'right': '-20px','top': '90px'}, 400); 
            $('.navtaiji2').stop().show().stop().fadeOut(600);
        }else{
        }
        
    });
    $('.navtaiji').hover(function(){
        $(this).removeClass('navtaijifirst')
        // $('.navzhankai').stop().fadeIn(400);
        // $('.navtaiji').stop().fadeOut(400);
    },function(){
        
    })
    $('.navzhankai').hover(function(){
        
    },function(){
        $('.navzhankai').stop().fadeOut(400);
        $('.navtaiji').stop().fadeIn(800);
        $('.navtaiji2 .navimg1').stop().animate({'left': '0px'}, 400); 
        $('.navtaiji2 .navimg2').stop().animate({'right': '0px','top': '0px'}, 400); 

        
    })
  
});