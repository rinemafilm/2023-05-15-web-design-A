$(function(){
    // gnb
    $('.gnb').hover(
         function(){
            $('.gnb ul').stop().slideDown()
            $('.gnb').addClass('active')
        },
       function(){
            $('.gnb ul').stop().slideUp()
            $('.gnb').removeClass('active')
        }
    )
        
    // slide
    setInterval(function(){
        $('.slide').animate({left:-1200}, function(){
            $('.slide div:first').appendTo('.slide')
            $('.slide').css({left:0})
            })
   },3000)

    // modal

    $('.notice li:first').click(function(){
        $('.popupbg').show()
        $('#modal').show()
   })

    $('#modal a').click(function(){
        $('.popupbg').hide()
        $('#modal').hide()
    })


})