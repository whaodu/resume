 /*
  *@author wilson Duweihao
  */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    onSliderMove:function(swiper,event){
        console.log('fff');
        console.log(swiper);
    }
    // loop: true,

    // 如果需要分页器
    // pagination: '.swiper-pagination',
    
    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev'
});

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

var graphFloat = function(event,el){
    var x = event.clientX;
    var y = event.clientY;
    var height = el.height();
    var width = el.width();
    var top = (height/2-y)/10;
    var left = (width/2-x)/10;
    // el.css("top",top+'px');
    // el.css("left",left+'px');
    el.css("transform","translate3d("+left+"px,"+top+"px,0)");

}

var logoFloat = function(event,el){
    var x = $(el).offset().left;
    var y = $(el).offset().top;
    var px = event.pageX;
    var py = event.pageY;
    var zx = parseInt(px-x);
    var zy = parseInt(py-y);
    var changeX = (320/2-zx)/10;
    var changeY = (200/2-zy)/8;
    console.log(changeX,changeY,event);
    el.css("transform","rotateX("+changeX+"deg) rotateY("+changeY+"deg) ");
}


var changePosition = function(){
    var $page = $('.page-1');
    var $content = $('.content');
    var $swiper_page = $('.swiper-bg');
    var $graph = $('.float-graph');
    var $company_logo = $('.company-logo');

    $content.on('mousemove',function(event){
        mouseFloat(event,$swiper_page);
    })
    
    $content.on('mousemove',function(event){
        graphFloat(event,$graph);  
    })

    

    // $(document).on('mousemove',$company_logo,function(event){
    //     // if($company_logo.hasClass('hover')){
            
    //     // }
    //     $company_logo.hover(function(){
    //         // $company_logo.addClass('hover');
    //         // logoFloat(event,$company_logo);
    //         $company_logo.css("transform","translateX(0px)"); 
    //         $company_logo.css("transform","scale3d(1.1,1.1,1.3)");
    //         $company_logo.css("box-shadow","5px 5px 15px #9c9999");
    //     },function(){
    //         $company_logo.removeClass('hover');
    //         $company_logo.css("transform","scale3d(1,1,1)");
    //         $company_logo.css("box-shadow","none");
    //     })

    // })

};






    (function(){
        changePosition();

        $('.page-num-list li').on('click',function(e){
            var $target = $(e.currentTarget);
            var index = $target.index();
            swiper.slideTo(index+1);
        })
        $('.next-page').on('click',function(e){
            swiper.slideNext();
        })

    })()














