 


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
        // loop: true,
    
        // 如果需要分页器
        // pagination: '.swiper-pagination',
        
        // // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
    });


var changePosition = function(){
    var page = $('.page-1');
    var $content = $('.content');
    var swiper_page = $('.swiper-bg');

    $content.on('mousemove',function(event){
        mouseFloat(event,swiper_page);
    })
};

var mouseFloat = function(event,el){
    var x = event.clientX;
    var y = event.clientY;
    var height = el.height();
    var width = el.width();
    var top = (height/2-y)/50;
    var left = (width/2-x)/50;
    el.css("top",top+'px');
    el.css("left",left+'px');
};



    (function(){
        changePosition();
    })()
