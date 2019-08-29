var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    freeMode : true,
    // slidesPerView: 3,
    mousewheel: true,
    // followFinger: false, //false:手指滑动时slide不会动，当你释放时slide才会切换。
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            console.log(this)
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
        }
    }
});

console.log(swiper)

function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var i = 0; i < mobileAgents.length; i++) {
        if (userAgentInfo.indexOf(mobileAgents[i]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if (screen_width < 500 && screen_height < 800) {
        mobile_flag = true;
    }

    return mobile_flag;
}
var mobile_flag = isMobile();

// $('.swiper-slide').height($(window).height());
if(mobile_flag) {
    $('.swiper-2 .wraper').css({
        'visibility': 'visible'
    });
}


$(".swiper-1 .about").click(function () {
    swiper.slideTo(1, 300, true);
});

$(".my-bullet .list li").click(function (ev) {
    var _index = $(this).index();
    swiper.slideTo(_index, 300, true);
});

$(".menu-icon").click(function () {
    $(".menu-box").css('right','0');
});

$(".menu-box .list li").click(function () {
    var _index = $(this).index();
    swiper.slideTo(_index, 300, true);
    $(".menu-box").css('right','-100%');
});

$(".menu-box .icon").click(function () {
    $(".menu-box").css('right','-100%');
});

function tab(el) {
    console.log(el);
    el.each(function (index, item) {
        $(this).click(function () {
            console.log($(this).siblings());
            var _height = $(this).find('.con-text .time').height() + $(this).find('.con-text .text').height();
            $(this).toggleClass('active').siblings().removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).find('.con-text').animate({
                    height: _height + 'px'
                });
                $(this).siblings().find('.con-text').animate({
                    height: '0'
                });
            } else {
                $(".swiper-2 .ex-content .item").find('.con-text').animate({
                    height: '0'
                });
                $(".swiper-2 .wraper .item").removeClass('active');
            }

        });
    });
}
tab($(".swiper-2 .wraper .item"));
// tab($(".swiper-2 .wraper .ex-last .item"));
// tab($(".swiper-2 .wraper .ex-content").eq(1).find('.con-text .item'));
// console.log($(".swiper-2 .wraper .ex-content").eq(0).find('.con-text'));
