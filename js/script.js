/**
 * Created by Александр on 22.11.2017.
 */
$(function(){



    function SliderAutoHeight(){
        $(".slider img").each(function(){
            var slideImg = $(this).height();
            $(this).parents(".slider").css("height", slideImg + "px");
        })
    }


    setTimeout(function(){ // без этого сразу не работает, ждём одну не знаметную секунду
        SliderAutoHeight();
    }, 300);

    // При изменении рзмера экрана назнаяаем новую высоту слайдеру зависимую от высоты картинок
    $(window).resize(function(){
        SliderAutoHeight();
    });

    // Кнопка вперёд
    $("body").on("click", ".slider__btn--next", function(){
        var active = $(this).prev().prev().children(".active");
        if(active.next("li").length){ // если ещё есть li
            active.next().stop(true, true).addClass("active").fadeIn(1000).prev().removeClass("active");
        } else{
            $(this).prev().prev().children("li:first").stop(true, true).addClass("active").fadeIn(1000);
            $(this).prev().prev().children("li:last").stop(true, true).removeClass("active");
        }
        return false;
    });

    // Кнопка назад
    $("body").on("click", "slider__btn--prev", function(){
        var active = $(this).prev().children(".active");
        if(active.prev("li").length){ // если ещё есть li
            active.prev().stop(true, true).addClass("active").fadeIn(1000).next().removeClass("active");
        } else{
            $(this).prev().children("li:last").stop(true, true).addClass("active").fadeIn(1000);
            $(this).prev().children("li:first").stop(true, true).removeClass("active");
        }
    })


});
