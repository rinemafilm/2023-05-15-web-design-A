$(function(){
    //gnb
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().slideDown('fast')
        },
        function(){
            $('.gnb ul').stop().slideUp('fast')
        }
    )

    // slider
    setInterval(function(){
        $('.slide').animate({top:-300},function(){
            $('.slide a:first').appendTo($('.slide'))
            $('.slide').css('top',0)
        })
    }
    ,2500)

    // tab
    $('.tab_title li').click(function(){
        $('.tab_title li').removeClass('on')
       $(this).addClass('on')

       $('.tab_contents ul').css('display', 'none')
       $('.tab_contents ul').eq($(this).index()).css('display', 'block')

    })


    //modal
    $('.notice li:first').click(function(){
        $('#modal').show();
    })

    $('.close').click(function(){
        $('#modal').hide();
    })

})