"use strict"

$(window).scroll( function(){
    let pixel = $(window).scrollTop()

    console.log( {pixel})

    video.currentTime = (pixel / 950) - 1;
})
